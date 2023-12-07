import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import logo from './img/logo.png';
import ejemplo3 from './img/ejemplo2.png'
import { useNavigate } from 'react-router-dom';



const Proyecto = () => {
    const [proyecto, setProyecto] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const proyectosGuardados = JSON.parse(localStorage.getItem('proyectosPendientes')) || [];
        if (proyectosGuardados.length > 0) {
            setProyecto(proyectosGuardados[0]); // Establecer el primer proyecto del arreglo
        }
    }, []);
    

    if (!proyecto) {
        return <div>Proyecto no encontrado o cargando...</div>;
    }


    function redirectToUpload() {
        navigate("/upload");
    }

    function redirectToLibrary() {
        navigate("/biblioteca");
    }

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
             <div className="container">
                <div className="card text-center mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={ejemplo3} className="img-fluid" alt="Vista Previa del Documento" />
                            
                        </div>
                        <div className="col-md-8 pt-5">
                            <h1>{proyecto.archivoProyectoName}</h1>
                            <p>Autor: {proyecto.nombreEstudiante}</p>
                            <p>Descripción: {proyecto.tituloProyecto}</p>
                            <p>Asesor: {proyecto.asesor}</p>
                        </div>
                    </div>
                </div>
            </div>
          
            
        </div>
    );
}

export default Proyecto;