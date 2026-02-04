type Product = {
    title: string,
    price: number,
    id: number,
    tags: string[]
}

const getProducts = async ():Promise<Product[]> =>{

    const response = await fetch('https://dummyjson.com/products');

    if(!response.ok) throw new Error('Something went wrong');

    const data = await response.json();
    console.log(data);

    const products: Product[] = data.products.map( ({title, id, price, tags}:Product)=>{
        console.log(title, id, price, tags);
        return {title, id, price, tags}
    })
    console.log(products)
    return products;
}

getProducts();