//domain.com/
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     key: "m1",
//     id: "m1",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Cityoflondontowerbridge.jpg/800px-Cityoflondontowerbridge.jpg",
//     title: "London meetup",
//     address: "London city centre",
//   },
//   {
//     key: "m2",
//     id: "m2",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Cityoflondontowerbridge.jpg/800px-Cityoflondontowerbridge.jpg",
//     title: "Paris meetup",
//     address: "Paris city centre",
//   },
// ];

function MeetupsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta name='description' content="Browse meetups"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Critter5679:iStrpApE13nv@cluster0.6z1p5mw.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default MeetupsPage;
