import { Link } from "react-scroll";
import styled from "styled-components";

const Header = () => {
    return (
        <Head>
            <div className="headIn">
                <h2 onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}>Jimin's Portfolio</h2>
                <div className="shortcuts">
                    <Link to="1" spy={true} smooth={true}>
                        <p>About Me</p>
                    </Link>
                    <Link to="2" spy={true} smooth={true}>
                        <p>Skill</p>
                    </Link>
                    <Link to="3" spy={true} smooth={true}>
                        <p>Project</p>
                    </Link>
                </div>
            </div>
        </Head>
    );
};

export default Header;

const Head = styled.header`
    display: none;

    @media only screen and (min-width: 601px){
        display: block;
        position: fixed;
        width: 100%;
        height: 72px;
        border-bottom: 2px solid #D9D9D9;
        background-color: #1A1E1F;
        color: #fff;
        z-index: 999;
    
        .headIn{
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 85rem;
            margin: 0 auto;
            line-height: 64px;
        }
        .headIn h2{
            font-size: 2rem;
            font-weight: 700;
            cursor: pointer;
        }
        .headIn h2:hover{
            color: #E3DD61;
        }
        .headIn .shortcuts{
            display: flex;
            justify-content: space-between;
        }
        .headIn .shortcuts p{
            margin-left: 30px;
            font-size: 1.5rem;
            cursor: pointer;
        }
        .headIn .shortcuts p:hover{
            color: #E3DD61;
        }
    }
`