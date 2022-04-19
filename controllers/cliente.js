
const {response} = require('express');
const clienteModel = require('../models/ClienteModel')


const parseId = ( id ) => {
    return mongoose.Types.ObjectId( id )
}


const getClientes = async( req, res = response ) => {

    const clientes = await clienteModel.find();

    res.json({
        clientes
    })
}

const getCliente = async( req, res = response ) => {
    try {
        
        const cedula = req.params.cedula
        const cliente = await clienteModel.findOne({ cedula });
        res.json({
            cliente
        })
    } catch (error) {
        res.json({
            msg: 'error'
        })
    }

}

const crearCliente = async(req, res = response) => {

    const {cedula, nombre, apellido, direccion, ciudad} = req.body

    try {

        let cliente = await clienteModel.findOne({ cedula })
        if (cliente) {
            return res.status(400).json({
                ok: false,
                msg: 'EL cliente ya existe'
            })
        }else{

            cliente = new clienteModel(req.body);
            await cliente.save();
            
            res.status(201).json({
                ok: true,
                msg: 'registrado',
            })
        }
        

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el administrador'
        })
    }
  
}

const eliminarCliente = async( req, res = response) => {

    const {id} = req.params
   
    try {
        //const id = parseId(req.params.id)
        await clienteModel.deleteOne({ _id: id });
    
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


module.exports = {
    getClientes,
    getCliente,
    crearCliente,
    eliminarCliente
}