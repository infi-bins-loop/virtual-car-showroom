import styled from 'styled-components';

export const Wrapper = styled.div`
overflow-x: hidden;
`;
export const Content = styled.div`
margin-top: 4rem;
display: flex;
flex-wrap: wrap;
flex-direction: column;
background-color: black;
justify-content: center;
align-items: center;
.h2{
    color: white;
    margin-top: 4rem;
    letter-spacing: 1px;
    word-spacing: 10px;
    font-size: xx-large;
    font-weight: 600;
}
.label{
    color: white;
    font-weight: 600;
    margin-bottom: 0.5rem;
}
.input{
    padding: 0.8rem;
    width: 50vw;
    letter-spacing: 0.8;
    margin-bottom: 2rem;
    color: black;
}
.input::placeholder {
    color: black;
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