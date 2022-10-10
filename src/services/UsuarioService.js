import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los tipos de equipo
 */
const obtenerUsuario = (estado = true) => {
    return axiosConfig.get('usuario?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea tipo de equipo
 */
const crearUsuario = (data) => {
    return axiosConfig.post('usuario', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza un tipo de equipo por ID
 */
const editarUsuarioPorID = (tipoId, data) => {
    return axiosConfig.put('usuarios/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra un tipo de equipo por ID
 */
 const borrarUsuarioPorID = (tipoId) => {
    return axiosConfig.delete('usuario/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta un tipo de equipo por ID
 */
 const obtenerTipoEquipoPorID = (tipoId) => {
    return axiosConfig.get('usuario/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerUsuario,
    crearUsuario,
    editarUsuarioPorID,
    borrarUsuarioPorID,
    obtenerTipoEquipoPorID
}