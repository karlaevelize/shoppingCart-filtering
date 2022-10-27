import { useState } from "react";

const categoriesData = [
  { id: 1, name: "Clothing" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Pets" },
  { id: 4, name: "Books" },
];

const productsData = [
  { id: 1, name: "Long Dress", categoryId: 1 },
  { id: 2, name: "iPad 2022", categoryId: 2 },
  { id: 3, name: "Cat collar", categoryId: 3 },
  { id: 4, name: "The Lord of the Rings", categoryId: 4 },
  { id: 5, name: "Shirt", categoryId: 1 },
  { id: 6, name: "Kindle", categoryId: 2 },
  { id: 7, name: "Dog food", categoryId: 3 },
  { id: 8, name: "The Hitchhiker's Guide to the Galaxy", categoryId: 4 },
];

const CategoriesFilter = ({ addProductToCart }) => {
  const [categories, setCategories] = useState(categoriesData);
  const [products, setProducts] = useState(productsData);

  const [selectedCategories, setSelectedCategories] = useState([]);

  //add and remove from categories
  const toggleCategories = (event) => {
    const newArray = selectedCategories.includes(event)
      ? selectedCategories.filter((cat) => cat !== event)
      : [...selectedCategories, event];
    setSelectedCategories(newArray);
  };

  //filter products based on selected categories
  const filterProductsByCategory =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.categoryId)
        )
      : products;

  return (
    <div>
      <div style={{ display: "flex" }}>
        {categories.map((cat) => {
          return (
            <div>
              <input
                onChange={(event) =>
                  toggleCategories(parseInt(event.target.value))
                }
                value={cat.id}
                type="checkbox"
              />
              {cat.name}
            </div>
          );
        })}
      </div>
      <div>
        {filterProductsByCategory.map((product) => {
          return (
            <div>
              <p>{product.name}</p>
              <button onClick={() => addProductToCart(product)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CategoriesFilter };
