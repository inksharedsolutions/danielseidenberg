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
        shortname: 'daniel-seidenberg',
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
                                title: `Vietnam Ambush`,
                                spanTitle: `Soldier in the bush`,
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `Vietnam Ambush tells the story of a young man answering the call of America to fight a war against the communist Vietnamese as a replacement with the 199th Light Infantry Brigade in 1968/69. It tells of his days in training, combat, recovering from injuries, and his return home amidst the antiwar fervor that had engulfed the USA at that time.`,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/vietnam-ambush-soldier-in-the-bush/',
                                    barnes: 'https://www.barnesandnoble.com/w/vietnam-ambush-jr-daniel-seidenberg/1136645434?ean=9781643459523',
                                    amazon: 'https://www.amazon.com/Vietnam-Ambush-Jr-Daniel-Seidenberg-ebook/dp/B085VLDT8H/ref=sr_1_1?dchild=1&keywords=9781643459523&qid=1584117027&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Vietnam-Ambush-Jr-Daniel-Seidenberg/dp/1643459503/ref=sr_1_1?dchild=1&keywords=9781643459509&qid=1584117043&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/vietnam-ambush-jr-daniel-seidenberg/1136645434?ean=9781643459509',
                                    booksamillion: 'https://www.booksamillion.com/p/Vietnam-Ambush/Jr-Daniel-Seidenberg/9781643459509?id=8049069540563&_ga=2.103267522.395869337.1605662436-2145380449.1604906972',
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