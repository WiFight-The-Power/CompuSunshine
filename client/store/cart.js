import axios from "axios"

const LOAD_CART = "LOAD_CART"
const ADD_QUANTITY_TO_CART = "ADD_QUANTITY_TO_CART"
const SUBTRACT_QUANTITY_FROM_CART = "SUBTRACT_QUANTITY_FROM_CART"
const DELETE_FROM_CART = "DELETE_FROM_CART"

const _loadCart = (cart) => {
    return {
        type: LOAD_CART,
        cart
    }
}

const _addQuantityToCart = (productId) => {
    return {
        type: ADD_QUANTITY_TO_CART,
        productId
    }
}

const _subtractQuantityFromCart = (productId) => {
    return {
        type: SUBTRACT_QUANTITY_FROM_CART,
        productId
    }
}


const _deleteFromCart = (productId) => {
    return {
        type: DELETE_FROM_CART,
        productId
    }
}