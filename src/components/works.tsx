import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import icon from '../assets/img/icon.jpg';

const pageTransition = { duration: 1 };

const pageVariants = {
  in: { opacity: 1 },
  out: { opacity: 0},
};

const workTransition = { duration: 0.3 };

const workVariants = {
  whileHover : { scale: 1.05 }
};


const Works = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <Wrapper>
      <SortMenu>
        <Icon src={icon} />
        <SortButtonWrapper>
          <Sortbutton >
          あきよしゆいこ●1993年東京都練馬区生まれ。
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
          </Sortbutton>
        </SortButtonWrapper>
        <Decoration>これから作りたいもの</Decoration>
      </SortMenu>
      <Article>
        <Work whileHover='whileHover' variants={workVariants} transition={workTransition}>
          <Img src={img1} alt="react"/>
          <Body>
            <Catch>reactの復習のために作成。</Catch>
            <Text>
              使用技術：<br/>
              react<br/>Typescript<br/>FramerMotion<br/>marked<br/>
              githab:
              <br/>
              url:
            </Text>
          </Body>
        </Work>
        <Work whileHover='whileHover' variants={workVariants} transition={workTransition}>
          <Img src={img2} alt="ruby"/>
          <Body>
            <Catch>ruby(ruby on rails)の復習のために作成。</Catch>
            <Text>
              使用技術：<br/>
              react<br/>Typescript<br/>FramerMotion<br/>marked<br/>
              githab:
              <br/>
              url:
            </Text>
          </Body>
        </Work>
        <Work whileHover='whileHover' variants={workVariants} transition={workTransition}>
          <Img src={img3} alt="node.js"/>
          <Body>
            <Catch>node.js(express)の復習のために作成。</Catch>
            <Text>
              使用技術：<br/>
              react<br/>Typescript<br/>FramerMotion<br/>marked<br/>
              githab:
              <br/>
              url:
            </Text>
          </Body>
        </Work>
        <Work whileHover='whileHover' variants={workVariants} transition={workTransition}>
          <Img src={img4} alt="reactNative"/>
          <Body>
            <Catch>reactNative勉強のため作成。</Catch>
            <Text>
              使用技術：<br/>
              react<br/>Typescript<br/>FramerMotion<br/>marked<br/>
              githab:
              <br/>
              url:
            </Text>
          </Body>
        </Work>
      </Article>
    </Wrapper>
  </motion.div>
  );
};

export default Works;
export {}

const Wrapper = styled.div`
  margin: 0 20px 50px;
  padding-top: 24px;
  display:flex;
  justify-content: space-between;
  border-top: solid 2px #121212;
`;
const SortMenu = styled.div`
  position: relative;
  padding: 40px;
  width: 20%;
  border-right: 1px dotted #808085;
`;
const Icon = styled.img`
  display: block;
  width: 80px;
  margin: 75px auto 30px;
  border-radius: 50%;
`;
const SortButtonWrapper = styled.div`
`;
const Sortbutton = styled.div`
  margin-top: 16px;
  font-size: 10px;
  color: #808085;
`;
const Article = styled.div`
  width: 70%;
  margin: 50px auto 0;
  color: #121212;
  word-break: break-word;
`;
const Work = styled(motion.div)`
  display: flex;
  margin-bottom: 16px;
  padding: 16px;
`;
const Img = styled.img`
  width: 50%;
  height: auto;
`;
const Body = styled.div`
  padding: 24px;
`;
const Catch = styled.div`
  font-size:18px;
  margin-bottom: 16px;
`;
const Text = styled.div`
  font-size: 12px;
`;
const Decoration = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: -147px;
  left: calc(50% - 24px);
  padding: 10px 0;
  width: 28px;
  color: #333;
  font-size: 12px;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  background: #ffffff;
  letter-spacing: 4px;
  border: 1px solid #121212;
`;