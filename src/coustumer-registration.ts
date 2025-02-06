const formCheckout = document.querySelector<HTMLFormElement>('#form');
const displayCourse = document.querySelector<HTMLDivElement>('#displayOrders');
const initApp = () => {};

const handlercheckout = (e: SubmitEvent) => {
  console.log('click');
  e.preventDefault();
};

document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
