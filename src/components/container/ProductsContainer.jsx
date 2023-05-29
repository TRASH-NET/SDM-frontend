import { useEffect, useState } from "react";
import "../../sass/ProductsContainer.scss";
import { Product } from "../pure/Product.jsx";

export const ProductsContainer = () => {
  const url = "http://localhost:8000/api/document/select";
  const [documents, setDocuments] = useState([]);
  const [docType, setDocType] = useState({
    book: false,
    audiobook: false,
    ebook: false,
    magazine: false,
    investigation: false,
  });

  const [docFiltered, setDocFiltered] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setDocuments(responseJSON);
      } catch (error) {
        console.error("Error fetching API: ", error);
      }
    };
    fetchApi();
  }, []);

  const handleOnCheckbox = (e) => {
    setDocType({
      ...docType,
      [e.target.value]: e.target.checked,
    });
    if (e.target.value === "todos") {
      if (e.target.checked) {
        setShowAll(true);
        setDocFiltered([...documents]);
      } else {
        setShowAll(false);
      }
    }


    if (e.target.checked) {
      const resultdocs = documents.filter((doc) => doc[5] === e.target.value);
      setDocFiltered([...docFiltered, ...resultdocs]);
    } else {
      const resultdocs = docFiltered.filter((doc) => doc[5] !== e.target.value);
      setDocFiltered([...resultdocs]);
    }
  };

  return (
    <section className="products">
      <div className="products__background-container">
        <img
          src="../../public/images/background.jpg"
          alt=""
          className="products__background"
        />
      </div>
      <img
        src="../../public/images/logo.svg"
        alt="logo"
        className="products__logo"
      />
      <div className="products__section-container">
        <div className="products__line"></div>
        <div className="products__container">
          {!documents
            ? "Seleccione una categoría"
            : (showAll ? documents : docFiltered).map((document) => {
                return (
                  <Product
                    key={document[0]}
                    name={document[2]}
                    author={document[1]}
                    topic={document[4]}
                    ebook_price={document[3]}
                    book_price="$30.00"
                    audio_price="$80.00"
                  />
                );
              })}
        </div>
        <aside className="products__types">
          <h2 className="products__subtitle">SHOW</h2>
          <label htmlFor="todos" className="products__type">
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="todos"
              id="todos"
              value="todos"
            />
            TODOS
          </label>
          <label htmlFor="books" className="products__type">
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="books"
              id="books"
              value="book"
            />
            BOOKS
          </label>
          <label htmlFor="audiobooks" className="products__type">
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="audiobooks"
              id="audiobooks"
              value="audiobook"
            />
            AUDIOBOOKS
          </label>
          <label htmlFor="ebooks" className="products__type">
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="ebooks"
              id="ebooks"
              value="ebook"
            />
            EBOOKS
          </label>
          <label htmlFor="magazines" className="products__type">
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="magazines"
              id="magazines"
              value="magazine"
            />
            MAGAZINES
          </label>
          <label htmlFor="investigation" className="products__type">
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="investigation"
              id="investigation"
              value="investigation"
            />
            INVESTIGATION
          </label>
        </aside>
      </div>
    </section>
  );
};
