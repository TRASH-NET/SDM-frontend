import ReactDom from "react-dom/client";
import { App } from './App.jsx';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

root.render(<App></App>);