import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import ejemplo from './img/ejem.jpg';
import ejemplo2 from './img/ejempo.png'
import ejemplo3 from './img/ejemplo2.png'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const [proyectosPropios, setProyectosPropios] = useState([]);
    function redirectToUpload() {
        navigate("/upload");
    }

    function redirectToLibrary() {
        navigate("/biblioteca");
    }
    useEffect(() => {
        // Aquí asumimos que tienes una forma de identificar al usuario logueado, como un ID o nombre de usuario
        const usuarioLogueado = "IDUsuarioLogueado"; // Reemplaza esto con el valor real

        // Recuperar los proyectos del localStorage y filtrarlos por el usuario logueado
        const proyectosGuardados = JSON.parse(localStorage.getItem('proyectosPendientes')) || [];
        const misProyectos = proyectosGuardados.filter(proyecto => proyecto.idUsuario === usuarioLogueado);

        setProyectosPropios(misProyectos);
    }, []);

   
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

            <div className="container-xl">
                <div className="container text-center">
                    {/* Título y contenido del dashboard */}
                    <h1 className="align-text-center"> Bienvenido al dashboard central</h1>
                    <h2>Proyectos propios:</h2>

                    <div className="container text-center">
                        <div className="row align-items-start">
                        {proyectosPropios.map((proyecto, index) => (
                                <div className="col" key={index}>
                                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <a className="link-none" href="/proyecto">
                                                    <img src={ejemplo} className="img-fluid rounded-start" alt="Imagen del proyecto" />
                                                </a>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{proyecto.titulo}</h5>
                                                    <p className="card-text">{proyecto.descripcion || "Descripción no disponible"}</p>
                                                    <p className="card-text"><small className="text-body-secondary">Fecha de subida: {proyecto.fechaSubida || "Fecha no disponible"}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="col">
                                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <a className="link-none" href="/proyecto">
                                                <img src={ejemplo} className="img-fluid rounded-start" alt="Imagen proyecto" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Titulo Proyecto</h5>
                                                <p className="card-text">Descripcion Proyecto</p>
                                                <p className="card-text"><small className="text-body-secondary">Fecha de subida:</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <a className="link-none" href="proyecto.html">
                                                <img  src={ejemplo}  className="img-fluid rounded-start" alt="Imagen proyecto" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Titulo Proyecto</h5>
                                                <p className="card-text">Descripcion Proyecto</p>
                                                <p className="card-text"><small className="text-body-secondary">Fecha de subida:</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Proyectos Populares:</h2>
                    <div className="container text-center">
                        <div className="row align-items-start">
                            <div className="col">
                                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <a className="link-none" href="proyecto.html">
                                                <img src={ejemplo2} className="img-fluid rounded-start" alt="Imagen proyecto" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Titulo Proyecto</h5>
                                                <p className="card-text">Descripcion Proyecto</p>
                                                <p className="card-text"><small className="text-body-secondary">Fecha de subida:</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <a className="link-none" href="proyecto.html">
                                                <img src={ejemplo3} className="img-fluid rounded-start" alt="Imagen proyecto" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Titulo Proyecto</h5>
                                                <p className="card-text">Descripcion Proyecto</p>
                                                <p className="card-text"><small className="text-body-secondary">Fecha de subida:</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <a className="link-none" href="proyecto.html">
                                                <img src={ejemplo2} className="img-fluid rounded-start" alt="Imagen proyecto" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Titulo Proyecto</h5>
                                                <p className="card-text">Descripcion Proyecto</p>
                                                <p className="card-text"><small className="text-body-secondary">Fecha de subida:</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            {/* Pie de página */}
            <footer className="text-center text-lg-start bg-white text-muted">
                {/* Section: Links  */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>Sistema de registro de trabajos de titulación de la ULEAM
                                </h6>
                                <p>
                                    Este el sistema de registro de trabajos de titulación de la Universidad Laica Eloy Alfaro de Manabi
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Destacados
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Biblioteca</a>
                                </p>
                                <p>
                                    <a href="https://www.uleam.edu.ec/" className="text-reset">Pagina Oficial</a>
                                </p>
                                <p>
                                    <a href="https://www.uleam.edu.ec/prueba-2/" className="text-reset">Quienes Somos</a>
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Otras Plataformas
                                </h6>
                                <p>
                                    <a href="https://aulavirtualmoodle.uleam.edu.ec/?redirect=0" className="text-reset">Moodle</a>
                                </p>
                                <p>
                                    <a href="https://aulavirtual.uleam.edu.ec/auth/module.php/core/loginuserpass.php?AuthState=_d7e675c567a964acf007856a14ab9e1a5e3090d4e4%3Ahttp%3A%2F%2Faulavirtual.uleam.edu.ec%2Fauth%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttp%253A%252F%252Faulavirtual.uleam.edu.ec%26cookieTime%3D1697342004%26RelayState%3Dhttp%253A%252F%252Faulavirtual.uleam.edu.ec%252Fxisce%252Fprincipal%252F" className="text-reset">Xisce</a>
                                </p>
                                <p>
                                    <a href="https://moodleadmision.uleam.edu.ec/" className="text-reset">Moodle de Admision</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Mas sobre nosotros</a>
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i> Ecuador, Manabi, Manta</p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    Titulacion@live.uleam.edu.ec
                                </p>
                                <p><i className="fas fa-phone me-3 text-secondary"></i> (05) 262-0288</p>

                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}

                {/* Copyright */}
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="https://www.uleam.edu.ec/prueba-2/">Universidad Laica Eloy Alfaro de Manabi</a>
                </div>
                {/* Copyright */}

            </footer>
            {/* Footer */}
            {/* Scripts de Bootstrap y otros */}
            
            <script src="/js/ScriptsGlobales.js"></script>
        </div>
    );
}

export default Dashboard;
