import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const pageTransition = { duration: 1 };

const pageVariants = {
  in: { opacity: 1 },
  out: { opacity: 0},
};

interface Props {}
interface State {
    articles: any,
    inputTitle: any,
    inputContent: any,
    inputLabel: any,
}
class New extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            articles: [],
            inputTitle: [],
            inputContent: [],
            inputLabel: 'react',
        };
        this.fetchArticles = this.fetchArticles.bind(this)
    }

    fetchArticles(){
        fetch("https://my-json-server.typicode.com/yuikoAkiyoshi/json-server/db") // データを取得しに行く
        .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
        .then( json => { // オブジェクトに変換したレスポンスを受け取り、
        this.setState({ articles: json }) // Stateを更新する
        })
    }

    changeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        const inputTitle = e.target.value
        this.setState({ inputTitle: inputTitle })
    }
    changeContent(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const inputContent = e.target.value
        this.setState({ inputContent: inputContent })
    }
    changeLabel(e: React.ChangeEvent<HTMLSelectElement>) {
        const inputLabel = e.target.value
        this.setState({ inputLabel: inputLabel })
    }
    
    submitArticle() {
        fetch("https://my-json-server.typicode.com/yuikoAkiyoshi/json-server/articles", {
        // fetch("http://localhost:3001/articles", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                title: this.state.inputTitle, 
                content: this.state.inputContent, 
                label: this.state.inputLabel, 
            })
        })
        .then( this.fetchArticles )
    }

    render(){
        return (
            <>
            <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <SortMenu>
                    <SortButtonWrapper>
                        <Link to="/blog"><Sortbutton >記事一覧</Sortbutton></Link>
                    </SortButtonWrapper>
                    <Decoration>このサイト作る時つまづいたとこメモ</Decoration>
                </SortMenu>
                <Article>
                    <Input id="title" type="text" onChange={ (e)=>{this.changeTitle(e)} } />
                    <Select value={ this.state.inputLabel } onChange={ (e)=>{this.changeLabel(e)} }>
                        <option value="react">react</option>
                        <option value="react-router">react-router</option>
                        <option value="typescript">typescript</option>
                    </Select>
                    <TextArea id="content" onChange={ (e)=>{this.changeContent(e)} } />
                    <BtnWrapper>
                        <Link to="/blog">
                            <AddButton onClick={ ()=>{this.submitArticle()} }>追加する</AddButton>
                            <DeleteButton>戻る</DeleteButton>
                        </Link>
                    </BtnWrapper>
                </Article>
            </Wrapper>
        </motion.div>
        </>
        );
    }
};

export default New;
export {};

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
const SortButtonWrapper = styled.div`
  position: fixed;
  top: 400px;
`;
const Sortbutton = styled.div`
  margin-top: 16px;
  font-size: 16px;
  color: #808085;
`;
const Article = styled.div`
  width: 70%;
  margin: 50px auto 0;
  color: #121212;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 24px;
  padding: 0 24px;
  background: #fff;
`;
const Select = styled.select`
  width: 100%;
  height: 50px;
  margin-bottom: 24px;
  padding: 0 24px;
  background: #fff;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 600px;
  margin-bottom: 24px;
  padding: 0 24px;
  background: #fff;
`;
const BtnWrapper = styled.div`
  width: 100%;
  text-align: right;
`;
const AddButton = styled.button`
  margin-top: 24px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1;
  color: #121212;
`;
const DeleteButton = styled.button`
  margin-top: 24px;
  margin-left: 12px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1;
  color: #121212;
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