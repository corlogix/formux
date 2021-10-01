import React from "react";
import ReactDOM from "react-dom";
import { Form } from '../src/components/Form';
import { Input } from "../src/components/Input";

const App = () => {
    return <div>
        <Form data={{}}>
          <Input name="" />
        </Form>
    </div>
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("app"));