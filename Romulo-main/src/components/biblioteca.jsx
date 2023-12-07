import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ejemplo3 from './img/ejemplo2.png'

const Biblioteca = () => {
    const navigate = useNavigate();
  function redirectToUpload() {
        navigate("/upload");
    }

    function redirectToLibrary() {
        navigate("/biblioteca");
    }

    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        // Cargar proyectos desde el localStorage
        const proyectosGuardados = JSON.parse(localStorage.getItem('proyectosPendientes')) || [];
        setProyectos(proyectosGuardados);
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

            
            <div className="container-fluid">
                <div className="row">
                    {/* Navegación Vertical */}
                    <nav id="sidebar" className="col-md-3 d-flex flex-column bg-light">
                        <div className="position-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Filtros
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <label htmlFor="fechaInicio">Fecha de Publicacion:</label>
                                    <input type="date" id="fechaInicio" className="form-control" />
                                </li>
                                <li className="nav-item">
                                    <label htmlFor="tags">Tags:</label>
                                    <select id="tags" className="form-select">
                                        <option value="tag1">Ciencia</option>
                                        <option value="tag2">Biologia</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Contenido de Proyectos */}
                    <main className="col-md-9 ms-sm-auto col-lg-9 px-4">
                        <div className="container mt-5">
                        <div className="row">
                                {proyectos.map((proyecto, index) => (
                                    <div className="col-md-4 mb-4" key={index}>
                                        <div className="card">
                                            <img src={proyecto.imagen || ejemplo3} className="card-img-top" alt={proyecto.tituloProyecto} />
                                            <div className="card-body">
                                                <h5 className="card-title">{proyecto.tituloProyecto}</h5>
                                                <p className="card-text">{proyecto.tituloProyecto}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Paginación */}
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                                        Anterior
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Siguiente
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Biblioteca;