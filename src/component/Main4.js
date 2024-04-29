import styled from "styled-components";
import Sub4 from "./sub/Main4_sub";
import { useState } from "react";
import { M4Dummy } from "./sub/Main4_dummy";
import { useEffect } from "react";

const Main4 = () => {
    const [dummy, setDummy] = useState([]);

    useEffect(()=>{
        setDummy(M4Dummy);
    },[])

    return(
        <Main id="3">
            <div className="mainIn">
                <h2>Project</h2>
                {dummy.map((it) => <Sub4 key={it.title} {...it} />)}
            </div>
        </Main>
    )
}

export default Main4;

const Main = styled.div`
    padding: 100px 0;
    text-align: center;
    background-color: #479FFF;

    .mainIn{
        width: 100%;
        margin: 0 auto;
    }
    .mainIn > h2{
        font-size: 4rem;
        line-height: 4rem;
        color: #fff;
    }
    .mainIn > div{
        width: 71.25%;
        padding: 50px 0;
        margin: 100px auto 0;
        background-color: #fff;
    }
`