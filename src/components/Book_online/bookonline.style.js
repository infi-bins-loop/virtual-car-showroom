import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: black;
    .video{
        display: flex;
        flex-direction: row;
        margin-left: 3rem;
        margin-bottom: 10px;
    }
    .h2{
        margin-left: 3rem;
        color: white;
    }
    .image1{
        width: 40vw;
        height: 45vh;
        display: flex;
        flex-direction: row;
        margin-right: 10px;
    }
    .image2{
        width: 60vw;
        height: 60vh;
        display: flex;
        flex-direction: row;
        margin-right: 10px;
    }
    .para{
        color: white;
        font-weight: 500;
        font-size: larger;
        margin: 10rem 3rem;
        max-width: 20rem;
    }
    .para1{
        color: white;
        font-weight: 500;
        font-size: larger;
        margin: 5rem 3rem;
        max-width: 20rem;
    }
`;
