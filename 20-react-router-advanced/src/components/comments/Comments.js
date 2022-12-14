import { useCallback, useEffect, useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const {
    sendRequest,
    status,
    data: lodadedComments,
  } = useHttp(getAllComments);
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  },[sendRequest,quoteId]);

  let comments;

  if (status === "pending") {
    comments = <LoadingSpinner />;
  }

  if (status === "completed" && lodadedComments) {
    comments = <CommentsList comments={lodadedComments} />;
  }

  if (
    status === "completed" &&
    !lodadedComments &&
    lodadedComments.length === 0
  ) {
    comments = <p>No comments were added</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {}
      {comments}
    </section>
  );
};

export default Comments;
