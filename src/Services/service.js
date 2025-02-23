const FakeStoreApi= {
    fetchAllProduct: async ()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const result = res.json();
        return result;

    },

    fetchProductById: async (productid)=>{
        const res = await fetch(`https://fakestoreapi.com/products/${productid}`);
        const result = res.json();
        return result;
    },

    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = await res.json()
        return result.filter((product) => product.title.toLowerCase().includes(query))
    }
}

export { FakeStoreApi }