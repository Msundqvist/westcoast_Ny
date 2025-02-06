"use strict";
const formCheckout = document.querySelector('#form');
const displayCourse = document.querySelector('#displayOrders');
const initApp = () => { };
const handlercheckout = (e) => {
    console.log('click');
    e.preventDefault();
};
document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handlercheckout);
