import styled from "styled-components";

export const Container = styled.div`
    width: 75%;
    height: 80px;
    display: flex;
    border-top: 2px solid #e0e0e0;
    justify-content: center;
    align-items: center;
    gap: .5em;
    font-weight: 700;
`;

export const Number = styled.span`
    padding: .4em 0.875em;
    border: 1px solid rgba(0, 0, 0, 0.0);
    &:hover {
        border: 1px solid #0081fd;
        border-radius: 10px;
        color: #0081fd;
    }
`;