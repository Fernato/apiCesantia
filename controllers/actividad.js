
const {response} = require('express');
const actividadModel = require('../models/ActividadModel')


const getActividades = async( req, res = response ) => {

    try {
        
        const actividades = await actividadModel.find();
    
        res.json({
            actividades: actividades
        })
    } catch (error) {
        console.log('error getactividades', error)
        
    }

}

const getActividad = async( req, res = response ) => {
    try {
        
        const id = req.params.id
        const actividad = await actividadModel.findOne({ id });
        res.json({
            actividad: actividad
        })
    } catch (error) {
        res.json({
            msg: 'error'
        })
    }

}

const crearActividad = async(req, res = response) => {

    try {
       console.log(req.body)
        const actividad = new actividadModel(req.body);
        await actividad.save();
        
        res.status(201).json({
            ok: true,
            msg: 'registrado',
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el administrador'
        })
    }


    
}

const eliminarActividad = async( req, res = response) => {

    

    try {
        const id = req.params.id
        await actividadModel.findByIdAndDelete(id);
    
        res.status(201).json({
            ok: true,
            msg: 'eliminado'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el administrador'
        })
    }

}

const count = async ( req, res = response) => {

    try {
        const index = await actividadModel.count();
        const id = index + 1;
        res.json({
            id_actividad: id
        })
    } catch (error) {
        console.log(error)
        
    }
}



module.exports = {
    getActividades,
    getActividad,
    crearActividad,
    eliminarActividad,
    count
}