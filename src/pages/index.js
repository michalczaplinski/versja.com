import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Slider from "../components/slider"
import logo from "../images/logo2.svg"
import BE from "../images/BE.svg"
import IG from "../images/IG.svg"
import FB from "../images/FB.svg"

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const Layout = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem;
`

const Stuff = styled.div`
  z-index: 10;
`

const Transparent = styled.div`
  height: 54.5vw;
  max-height: calc(100vh - 70px);
  width: 100%;
  background-color: transparent;
  z-index: 20;
`

const Logo = styled.div`
  height: 70px;
  width: 200px;
  background-color: white;
  margin-left: 15vw;
  margin-bottom: -1px;
  opacity: 0.9999;
`

const MainBg = styled.div`
  width: 101%;
  margin-left: -1px;
  height: auto;
  min-height: 300px;
  background-color: white;
  opacity: 0.9999;
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;
  height: 100%;
  width: 100%;
  padding-top: 40px;
  padding-left: 60px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.85rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);
`

const TextContainer = styled.div`
  text-align: left;
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
    <BackgroundContainer>
      <Layout>
        <Slider />
      </Layout>
    </BackgroundContainer>
    <Layout>
      <Stuff>
        <Transparent />
        <Logo>
          <img
            src={logo}
            alt="logo"
            width="60%"
            style={{ display: `flex`, margin: `0 auto`, paddingTop: 20 }}
          />
        </Logo>
        <MainBg>
          <MainGrid>
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
              <div> Adama Mickiewicza 30 / 10</div>
              <div> 60-835 Poznań</div>
            </TextContainer>
            <TextContainer>
              <div> info@versja.com</div>
            </TextContainer>
            <span>
              <a href="https://www.facebook.com/versja/">
                <SocialIcon src={FB} alt="facebook logo" />
              </a>
              <a href="https://www.instagram.com/versja_com/">
                <SocialIcon src={IG} alt="instagram logo" />
              </a>
              <a href="https://www.behance.net/info422cdddb">
                <SocialIcon src={BE} alt="behance logo" />
              </a>
            </span>
          </MainGrid>
        </MainBg>
      </Stuff>
    </Layout>
  </>
)

export default IndexPage
