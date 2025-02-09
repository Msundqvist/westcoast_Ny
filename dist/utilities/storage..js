export const addToStorage = (data) => {
    localStorage.setItem('costumerOrders', JSON.stringify(data));
};
