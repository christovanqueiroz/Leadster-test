import React, { useEffect } from 'react';

import {
    Container,
    VideoPlayer,
    Thumbnail,
    SelectedVideo,
    VideoTitle
} from './styles';

import Image from 'next/image';

const borderRadius = {
    borderRadius: '20px 20px 0px 0px',
}

import { useState } from 'react';
import { createPortal } from 'react-dom';
import VideoModal, { DadosDoVideo } from '../VideoModal';

import videosJSON from "../../mock/videos.json"

const handlePage = () => {
    TituloDoVideo();
    DadosDoVideo();
}

const TituloDoVideo = () => {
    videosJSON.map(function(valorEscolhido, indice:any){
        const videoID = document.getElementById(indice);
        let videoTitle = videoID.lastElementChild
        videoTitle.innerHTML = valorEscolhido.title
        let videoImage = videoID.lastElementChild.previousElementSibling.previousElementSibling.children.item(0)
        videoImage.src = valorEscolhido.image
     })
};

const Videos = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Container onLoad={() => handlePage()}>
            {showModal && createPortal(
                <VideoModal onClose={() => setShowModal(false)} />,
                document.body
            )}

            <VideoPlayer id="0" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image
                        src=""
                        loading='lazy'
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer id="1" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src=""
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer id="2" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src=""
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer id="3" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src=""
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer id="4" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src=""
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer id="5" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src=""
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer id="6" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src=""
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer id="7" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src=""
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer id="8" className="videoData" onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src=""
                        width={300}
                        height={168}
                        alt="Thumbnail"
                        style={borderRadius}
                    />
                </Thumbnail>

                <SelectedVideo>
                    <Image 
                        src="/../public/assets/play.png"
                        width={60}
                        height={60}
                        alt="Player"
                    />
                </SelectedVideo>

                <VideoTitle>
                </VideoTitle>
            </VideoPlayer>
        </Container>
    );
}
export default Videos;