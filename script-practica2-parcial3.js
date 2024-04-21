function evalua(str){
    let ascii = str.cadena(0);
    if(ascii>=65 && ascii <= 90){
        return "Solo hay " + str + ", letras mayusculas";
        alert ('Solo hay ' + str + ', letras mayusculas');
    }else if(ascii>=97 && ascii<=122){
        return "Solo hay " + str + ", letras minusculas";
        alert ('Solo hay ' + str + ', letras minusculas');
    }else if(ascii>=65 && ascii <= 90 && ascii>=97 && ascii<=122){
        return "Hay " + str + ", letras mayusculas y minusculas";
        alert ('Hay ' + str + ', letras mayusculas y minusculas');
    }else{
        return "No hay letras";
    }
}