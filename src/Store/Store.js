import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Reducer/Cartreducer"

const Store = configureStore({
    reducer:{Cartreducer},
    devTools:true
});

export default Store