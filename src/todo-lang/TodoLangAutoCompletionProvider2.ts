import * as monaco from "monaco-editor-core";
import { WorkerAccessor } from "./setup";

export default class TodoLangAutoCompletionProvider2 implements monaco.languages.CompletionItemProvider {

    constructor(private worker: WorkerAccessor) {

    }
    triggerCharacters: ['[', 'w'];
    // provideDocumentFormattingEdits(model: monaco.editor.ITextModel, options: monaco.languages.FormattingOptions, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.TextEdit[]> {
    //     return this.format(model.uri, model.getValue());
    // }
    provideCompletionItems(model: monaco.editor.ITextModel, position: monaco.Position, context: monaco.languages.CompletionContext, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.CompletionList> {

        // this.triggerCharacters = ['[', 'w'];

        // console.log("workoqwkeropqwkmroqwp2");
        // let suggestions = [];
        // //console.log(this.get_label(model.uri));
        // console.log("hello" + context.triggerCharacter);
        // // context.triggerCharacter="[";
        // // if (context.triggerCharacter === '[') {
        // suggestions.push({
        //     label: "qwe",
        //     insertText: "`${item.customName}]`",
        //     kind: 1,
        // });
        // suggestions.push({
        //     label: "gr",
        //     insertText: "`${item.customName}]`",
        //     kind: 2,
        // });
        // console.log("workoqwkeropqwkmroqwp3");
        // }
        // if (context.triggerCharacter === 'w') {
        //     console.log("wwwwwwwwww");
        // }
        return this.get_label(model.uri,context);
    }
    // resolveCompletionItem?(model: editor.ITextModel, position: Position, item: CompletionItem, token: CancellationToken): ProviderResult<CompletionItem>{
    private async get_label(resource: monaco.Uri, context: monaco.languages.CompletionContext): Promise<monaco.languages.CompletionList>{
        let suggestions = [];
        // get the worker proxy
        const worker = await this.worker(resource)
        // call the validate methode proxy from the langaueg service and get errors
        const formattedCode = await worker.get_label();
        console.log(formattedCode);
        // const endLineNumber = code.split("\n").length + 1;
        // const endColumn = code.split("\n").map(line => line.length).sort((a, b) => a - b)[0] + 1;
        // console.log({ endColumn, endLineNumber, formattedCode, code })
        
 
        //console.log(this.get_label(model.uri));
        console.log("hello" + formattedCode);
        // context.triggerCharacter="[";
        // if (context.triggerCharacter === '[') {
        suggestions.push({
            label: "qwe",
            insertText: "`${item.customName}]`",
            kind: 1,
        });
        suggestions.push({
            label: "gr",
            insertText: "`${item.customName}]`",
            kind: 2,
        });
       
        return
        [suggestions];

    }
    // }
    // private async format(resource: monaco.Uri, code: string): Promise<monaco.languages.TextEdit[]> {
    //     // get the worker proxy
    //     const worker = await this.worker(resource)
    //     // call the validate methode proxy from the langaueg service and get errors
    //     const formattedCode = await worker.format(code);
    //     const endLineNumber = code.split("\n").length + 1;
    //     const endColumn = code.split("\n").map(line => line.length).sort((a, b) => a - b)[0] + 1;
    //     console.log({ endColumn, endLineNumber, formattedCode, code })
    //     return [
    //         {
    //             text: formattedCode,
    //             range: {
    //                 endColumn,
    //                 endLineNumber,
    //                 startColumn: 0,
    //                 startLineNumber: 0
    //             }
    //         }
    //     ]
    // }
}