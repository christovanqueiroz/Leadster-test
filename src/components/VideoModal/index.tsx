import {
    Screen,
    Container,
    Title,
    CloseModal,
    Player,
    Description,
    DescriptionTitle,
    DescriptionText
} from './styles'

import videosJSON from "../../mock/videos.json"

let title: string;
let description: string;
let url: string;

export const DadosDoVideo = () => {
  const videoData = document.getElementsByClassName("videoData")

  const clickedVideo = e => {
    const target = e.target.parentElement.id
    videosJSON.map(function(valorEscolhido, indice) {
      if (target == indice) {
        title = valorEscolhido.title;
        description = valorEscolhido.description;
        url = valorEscolhido.url;
      }
    })
  }

  for (let video of videoData) {
    video.addEventListener("click", clickedVideo)
  }
};

export default function VideoModal({ onClose }) {
    return (
      <Screen className="modal" onLoad={() => DadosDoVideo()}>
        <Container>
          <Title>
            <CloseModal onClick={onClose}>
              X
            </CloseModal>

            <h2>{title}</h2>
          </Title>

          <Player>
            <iframe
              width="100%"
              height="100%"
              src={url}
            />
          </Player>

          <Description>
            <DescriptionTitle>
              Descrição
            </DescriptionTitle>
            
            <DescriptionText>
              {description}
            </DescriptionText>
          </Description>
        </Container>
      </Screen>
    );
}