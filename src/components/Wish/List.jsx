import React, { useState } from 'react';

function List() {
  // Состояние для списка избранных элементов
  const [favorites, setFavorites] = useState([]);

  // Пример данных, которые могут быть добавлены в избранное
  const items = [
    { id: 1, name: 'Элемент 1' },
    { id: 2, name: 'Элемент 2' },
    { id: 3, name: 'Элемент 3' },
  ];

  // Функция для добавления элемента в избранное
  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  return (
    <div>
      <h1>Избранные</h1>
      
      <div>
        <h2>Все элементы</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => addToFavorites(item)}>Добавить в избранное</button>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2>Мои избранные</h2>
        <ul>
          {favorites.length > 0 ? (
            favorites.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))
          ) : (
            <p>Нет избранных элементов.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default List;
