import styled from "styled-components";

export const Container = styled.ul`
    width: 55%;
    display: flex;
    justify-content: space-between;
    margin: 2em 0;
    height: 25px;
`;

export const Button = styled.li`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 12px 12px;
    border: 1px solid #000;
    border-radius: 25px;
    cursor: default;
    &:hover {
        border: 1px solid #0081fd;
        color: #0081fd;
    }
`;