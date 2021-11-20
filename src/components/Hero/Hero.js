import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section  row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to Duvall Pinkney's <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>

      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/duvall-pinkney-16949260/' }>Linkedin account quick link</Button>
    </LeftSection>
  </Section>
);

export default Hero;