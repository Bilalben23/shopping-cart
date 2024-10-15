import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Products from "./pages/Products"
import Product from "./pages/Product"


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<Layout />}>
                    <Route index element={<Products />} />
                    <Route path=":id" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}