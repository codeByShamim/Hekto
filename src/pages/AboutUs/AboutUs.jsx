import React from "react";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader"; // Import the reusable CustomHeader component
import AboutBusiness from "../../components/AboutUs/AboutBusiness/AboutBusiness";
import OurFeatures from "../../components/AboutUs/OurFeatures/OurFeatures";
import ClientSay from "../../components/AboutUs/ClientSay/ClientSay";

const About = () => {
  return (
    <div className="about-page">
      {/* Custom Header */}
           <CustomHeader
             title="About Us"
             breadcrumbs={[
               { label: "Home", link: "/" },
               { label: "Page", link: "/page" },
               { label: "About Us" }, // Current page without a link
             ]}
           />
            
     
     <AboutBusiness />
     <OurFeatures />
     <ClientSay />
    </div>
  );
};

export default About;
