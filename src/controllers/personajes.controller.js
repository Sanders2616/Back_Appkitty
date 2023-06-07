const Personaje=require('../models/Personaje.model');
const personajesController={};

personajesController.obtenerPersonajes=async(req,res)=>{
    const personajes=await Personaje.find();
    res.json(personajes);
};
personajesController.obtenerPersonaje=async(req,res)=>{
    const personaje=await Personaje.findOne({numero:req.params.num});
    ///res.json(producto);
    if (personaje!=null)
        res.json(personaje);
    else
        res.json({status:"Not Found"});    
};


personajesController.insertarPersonaje=async(req,res)=>{
    const personajeInsertado=new Personaje(req.body);
    await personajeInsertado.save();
    res.json({
        status:"Personaje insertado"
    });
};


personajesController.actualizarPersonaje=async(req,res)=>{
    const actualizar = await Personaje.findOneAndUpdate({numero:req.params.num},req.body);
    if (actualizar != null){
        res.json({ status:"Personaje actualizado"});
    }else{
        res.json({status:"Not Found"})
    }
    
};
personajesController.eliminarPersonaje=async(req,res)=>{
    const eliminar = await Personaje.findOneAndDelete({numero:req.params.num});
    if (eliminar != null){
        res.json({status:"Personaje eliminado"});
    }else{
        res.json({status:"Not Found"})
    }
    /*res.json({status:"Producto eliminado"});
    console.log(eliminar);*/
};
module.exports=personajesController;