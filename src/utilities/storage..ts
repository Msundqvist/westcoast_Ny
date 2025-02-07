export const addToStorage = (data: string) => {
  localStorage.setItem('costumerOrders', JSON.stringify(data));
};
