import { useDispatch } from "react-redux"
import { decrementQuantityOfProduct, incrementQuantityOfProduct, removeFromCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function ShoppingCartCard({ product, index }) {

    const dispatch = useDispatch();



    return (
        <tr key={product?.product?.id} className={`${index % 2 === 0 && "bg-base-200"}`} >
            <td>
                <div className="w-14 h-14 md:w-16 md:h-16 mask mask-squircle">
                    <Link to={`/products/${product?.product?.id}`}>
                        <img
                            src={product?.product?.image}
                            alt={product?.product?.title}
                            className='w-full h-full'
                        />
                    </Link>
                </div>
            </td>
            <td className='w-[250px] md:w-[420px]'>
                <span className="text-xs md:text-sm lg:text-base selection:bg-primary selection:text-primary-content line-clamp-2">{product?.product?.title}</span>
            </td>
            <td className="min-w-[80px]">
                <div className='shadow-sm join join-vertical md:join-horizontal shadow-neutral'>
                    <button type="button" className='shadow-lg btn btn-secondary btn-xs md:btn-sm join-item'
                        onClick={() => dispatch(incrementQuantityOfProduct(product?.product?.id))}>+</button>
                    <div className='shadow-lg join-item btn btn-xs md:btn-sm countdown'>
                        <span style={{ "--value": product?.quantity }}></span>
                    </div>

                    <button type="button" className='shadow-lg btn btn-secondary btn-xs md:btn-sm join-item'
                        onClick={() => dispatch(decrementQuantityOfProduct(product?.product?.id))}>-</button>
                </div>
            </td>
            <td className='flex flex-col items-center justify-center mt-3 md:mt-0 gap-y-2'>
                <p className='badge badge-outline badge-sm md:badge-md lg:badge-lg'>${product?.product?.price}</p>
                <button type="button" className='shadow-lg btn rounded-box btn-error btn-xs lg:btn-sm'
                    onClick={() => dispatch(removeFromCart(product?.product?.id))}>Remove</button>
            </td>
        </tr>
    )

}