export default {
    methods: {
        deleteProductNull(products) {
            return products.filter(product => product.quantity > 0);
        }
    }
}