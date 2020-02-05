import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function MaasImage3() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "maas3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
