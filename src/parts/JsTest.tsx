import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';


// ReactDOM.render(<MyEditor />, document.getElementById('container'));
const MyInput = () => {
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty(),
    );
  
    return <Editor editorState={editorState} onChange={setEditorState} />;
  };

export default MyInput;
