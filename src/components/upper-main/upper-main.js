import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../../static/author/main_author.png'
import { MDBMask, MDBView } from "mdbreact";

const LowerMain = () => {
    return (
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <MDBView className="rounded z-depth-0 mb-lg-0 mb-4" hover waves>
                                <img src={AuthorImg} />
                                <a href="#!">
                                    <MDBMask overlay="white-light" className="flex-center" />
                                </a>
                            </MDBView>
                        </div>

                        <div className="wrapper-auth-content">

                            <p>
                             At age nineteen, Daniel Seidenberg Jr. received a draft notice. Thus began his journey through army life, infantry combat, and nearly fatal wounds that left him totally disabled.
                            </p>

                            <h1>
                                Daniel Seidneberg
                            </h1>

                            <span className="span-tagline">
                                Author & Writer
                            </span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain;