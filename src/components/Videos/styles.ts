import styled from "styled-components";

export const Container = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    gap: 1.5em;
    flex-wrap: wrap;
    margin: 2em 0;
    @media (max-width: 800px) {
        justify-content: center;
    }

    @media (max-width: 300px) {
        overflow: hidden;
    }
`;

export const Thumbnail = styled.div`
    height: 70%;
    width: 100%;
    object-fit: contain;
    border-radius: 20px 20px 0px 0px;
    
    @media (max-width: 300px) {
        max-width: 80%;
    }
`;

export const SelectedVideo = styled.div `
    min-height: 70%;
    min-width: 100%;
    background-color: rgba(0, 129, 253, 0.30);
    position: relative;
    top: -170px;
    border-radius: 20px 20px 0px 0px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const VideoTitle = styled.div`
    height: 30%;
    width: 100%;
    background-color: #FFF;
    padding: 16px;
    font-weight: 700;
    border-radius: 0px 0px 20px 20px;
    position: relative;
    top: -170px;
`;

export const VideoPlayer = styled.div`
    height: 240px;
    width: 300px;
    box-shadow: 0px 20px 25px #e0e0e0;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    cursor: default;
    overflow: hidden;

    @media (max-width: 300px) {
        width: 200px;
    }

    &:hover ${SelectedVideo}{
        opacity: 100;
        transition: .75s;
    }

    &:hover ${VideoTitle}{
        color: #0076f4;
        transition: .25s;
    }
`;