import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Siddhi J" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="details" heading="Skills" />
        {/* <ProjectsSection sectionId="features" heading="Built-in Features" /> */}
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
