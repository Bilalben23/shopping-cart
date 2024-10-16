import { useDispatch, useSelector } from "react-redux"
import { decrementQuantityOfProduct, incrementQuantityOfProduct, removeFromCart } from "../features/cart/cartSlice";

export default function ShoppingCartCard({ product }) {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);


    return <table key={product?.product?.id} className='table'>
        <tr>
            <td>
                <div className="w-16 h-16 mask mask-squircle">
                    <img
                        src={product?.product?.image}
                        alt={product?.product?.title}
                        className='w-full h-full'
                    />
                </div>
            </td>
            <td className='w-[420px]'>
                <span className="">{product?.product?.title}</span>
            </td>
            <td>
                <div className='join'>
                    <button type="button" className='shadow btn btn-circle btn-sm join-item'
                        onClick={() => dispatch(incrementQuantityOfProduct(product?.product?.id))}>+</button>
                    <span className='p-2 join-item btn btn-sm btn-primary'>0</span>
                    <button type="button" className='shadow btn btn-circle btn-sm join-item'
                        onClick={() => dispatch(decrementQuantityOfProduct(product?.product?.id))}>-</button>
                </div>
            </td>
            <td className='flex flex-col items-center gap-y-2'>
                <p className='badge badge-outline badge-lg'>${product?.product?.price}</p>
                <button type="button" className='shadow-lg btn rounded-box btn-error btn-sm'
                    onClick={() => dispatch(removeFromCart(product?.product?.id))}>remove</button>
            </td>
        </tr>
    </table>
}