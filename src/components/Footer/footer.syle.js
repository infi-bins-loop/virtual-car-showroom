import styled from "styled-components";

export const Wrapper = styled.div`
    color: white;
    background-color: white;
    border: 1px solid #d9d9d9;
`;

export const Content = styled.div`
    color: white;
    .items{
        display: flex;
    }
    .footcont{
        float: left;
        margin-left: 4rem;
    }
    .links{
        margin-top: 2rem;
        margin-left: 35rem;
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width: 430px) {
        flex-direction: column;
        align-items: center;
        .links{
            justify-content: space-between;
        }
    }
`;