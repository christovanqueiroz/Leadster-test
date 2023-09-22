import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

export const Links = styled.div`
    display: flex;
    height: 80px;
    width: 75%;
    justify-content: space-between;
    border-bottom: 2px solid #e0e0e0;
    @media (max-width: 1200px) {
        height: 160px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: baseline;
    }

    @media (max-width: 300px) {
        height: 200px;
    }

    @media (max-width: 220px) {
        height: 240px;
    }
`;