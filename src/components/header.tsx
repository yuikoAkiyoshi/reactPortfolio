
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Wrapper>
      <Logo>
      きよし
      </Logo>
      <List>
        <Item whileHover={{ scale: 1.2 }} transition={{ type: 'tween', duration: 0.2 }}><Link to="/">ABOUT</Link></Item>
        <Item whileHover={{ scale: 1.2 }}><Link to="/blog">BLOG</Link></Item>
        <Item whileHover={{ scale: 1.2 }}><Link to="/works">WORKS</Link></Item>
      </List>
    </Wrapper>
  );
};

export default Header;
export {}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 790px;
  margin: auto;
  padding: 42px 104px;
  background-color: #efefef;
`;
const Logo = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: #333;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
`;
const Item = styled(motion.li)`
  margin-left: 24px;
  border-style: none;
  color: #333;
`;