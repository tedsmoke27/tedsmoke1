import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los tipos de equipo
 */
const obtenerEstados = (estado = true) => {
    return axiosConfig.get('estadoEquipo?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea tipo de equipo
 */
const crearEstados  = (data) => {
    return axiosConfig.post('estadoEquipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza un tipo de equipo por ID
 */
const editarEstadosPorID = (tipoId, data) => {
    return axiosConfig.put('estadoEquipo/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra un tipo de equipo por ID
 */
 const borrarEstadosPorID = (tipoId) => {
    return axiosConfig.delete('estadoEquipo/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta un tipo de equipo por ID
 */
 const obtenerEstadosPorID = (tipoId) => {
    return axiosConfig.get('estadoEquipo/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerEstados,
    crearEstados,
    editarEstadosPorID,
    borrarEstadosPorID,
    obtenerEstadosPorID
}