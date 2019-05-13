import React from "react"
import Slick from "react-slick"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 600,
  autoplay: true,
  autoPlaySpeed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
}

export const formattedImage = graphql`
  fragment formattedImage on File {
    childImageSharp {
      fluid(maxWidth: 920, maxHeight: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Slider = ({ ...className }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { glob: "*.jpg" } }) {
          edges {
            node {
              ...formattedImage
            }
          }
        }
      }
    `}
    render={data => (
      <Slick {...settings} className={className}>
        {data.allFile.edges.map(({ node }) => (
          <Img
            fluid={node.childImageSharp.fluid}
            imgStyle={{ maxHeight: `100vh` }}
          />
        ))}
      </Slick>
    )}
  />
)

export default Slider
