import { useFetch } from "../utils/useFetch"
import ProductCard from '../components/ProductCard';
import ProductsCardsSkeleton from "../skeletons/ProductsCardsSkeleton";


export default function Products() {

    const { data: products, error, isLoading } = useFetch("https://fakestoreapi.com/products")


    if (error) {
        return (
            <div className='mt-4'>
                <h1 className='text-3xl font-semibold text-center text-red-500'>
                    Oops! Something went wrong: {error.message || 'Unable to fetch products.'}
                </h1>
            </div>
        );
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto p-5 gap-10'>
            {
                isLoading
                    ? <ProductsCardsSkeleton numberOfCards={20} />
                    : products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    />)
            }
        </section>
    )
}