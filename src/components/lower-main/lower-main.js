import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../../static/books/Book_Cover.png'
import { MDBMask, MDBView } from "mdbreact";

const UpperMain = () => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="content-wraps">
                            <h1>About The Book</h1>

                            <p>
                                Vietnam Ambush tells the story of a young man answering the call of America to fight a war against the communist Vietnamese as a replacement with the 199th Light Infantry Brigade in 1968/69. It tells of his days in training, combat, recovering from injuries, and his return home amidst the antiwar fervor that had engulfed the USA at that time.
                            </p>

                            {/* <button>
                                <Link to="/about-the-book">Read More</Link>
                            </button> */}

                        </div>

                        <MDBView className="rounded z-depth-0 mb-lg-0 mb-4" hover waves>
                            <img
                                className="img-fluid rounded"
                                src={FrontBook}
                                alt=""
                                id="frontBook"
                            />
                            <a href="#!">
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain