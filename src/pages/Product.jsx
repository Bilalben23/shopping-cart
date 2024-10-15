import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../utils/useFetch'
import { FaArrowLeft, FaCartPlus, FaStar } from "react-icons/fa"
import ProductCardSkeleton from '../skeletons/ProductCardSkeleton'


export default function Product() {

    const { id } = useParams()
    const { data: product, isLoading, error } = useFetch(`https://fakestoreapi.com/products/${id}`, [id])

    if (error) {
        return <div className='mt-2'>
            <h1 className='text-2xl font-semibold text-center text-red-500'>{error} Error occurred when trying to access data.</h1>
        </div>
    }

    return (
        <section className='py-5'>
            {
                isLoading
                    ? <ProductCardSkeleton />
                    : <div className='card card-bordered w-[90%] mx-auto md:w-[700px] bg-base-300'>
                        <figure className='aspect-[16/9]'>
                            <img src={product?.image} className='w-full' alt={product?.title} />
                        </figure>
                        <div className='card-body'>
                            <h1 className='capitalize card-title'>{product?.title}</h1>
                            <p className='my-2'>{product?.description}</p>
                            <div>
                                <p className='float-right py-3.5 capitalize badge badge-primary badge-lg'>{product?.category}</p>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <div>
                                    <p className='py-4 badge badge-outline badge-lg min-w-[100px]'>${product?.price}</p>
                                </div>
                                <div>
                                    <RatingStarsOfProduct rating={Math.round(product?.rating?.rate)} />
                                </div>
                            </div>
                            <div className='justify-between mt-6 card-actions'>
                                <Link to=".." className='btn btn-secondary btn-outline'>
                                    <FaArrowLeft />
                                    <span>Go Back</span>
                                </Link>
                                <button type="button" className='btn btn-primary btn-outline'>
                                    <FaCartPlus />
                                    <span>  Ajouter au panier</span>
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </section>
    )
}

function RatingStarsOfProduct({ rating }) {
    return <div className='flex space-x-2'>
        {
            Array(5).fill().map((_, index) => {
                return <div key={index}>
                    <FaStar className={`text-3xl ${rating >= index + 1 ? 'text-yellow-500' : 'text-white'}`} />
                </div>
            })
        }
    </div>
}