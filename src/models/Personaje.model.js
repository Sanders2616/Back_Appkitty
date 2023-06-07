const {Schema,model}= require ('mongoose');
const personajeSchema  = new Schema({
    numero:{
        type:String,
        require:true,
        unique:true
    },
    
    nombre:String,
    cumpleaños:String,
    estatura:String,
    peso:String,
    comidafav:String



},{
    versionKey:false,
    timestamps:true
});

module.exports = model('personaje',personajeSchema);