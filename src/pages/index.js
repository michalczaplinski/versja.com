import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Slider from "../components/slider"
import logo from "../images/logo2.svg"
import BE from "../images/BE.svg"
import IG from "../images/IG.svg"
import FB from "../images/FB.svg"

import "../layout.css"

const Layout = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem;
`

const Logo = styled.div`
  height: 70px;
  width: 200px;

  @media screen and (min-width: 701px) {
    grid-column: 1 / 3;
  }
`

const Social = styled.div`
  display: flex;

  @media screen and (max-width: 700px) {
    padding-right: 5px;
  }
`

const MainBg = styled.div`
  background-color: white;
`

const MainGrid = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 40px;
  padding-left: 90px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.85rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px 200px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, auto);
    grid-gap: 1px;
    padding-top: 25px;
    padding-left: 5px;
  }
`

const TextContainer = styled.div`
  text-align: left;

  @media screen and (max-width: 700px) {
    grid-column: 1 / 2;
    margin-bottom: 30px;
  }
`

const SocialIcon = styled.img`
  margin-right: 20px;

  :hover {
    cursor: pointer;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Layout>
      <Slider />
      <MainBg>
        <MainGrid>
          <Logo>
            <img src={logo} alt="logo" width="60%" />
          </Logo>
          <Social>
            <a href="https://www.facebook.com/versja/">
              <SocialIcon src={FB} alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com/versja_com/">
              <SocialIcon src={IG} alt="instagram logo" />
            </a>
            <a href="https://www.behance.net/versja">
              <SocialIcon src={BE} alt="behance logo" />
            </a>
          </Social>
          <TextContainer>
            <div>architektura</div>
            <div>wnętrza </div>
            <div>grafika</div>
            <div>urbanistyka</div>
            <div>wzornictwo</div>
          </TextContainer>
          <TextContainer>
            <div style={{ fontWeight: 500 }}> Sylwester Bereś</div>
            <div> architekt</div>
            <div>(+48) 514 655 510</div>
          </TextContainer>
          <TextContainer>
            <div style={{ fontWeight: 500 }}> Mateusz Chodorowski</div>
            <div> architekt</div>
            <div>(+48) 883 203 203</div>
          </TextContainer>
          <TextContainer>
            <div> Adama Mickiewicza 30 / 1</div>
            <div> 60-836 Poznań</div>
          </TextContainer>
          <TextContainer>
            <div> info@versja.com</div>
          </TextContainer>

          <TextContainer>
            <div>© Copyright </div>
            <div>by versja {new Date().getFullYear()}</div>
          </TextContainer>
        </MainGrid>
      </MainBg>
    </Layout>
  </>
)

export default IndexPage
