import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import ShoppingCar from "./Components/ShoppingCar";
import CleanAll from "./Components/CleanAll";

// const itemsOrigin = [
//   { id: 1, title: "Item 1", qty: 0, like: false },
//   { id: 2, title: "Item 2", qty: 0, like: false },
//   { id: 3, title: "Item 3", qty: 1, like: true },
//   { id: 4, title: "Item 4", qty: 0, like: false },
// ];

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Compu",
      img: "https://i5.walmartimages.com/dfw/fc2bdac6-8d6a/k2-_281d85a3-f35f-4ec5-af9e-2106c523a8e6.v1.jpg",
      qty: 0,
      like: false,
    },
    {
      id: 2,
      title: "Xbox",
      img: "https://i5.walmartimages.com/dfw/fc2bdac6-ab07/k2-_dfeffd71-d1f5-4be3-ab21-9e3dd420b20e.v1.jpg",
      qty: 5,
      like: false,
    },
    {
      id: 3,
      title: "Colchón",
      img: "https://i5.walmartimages.com/dfw/fc2bdac6-ab07/k2-_dfeffd71-d1f5-4be3-ab21-9e3dd420b20e.v1.jpg",
      qty: 0,
      like: true,
    },
    {
      id: 4,
      title: "Lavadora",
      img: "https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:eco/mg/gm/1p/images/product-images/img_large/00750154550761l.jpg",
      qty: 0,
      like: false,
    },
  ]);

  const onLikeClick = (id) => {
    const newProducts = products.map((product) => {
      if (product.id !== id) return product;
      else return { ...product, like: !product.like };
    });
    setProducts(newProducts);
  };

  const onAddClick = (id) => {
    const newProducts = products.map((product) => {
      if (product.id !== id) return product;
      else return { ...product, qty: product.qty+1 };
    });
    setProducts(newProducts);
  };

  const onRestClick = (id) => {
    const newProducts = products.map((product) => {
      if (product.id !== id) return product;
      else return { ...product, qty: product.qty-1 };
    });
    setProducts(newProducts);
  };

  const catalogStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  console.log( products[0].qty )

let totalqty = 0;

products.forEach( function(record) {
    //total += record.properties.census2010_Pop2010;
    let { qty } = record
    //console.log(qty)
    totalqty = totalqty + qty
});

console.log(totalqty)

const onCleanAll = () => {
  const newProducts = products.map((product) => {
   return { ...product, qty: product.qty=0 };
  });
  setProducts(newProducts);
};

  return (
    <div className="App">
      <ShoppingCar qty={totalqty}/>
      <button onClick={onCleanAll}>
          Reset
      </button>
      <div style={catalogStyle}>
        {products.map(({ id, title, qty, like }) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              qty={qty}
              like={like}
              onLikeClick={() => onLikeClick(id)}
              onAddClick={() => onAddClick(id)}
              onRestClick={() => onRestClick(id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
