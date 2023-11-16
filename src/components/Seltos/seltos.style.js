import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow-x: hidden;
    .video{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .carousel{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .colorbtn{
        padding: 1rem 2rem;
        background-color: transparent;
        border: 2px solid black;
        color: black;
        font-weight: 500;
        font-size: 1rem;
    }
    .colorbtn:hover{
        opacity: 1;
        cursor: pointer;
        background-color: black;
        color: white;
    }
    .h2{
        font-weight: 500;
        letter-spacing: 0.8px;
        font-size: 2rem;
    }
    .features{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        max-width: 60rem;
        margin: 0 auto;
        letter-spacing: 0.8px;
        background-color: #f2f2f2;
        padding: 3rem 6rem;
        line-height: 2rem;
    }
    .title{
        font-size: 2rem;
        font-weight: 500;
    }
`;
