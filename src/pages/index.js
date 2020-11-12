import React from "react";
import Nav from "../components/navigation/nav";
import Layout from "../components/layout"
import Banner from "../components/banner/banner"
import UpperMain from "../components/upper-main/upper-main"
import LowerMain from "../components/lower-main/lower-main"
import MidMain from "../components/mid-main/mid-main"
import Footer from "../components/footer/footer"
import Newsletter from "../components/footer/newsletter"

const Main = (props) => {

    return (
        <Layout>
            <Nav pathExt={props.path} />
            <Banner />
            <LowerMain />
            <MidMain />
            <UpperMain />
            <Newsletter />
            <Footer />
        </Layout>
    )
}

export default Main;