import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
    
      <SEO
        title="Netfra, an IT Professional Services company"
        keywords={[`netfra`, `it`, `react`, `tailwindcss`]}
      />

    </Layout>
  );
}

export default IndexPage;
