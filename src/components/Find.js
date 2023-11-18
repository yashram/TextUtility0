import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor, BordersAndShadingDialog } from '@syncfusion/ej2-react-documenteditor';

//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, BordersAndShadingDialog);
function App() {
  let documenteditor: DocumentEditorComponent;
  React.useEffect(() => {
    ComponentDidMount()
  }, []);
  function ComponentDidMount() {
    let sfdt: string = `{
            "sections": [
                {
                    "blocks": [
                        {
                            "inlines": [
                                {
                                    "characterFormat": {
                                        "bold": true,
                                        "italic": true
                                    },
                                    "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                                }
                            ]
                        }
                    ]
                }
            ]
        }`;
    //Open the document in Document Editor.
    documenteditor.open(sfdt);
  }

  function ShowHideOptionsPane() {
    //Open options pane.
    documenteditor.showOptionsPane();
  }
  return (
    <div>
      <button onClick={ShowHideOptionsPane}>OptionsPane</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSearch={true} enableOptionsPane={true} />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));