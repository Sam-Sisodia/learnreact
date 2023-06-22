import React from "react";
import ComposingComponent from "./composingcompo";

const App = () => {
  return (
    <div>
      <ComposingComponent name="Sajal"/>

      <ComposingComponent name="Sisodia" />

      <ComposingComponent name= "Sam"/>
    </div>
  );
};

export default App;
