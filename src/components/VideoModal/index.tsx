import {
    Screen,
    Container,
    Title,
    CloseModal,
    Player,
    Description,
    DescriptionTitle,
    DescriptionText,
    Downloads,
    DownloadsTitle
} from './styles'

export default function VideoModal({ onClose }) {
    return (
      <Screen className="modal">
        <Container>
          <Title>
            <CloseModal onClick={onClose}>
              X
            </CloseModal>

            <h2>Webinar: Como aumentar sua Geração de Leads feat. Traktor</h2>
          </Title>

          <Player>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
          </Player>

          <Description>
            <DescriptionTitle>
              Descrição
            </DescriptionTitle>
            
            <DescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore neque libero repellendus quasi distinctio maiores iure inventore! Exercitationem enim maxime similique quod aliquam illum. Necessitatibus sapiente velit corporis! Commodi?
            </DescriptionText>
          </Description>

          <Downloads>
            <DownloadsTitle>
              Downloads
            </DownloadsTitle>
          </Downloads>
        </Container>
      </Screen>
    );
}