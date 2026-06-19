import { products } from "../constants/products";
import Product from "./Product";

export default function Products() {
    return (
        <section className="flex  overflow-x-auto gap-8 2xl:container mx-auto p-8">
            {
                products.map(item => {
                    return (
                        <Product item={item} />

                    )
                })
            }

        </section>


    )
}