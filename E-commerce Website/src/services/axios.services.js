import axios from 'axios';

const getProducts = async() =>{
    const products = await axios.get('https://fakestoreapi.com/products')
    return (products.data)
    console.log(products.data);
}

export default getProducts;