import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import '../BrandFilter/BrabdFilter.scss'
const brands = [
  "1017 АЛИКС 9SM",
  "Купающаяся обезьяна",
  "Своего рода прикрытие",
  "A-COLD-WALL*",
  "БТР",
  "AAPE от A Bathing Ape",
  "o:пусто",
  "Эйк и Тейт",
];

export default function BrandFilter() {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const toggleBrand = (brand) => {
    setSelected((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="brand-filter">
      <div
        className="filter"
        onClick={() => setOpen(!open)}
      >
        <span>Бренд</span>
        {open ? (
  <ChevronUp size={16} style={{ marginLeft: '160px' }} />
) : (
  <ChevronDown size={16} style={{ marginLeft: '165px' }} />
)}

      </div>

      {open && (
        <>
        <div className="search-in">
          <input style={{ width: '240px', marginTop: '6px'}}
            type="text"
            placeholder="Поиск"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          </div>

          <div className="fbrand-list">
            {filteredBrands.map((brand) => (
              <label
                key={brand}
                className="flex"
              >
                <input type="checkbox"
                className="ch"
                
                  checked={selected.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                {brand}
              </label>
            ))}
            {filteredBrands.length === 0 && (
              <div className="text-gray-400 text-sm">Ничего не найдено</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
