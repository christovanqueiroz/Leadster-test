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
import VideoModal from '../VideoModal';


const Videos = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Container>
            {showModal && createPortal(
                <VideoModal onClose={() => setShowModal(false)} />,
                document.body
            )}
            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

            <VideoPlayer onClick={() => setShowModal(true)}>
                <Thumbnail>
                    <Image 
                        src="/../public/assets/thumbnail.png"
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
                    Como aumentar sua Geração de Leads feat. Traktor
                </VideoTitle>
            </VideoPlayer>

        </Container>
    );
}

export default Videos;