import {
    Container,
    Button
} from './styles';

import React, { useState } from "react";

const Buttons = () => {
    return (
        <Container>
            <Button>Agências</Button>
            <Button>Chatbot</Button>
            <Button>Marketing Digital</Button>
            <Button>Geração de Leads</Button>
            <Button>Mídia Paga</Button>
        </Container>
    );
}

export default Buttons