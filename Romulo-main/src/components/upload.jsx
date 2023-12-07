import React, { useEffect, useState } from 'react';
import logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const upload = () => 
{ const navigate = useNavigate();
    function redirectToUpload() {
          navigate("/upload");
      }
  
      function redirectToLibrary() {
          navigate("/biblioteca");
      }
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        // Cargar proyectos pendientes del localStorage al iniciar el componente
        const proyectosGuardados = JSON.parse(localStorage.getItem('proyectosPendientes')) || [];
        setProyectos(proyectosGuardados);
    }, []);

    // Función para subir un proyecto
    const subirProyecto = () => {
        const nombreEstudiante = document.getElementById('nombreEstudiante').value.trim();
        const tituloProyecto = document.getElementById('tituloProyecto').value.trim();
        const asesor = document.getElementById('asesor').value;
        const archivoProyecto = document.getElementById('archivoProyecto').files[0];
        const confirmacionAutor = document.getElementById('confirmacionAutor').checked;

        if (!nombreEstudiante || !tituloProyecto || asesor === '0' || !archivoProyecto || !confirmacionAutor) {
            alert('Por favor, complete todos los campos y confirme que es el autor propio.');
            return;
        }

        if (archivoProyecto.type !== 'application/pdf') {
            alert('El archivo debe ser un PDF.');
            return;
        }

        const nuevoProyecto = {
            nombreEstudiante,
            tituloProyecto,
            asesor,
            archivoProyectoName: archivoProyecto.name,
        };

        // Agregar el nuevo proyecto a la lista y actualizar el localStorage
        const proyectosActualizados = [...proyectos, nuevoProyecto];
        setProyectos(proyectosActualizados);
        localStorage.setItem('proyectosPendientes', JSON.stringify(proyectosActualizados));

        // Limpiar los campos del formulario
        document.getElementById('nombreEstudiante').value = '';
        document.getElementById('tituloProyecto').value = '';
        document.getElementById('asesor').value = '0';
        document.getElementById('archivoProyecto').value = '';
        document.getElementById('confirmacionAutor').checked = false;
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

            <div className="container">
                <div className="card text-center">
                    <div className="card-body ">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombreEstudiante" className="form-label">
                                    Nombre del estudiante
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombreEstudiante"
                                    aria-describedby="nombre"
                                    required
                                    onInput={(e) => validarCampo(e.target)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="tituloProyecto" className="form-label">
                                    Título del proyecto
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="tituloProyecto"
                                    required
                                    onInput={(e) => validarCampo(e.target)}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="asesor">
                                    Seleccione a su asesor
                                </label>
                                <select className="form-select" id="asesor" required>
                                    <option selected>Asesores:</option>
                                    <option value="1">Ing. Walter</option>
                                    <option value="2">Ing. Roberth</option>
                                    <option value="3">Ing. Mike</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="archivoProyecto">
                                    Subir Trabajo
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf"
                                    id="archivoProyecto"
                                    required
                                    onInput={(e) => validarCampo(e.target)}
                                />
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="confirmacionAutor" />
                                <label className="form-check-label" htmlFor="confirmacionAutor">
                                    Confirmas que eres el autor propio
                                </label>
                            </div>

                            <button type="button" className="btn btn-success" onClick={() => subirProyecto()}>
                                Subir
                            </button>
                        </form>
                        <h5 className="card-title">Proyectos en espera de aprobación</h5>
                    {proyectos.map((proyecto, index) => (
                        <div className="list-group-item" key={index}>
                            <h6 className="mb-2">Título: {proyecto.tituloProyecto}</h6>
                            <p className="mb-2">Estudiante: {proyecto.nombreEstudiante}</p>
                            <p>Asesor: {proyecto.asesor}</p>
                            <p>Archivo: {proyecto.archivoProyectoName}</p>
                        </div>
                    ))}
                    </div>
                </div>
                
            </div>

           
                </div>


    );
}

export default upload;