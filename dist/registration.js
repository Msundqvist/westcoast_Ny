const registrationForm = document.querySelector('#registerForm');
const initApp = () => {
    register;
};
const register = async (e) => {
    e.preventDefault();
    if (registrationForm === null)
        return;
    const data = new FormData(registrationForm);
    const user = {
        studentName: data.get('studentName'),
        email: data.get('email'),
    };
    try {
        await fetch('http://localhost:3000/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/js',
            },
            body: JSON.stringify(user),
        });
        location.href = './index.html';
    }
    catch (error) {
        console.log(error);
    }
    localStorage.setItem('Student', JSON.stringify(user));
};
document.addEventListener('DOMContentLoaded', initApp);
registrationForm.addEventListener('submit', register);
export {};
