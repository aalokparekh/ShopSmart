

const initialState = [];

const handleCart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const item = action.payload;
            const exist = state.find((x) => x.id === item.id);
            if (exist) {
                return state.map((x) =>
                    x.id === item.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [...state, { ...item, qty: 1 }];
            }
        case 'DEL_CART':
            const itemToDelete = action.payload;
            const existToDelete = state.find((x) => x.id === itemToDelete.id);
            if (existToDelete.qty === 1) {
                return state.filter((x) => x.id !== itemToDelete.id);
            } else {
                return state.map((x) =>
                    x.id === itemToDelete.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
        default:
            return state;
    }
};

export default handleCart;
