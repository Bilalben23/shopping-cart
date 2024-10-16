import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Products from "./pages/Products"
import Product from "./pages/Product"
import ShoppingCart from "./pages/ShoppingCart"
import store from "./store"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import NotFoundPage from "./pages/NotFoundPage"


export default function App() {

    return (
        <Provider store={store} >
            <HashRouter>
                <Routes>
                    <Route path="/products" element={<Layout />}>
                        <Route index element={<Products />} />
                        <Route path=":id" element={<Product />} />
                        <Route path="shoppingCart" element={<ShoppingCart />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </HashRouter>
            <ToastContainer />
        </Provider>
    )
}
