// import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
// import * as React from "react";
// import * as ReactDOM from "react-dom";

// function ReactApp() {

//     return (<ToolbarComponent>
//       <ItemsDirective>
//         <ItemDirective text="Underline" prefixIcon="e-underline-icon tb-icons"/>
//         <ItemDirective text="Italic" prefixIcon="e-italic-icon tb-icons"/>
//         <ItemDirective text="Color-Picker" prefixIcon="e-color-icon tb-icons"/>
//         <ItemDirective text="Clear" prefixIcon="e-clear-icon tb-icons"/>
//       </ItemsDirective>
//     </ToolbarComponent>);
// }
// const root = ReactDOM.createRoot(document.getElementById('toolbar'));
// root.render(<ReactApp />)


import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default function ReactApp() {
  return (
    <ToolbarComponent id='toolbar' style={{backgroundColor:"brown", width: "300px", height: "300px", display: "inline-block"}}>
      <ItemsDirective className="items">
        <ItemDirective text="Cut" />
        <ItemDirective text="Copy" />
        <ItemDirective text="Paste" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Bold" />
        <ItemDirective text="Italic" />
        <ItemDirective text="Underline" />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('toolbar'));
// root.render(<ReactApp />);