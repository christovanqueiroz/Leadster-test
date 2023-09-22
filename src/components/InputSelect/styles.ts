import styled from "styled-components";

export const Container = styled.div`
    width: 30%;
    display: flex;
    gap: 1em;
    margin: 2em 0;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        align-items: end;
        margin: 0;
        gap: 0;
    }

    @media (max-width: 300px) {
        align-items: center;
    }
`;


export const Label = styled.label`
    font-weight: 700;
`;

export const Selector = styled.select`
    border: 1px solid #000;
    border-radius: 6px;
    padding: 2px 0px 2px 12px;
    font-weight: 700;
`;
