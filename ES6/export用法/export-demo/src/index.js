import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import c from './export/a.js';
// import { a , b } from "./export/a.js";
//import { a as a1, b as b1 } from "./export/a.js"; //可以用 as 关键词进行重命名

// <h1>{a}</h1>
// <h1>{b}</h1>

// <h1>{c}</h1>

// import foo from './export/a.js';
// import {foo,foo2} from './export/a.js';

// <h1>{foo(1,6)}</h1>
// <h1>{foo2(1,6)}</h1>

// import d,{e,f} from './export/a.js';
// <h1>{d}</h1>
// <h1>{e}</h1>
// <h1>{f}</h1>

import {Welcome1,Welcome2,Welcome3} from './export/a.js';

import './export/a.js';

ReactDOM.render(
  <React.StrictMode>
    <Welcome1/>
    <Welcome2/>
    <Welcome3 name="流星蝴蝶剑"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
