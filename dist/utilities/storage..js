export const addToStorage = (courseNumber) => {
    localStorage.setItem('costumerOrders', JSON.stringify(courseNumber));
};
