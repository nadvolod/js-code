import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Nikolay Advolodkin
      </SectionTitle>
      <SectionText>
        My life's mission is to create world-class software
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>About me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
