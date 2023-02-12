
import React, { useState } from 'react';
import styled from 'styled-components';


const StyledItemBoxDiv=styled.div`
 display: flex;
 justify-content: space-between;
 border: 1px sold black;
 padding: 10px;
 height: 100px;
 margin: 20px;
 align-items: center;
`;

const ListPage = () => {

    const [no, setNo]=useState(6);

    const [post, setPost]=useState({
        id:no,
        title:"",
        content:"" 
    });

    const[posts, setPosts]=useState([
        {id:1, title:"제목1", content:"내용1"},
        {id:2, title:"제목2", content:"내용2"},
        {id:3, title:"제목3", content:"내용3"},
        {id:4, title:"제목4", content:"내용4"},
        {id:5, title:"제목5", content:"내용5"},

    ]);

    const handleWrite=()=>{
        //ListPage의 setPosts에
        //let post={id:6, title:'인풋값'};
        //setPosts()
        setPosts([...posts,post]);
        setNo(no+1);
    }

    const handleChangeTitle=(e)=>{ //e:event 이벤트 발생할때
        console.log(e.target.value);
        setPost({title:e.target.value});
    };

    const handleChangeContent=(e)=>{
        console.log(e);
        setPost({content:e.target.value});
    };

    const handleForm=(e)=>{
        
        console.log(e.target.name);
        console.log(e.target.value);

        //computed property names 문법.16강. 후반부
        setPost({
            ...post, //이게 없으면, 기존 값 없어짐.
            [e.target.name]:e.target.value}); //[e.target.name] 키값을 동적으로 만든것.
        console.log(post.title);
        console.log(post.content);
    }

    return (
        <div>
            <h1>글목록 페이지</h1>
            <form>
            <input type="text" 
            placeholder='제목을 입력하세요..'
            value={post.title}
            onChange={handleForm}
            name='title'
            />
            <input type="text" 
            placeholder='내용을 입력하세요..' 
            value={post.content}
            onChange={handleForm}
            name='content'
            />

            <button type="button" onClick={handleWrite}>
                글쓰기
                </button>

        </form>
            <hr/>
            {posts.map((post)=>(
            <StyledItemBoxDiv>
                <div>
                번호 : {post.id} / 제목 : {post.title} / 내용 : {post.content}
                </div>
            <button>삭제</button>
            </StyledItemBoxDiv>
            ))}
        </div>
    );
};

export default ListPage;