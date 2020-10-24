import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { pushMessage } from '../firebase';

const MessageField = ({name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);

    return (
    <TextField
        fullWidth={true}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
                if(isComposed) return;
                if(text === '') return;

                if (e.key === 'Enter'){
                    pushMessage({ name: 'はやとわん', text })
                    setText('');
                    e.preventDefault();
                }
            }}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
            value={text}
    />
    );
    }


export default MessageField;
