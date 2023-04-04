import React, { useState } from "react";
import ReactApp from "./reactapp"

// import Editor from "./editor";

// const App = () => {
//   const [value, setValue] = useState("");

//   const getValue = (value) => {
//     setValue(value);
//   };
 function App() {


  return (
    // <div className="row">
    //   <div className="cla" style={{ margin: "auto", marginTop: "50px", width: "800px"} }>
    //     <div style={{ textAlign: "center" }}>
    //       <h3 style={{color: "red"}}>What You See Is What You Get Rich Text Editor</h3>
    //     </div>
    //     <Editor initialValue="" getValue={getValue} />
    //     <br />
    //      {/* <div>{value}</div>  */}
    //   </div>
    // </div>
    <ReactApp />
  );
}

export default App;