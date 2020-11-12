import React from 'react'
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation,
    MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon
} from "mdbreact";



const NFB = (props) => {
    return (
        <>
            <section className="web-banner">
                <div className="container">
                    <div className="wrapper-ds">
                        <MDBAnimation
                            type="fadeInUp"
                            delay=".3s"
                            className="white-text text-center"
                        >
                            <span>
                                {props.spanFirst}
                            </span>
                            <h1>
                                {props.contextHeading}
                            </h1>
                        </MDBAnimation>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NFB