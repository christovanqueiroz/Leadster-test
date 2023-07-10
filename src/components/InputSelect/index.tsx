import {
    Container,
    Label,
    Selector
} from './styles';

const InputSelect = () => {
    return (
        <Container>
            <Label htmlFor="order">Ordenar por</Label>

            <Selector name="order" id="order">
                <option value="publishDate">Data de publicação</option>
                <option value="mostViewed">Mais vistos</option>
            </Selector>
        </Container>
    );
}

export default InputSelect