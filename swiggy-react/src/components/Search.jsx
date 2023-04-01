import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () =>{
    const [searchProduct, setsearchProduct] = useState();
    console.log(searchProduct, 'searchProduct');
    const data = useParams();

    useEffect(() =>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      
      .then((res) => res.json())
      .then((Json) => Json.drinks)
      .then((json) => json.filter((obj) => obj.strDrink === data.name))
      .then((data) => setsearchProduct(data));
    }, [])
    console.log(data.name)

    return(
        <>        
        <div>
                SearchProductPage
                {searchProduct && searchProduct.map((e,i) => (
                    <div key={i} >
                        <img src={e.strDrinkThumb} alt="product" />
                        <h1>{e.strDrink}</h1>
                        <button>Buy</button>
                    </div>
                ))}
            </div>
        </>
    )
} 
export default Search;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Search = () => {
//   const [searchProduct, setsearchProduct] = useState();
//   console.log(searchProduct, "searchProduct");
//   const { name } = useParams();

//   useEffect(() => {
//     const fetchSearchProduct = async () => {
//       try {
//         const response = await fetch(
//           `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
//         );
//         const data = await response.json();
//         const filteredData = data.drinks.filter(
//           (drink) => drink.strDrink === name
//         );
//         setsearchProduct(filteredData[0]);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSearchProduct();
//   }, [name]);

//   console.log(name);

//   return (
//     <>
//       <div>
//         SearchProductPage
//         {searchProduct && (
//           <div>
//             <img src={searchProduct.strDrinkThumb} alt="product" />
//             <h1>{searchProduct.strDrink}</h1>
//             <button>Buy</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Search;
