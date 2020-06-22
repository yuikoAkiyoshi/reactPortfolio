import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import "easymde/dist/easymde.min.css";
import marked from "marked";
import highlight from 'highlight.js';
import 'highlightjs/styles/docco.css';
import { motion } from "framer-motion";

import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img5 from '../../assets/img/img5.jpg';

const pageTransition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const pageVariants = {
  in: { opacity: 1 },
  out: { opacity: 0},
};

marked.setOptions({
  // code要素にdefaultで付くlangage-を削除
  langPrefix: '',
  // highlightjsを使用したハイライト処理を追加
  highlight: function(code, lang) {
    return highlight.highlightAuto(code, [lang]).value
  }
});

// interface Props extends RouteComponentProps<{id: string}> {}
// interface State {
//     article: any,
//     inputTitle: any,
//     inputContent: any,
//     inputImage: any,
//     editFlag: any,
// }

// class Show extends Component <Props, State> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             article: [],
//             inputTitle: [],
//             inputContent: [],
//             inputImage: [],
//             editFlag: false,
//         };
//         this.fetchArticle = this.fetchArticle.bind(this)
//         this.fetchArticle()
//     }


//     fetchArticle(){
//         let myId = Number(this.props.match.params.id);
//         fetch("http://localhost:3001/articles/" + myId ) // データを取得しに行く
//         .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
//         .then( json => { // オブジェクトに変換したレスポンスを受け取り、
//         this.setState({ article: json }) // Stateを更新する
//         })
//     }

//     changeTitle(e: React.ChangeEvent<HTMLInputElement>) {
//       const inputTitle = e.target.value
//       this.setState({ inputTitle: inputTitle })
//     }
//     changeContent(e: React.ChangeEvent<HTMLTextAreaElement>) {
//         const inputContent = e.target.value
//         this.setState({ inputContent: inputContent })
//     }
//     changeImage(e: React.ChangeEvent<HTMLInputElement>) {
//         const inputImage = e.target.value
//         this.setState({ inputImage: inputImage })
//     }
    
//     submitArticle() {
//         let myId = Number(this.props.match.params.id);
//         fetch("http://localhost:3001/articles/"+myId, {
//             method: "PUT",
//             headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 title: this.state.inputTitle, 
//                 content: this.state.inputContent, 
//                 Image: this.state.inputImage, 
//             })
//         })
//         .then( this.fetchArticle )
//     }

//     handleEdit() {
//       this.setState({ editFlag:true })
//     }


//     render(){
//         const [markdown, setMarkdown] = useState("");
//         const article = this.state.article;
//         let DOM = <></>;
//         if(!this.state.editFlag){
//           DOM = (
//             <Wrapper>
//                 <div>
//                     <Label htmlFor="title">タイトル</Label>
//                     <Title>{article.title}</Title>
//                     <Label htmlFor="content">内容</Label>
//                     <Text>{article.content}</Text>
//                     <AddButton onClick={()=>{this.handleEdit()}}>編集する</AddButton>
//                     <Link to="/blog">
//                         <DeleteButton>一覧へ戻る</DeleteButton>
//                     </Link>
//                 </div>
//             </Wrapper>
//           )
//         }
//         if(this.state.editFlag){
//           DOM = (
//             <Wrapper>
//                 <div>
//                     <Label htmlFor="title">タイトル</Label>
//                     <Input id="title" type="text" defaultValue={article.title} onChange={ (e)=>{this.changeTitle(e)} } />
//                     <Label htmlFor="content">内容</Label>
//                     <TextArea id="content" defaultValue={article.content} onChange={ (e)=>{this.changeContent(e)} } />
//                     <Label htmlFor="image">イメージ</Label>
//                     <Input id="image" type="file" onChange={ (e)=>{this.changeImage(e)} } />
//                     <Link to="/blog">
//                     <AddButton onClick={ ()=>{this.submitArticle()} }>変更する</AddButton>
//                     <DeleteButton>戻る</DeleteButton>
//                     </Link>
//                 </div>
//                 <SimpleMDE onChange={e => setMarkdown(e)} />
//             </Wrapper>
//           )
//         }
//         return (
//           <>
//             {DOM}
//            </>
//         );
//     }
// };

const Show = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    title:'',
    content:'',
    label:'',
  })
  const [inputTitle, setInputTitle] = useState('')
  const [inputLabel, setInputLabel] = useState('')
  const [markdown, setMarkdown] = useState('');
  const [editFlag, setEditFlag] = useState(false);
  // eslint-disable-next-line
  useEffect(() => {
    const fetchArticle = () => {
      let myId = Number(id);
      fetch("https://my-json-server.typicode.com/yuikoAkiyoshi/json-server/articles/" + myId ) // データを取得しに行く
      // fetch("http://localhost:3001/articles/" + myId ) // データを取得しに行く
      .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
      .then( json => { // オブジェクトに変換したレスポンスを受け取り、
      setArticle( json ) // Stateを更新する
      setInputTitle( json.title ) // Stateを更新する
      setInputLabel( json.label ) // Stateを更新する
      setMarkdown( json.content ) // Stateを更新する
      })
    }
    fetchArticle();
    // eslint-disable-next-line
  }, []);

  function changeTitle(e: { target: { value: React.SetStateAction<string>; }; }){
    setInputTitle(e.target.value)
  }

  function changeContent (e: { target: { value: React.SetStateAction<string>; }; }){
    setMarkdown(e.target.value)
  }

  function changeLabel (e: { target: { value: React.SetStateAction<string>; }; }){
    setInputLabel(e.target.value)
  }
  
  const submitArticle = () => {
    let myId = Number(id);
    fetch("https://my-json-server.typicode.com/yuikoAkiyoshi/json-server/articles/"+myId, {
    // fetch("http://localhost:3001/articles/"+myId, {
        method: "PUT",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: inputTitle, 
            content: markdown, 
            label: inputLabel,
        })
    })
  }

  function handleEdit () {
    editFlag?setEditFlag(false):setEditFlag(true)
  }

  function click (){
    submitArticle();
    handleEdit();
  }

  const deleteArticle = () => {
    let myId = Number(id);
    fetch("https://my-json-server.typicode.com/yuikoAkiyoshi/json-server/articles/"+myId, {method: "DELETE"})
  }

  let img: string | undefined;
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

  let DOM = <></>
  if(editFlag){
    DOM =(
      <Wrapper>
        <SortMenu>
          <SortButtonWrapper>
            <Link to="/blog"><Sortbutton >記事一覧</Sortbutton></Link>
          </SortButtonWrapper>
          <Decoration>このサイト作る時つまづいたとこメモ</Decoration>
        </SortMenu>
      <Article>
          <Input id="title" type="text" defaultValue={article.title} onChange={ changeTitle } />
          <Select value={ inputLabel } onChange={ changeLabel }>
            <option value="react">react</option>
            <option value="react-router">react-router</option>
            <option value="typescript">typescript</option>
          </Select>
          <TextArea onChange={ changeContent }>{article.content}</TextArea>
          <BtnWrapper>
            <EditButton onClick={ click }>投稿する</EditButton>
            <Link to="/blog">
              <DeleteButton>戻る</DeleteButton>
            </Link>
          </BtnWrapper>
      </Article>
    </Wrapper>
    )
  }else{
    DOM=(
    <Wrapper>
      <SortMenu>
        <SortButtonWrapper>
          <Link to="/blog"><Sortbutton >記事一覧</Sortbutton></Link>
        </SortButtonWrapper>
        <Decoration>このサイト作る時つまづいたとこメモ</Decoration>
      </SortMenu>
      <Article>
        <Title>{article.title}</Title>
        <Label>LABEL : {article.label}</Label>
        <Image src={img} />
        <Body id="body">
          <span dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </Body>
        <BtnWrapper>
          <EditButton onClick={handleEdit}>編集する</EditButton>
          <Link to="/blog">
            <DeleteButton onClick={deleteArticle}>消去する</DeleteButton>
          </Link>
        </BtnWrapper>
      </Article>
    </Wrapper>
    )
  }
  return(
    <>
    <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    {DOM}
    </motion.div>
    </>
  )
}

export default Show;
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
  word-break: break-word;
`;
const Title = styled.div`
  width: 100%;
  padding-bottom: 12px;
  font-size: 22px;
  color: #232323;
  text-align: center;
`;
const Label = styled.div`
  margin-bottom: 24px;
  padding: 14px;
  font-size: 12px;
  text-align:center;
  color: #232323;
  border-top: solid 1px #010101;
  border-bottom: solid 1px #010101;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Body = styled.div`
  margin-top: 24px;
  padding: 10px
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
const EditButton = styled.button`
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




