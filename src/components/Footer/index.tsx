import {
    Container,
    LogoContainer,
} from './styles'

import Image from 'next/image'

const Footer = () => {
    return(
        <Container>
            <LogoContainer>
                <Image
                    src="/../public/logo.png"
                    height={42}
                    width={152}
                    alt='Logo da Leadster'
                />
                <p>Transformando visitantes em clientes.</p>
            </LogoContainer>
        </Container>
    )
}

export default Footer