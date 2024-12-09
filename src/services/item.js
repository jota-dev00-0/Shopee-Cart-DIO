export const createItem = async (Nome, Preço, Quantidade) => {
    return {
        Nome,
        Preço,
        Quantidade,
        subtotal: () => Preço * Quantidade
    };
};

export default {
    createItem,
};
