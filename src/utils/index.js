/*
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total Price
*/

export const totalPrice = (products) => (products.reduce((sum, product) => sum + product.price, 0));
