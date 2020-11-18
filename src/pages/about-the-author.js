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
                            Daniel Seidenberg, Jr. was born in Germany in 1947. His father was serving with the U.S. Army Air Corps and his mother was working as a secretary to the Nuremberg war trials. After moving back to the United States, he was raised in Santa Barbara County, California. In high school, he prepared for college and enjoyed surfing the southern California waves. Daniel had never planned on soldiering when he received a draft notice in 1968, but finally decided to answer the call by volunteering to serve in the Army. Seven months later he was posted as an infantryman with the 199th Light Infantry Brigade in III Corps Tactical Zone, Republic of Vietnam.
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
