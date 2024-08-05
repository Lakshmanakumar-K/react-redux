/* eslint-disable no-case-declarations */
import Products from "./Products.json"

const pricePerProduct = Products.map((product)=> product.price);

const totalPrice = Products.reduce((acc,cv)=> acc + cv.price, 0);

const initialState = {
    products:Products,
    totalprice:totalPrice
};

const Cartreducer = (state,action) => {
switch(action.type){
case "addition":
    const tmp = [...state.products];
    const ind = tmp.findIndex((obj)=>obj.id == action.details.id);
    tmp[ind] = {...tmp[ind],qty:action.details.qty + 1,price:action.details.price + pricePerProduct[ind]};

    const tp = tmp.reduce((acc,cv)=> acc + cv.price, 0);

    return{
    ...state,
    products:tmp,
    totalprice:tp
    };

case "removal":
    if(action.details.qty > 1){
        const tmp = [...state.products];
    const ind = tmp.findIndex((obj)=>obj.id == action.details.id);
    tmp[ind] = {...tmp[ind],qty:action.details.qty - 1,price:action.details.price - pricePerProduct[ind]};

    const tp = tmp.reduce((acc,cv)=> acc + cv.price, 0);

    return{
...state,
    products:tmp,
    totalprice:tp
    };
}
else{
    const tmp = [...state.products];
    const pr = tmp.filter((obj)=>obj.id != action.details.id)

const tp = pr.reduce((acc,cv)=>acc + cv.price,0);
    return{
...state,
products:pr,
totalprice:tp
    }
}

/* case "reset":
    return initialState; */

    default:
        return initialState;
}

}

export default Cartreducer
