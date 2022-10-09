interface Product {
    price: number;
    name: string;
    quantity: number;
}

const printProductSummary = (product: Product): void => {
    console.log(`${product.name} - $${product.price}`)
}

//use -w [filename] to watch and compile the ts file as it changes.
// use tsc to compile any file within the folder after changes are saved.

