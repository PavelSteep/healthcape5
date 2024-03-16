import React from "react";
import Layout from "../../components/Layouts/Layout";
import About from "./About";
import Article from "./Article";
import Service from "./Service";
import Doctors from "./Doctors";
import Mobile from "./Mobile";
import Comments from "./Comments";
import Appointment from "./Appointment";

function Home() {
  return (
    <>
      <Layout>
        <About />
        <Article />
        <Service />
        <Doctors />
        <Mobile />
        <Comments />
        <Appointment />
      </Layout>
    </>
  );
}

export default Home;
