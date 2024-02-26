import styled from "styled-components";

const Main1 = () => {
    return (
        <Main>
            <div className="mainIn">
                <div className="text1">안녕하세요!</div>
                <div className="text2">프론트엔드 개발자를 꿈꾸는 노지민입니다.</div>
                <div className="text3">어떤 것을 채울지 항상 기대하고 노력하는 사람입니다.</div>
                <div className="arrow"><span></span></div>
            </div>
        </Main>
    );
};

export default Main1;

const Main = styled.div`
    @keyframes arrow {
        0% {
            transform: rotate(-45deg) translate(0, 0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: rotate(-45deg) translate(-20px, 20px);
            opacity: 0;
        }
    }

    width: 100%;
    height: 100vh;
    min-height: 800px;
    background-color: #1A1E1F;
    color: #fff;
    line-height: 4rem;

    .mainIn{
        width: 100%;
        padding-top: 74px;
        margin: 0 auto;
        text-align: center;
    }
    .mainIn .text1{
        margin-top: 140px;
        font-size: 3rem;
    }
    .mainIn .text2{
        font-size: 1.5rem;
    }
    .mainIn .text3{
        font-size: 1rem;
    }
    .arrow{
        width: 80px;
        height: 80px;
        margin: 8rem auto 0;
        border-radius: 100px;
        background-color: #E3DD61;
    }
    .arrow span{
        position: absolute;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 2px solid #1A1E1F;
        border-bottom: 2px solid #1A1E1F;
        transform: rotate(-45deg);
        animation: arrow 1.5s infinite;
        box-sizing: border-box;
    }

    @media only screen and (min-width: 770px){
        .mainIn .text1{
            font-size: 4rem;
        }
        .mainIn .text2{
            margin-top: 2rem;
            font-size: 2rem;
        }
        .mainIn .text3{
            margin-top: 2rem;
            font-size: 1.2rem;
        }
    }
    @media only screen and (min-width: 1200px){
        .mainIn .text1{
            font-size: 4rem;
        }
        .mainIn .text2{
            margin-top: 3rem;
            font-size: 4rem;
        }
        .mainIn .text3{
            margin-top: 6rem;
            font-size: 2rem;
        }
    }
`