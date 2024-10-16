import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Products from "./pages/Products"
import Product from "./pages/Product"
import ShoppingCart from "./pages/ShoppingCart"
import store from "./store"
import { Provider } from "react-redux"



export default function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/products" element={<Layout />}>
                        <Route index element={<Products />} />
                        <Route path=":id" element={<Product />} />
                        <Route path="shoppingCart" element={<ShoppingCart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
