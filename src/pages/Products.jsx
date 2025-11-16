import { useEffect, useState } from "react";


export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);


    return (
        <div className="jumbo prod">
            <div className="container">
                <h1 className="mb-4">I nostri Prodotti</h1>

                <div className="row">
                    {products.map((prod) => (
                        <div key={prod.id} className="col-12 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src={prod.image}
                                    className="card-img-top p-4"
                                />


                                <div className="card-body">
                                    <h5 className="card-title">
                                        {prod.title}
                                    </h5>
                                    <p className="fw-bold">€ {prod.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}