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

const Videos = () => {
    return (
        <Container>
            <VideoPlayer>
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

            <VideoPlayer>
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

            <VideoPlayer>
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

            <VideoPlayer>
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

            <VideoPlayer>
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

            <VideoPlayer>
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