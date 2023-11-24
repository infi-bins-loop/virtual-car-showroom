import styled from 'styled-components';

export const Wrapper = styled.div`
overflow-x: hidden;
`;
export const Content = styled.div`
margin-top: 4rem;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
.h2{
    
    margin-top: 4rem;
    letter-spacing: 1px;
    word-spacing: 10px;
    font-size: xx-large;
    font-weight: 600;
}
.h{
    color: black;
    margin-top: 4rem;
    letter-spacing: 1px;
    word-spacing: 10px;
    padding: 20px;
    font-size: large;
    background-color: #e3e3e3;
    width: 20vw;
}
.label{
    font-weight: 600;
    margin-bottom: 0.5rem;
}
.input{
    padding: 0.8rem;
    width: 50vw;
    letter-spacing: 0.8;
    margin-bottom: 2rem;
    color: black;
    border-radius: 10px;
    border: 1px solid grey;
}
.input::placeholder {
    color: grey;
}
.main{
    display: flex;
    flex-direction: column;
}
.slot{
    color: white;
    font-weight: 400;
    margin-bottom: 0.5rem;
}
.btn{
    width: 15rem;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 2 rem;
    margin-top: 2rem;
    border-radius: 30px;
}
`;