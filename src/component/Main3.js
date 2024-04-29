import styled from "styled-components";
import html from "../img/html.png"
import css from "../img/css.png"
import js from "../img/js.png"
import jq from "../img/jq.png"
import react from "../img/react.png"
import figma from "../img/figma.png"
import github from "../img/github.png"

const Main3 = () => {
    return (
        <Main id="2">
            <div className="mainIn">
                <h2>Skill</h2>
                <div className="content">
                    <div>
                        <h3>FrontEnd</h3>
                        <div className="front">
                            <div className="basic">
                                <img src={html} />
                                <img src={css} />
                                <img src={js} />
                            </div>
                            <img src={jq} />
                            <img src={react} />
                        </div>
                    </div>
                    <div>
                        <h3>Other</h3>
                        <div>
                            <img src={figma} />
                            <img src={github} />    
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Main3;

const Main = styled.div`
    padding: 100px 0;
    background-color: #FFD24D;
    text-align: center;

    .mainIn{
        width: 100%;
        margin: 0 auto;
    }
    .mainIn h2{
        font-size: 4rem;
        line-height: 4rem;
    }
    .mainIn h3{
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-align: left;
    }
    .mainIn h3::after{
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        margin: 20px 0;
        background-color: #D9D9D9;
    }
    .mainIn .content > div{
        width: 50%;
        padding: 40px;
        margin: 100px auto 0;
        border-radius: 20px;
        background-color: #fff;
    }
    .mainIn .content .front img{
        width: 60%
    }
    .mainIn .content .front .basic{
        display:flex;
        justify-content: space-between;
    }
    .mainIn .content .front .basic img{
        width: 20%;
        object-fit: cover;
    }

    @media only screen and (min-width: 1000px){
        .mainIn .content{
            display: flex;
            justify-content: center;
        }
        .mainIn .content > div{
            width: 28.4%;
            margin: 100px 12px 0;
        }
    }
`