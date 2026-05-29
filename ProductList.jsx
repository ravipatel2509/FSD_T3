import ProductCard from './ProductCard'
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"

function ProductList(){
    const products=[
        {
            title:"iphone17",
            price:"79999 rs",
            rating:4.8,
            image:img1
        },

        {
            title:"iphone17pro",
            price:"150000 rs",
            rating:4.5,
            image:img2
        }
    ]
    return(
        <>
        <h1>Our Product</h1>
        <ProductCard productList={products}></ProductCard>
        </>
    )
}

export default ProductList