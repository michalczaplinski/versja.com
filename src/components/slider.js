import React from "react"
import Slick from "react-slick"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 600,
  autoplay: true,
  autoPlaySpeed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: false,
  pauseOnHover: false,
}

export const formattedImage = graphql`
  fragment formattedImage on File {
    childImageSharp {
      fluid(maxWidth: 1080, maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Slider = ({ ...className }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { glob: "slider/*" } }) {
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
        {data.allFile.edges.map(({ node }, index) => (
          <Img
            loading="eager"
            fadeIn={false}
            key={index}
            fluid={node.childImageSharp.fluid}
            imgStyle={{ maxHeight: `100vh` }}
          />
        ))}
      </Slick>
    )}
  />
)

export default Slider
