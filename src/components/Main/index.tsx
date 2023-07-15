import {
    Container,
    Links
} from './styles';

import Buttons from '../Buttons';
import InputSelect from "../InputSelect/"
import Videos from '../Videos';
import PageSelector from '../PageSelector';
import Demo from '../Demo';
import Footer from '../Footer';

const Main = () => {
    return (
        <Container>
            <Links>
                <Buttons />
                <InputSelect />
            </Links>

            <Videos />

            <PageSelector />

            <Demo />

            <Footer />
        </Container>
    );
}

export default Main;