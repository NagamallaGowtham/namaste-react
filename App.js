import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)
const Heading = () => <h1>Hello React from JSX!</h1>;


// React Functional Component
const HeadingComponent = () => {
  return (
    <div>
      {Heading()}
      <h1>Hello React from Functional Component!</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
