import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "./index.css"
import glamorous from "glamorous"

const Header = () => (
  <HeaderContainer>
    <HeaderTextContainer>
      <HeaderText>
        <HeaderLink to="/">Gatsby</HeaderLink>
      </HeaderText>
    </HeaderTextContainer>
  </HeaderContainer>
)

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />

    <Header />

    <TemplateContainer>{children()}</TemplateContainer>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

const Container = glamorous.div({})

const HeaderContainer = glamorous.div({
  background: "rebeccapurple",
  marginBottom: "1.45rem",
})

const HeaderTextContainer = glamorous.div({
  margin: "0 auto",
  maxWidth: 960,
  padding: "1.45rem 1.0875rem",
})

const HeaderText = glamorous.h1({
  margin: 0,
})

const HeaderLink = glamorous(Link)({
  color: "white",
  textDecoration: "none",
})

const TemplateContainer = glamorous.div({
  margin: "0 auto",
  maxWidth: 960,
  padding: "0px 1.0875rem 1.45rem",
  paddingTop: 0,
})
