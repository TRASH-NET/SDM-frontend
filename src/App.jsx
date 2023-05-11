import './sass/App.scss';
import { Navbar } from './components/Navbar.jsx';
import {ProductsContainer} from './components/ProductsContainer.jsx';

export const App = () =>{
    return(
        <>
            <Navbar></Navbar>
            <ProductsContainer></ProductsContainer>
        </>
        
    );
};

