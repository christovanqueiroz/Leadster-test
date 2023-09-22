import {
    Container,
    ImageContainer,
    Content,
    Title,
    Infos,
    ButtonDiv,
    Button,
    MoreInfo,
    CCInfo,
    Rate
} from './styles';

import Image from 'next/image';

const Demo = () => {
    return (
        <Container>
            <ImageContainer>
                <Image 
                    src="/../public/assets/comparativo_img_CTA.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    alt="Geração de Leads"
                />
            </ImageContainer>
           

            <Content>
                <Title>
                    <h1>Pronto para triplicar sua Geração de Leads?</h1>
                    <p>Criação e ativação <b>em 4 minutos.</b></p>
                </Title>

                <Infos>
                    <ButtonDiv>
                        <Button>
                            Ver demonstração
                        </Button>

                        <Image
                            src="/../public/assets/selo_RD.png"
                            width={150}
                            height={53}
                            alt="Selo RD"
                        />
                    </ButtonDiv>

                    <MoreInfo>
                        <CCInfo>
                            <Image
                                src="/../public/assets/no-card-dark.webp"
                                width={12}
                                height={12}
                                alt="No credit card"
                            />

                            <span>
                                Não é necessário Cartão de Crédito
                            </span>

                        </CCInfo>

                        <Rate>
                            <Image
                                src="/../public/assets/rating.webp"
                                width={69}
                                height={12}
                                alt="Estrelas"
                            />

                            <span>
                                4.9/5 média de satisfação
                            </span>
                        </Rate>
                    </MoreInfo>
                </Infos>
            </Content>
        </Container>
    );
}

export default Demo;