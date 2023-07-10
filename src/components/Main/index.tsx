import {
    Container,
    Links
} from './styles';

import Buttons from '../Buttons';
import InputSelect from "../InputSelect/"
import Videos from '../Videos';
import PageSelector from '../PageSelector';
import Demo from '../Demo';

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
        </Container>
    );
}

export default Main;