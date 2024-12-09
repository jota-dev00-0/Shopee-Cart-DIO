import items from "./services/item.js";
import * as cartServices from "./services/cart.js";

const { createItem } = items;

const cart = [];
const wishList = [];

console.log("Bem-vindo ao seu carrinho da Shopee!");

(async () => {
    const item1 = await createItem("sapato", 15.99, 10);
    const item2 = await createItem("hotwells", 20.99, 3);

    console.log(item1.subtotal());  // Deve imprimir 31.98
    console.log(item2.subtotal());  // Deve imprimir 62.97

    await cartServices.adicionarItemAoCarrinho(cart, item1);
    await cartServices.adicionarItemAoCarrinho(cart, item2);

    await cartServices.deletarItemAoCarrinho(cart, item2.Nome)

    console.log("Shopee cart total:");
    await cartServices.calcularTotalDoCarrinho(cart  );
})();
