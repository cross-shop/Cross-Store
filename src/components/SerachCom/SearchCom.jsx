import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setSearchTerm } from '../../redux/search/searchSlice';
import debounce from 'lodash.debounce';
import "./Search.scss";
import Like3 from "../../assets/svg/Like3.svg";
import Magazin2 from "../../assets/svg/magazin2.svg";
import search2 from "../../assets/svg/search2.svg";
import search3 from "../../assets/svg/search3.svg";
import { Link } from 'react-router-dom';

function SearchCom() {
  const dispatch = useDispatch();
  const { products, searchTerm, status } = useSelector(state => state.search);
  const [isFocused, setIsFocused] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(products.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  const clearSearch = () => {
    dispatch(setSearchTerm(''));
    setFilteredProducts([]);
  };

  const handleSearchChange = debounce((value) => {
    dispatch(setSearchTerm(value));
  }, 500);

  const handleSuggestionClick = (item) => {
    dispatch(setSearchTerm(item.name));
    setFilteredProducts([item]);
    setIsFocused(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && filteredProducts.length > 0) {
      dispatch(setSearchTerm(filteredProducts[0].name));
      setFilteredProducts([filteredProducts[0]]);
      setIsFocused(false);
    }
  };

  return (
    <div>
      <header className='header39'>
        <div className='header39gg'>
          <div className='header39-left container'>
            <ul>
              <li><a href="">Одежда</a></li>
              <li><Link to={`/obuv`}>Обувь</Link></li>
              <li><a href="">Аксессуары</a></li>
              <li><a href="">Сумки</a></li>
              <li><Link to={`/0consignment`}>Товары для спорта</Link></li>
              <p>DEALER</p>
            </ul>
          </div>
          <div className='header39-img'>
            <Link to={`/wishlist`}>
              <img src={Like3} alt="" />
            </Link>
            <img src={Magazin2} alt="" />
            <img src={search2} alt="" />
          </div>
        </div>
      </header>

      <div className='main3-input3 container'>
        <div className='input-3'>
          <div className='input3-search'>
            <img src={search3} alt="" />
            <input
              type="text"
              placeholder='Поиск товаров'
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button onClick={clearSearch}>Очистить</button>
        </div>
      </div>

      {isFocused && searchTerm && (
        <div className="suggestions">
          {filteredProducts.slice(0, 5).map(item => (
            <div 
              key={item.id} 
              className="suggestion-item"
              onClick={() => handleSuggestionClick(item)}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}

      {status === 'loading' && <div className="loading">Загрузка...</div>}

      <div className='search-results container'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <div key={item.id} className='product-card'>
              <img src={item.avatar} alt={item.name} />
              <p>{item.name}</p>
              <h5>{item.price} ₽</h5>
            </div>
          ))
        ) : (
          <div className="no-results">Ничего не найдено</div>
        )}
      </div>
    </div>
  );
}

export default SearchCom;
