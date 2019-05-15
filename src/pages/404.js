import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="name">Brittany Chiang</div>
    <img src="{{site.baseurl}}/img/emojis/thinking-face.png" alt="hh"/>
    <h1>Hmmm...</h1>
    <h2>Looks like there's nothing here.<br/>Maybe you should go back <a href="{{site.url}}">home</a></h2>
  </Layout>
)

export default NotFoundPage
