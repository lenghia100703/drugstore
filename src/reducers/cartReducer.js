import { combineReducers } from 'redux';
import {
    GET_ALL_PRODUCT,
    GET_NUMBER_CART,
    ADD_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    DELETE_CART,
} from '../actions/cartAction';

const tempProduct = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];

const initProduct = {
    numberCart: 0,
    Carts: tempProduct,
    _products: [],
};

export const todoProduct = (state = initProduct, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                _products: action.payload,
            };
        case GET_NUMBER_CART:
            return {
                ...state,
            };
        case ADD_CART:
            if (state.numberCart == 0) {
                let cart = {
                    goodsId: action.payload.goodsId,
                    quantity: action.payload.quantity,
                    goodsName: action.payload.goodsName,
                    goodsUrlImage: action.payload.goodsUrlImage,
                    price: action.payload.price,
                    medicalShopId: action.payload.medicalShopId,
                };
                state.Carts.push(cart);
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.goodsId == action.payload.goodsId) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        goodsId: action.payload.goodsId,
                        quantity: action.payload.quantity,
                        goodsName: action.payload.goodsName,
                        goodsUrlImage: action.payload.goodsUrlImage,
                        price: action.payload.price,
                        medicalShopId: action.payload.medicalShopId,
                    };
                    state.Carts.push(_cart);
                }
            }
            localStorage.setItem('carts', JSON.stringify(state.Carts));
            return {
                ...state,
                numberCart: state.numberCart + 1,
            };
        case INCREASE_QUANTITY:
            state.numberCart++;
            state.Carts[state.Carts.indexOf(action.payload)].quantity++;
            console.log(action.payload.quantity);

            return {
                ...state,
            };
        case DECREASE_QUANTITY:
            let quantity = state.Carts[state.Carts.indexOf(action.payload)].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[state.Carts.indexOf(action.payload)].quantity--;
            }
            console.log(action.payload.quantity);

            return {
                ...state,
            };
        case DELETE_CART:
            //let quantity_ = state.Carts[state.Carts.indexOf(action.payload)].quantity;
            localStorage.setItem('carts', JSON.stringify([]));
            return {
                ...state,
                numberCart: state.numberCart - 1,
                Carts: state.Carts.filter((item) => {
                    return item.goodsId != state.Carts[state.Carts.indexOf(action.payload)].goodsId;
                }),
            };
        default:
            return state;
    }
};
