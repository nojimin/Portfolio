import styled from "styled-components";

const Main2 = () => {
    return(
        <Main>
            <div className="mainIn">
                <h2 className="title">About Me</h2>
                <div className="content">
                    <ul>
                        <li>
                            <h3>이름<span></span></h3>
                            <p>노지민</p>
                        </li>
                        <li>
                            <h3>생년월일<span></span></h3>
                            <p>2000.01.21</p>
                        </li>
                        <li>
                            <h3>연락처<span></span></h3>
                            <p>010-3968-4780</p>
                            <p>sh7606555@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Main>
    )
}

export default Main2;

const Main = styled.div`
    text-align: center;

    .mainIn{
        width: 100%;
        padding: 100px 0;
        margin: 0 auto;
    }
    .mainIn .title{
        font-size: 4rem;
        line-height: 4rem;
    }
    .mainIn .content{
        margin-top: 100px;
    }
    .mainIn .content li{
        margin-bottom: 50px;
    }
    .mainIn .content h3{
        display: inline-block;
        font-size: 2rem;
        font-weight: 600;
        line-height: 2rem;
    }
    .mainIn .content h3 span{
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        margin-top: 16px;
        background-color: #D9D9D9;
    }
    .mainIn .content p{
        font-size: 1.25rem;
        line-height: 3rem;
    }

    @media only screen and (min-width: 770px){
        .mainIn .content ul{
            display: flex;
            justify-content: space-between;
        }
        .mainIn .content li{
            width: 300px;
        }
    }
`