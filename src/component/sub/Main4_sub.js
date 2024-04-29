import styled from "styled-components";
import React from "react";
import Slick from "./Slick";

const Sub4 = ({title, date, img, ex, frontend, url, github}) => {
    return(
        <Main>
            <h2 className="title">{title}</h2>
            <h3 className="date">{date}</h3>
            <div className="content">
                <Slick img={img} />
                <div className="text">
                    <p className="ex">{ex}</p>
                    <span className="line"></span>
                    <p><span>frontend</span>: {frontend}</p>
                    <p><span>github</span>: {github}</p>
                    <p><span>url</span>: <a href={url} target="blank">{url}</a></p>
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
        line-height: 2.5rem;
        margin-bottom: 10px;
    }
    .date{
        font-size: 1rem;
        line-height: 1rem;
        margin-bottom: 40px;
    }
    .content{
        width: 80%;
        margin: 0 auto;
    }
    .content .slick-slider{
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.45);
    }
    .content .text{
        margin-top: 100px;
        font-size: 1rem;
        line-height: 2rem;
        text-align: left;
    }
    .content .text .ex{
        white-space: pre-wrap;
        line-height: 1.25rem;
    }
    .content .text span{
        font-weight: 600;
    }
    .content .line{
        display: block;
        width: 100%;
        height: 2px;
        background-color: #D9D9D9;
    }
    .slick-slider img{
        height: 15rem;
        object-fit: cover;
    }
    .slick-dots{
        bottom: 2px;
    }
    .slick-dots li button:before{
        font-size: 10px;
        color: #007aff;
    }
    .slick-dots li.slick-active button:before{
        opacity: 1;
    }
    .slick-prev:before, .slick-next:before{
        margin-left: -3px;
        font-size: 25px;
        color: #007aff;
    }

    @media only screen and (min-width: 1000px){
        .content{
            display: flex;
            justify-content: space-around;
            width: 100%;
        }
        .content > div{
            width: 40%;
        }
        .content .text{
            margin-top: 0;
        }
        .slick-slider{
            height: 100%;
        }
        .slick-slider img{
            height: 20rem;
            max-height: 280px;
        }
    }
`