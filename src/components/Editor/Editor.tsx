import * as React from 'react';
import { useState, FC, ReactElement } from "react";
import * as monaco from 'monaco-editor-core';
import MonacoEditor from "react-monaco-editor";
interface IEditorPorps {
    language: string;
    editor: monaco.editor.IStandaloneCodeEditor;

    // editor:monaco.editor.ICodeEditor;
}

export let objCopy;
export let objCopy2;
const Editor: React.FC<IEditorPorps> = (props: IEditorPorps) => {

    let divNode;
    let Valuebakc;
    const assignRef = React.useCallback((node) => {
        // On mount get the ref of the div and assign it the divNode
        divNode = node;


    }, []);

    React.useEffect(() => {
        if (divNode) {

            objCopy = monaco.editor.create(divNode, {
                language: props.language,
                minimap: { enabled: false },
                autoIndent: true,
                theme: 'vs-dark',
                readOnly: false,

            });
            // objCopy.onDidChangeModelContent(function (e) {

            //     console.log(objCopy.getValue());
            // });

        }
    }, [assignRef])
    function sayHello() {
        objCopy = null;
        document.getElementById('macon').innerHTML = "";
        objCopy = monaco.editor.create(divNode, {
            language: props.language,
            minimap: { enabled: false },
            autoIndent: true,
            theme: 'vs-dark',
            readOnly: false,

        });
        Valuebakc =objCopy.getValue;
        // delete objCopy;
    }
    function sayHello2() {
        objCopy = null;
        document.getElementById('macon').innerHTML = "";
      
        // objCopy.dispose();
        var originalModel = monaco.editor.createModel("heLLo world!", "text/plain");
        var modifiedModel = monaco.editor.createModel("hello orlando!", "text/plain");

        objCopy = monaco.editor.createDiffEditor(divNode, {
            // language: props.language,
            minimap: { enabled: false },
            autoIndent: true,
            theme: 'vs-dark',
            readOnly: false,

        });

        objCopy.setModel({
            original: originalModel,
            modified: modifiedModel
        });
        
    }
    return <div >
        <button onClick={sayHello}>nomonl !</button>
        <button onClick={sayHello2}>diff !</button>
        <div id='macon' ref={assignRef} style={{ height: '90vh' }}></div>
    </div>;
}

export { Editor };
