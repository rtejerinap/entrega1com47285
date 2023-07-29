class ProductManager {

    #id
    #products

    constructor() {
        this.#id = 1;
        this.#products = [];
    }

    addProduct({ code, stock, title, description, price, img }) {

        const siExiste = this.siExiste('code', code);

        if (siExiste) {
            return `El codigo: ${code} ingresado ya existe`
        };

        if (  (code =='' || code==null || code== undefined)||  (stock =='' || stock==null || stock== undefined) || (title =='' || title==null || title== undefined)|| (description =='' || description==null || description== undefined) ||  (price =='' || price==null || price== undefined) ||  (img =='' || img==null || img== undefined) ) {
            //chequeo que existan todos los campos
            return 'Todos las propiedades son obligatorias'
        };

        if (!siExiste) {
            this.#products.push({
                id: this.#id++,
                code,
                stock,
                title,
                description,
                price,
                img
            })
            return `El producto ${title} fue añadido correctamente`
        };
    }

    getProducts() {
        if (!this.#products.length){
            console.log(this.#products
                );
            return `No hay productos`;
        }
        else{
        return this.#products;
        }
    }

    getProductById(id) {
        const product = this.#products.find(product => product.id === id);

        if (!product) {
            return `Error! El ID: ${id} no existe`
        };

        return product;
    }

    siExiste(key, value) {
        return this.#products.find(product => product[key] === value)
    };
}

const article = {
    code: 'articlulo1',
    stock: 100,
    title: 'Mate',
    description: 'Mate 3D Plímero',
    price: 1000,
    img: './imagen' 
};
const article2 = {
    code: 'articlulo2',
    stock: 200,
    title: 'Mate2',
    description: 'Mate 3D Plímero',
    price: 2000,
    img: './imagen' 
};
const article3 = {
    code: 'articlulo3',
    stock: null,
    title: 'Mate2',
    description: 'ff',
    price: 2000,
    img: './imagen' 
};


const product = new ProductManager();
console.log(product.getProducts()); //listo productos
console.log(product.addProduct(article));//agrego articulos
console.log(product.addProduct(article2));//agrego articulos
console.log(product.addProduct(article3));//agrego articulos

console.log(product.getProducts());
console.log(product.addProduct(article));//intento agregar el mismo articulo
console.log(product.getProductById(1)); //Busco articulo con el id 1
console.log(product.getProductById(2));//busco articulo con el id 2
console.log(product.getProductById(3));//busco articulo con el id 3
console.log(product.getProducts());