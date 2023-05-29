import '../../sass/Product.scss';

export const Product = (prop) => {
    return( 
        <div className='product'>
            <div className='product__img-container'>
                <img src="../../public/images/product.jpg" alt="" className='product__img'/>
            </div>
            <div className='product__info-container'>
                <h3 className='product__name'>{prop.name}</h3>
                <p className='product__author'>{prop.author}</p>
                <p className='product__topic'>{prop.topic}</p>
                <p className='product__ebook'>EBOOK <span>{prop.ebook_price}</span></p>
                <p className='product__book'>BOOK <span>{prop.book_price}</span></p>
                <p className='product__audio'>AUDIO <span>{prop.audio_price}</span></p>
            </div>
        </div>
    );
};

