//
let myObject


try{
    console.log(myObject.email)
    console.log("Finaliza la ejecucion sin errores")
} catch{
    console.log("Se ha producido un error")
}


try{
    console.log(myObject.email)
    
} catch(error){
    console.log("Se ha producido un error: ",error.message)
}



try{
    console.log(myObject.email)
    
} catch(error){
    console.log("Se ha producido un error: ",error.message)
} finally{
    console.log("Este codigo se ejecuta siempre")
}


//Lanzamiento de errores



throw new Error("Se ha produciodo un error");