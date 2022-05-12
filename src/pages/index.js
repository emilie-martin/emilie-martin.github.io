import Layout from "@theme/Layout";
import React from "react";

import HeroBanner from "../components/HeroBanner";
import TableOfContents from "../components/TableOfContents";

import "./index.module.css";

export default function Home() {
  return (
    <Layout
      title={"Émilie Martin"}
      description="Description will go into a meta tag in <head />"
    >
      <HeroBanner/>
      <main>
        <TableOfContents/>
      </main>
    </Layout>
  );
}
