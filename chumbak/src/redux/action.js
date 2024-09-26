

export const addCart = (item) => {
    return {
        type: 'ADD_CART',
        payload: item
    };
};

export const delCart = (item) => {
    return {
        type: 'DEL_CART',
        payload: item
    };
};
