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
        ::-webkit-scrollbar {
            width: 10px;
        };
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px #e0e0e0;
            border-radius: 10px;
        };
        ::-webkit-scrollbar-thumb {
            background: #0081fd;
            border-radius: 10px;
        };
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