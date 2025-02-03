const registrationForm = document.querySelector('#registerForm');
const initApp = () => { };
const loggIn = async (e) => {
    e.preventDefault();
    if (registrationForm === null)
        return;
    const data = new FormData(registrationForm);
    //   const formData = Object.fromEntries(data);
    //   formData.id = crypto.randomUUID();
    //   console.log(formData.id);
    const user = {
        userName: data.get('userName'),
        passWord: data.get('password'),
        // id: formData.id,
        // userName: formData.userName.toString(),
        // passWord: formData.passWord.toString(),
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
