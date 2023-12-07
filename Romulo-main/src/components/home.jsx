import React, { useEffect,useState  } from 'react';
import logo from './img/logo.png';
import './css/home.css';
import { useNavigate } from 'react-router-dom';
import fondo from './img/fondo.jpg'

const Home = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const email = document.getElementById('registroEmailInput').value;
        const password = document.getElementById('contrasena').value;
        const confirmPassword = document.getElementById('confirmarContrasena').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const newUser = { email, password };
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registro exitoso');
        // Resetear formulario u otra acción
    };

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSigninClick = () => {
        const formRegister = document.querySelector('.register');
        const formLogin = document.querySelector('.login');

        formRegister.classList.add('hide');
        formLogin.classList.remove('hide');
    };

    const handleSignupClick = () => {
        const formRegister = document.querySelector('.register');
        const formLogin = document.querySelector('.login');

        formLogin.classList.add('hide');
        formRegister.classList.remove('hide');
    };

    const handleSigninBackClick = () => {
        const formRegister = document.querySelector('.register');
        const formLogin = document.querySelector('.login');

        formLogin.classList.remove('hide');
        formRegister.classList.add('hide');
    };

    useEffect(() => {
        const btnSignin = document.getElementById('sign-in');
        const btnSignup = document.getElementById('sign-up');
        const btnSigninBack = document.getElementById('btn-signin-back');

        btnSignin.addEventListener('click', handleSigninClick);
        btnSignup.addEventListener('click', handleSignupClick);
        btnSigninBack.addEventListener('click', handleSigninBackClick);

        return () => {
            btnSignin.removeEventListener('click', handleSigninClick);
            btnSignup.removeEventListener('click', handleSignupClick);
            btnSigninBack.removeEventListener('click', handleSigninBackClick);
        };
    }, []);

    const redirectToDashboard = () => {
        window.location.href = 'dashboard.html';
    };

    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        const { email, password } = userData;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.find(user => user.email === email && user.password === password);

        if (userExists) {
            alert('Inicio de sesión exitoso');
            setIsSignedIn(true); // Actualizar el estado de inicio de sesión
            localStorage.setItem('isSignedIn', 'true'); // Opcional: Guardar en localStorage
            navigate('/dashboard'); // Redirige al dashboard o página principal
        } else {
            alert('Credenciales incorrectas');
        }
    };


    const validarEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const emailInput = document.getElementById('registroEmailInput');
        const resultadoEmail = document.getElementById('resultadoEmail');

        if (!emailRegex.test(emailInput.value)) {
            resultadoEmail.textContent = 'La dirección de correo electrónico no es válida.';
            return false;
        }

        resultadoEmail.textContent = '';
        return true;
    };

    const validarContrasena = () => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
        const contrasenaInput = document.getElementById('contrasena');
        const resultadoContrasena = document.getElementById('resultadoContrasena');

        if (!passwordRegex.test(contrasenaInput.value)) {
            resultadoContrasena.textContent = 'La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.';
            return false;
        }
        resultadoContrasena.textContent = '';
        return true;
    };

    const verificarContrasenas = () => {
        const contrasenaInput = document.getElementById('contrasena').value;
        const confirmarContrasenaInput = document.getElementById('confirmarContrasena').value;
        const mensajeContrasenas = document.getElementById('mensajeContrasenas');

        if (contrasenaInput !== confirmarContrasenaInput) {
            mensajeContrasenas.textContent = 'Las contraseñas no coinciden.';
            return false;
        } else {
            mensajeContrasenas.textContent = '';
            return true;
        }
    };

    return (
        <div className="home">
            <div className="login-container login">
                <div className="logo">
                    <img src={logo} alt="Logo de tu aplicación" />
                </div>
                <h2>Iniciar Sesión</h2>
                <form id="login-form" onSubmit={handleLoginFormSubmit}>
                <input
                    type="email"
                    name="email"
                    id="emailInput"
                    placeholder="Correo electrónico"
                    required
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    required
                    onChange={handleChange}
                />
                <button type="submit" id="sign-in">Iniciar Sesión</button>
            </form>
                <p>
                    ¿No tienes una cuenta?{' '}
                    <button type="button" id="sign-up">
                        Registrarse
                    </button>
                </p>
            </div>

            <div className="login-container register hide">
                <div className="logo">
                    <img src={logo} alt="Logo uleam" />
                </div>
                <h2>Registrarse</h2>
                <form id="registro-form" onSubmit={handleRegisterSubmit}>
                    <input type="email" id="registroEmailInput" placeholder="Correo electrónico" required />
                    <p id="resultadoEmail" className="text-danger"></p>

                    <input type="password" className="form-control" id="contrasena" placeholder="Contraseña" required />
                    <p id="resultadoContrasena" className="text-danger"></p>

                    <input
                        type="password"
                        className="form-control"
                        id="confirmarContrasena"
                        placeholder="Confirmar contraseña"
                        required
                        onBlur={verificarContrasenas}
                    />

                    <p id="mensajeContrasenas" className="text-danger"></p>

                    <button type="submit" id="registerinit">
                        Registrarse
                    </button>
                </form>

                <p>
                    ¿Ya tienes una cuenta?{' '}
                    <button type="button" id="btn-signin-back">
                        Iniciar Sesión
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Home;
