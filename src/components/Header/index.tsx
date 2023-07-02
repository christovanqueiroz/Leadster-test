import {
    Container,
    Logo,
    Content
} from './styles';

import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <Container>
            <Logo>
                <Image 
                    src="/../public/logo.png"
                    width={194}
                    height={42}
                    alt="Picture of the author"
                />
            </Logo>
            <Content />
        </Container>
    );
}

export default Header;