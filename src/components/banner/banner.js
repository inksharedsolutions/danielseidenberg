import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
import "../../assets/scss/banner.scss";
import Logo from "../../../static/img/banner.png";
import { Link } from "gatsby";

class Banner extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.toggleCollapse("navbarCollapse")}
            />
        );
        return (
            <div className="banner-section">

                <MDBView className="container-gt">
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 banner-content-wrapper"
                                >
                                    <h1 className="h1-responsive font-weight-bold">
                                        VIETNAM AMBUSH
                                    </h1> 
                                    <span className="soldier">Soldier on the Bush</span>
                                    <hr className="hr-light" />
                                    <h6 className="mb-4">
                                    “There is no instance of a country having benefited from prolonged warfare.
                  </h6>
                                    <MDBBtn outline color="white">
                                        <Link to="/about-the-book">Read More</Link>
                                    </MDBBtn>
                                </MDBAnimation>

                                <MDBCol md="6" xl="5" className="mb-4">
                                    <MDBAnimation
                                        type="fadeInRight"
                                        delay=".3s"
                                    >
                                        <img src={Logo} className="img-fluid z-depth-0  author" alt="" />
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default Banner;