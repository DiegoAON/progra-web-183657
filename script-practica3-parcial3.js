function rfc(){
    var nombre=document.getElementById("nombre").value.toUpperCase();
    var ap=document.getElementById("ap").value.toUpperCase();
    var am=document.getElementById("am").value.toUpperCase();
    var dia=document.getElementById("dia").value;
    var mes=document.getElementById("mes").value;
    var anio=document.getElementById("anio").value;
    var rfc=ap.substring(0,2)+am.substring(0,1)+nombre.substring(0,1)+dia+mes+anio.substring(2,4);
    document.getElementById("rfc").value=rfc;
}