import { IRegistration } from './models/IRegistration.js';

const registrationForm = document.querySelector(
  '#registerForm'
) as HTMLFormElement;

const initApp = () => {};

const loggIn = async (e: SubmitEvent) => {
  e.preventDefault();

  if (registrationForm === null) return;

  const data = new FormData(registrationForm);
  //   const formData = Object.fromEntries(data);
  //   formData.id = crypto.randomUUID();
  //   console.log(formData.id);

  const user: IRegistration = {
    userName: data.get('userName') as string,
    passWord: data.get('password') as string,

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
  } catch (error) {
    console.log(error);
  }
  localStorage.setItem('User', JSON.stringify(user));
};

document.addEventListener('DOMContentLoaded', initApp);
registrationForm!.addEventListener('submit', loggIn);
