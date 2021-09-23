import React from "react";
import ReactDOM from "react-dom";
import { Input } from "../src/components/Input";

const App = () => {
    return <div>
        <Input />
    </div>
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("app"));