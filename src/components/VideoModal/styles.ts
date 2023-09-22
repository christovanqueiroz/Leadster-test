import styled from "styled-components";

export const Screen = styled.div`
    overflow-y: auto;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    height: 75%;
    width: 30%;
    background-color: #FFF;
    border-radius: 12px;
    border-top: 3px solid #0081fd;
    overflow-y: scroll;

    @media (max-width: 1200px) {
        width: 50%;
    }

    @media (max-width: 384px) {
        width: 80%;
    }
`;

export const Title = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: end;
    font-size: 12px;
    text-align: center;
    padding: 4em;
    @media (max-width: 1200px) {
        font-size: 10px;
        padding: 6em 0;
    }

    @media (max-width: 300px) {
        font-size: 8px;
    }
`;

export const CloseModal = styled.button`
    background: #f00;
    border: 1px solid #000;
    color: #fff;
    padding: 2px 0;
    width: 24px;
    border-radius: 100%;
`;

export const Player = styled.div`
    height: 50%;
    width: 100%;
`;

export const Description = styled.div`
    height: 25%;
    width: 100%;
    padding: 1em;
    font-size: 12px;
`;

export const DescriptionTitle = styled.span`
    font-weight: bold;
`;

export const DescriptionText = styled.p`
    margin-top: .5em;
    border-top: 1px solid #e0e0e0;
`;