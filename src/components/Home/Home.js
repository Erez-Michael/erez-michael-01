import React from "react";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";

import { Wrapper, LeftContainer, RightContainer } from "./HomeStyles";

const Home = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <Menu />
      </LeftContainer>
      <RightContainer>
        <About />
        <Projects/>
        <Contact/>
      </RightContainer>
    </Wrapper>
  );
};

export default Home;
