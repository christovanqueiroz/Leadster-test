import {
    Container,
    Logo,
    Content,
    Baloon,
    TitleContainer,
    TitleOne,
    TitleTwo,
    TextAsset,
    Paragraph
} from './styles';

import Image from 'next/image';

const Header = () => {
    return (
        <Container>
            <Logo>
                <Image 
                    src="/../public/logo.png"
                    width={140}
                    height={30}
                    alt="Logo da Leadster"
                />
            </Logo>
            <Content>
                <Baloon>
                    Webinars exclusivos
                </Baloon>

                <TitleContainer>
                    <TitleOne>
                        Menos Conversinha,
                    </TitleOne>

                    <TitleTwo>
                        Mais Conversão
                    </TitleTwo>

                    <Paragraph>
                        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio
                    </Paragraph>

                    <TextAsset>
                        <Image 
                            src="/../public/assets/asset-header.png"
                            width={40}
                            height={26}
                            alt="Logo da Leadster"
                        />
                    </TextAsset>
                </TitleContainer>
            </Content>
        </Container>
    );
}

export default Header;