const registrationForm = document.querySelector('#registerForm');
const initApp = () => {
    loggIn;
};
const loggIn = async (e) => {
    e.preventDefault();
    if (registrationForm === null)
        return;
    const data = new FormData(registrationForm);
    const user = {
        userName: data.get('userName'),
        passWord: data.get('password'),
    };
    try {
        await fetch('http://localhost:3000/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/js',
            },
            body: JSON.stringify(user),
        });
        location.href = './courses.html';
    }
    catch (error) {
        console.log(error);
    }
    localStorage.setItem('User', JSON.stringify(user));
};
document.addEventListener('DOMContentLoaded', initApp);
registrationForm.addEventListener('submit', loggIn);
export {};
