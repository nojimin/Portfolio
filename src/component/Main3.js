import styled from "styled-components";

const Main3 = () => {
    return (
        <Main>
            <div className="mainIn">
                <h2>Skill</h2>
                <div className="content">
                    <div>
                        <h3>FrontEnd</h3>
                    </div>
                    <div>
                        <h3>Other</h3>
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
    .mainIn .content{
        display: flex;
        justify-content: center;
    }
    .mainIn .content > div{
        width: 384px;
        padding: 40px;
        margin: 100px 12px 0;
        border-radius: 20px;
        background-color: #fff;
    }
`