import './sass/App.scss';
import { Navbar } from './components/container/Navbar.jsx';
import {ProductsContainer} from './components/container/ProductsContainer.jsx';
import { Home } from './components/container/Home';

export const App = () =>{
    return(
        <>
            <Home></Home>
            <Navbar></Navbar>
            <ProductsContainer></ProductsContainer>
        </>
        
    );
};

    