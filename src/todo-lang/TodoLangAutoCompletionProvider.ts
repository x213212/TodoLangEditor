import * as monaco from "monaco-editor-core";
import { WorkerAccessor } from "./setup";

export default class TodoLangAutoCompletionProvider {
    private worker: WorkerAccessor;
    TodoLangAutoCompletionProvider(worker: WorkerAccessor) {
        this.worker = worker;

    }
    // resolveCompletionItem?(model: editor.ITextModel, position: Position, item: CompletionItem, token: CancellationToken): ProviderResult<CompletionItem>{
    public async get_label(resource: monaco.Uri): Promise<Array<string | undefined> > {
        let suggestions = [];
        // get the worker proxy
        const worker = await this.worker(resource)
        // call the validate methode proxy from the langaueg service and get errors
        const formattedCode = await worker.get_label();
        // console.log(formattedCode);
        
        return formattedCode;

    }
    
}