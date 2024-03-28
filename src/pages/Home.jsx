import React from "react";
import { CustomNavBar, Banner, Company, Contact, Footer } from "../components";


export default function Home() {
  return (
    <div>
      <CustomNavBar />
      <Banner />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
}
