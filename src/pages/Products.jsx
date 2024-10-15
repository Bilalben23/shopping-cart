import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Products() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data)
            } catch (err) {
                setError(err.message)
                console.error(error.message);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    if (error) {
        return <div className='mt-4'>
            <h1 className='text-3xl font-semibold text-center text-red-500'>{error}</h1>
        </div>
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto p-5 gap-10'>
            {
                isLoading
                    ? <ProductSkeleton />
                    : products.map(product => <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />)

            }
        </section>
    )
}


function ProductCard({ id, image, title, price }) {
    return <div className='card card-compact glass'>
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
                <button type="button" className='btn btn-primary btn-outline btn-block'>Ajouter au panier</button>
            </div>
        </div>
    </div>
}

function ProductSkeleton() {
    return <div>
        <h1>Skeleton...</h1>
    </div>
}