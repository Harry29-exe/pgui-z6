import React from 'react';
import './App.css';
import {Form} from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

//kontroler zarządzający w components/From.tsx a mvc w components/Station.tsx
const App = () => (
    <div className="App">
      <Form/>
    </div>
)

export default App;
