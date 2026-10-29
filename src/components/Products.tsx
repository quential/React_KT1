import {useSearchParams} from "react-router";

interface Product {
    id: number;
    title: string;
    price: number;
}

const products: Product[] = [
    {id: 1, title: 'iPhone 18 Pro', price: 1199},
    {id: 2, title: 'iPhone 17', price: 799},
    {id: 3, title: 'iPad 11"', price: 899},
    {id: 4, title: 'MacBook Air 13"', price: 999},
    {id: 5, title: 'MacBook Pro 14"', price: 1399},
    {id: 6, title: 'iPhone Duo', price: 1999},
]

function Products() {
    const [searchParams, setSearchParams] = useSearchParams();

    const sort =
        searchParams.get("sort") === "price-desc"
            ? "price-desc"
            : "price-asc";

    const sortedProducts = [...products].sort((a, b) => {
        if (sort === "price-desc") {
            return b.price - a.price;
        }
        return a.price - b.price;
    });

    return (
        <div>
            <h1>Товары</h1>

            <button onClick={() => setSearchParams({sort: "price-asc"})}>
                Сначала дешёвые
            </button>

            <button onClick={() => setSearchParams({sort: "price-desc"})}>
                Сначала дорогие
            </button>

            <ul>
                {sortedProducts.map((product) => (
                    <li key={product.id}>
                        {product.title} — ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;