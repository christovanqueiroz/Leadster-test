import {
    Container,
    LogoContainer,
    LinksContainer,
    FooterContainer
} from './styles'

import Image from 'next/image'

const Footer = () => {
    return(
        <Container>
            <LogoContainer>
                <Image
                    src="/../public/logo.png"
                    width={192}
                    height={42}
                    alt='Logo da Leadster'
                />
                <p>Transformando visitantes em clientes.</p>
            </LogoContainer>
        </Container>
    )
}

export default Footer