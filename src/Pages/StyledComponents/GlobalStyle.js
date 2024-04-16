// import { createGlobalStyle } from "styled-components"

// export const GlobalStyle = createGlobalStyle`
// height: 100vh,
// width: 100vw,
// background-color: red
// `;


import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: red;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;


export const AnothorBtn = styled.button`
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;




export const StyledDiv = styled.div`
    background-color: green;
`