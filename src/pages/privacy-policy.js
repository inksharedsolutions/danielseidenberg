import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

import Layout from '../components/layout'
import Nav from '../components/navigation/nav'
import Banner from '../components/non-front-banner'
import Footer from "../components/footer/footer"

const Pp = (props) => {

    const FetchMarkDown = useStaticQuery(graphql`
		 query PrivacyPolicyPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/privacy-policy.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

    const data = { ...FetchMarkDown.markdownRemark };

    return (
        <>
            <Layout>

                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`Privacy`}
                    contextHeading={`Policy`}
                />

                <div className="container">
                    <div id="privacy-policy-content">
                        <div className="">{Parser(data.html)}</div>
                    </div>
                </div>
                <Footer />
            </Layout>
        </>
    )
}

export default Pp;