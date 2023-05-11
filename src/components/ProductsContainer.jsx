import '../sass/ProductsContainer.scss';
import { Product } from './Product.jsx';

export const ProductsContainer = () => {
    return(
        <section className='products'>
            <div className='products__background-container'>
                <img src="../../public/images/background.jpg" alt="" className='products__background'/>
            </div>
            <img src="../../public/images/logo.svg" alt="logo" className='products__logo'/>
            <div className='products__section-container'>
                <div className='products__line'></div>
                <div className='products__container'>
                    <Product 
                        name="12 RULES FOR LIFE"
                        author="JORDAN B PETERSON"
                        topic="MOTIVATION"
                        ebook_price="$50.00"
                        book_price="$30.00"
                        audio_price="$80.00"
                    />
                </div>
                <aside className='products__types'>
                    <h2 className='products__subtitle'>SHOW</h2>
                    <label htmlFor="books" className='products__type'><input type="checkbox" name='books' id='books'/>BOOKS</label>
                    <label htmlFor="audiobooks" className='products__type'><input type="checkbox" name='audiobooks' id='audiobooks'/>AUDIOBOOKS</label>
                    <label htmlFor="ebooks" className='products__type'><input type="checkbox" name='ebooks' id='ebooks'/>EBOOKS</label>
                    <label htmlFor="articles" className='products__type'><input type="checkbox" name='articles' id='articles'/>ARTICLES</label>
                    <label htmlFor="magazines" className='products__type'><input type="checkbox" name='magazines' id='magazines'/>MAGAZINES</label>
                    <label htmlFor="investigation" className='products__type'><input type="checkbox" name='investigation' id='investigation'/>INVESTIGATION</label>
                </aside>
            </div>
            
        </section>
    );
};