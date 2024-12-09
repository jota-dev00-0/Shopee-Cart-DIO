import item from "./item.js";

// -> adicionar item ao carrinho
export async function adicionarItemAoCarrinho(userCart, item) {
    userCart.push(item);
}

// -> deletar item do carrinho
export async function deletarItemAoCarrinho(userCart, Nome) {
    const index = userCart.findIndex((item) => item.Nome === Nome)
    if ( index !== -1 ){
        userCart.splice(index , 1)
    }
}

// -> remover item do carrinho
export async function removerItemAoCarrinho(userCart, index) {
    // Implementação necessária

    const deleteIndex = index - 1

    if( index >= 0 && index < userCart.length ){
        userCart.splice(deleteIndex, -1)
    }
}

// -> calcular preço total do carrinho
export async function calcularTotalDoCarrinho(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}


export default {
    adicionarItemAoCarrinho,
    deletarItemAoCarrinho,
    calcularTotalDoCarrinho,
    removerItemAoCarrinho
};
