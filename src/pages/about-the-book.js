import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/navigation/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'
import Footer from "../components/footer/footer"

const ATB = (props) => {


    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'lady-simone',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Last Castle in BROOKLYN`,
                                spanTitle: `Out of the Darkness Comes Light`,
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `In this exciting, incredulous debut novel by Lady Simone, 
                                    Mariah is a young single mother searching to find herself, love, 
                                    and enlightenment. She meets the eccentric old Reverend Blake, the 
                                    preacher of an old abandoned haunted-looking castle church in Brooklyn. 
                                    Mariah finds herself drawn to the reverend like a moth to a flame when 
                                    suddenly her life explodes in an epiphany of destiny, vision, and light 
                                    amid chaos, confusion, despair, pressure, and pain. This is a story of 
                                    darkness, light, justice, faith, and the power of love. Only time will 
                                    tell if Mariah will triumph against the evil odds and emerge victorious.`,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/the-last-castle-in-brooklyn-out-of-the-darkness-comes-light/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-last-castle-in-brooklyn-lady-simone/1135622811?ean=9781643458243',
                                    amazon: 'https://www.amazon.com/Last-Castle-Brooklyn-Darkness-Comes-ebook/dp/B082VM9M8C/ref=sr_1_1?dchild=1&keywords=9781643458243&qid=1600769322&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Last-Castle-Brooklyn-Darkness-Comes/dp/1643458264/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600769357&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-last-castle-in-brooklyn-lady-simone/1135622811?ean=9781643458267',
                                    booksamillion: 'https://www.booksamillion.com/p/Last-Castle-Brooklyn/Lady-Simone/9781643458267?id=7997864620895',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                    </div>
                </main>

                <Footer />
            </Layout>
        </>
    )
}


export default ATB;