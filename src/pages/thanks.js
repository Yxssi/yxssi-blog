import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Message envoyé !</h1>
      <p>Merci de m'avoir contacté, je reviendrais vers vous au plus vite.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Retourner à la page d'accueil
      </Link>
    </div>
  </Layout>
)

export default Thanks
