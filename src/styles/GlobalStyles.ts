import styled, { createGlobalStyle } from 'styled-components';

var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Plus Jakarta Sans']
  }
});

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: Plus Jakarta Sans;
    }

    button {
        cursor: pointer;
    }
`;