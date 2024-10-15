import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ id, image, title, price }) {

    return <div className='transition-all shadow-lg card card-compact card-bordered bg-base-300 opacity-85 hover:opacity-100'>
        <figure className='aspect-[16/9]'>
            <Link to={`${id}`}>
                <img src={image} alt={title} className='w-full' />
            </Link>
        </figure>
        <div className="card-body">
            <Link to={`${id}`}>
                <h1 className='text-sm line-clamp-1 card-title'>{title}</h1>
                <p className='mt-2 badge badge-outline badge-lg'>${price}</p>
            </Link>
            <div className='mt-5 card-actions'>
                <button type="button" className='shadow-lg btn btn-primary btn-block btn-outline glass'>
                    <FaCartPlus />
                    <span className='text-sm'>Ajouter au panier</span>
                </button>
            </div>
        </div>
    </div>
}