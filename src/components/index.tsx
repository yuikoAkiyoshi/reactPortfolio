import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';

const pageTransition = { duration: 1 };

const pageVariants = {
  in: { opacity: 1 },
  out: { opacity: 0},
};

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <Wrapper>
      <FV>
        <ImgWrapper><Img src={img1} alt="空" /></ImgWrapper>
        <ImgWrapper><Img src={img2} alt="空" /></ImgWrapper>
        <ImgWrapper><Img src={img3} alt="空" /></ImgWrapper>
        <ImgWrapper><Img src={img4} alt="空" /></ImgWrapper>
        <ImgWrapper><Img src={img5} alt="空" /></ImgWrapper>
      </FV>
      <Decoration>【使用言語】▽【react】</Decoration>
      <Introduction>
        <Resume>
          都市銀行に3年→不動産会社9ヶ月→2019/7~フロントエンジニア<br/>
          実務ではhtml,css,javascript,jQueryを使用<br/>
          独学でreact,redux,typescript,ruby(rails),php,pythonも少し<br/>
          最近はiosアプリ開発に興味あり
        </Resume>
        <Name>YUIKO AKIYOSHI</Name>
      </Introduction>
    </Wrapper>
    </motion.div>
  );
};

export default About;
export {}

const Wrapper = styled.div`
  background: #efefef;
`;
const FV = styled.div`
  display: flex;
  overflow: hidden;
`;
const ImgWrapper = styled.div`
  width: 400px;
  height: 440px;
  overflow: hidden;
`;
const Img = styled.img`
  height: 100%;
`;
const Decoration = styled.div`
  width: 28px;
  height: 231px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  color: #333;
  font-size: 12px;
  align-items: center;
  display: flex;
  justify-content: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  background: #efefef;
`;
const Introduction = styled.div`
  display: flex;
  padding: 38px 280px;
  justify-content: space-between;
`;
const Resume = styled.div`
  width: 400px;
  font-size: 12px;
  line-height: 24px;
`;
const Name = styled.div`
  font-size: 12px
`;