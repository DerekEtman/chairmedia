import React from "react"
import PropTypes from "prop-types"
import {Link, graphql} from "gatsby"
import Layout from "../components/Layout"

export const IndexPageTemplate = ({
    image,
    title,
    heading,
    subheading,
}) => {
    <div>
        <img src={image} />
        <h1>{title}</h1>
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
    </div>
    
}


IndexPageTemplate.PropTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string
}


const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark
    return(
        <Layout>
            <IndexPageTemplate 
            image={frontmatter.image}
            title={frontmatter.title}
            heading={frontmatter.heading}
            subheading={frontmatter.subheading}
            />
        </Layout>
    )
}

IndexPage.PropTypes = {

    data:PropTypes.shape({
        markdownRemark:PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image 
        heading
        subheading
      }
    }
  }
`