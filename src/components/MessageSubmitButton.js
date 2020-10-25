import React from 'react';
import {IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


import { pushMessage } from '../firebase';
const MessageSubmitButton = ({inputEl, name, setText, text}) => {
    console.log({text});
    return (
        <IconButton
          disabled={text === ''}
          onClick={() => {
              pushMessage({ name:'はやとわん', text });
              setText('');
              inputEl.current.focus();
          }}
        >
        <SendIcon />
      </IconButton>
    );
};

export default MessageSubmitButton;

