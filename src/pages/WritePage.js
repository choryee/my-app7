import React from 'react';



const WritePage = () => {

const handlewrite=()=>{
    //ListPage의 setPosts에
    let post={id:6, title:'인풋값'};
    //setPosts()
}


    return (
        <div>
        <h1>글쓰기 페이지</h1>
        <hr/>
        <form>
            <input type="text" placeholder='제목을 입력하세요..'/>
            <button type='button' onClick={handlewrite}></button>

        </form>




        </div>
        

    );
};

export default WritePage;