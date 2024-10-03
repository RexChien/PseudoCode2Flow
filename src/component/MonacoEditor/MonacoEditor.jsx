import * as monaco from "monaco-editor";
import Editor from "@monaco-editor/react";

function MonacoEditor() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}

export default MonacoEditor;
