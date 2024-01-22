import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from "./Alert"; // Asegúrate de ajustar la ruta correcta

const Formulario = ({ setAlerta }) => {
    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        contraseña: "",
        confirmaContraseña: "",
    });

    const [alerta, setAlertaInterna] = useState({
        alerta: false,
        msg: "",
        color: "",
    });

    const validacion = (e) => {
        e.preventDefault();

        const { nombre, email, contraseña, confirmaContraseña } = datos;
        const validacionDatos =
            !nombre || !email || !contraseña || !confirmaContraseña;
        const validacionContraseña = contraseña !== confirmaContraseña;

        if (validacionDatos) {
            setAlertaInterna({
                alerta: true,
                msg: "Faltan datos por completar.",
                color: "warning",
            });
        } else if (validacionContraseña) {
            setAlertaInterna({
                alerta: true,
                msg: "Las contraseñas son diferentes.",
                color: "danger",
            });
        } else {
            setAlertaInterna({
                alerta: true,
                msg: "Todos los datos coinciden.",
                color: "success",
            });
        }

        // Pasar la alerta al componente padre (si es necesario)
        setAlerta && setAlerta({ ...alerta, ...alertaInterna });
    };

    const handleChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {alerta.alerta && <Alert tipo={alerta.color} mensaje={alerta.msg} />}
            <form className="formulario" onSubmit={(e) => validacion(e)}>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        className="form-control"
                        onChange={handleChange}
                        value={datos.nombre}
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder="ejemplo@ejemplo.com"
                        className="form-control"
                        onChange={handleChange}
                        value={datos.email}
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                        className="form-control"
                        onChange={handleChange}
                        value={datos.contraseña}
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="password"
                        name="confirmaContraseña"
                        placeholder="Confirma tu contraseña"
                        className="form-control"
                        onChange={handleChange}
                        value={datos.confirmaContraseña}
                    />
                </div>
                <div>
                    <Button variant="primary" size="lg" type="submit">
                        Registrarse
                    </Button>{' '}
                </div>
            </form>
        </div>
    );
};

export default Formulario;
