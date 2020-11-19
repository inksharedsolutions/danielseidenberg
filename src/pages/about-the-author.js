import React from 'react'
import Layout from '../components/layout'
import Nav from "../components/navigation/nav";
import Banner from '../components/non-front-banner'
import Footer from "../components/footer/footer"
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props) => {
    console.log(props.path);
    return (
        <>
            <Layout>

                <Nav pathExt={props.path} />
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <div className="author-image-container">
                        <img src={AuthorImg} />
                    </div>
                        
                    <section className="body-author-contents columns">

                        <article className="article-section row" id="author">
                            <p>
                            Daniel Seidenberg, Jr. US Army, Retired
                            -Veteran bonafides
                            US Army, Retired, Dakota Company, 5/12 Infantry Regiment, 199th Light Infantry Brigade
                            light weapons infantry, combat advance man/patrol leader, RVN 1968/69
                            Founding Board member Santa Barbara chapter #218, Vietnam Veterans of America, 1985
                            Independence Day Parade Chairman,  Santa Barbara, California, 1986
                            Chairman, Santa Barbara Veterans Coordinating Council, 1987
                            Commander, Santa Barbara Veterans of Foreign Wars Post, #1649, 1988/89
                            Founding member, President, Santa Barbara Veterans for Peace Chapter #54, 1990

                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Daniel Seidenberg Jr.</span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>
                <Footer />
            </Layout>
        </>
    )
}


export default ATB;
