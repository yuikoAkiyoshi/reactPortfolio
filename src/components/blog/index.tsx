import React,  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";


import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img5 from '../../assets/img/img5.jpg';


const cardTransition = { duration: 0.5, ease: "easeInOut" };

const cardVariants = {
  initial: { scale: 0.9, opacity: 0, cardTransition },
  enter: { scale: 1, opacity: 1, cardTransition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { cardTransition }
  }
};


const BlogIndex = () => {
  const [articles, setArticles] = useState([{
    title:'',
    content:'',
    label:'',
    id:'',
  }])
  // const [sortFlag,setSortFlag] =useState(false)
  const [targetArticles,setTargetArticles] =useState([{
    title:'',
    content:'',
    label:'',
    id:'',
  }])
  const [sortedArticles,setSortedArticles] =useState([{
    title:'',
    content:'',
    label:'',
    id:'',
  }])

  useEffect(() => {
    const fetchArticle = () => {
      fetch("https://my-json-server.typicode.com/yuikoAkiyoshi/json-server/articles") // データを取得しに行く
      // fetch("http://localhost:3001/articles") // データを取得しに行く
      .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
      .then( json => { // オブジェクトに変換したレスポンスを受け取り、
      setArticles( json ) // Stateを更新する
      setTargetArticles( json ) // Stateを更新する
      })
    }
    fetchArticle();
  }, []);

    function sort(value: string){
      let sortFlag = false;
      value === 'all'?sortFlag=false:sortFlag=true;
      let _sortedArticles = articles.filter((item)=>item.label===value)
      sortFlag?setTargetArticles(_sortedArticles):setTargetArticles(articles);
    }

    let img: string | undefined;
    return (
        <>
        <Wrapper>
        <SortMenu>
            <SortButtonWrapper>
              <Sortbutton onClick={()=>{sort('react')}}>react</Sortbutton>
              <Sortbutton onClick={()=>{sort('react-router')}}>react-router</Sortbutton>
              <Sortbutton onClick={()=>{sort('typescript')}}>typescript</Sortbutton>
              <Sortbutton onClick={()=>{sort('all')}}>all</Sortbutton>
            </SortButtonWrapper>
            <Decoration>このサイト作る時つまづいたとこメモ</Decoration>
          </SortMenu>
          <Inner>
            {targetArticles.map((article)=>{
                switch (article.label) {
                  case 'react':
                    img = img5
                    break;
                  case 'typescript':
                    img = img2
                    break;
                  case 'react-router':
                  img = img3
                    break;
                }
                    return (
                          <Card key={article.id} initial="initial" animate="enter" exit="exit" variants={cardVariants} transition={cardTransition}>
                            <ImageWrapper>
                              <Image src={img} alt="画像" />
                            </ImageWrapper>
                            <Title>{article.title}</Title>
                            <Text>{article.content}</Text>
                            <ButtonWrapper>
                            <Link to={"/show/" + article.id} key={article.id}>
                                <MoreButton>read more...▷</MoreButton>
                            </Link>
                            </ButtonWrapper>
                            <Label>{article.label}</Label>
                          </Card>
                      );
    })}
          </Inner>
          <NewButton>
              <Link to="/new">
                ＋
              </Link>
          </NewButton>
        </Wrapper>
        </>
      )
}

export default BlogIndex;
export {};

const Wrapper = styled.div`
  display:flex;
  margin: 0 20px;
  padding-top: 24px;
  border-top: solid 2px #121212;
`;
const SortMenu = styled.div`
  position: relative;
  padding: 40px;
  width: 20%;
  border-right: 1px dotted #808085;
`;
const SortButtonWrapper = styled.div`
  position: fixed;
  top: 400px;
`;
const Sortbutton = styled.div`
  margin-top: 16px;
  font-size: 16px;
  color: #808085;
`;
const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 40px;
  width: 70%;
  margin: auto;
`;
const Card = styled(motion.div)`
  position: relative;
  width: 248px;
  margin-right: 20px;
  margin-bottom: 12px;
  padding: 16px 16px 56px 16px;
  text-decoration: none;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.div`
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const Text = styled.div`
  margin-top: 16px;
  font-size: 12px;
  color: #808085;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  text-align: right;
`;
const MoreButton = styled.button`
  padding: 8px 12px;
  font-size: 11px;
  line-height: 1;
  color: #333;
`;
const Label = styled.div`
  position: absolute;
  top: -13px;
  left: 0;
  font-size: 32px;
  color: #808085;
`;
const NewButton = styled.div`
  position:fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  right: 40px;
  width:60px;
  height:60px;
  border-radius: 50%;
  background: #ece8e5;
  box-shadow: 2px 2px 12px -3px #cfcac5;
  font-size: 24px;
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

