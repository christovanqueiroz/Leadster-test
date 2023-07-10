import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 420px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.div`
    height: 100px;
    width: 140px;
    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    height: 320px;
    background-color: #F0F8FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Baloon = styled.span`
    color: #0081fd;
    padding: 4px 12px;
    border: 1px solid #0081fd;
    border-radius: 10px 10px 10px 2px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    text-align: center;
`;

export const TitleOne = styled.h2`
    color: #1c3c50;
    font-size: 36px;
`;

export const TitleTwo = styled.h1`
    color: #0076f4;
    font-size: 64px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e0e0e0;
`;

export const Paragraph = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
    color: #1c3c50;
`;


export const TextAsset = styled.div`
    height: 26px;
    width: 40px;
    position: relative;
    bottom: 114px;
    left: 455px;
`;