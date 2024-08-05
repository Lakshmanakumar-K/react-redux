import { useSelector } from "react-redux";
import Product from "./Product.jsx"


const Products = () => {


    const ProductObject = useSelector((state) => state.Cartreducer)
    console.log(ProductObject);

    return (<>
        {ProductObject.products.map((obj) => (
            <Product key={obj.id}
                id={obj.id}
                title={obj.title}
                description={obj.description}
                image={obj.image}
                qty={obj.qty}
                rating={obj.rating.rate}
                price={obj.price}
            />
        ))}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <p style={{ marginLeft: "20%" }}><b>TOTAL PRICE : </b></p>
            <p style={{ marginRight: "20%" }}><b>${ProductObject.totalprice}</b></p>
        </div>
    </>);
}

export default Products