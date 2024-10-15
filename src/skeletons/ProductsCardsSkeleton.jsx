import React from 'react'

export default function ProductsCardsSkeleton({ numberOfCards = 3 }) {
    return (
        <>
            {
                Array(numberOfCards).fill().map((_, index) => {
                    return <div key={index} className='shadow-lg card card-compact card-bordered'>
                        <figure>
                            <div className='w-full skeleton h-[220px]'></div>
                        </figure>
                        <div className="card-body">
                            <h1 className='py-3 title skeleton'></h1>
                            <p className='skeleton py-3 w-[120px]'></p>
                            <div className='mt-2'>
                                <div type="button" className='w-full py-5 disabled rounded-box skeleton'></div>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}
