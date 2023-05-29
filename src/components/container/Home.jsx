import { Navbar } from "./Navbar";
import '../../sass/Home.scss';

export const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="home" id="home">
                <div className="home__high-container">
                    <div className='home__background-container'>
                        <img className='home__background1' src="../../public/images/shape1home.svg" alt="" />
                        <img className='home__background2' src="../../public/images/shape2home.svg" alt="" />
                        <img className='home__background3' src="../../public/images/shape3home.svg" alt="" />
                        <img className='home__background4' src="../../public/images/background.jpg" alt=""/>
                    </div>
                    <div className="home__info-container">
                        <h1 className="home__title">DOCUMENT MANAGEMENT SYSTEM</h1>
                        <p className="home__info">
                        All your documents in just one place:
                        Buy or rent, electronic or traditional.
                        all you need is here
                        </p>
                        <div className="home__ins-container">
                            <span className="home__login home__ins">
                                Log in
                            </span>
                            <span className="home__signin home__ins">
                                Sign in
                            </span>
                        </div>
                    </div>
                    <div className="home__img-container">
                        <img className="home__img" src="../../public/images/homebooks.png" alt="" />
                    </div>
                </div>
                <div className="home__low-container">
                        <span className="home__explore home__navigate">
                            Explore catalog
                        </span>
                        <span className="home__seller home__navigate">
                            Become a seller
                        </span>
                </div>
                <div className="home__logo-container">
                    <img className="home__logo" src="../../public/images/logo.svg" alt="logo" />
                </div>
            </div>
            
        </>
    );
};

