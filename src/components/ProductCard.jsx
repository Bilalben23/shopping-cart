import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, isProductInCart, removeFromCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {

    const dispatch = useDispatch()

    const isProductAddedToCart = dispatch(isProductInCart(product?.id))


    return (
        <div className='transition-all shadow-lg card card-compact card-bordered bg-base-300 opacity-85 hover:opacity-100'>
            <figure className='aspect-[16/9]'>
                <Link to={`${product?.id}`}>
                    <img src={product?.image} alt={product?.title} className='w-full' />
                </Link>
            </figure>
            <div className="card-body">
                <Link to={`${product?.id}`}>
                    <h1 className='text-sm line-clamp-1 card-title'>{product?.title}</h1>
                    <p className='mt-2 badge badge-outline badge-lg'>${product?.price}</p>
                </Link>
                <div className='mt-5 card-actions'>
                    <button
                        type="button"
                        className={`shadow-lg btn btn-block btn-outline glass ${isProductInCart ? "btn-error" : "btn-primary"}`}
                        onClick={() => isProductAddedToCart ? dispatch(removeFromCart(product?.id)) : dispatch(addToCart(product))}
                    >
                        <FaCartPlus />
                        <span className='text-sm'> {isProductAddedToCart ? "Retirer " : "Ajouter"} au panier</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
