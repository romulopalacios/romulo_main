import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Perfil = () => {
    const navigate = useNavigate();

    // Función para manejar el guardado de los cambios
    const guardarCambios = (event) => {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const contrasena = document.getElementById('contrasena').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        // ... (Otras variables para otros campos si es necesario)

        // Guardar los datos en localStorage o donde sea necesario
        localStorage.setItem('perfil', JSON.stringify({ nombre, telefono, contrasena, fechaNacimiento }));

        // Mostrar algún mensaje de éxito si es necesario
        alert('Cambios guardados exitosamente');

        // Redirigir al dashboard
        navigate('/dashboard');
    };

    function redirectToUpload() {
        navigate("/upload");
    }

    function redirectToLibrary() {
        navigate("/biblioteca");
    }

    function validarTelefono() {
        const phoneRegex = /^\d{10}$/; // Se asume que el número debe contener exactamente 10 dígitos
        const telefonoInput = document.getElementById("telefono");
        const resultadoTelefono = document.getElementById("resultadoTelefono");

        if (!phoneRegex.test(telefonoInput.value.replace(/\D/g, ''))) {
            resultadoTelefono.textContent = "El número de teléfono no es válido. Debe contener 10 dígitos.";
            return false;
        }

        return true;
    }
    function validarCampo(input) {
        const valor = input.value.trim();
        if (valor === '') {
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    }
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
        <div>
            {/* Barra de navegación superior */}
            <nav className="navbar dark navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/dashboard">
                        {/* Logo de la aplicación */}
                        <img src={logo} alt="Logo Uleam" width="30" height="24" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/mis-proyectos">Mis trabajos de titulación</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/biblioteca">Biblioteca</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Opciones
                                </a>
                                {/* Menú desplegable */}
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/settings">Ajustes</a></li>
                                    <li><a className="dropdown-item" href="#"></a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://www.uleam.edu.ec/prueba-2/">Acerca de nosotros</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* Botón para subir proyecto */}
                                <button type="button" className="btn btn-outline-info" onClick={() => redirectToUpload()}>Subir Proyecto</button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* Formulario de búsqueda */}
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="button" onClick={() => redirectToLibrary()}>Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="container card text-center mt-5">
                <h1>Ajustes</h1>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">
                                    Nombre
                                </label>
                                <input type="text" className="form-control" id="nombre" required onInput={(e) => validarCampo(e.target)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">
                                    Número de Teléfono
                                </label>
                                <input type="tel" className="form-control" id="telefono" required onInput={(e) => validarTelefono(e.target)} />
                                <p id="resultadoTelefono" className="text-danger"></p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contrasena" className="form-label">
                                    Contraseña
                                </label>
                                <input type="password" className="form-control" id="contrasena" required onInput={validarContrasena} />
                            </div>
                            <p id="resultadoContrasena" className="text-danger"></p>

                            <div className="mb-3">
                                <label htmlFor="confirmarContrasena" className="form-label">
                                    Repita la contraseña
                                </label>
                                <input type="password" className="form-control" id="confirmarContrasena" required onInput={verificarContrasenas} />
                            </div>
                            <p id="mensajeContrasenas" className="text-danger"></p>

                            <div className="mb-3">
                                <label htmlFor="fechaNacimiento" className="form-label">
                                    Fecha de Nacimiento
                                </label>
                                <input type="date" className="form-control" id="fechaNacimiento" required onInput={(e) => validarCampo(e.target)} />
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={guardarCambios}>
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <img src="img/perfil.png" alt="Foto de Perfil" className="img-fluid" style={{ maxWidth: '200px' }} />
                            <div className="mt-3">
                                <label htmlFor="fotoPerfil" className="form-label">
                                    Subir Foto de Perfil
                                </label>
                                <input type="file" className="form-control" id="fotoPerfil" accept="image/*" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Perfil;