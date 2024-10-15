import React from 'react'

export default function ProductCardSkeleton() {
    return (
        <div className='card card-bordered w-[90%] mx-auto min-h-[340px] md:w-[700px] shadow-xl'>
            <figure>
                <div className='w-full min-h-[320px] skeleton'></div>
            </figure>
            <div className='card-body'>
                <h1 className='w-[90%] py-4 skeleton'></h1>
                <div className='flex flex-col mt-3 space-y-2'>
                    <p className='w-full py-2 skeleton'></p>
                    <p className='w-full py-2 skeleton'></p>
                    <p className='w-full py-2 skeleton'></p>
                    <p className='w-1/2 py-2 skeleton'></p>
                </div>
                <div>
                    <p className='py-4 float-right skeleton w-[180px]'></p>
                </div>
                <div className='flex justify-between mt-2'>
                    <div className='w-[120px] py-4 skeleton'></div>
                    <div className='flex space-x-2'>
                        {
                            Array(5).fill().map((_, index) => {
                                return <p key={index} className='p-4 text-2xl skeleton bg-base-300 mask mask-star-2' ></p>
                            })
                        }
                    </div>
                </div>
                <div className="justify-between mt-5 card-actions">
                    <div className='w-[180px] py-5 skeleton rounded-box'></div>
                    <div className='w-[180px] py-5 skeleton rounded-box'></div>
                </div>

            </div>
        </div>
    )
}
