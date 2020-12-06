import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/Layout" 
import Img from "gatsby-image"

export const IndexPageTemplate = ({ image, title, heading, subheading }) => {
  return (
    <div>
      <Img src={image} alt="placeholder" />
      <h1>{title}</h1>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log("THIS IS DATA!!!!: ", data)
  return (
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
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
        image {
          image
        }
        heading
        subheading
      }
    }
  }
`
// childImageSharp {
//   fluid(maxWidth: 2048, quality: 100) {
//     ...GatsbyImageSharpFluid
//   }
// }