// domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(data) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    console.log(result);
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add new meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetupPage;
