import styled from "styled-components";

const Sub4 = () => {
    return(
        <Main>
            <h2 className="title">제목</h2>
            <h3 className="date">날짜(인원)</h3>
            <div className="content">
                <div><img /></div>
                <div>
                    <p><span>설명</span></p>
                    <p><span>주요기능</span></p>
                    <p><span>frontend</span></p>
                    <p><span>url</span></p>
                </div>
            </div>
        </Main>
    )
}

export default Sub4;

const Main = styled.div`
    padding: 100px 0;
    border-radius: 20px;
    background-color: #fff;

    .title{
        font-size: 2.5rem;
        line-height: 2.5rem
    }
    
`