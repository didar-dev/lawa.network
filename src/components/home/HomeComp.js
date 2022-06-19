import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FadeIn } from "react-scroll-motion";
import testlogo from "../assets/lawa.png";
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: var(--text-color);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 1.1rem;
    line-height: 1.3;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid var(--text-color);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: var(--text-color);
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 70%;
  background-image: var(--backgroundimage);
`;

const ColumnRight = styled.div``;

const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section id="home">
      <Container>
        <ColumnLeft>
          <motion.h1
            className="hellod"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Didar Abdulkhalliq
          </motion.h1>
          <motion.p
            variants={FadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            I am a web developer. I have good skills in JavaScript, React,
            Bootstrap and MongoDB. I am also a UI Designer and I am always ready
            to learn new technologies.{" "}
          </motion.p>
          <Link to="Projects" smooth="true" duration={1}>
            <Button
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              Projects
            </Button>
          </Link>
        </ColumnLeft>

        <ColumnRight className="Rcolumn">
          <Image
            src={testlogo}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileTap={{ cursor: "grabbing" }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
