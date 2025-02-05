import { IStudent } from './models/IStudent.js';

const registrationForm = document.querySelector(
  '#registerForm'
) as HTMLFormElement;

const initApp = () => {
  register;
};

const register = async (e: SubmitEvent) => {
  e.preventDefault();

  if (registrationForm === null) return;

  const data = new FormData(registrationForm);

  const user: IStudent = {
    studentName: data.get('studentName') as string,
    email: data.get('email') as string,
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
  } catch (error) {
    console.log(error);
  }
  localStorage.setItem('Student', JSON.stringify(user));
};

document.addEventListener('DOMContentLoaded', initApp);
registrationForm!.addEventListener('submit', register);
