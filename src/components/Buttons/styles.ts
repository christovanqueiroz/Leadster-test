import styled from "styled-components";

export const Container = styled.ul`
    width: 55%;
    display: flex;
    justify-content: space-between;
    margin: 2em 0;
    height: 25px;
    @media (max-width: 1200px) {
        flex-wrap: wrap;
        gap: .5em;
    }

    @media (max-width: 600px) {
        width: 100%;
    }

    @media (max-width: 300px) {
        justify-content: center;
    }
`;

export const Button = styled.li`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 12px;
    border: 1px solid #000;
    border-radius: 25px;
    cursor: default;
    &:hover {
        border: 1px solid #0081fd;
        color: #0081fd;
    }

    @media (max-width: 600px) {
        font-size: 10px;
        padding: 6px;
    }
`;