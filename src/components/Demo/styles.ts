import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 420px;
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F0F8FF;
    @media (max-width: 1200px) {
        flex-direction: column;
        height: auto;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 400px;
    height: 371px;
    @media (max-width: 502px) {
        width: 280px;
        height: 260px;
    }

    @media (max-width: 300px) {
        width: 220px;
        height: 200px;
    }
`;

export const Content = styled.div`
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    margin-left: 5em;
    justify-content: center;
    @media (max-width: 1200px) {
        margin-left: 0;
    }

    @media (max-width: 502px) {
        width: 100%;
    }
`;

export const Title = styled.div`
    border-bottom: 2px solid #e0e0e0;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: .5em;
    padding-bottom: 1em;
    @media (max-width: 1200px) {
        text-align: center;
        width: 100%;
    }

    @media (max-width: 300px) {
        font-size: 12px;
    }
`;

export const Infos = styled.div`
    width: 100%;
`;

export const ButtonDiv = styled.div`
    margin: 1em 0;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1em;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    text-transform: uppercase;
    padding: 1em 2em;
    background-color: #0081fd;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    border-radius: 20px;
    max-height: 39px;
    &:hover {
        background-color: #fff;
        color: #0081fd;
    }

    @media (max-width: 300px) {
        padding: 0.75em;
    }
`;

export const MoreInfo = styled.div`
    display: flex;
    font-size: 12px;
    gap: 1em;
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CCInfo = styled.div`
    display: flex;
    gap: .5em;
    padding-right: .5em;
    border-right: 1px solid #000;
    @media (max-width: 750px) {
        border-right: none;
    }
`;

export const Rate = styled.div`
    display: flex;
    gap: .5em;
`;