
var arr1 = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, 
			 { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" }, 
			 { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" }, 
			 { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" }, 
			 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ]


arr1.forEach(function(objeto) {

document.write("<div> <ul> <li> Nombre: " + objeto.nombre +"</li> <li> Apellido: " + objeto.apellido + "</li> <li> Rol: " + objeto.rol + "</li> <li> Cumpleaños: " + objeto.cumpleanios + "</li></ul></div>" );

})








