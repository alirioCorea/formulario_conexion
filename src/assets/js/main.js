const form=document.querySelector('#formulario');
const cards=document.querySelector('#cards');
const database=window.localStorage;
let registroList=0;

function crearLista(){
    const form_tarea=document.querySelector('#form-tarea');
    const form_personal=document.querySelector('#form-personal');
    crearPersonas(form_personal,form_tarea.value);
}

function crearPersonas(personal,tarea){
    let people=[];
    let opcion="";
    switch(tarea){
        case "1":
            personal.innerHTML="<option disabled selected>Personal</option>";
            people=["Jorge", "Emerson", "Juan"];
            opcion=crearOpcion(people);
            personal.innerHTML+=opcion;
            break;
        case "2":
            personal.innerHTML="<option disabled selected>Personal</option>";
            people=["Daniel", "Carlos", "Victor"];
            opcion=crearOpcion(people);
            personal.innerHTML+=opcion;
            break;
        case "3":
            personal.innerHTML="<option disabled selected>Personal</option>";
            people=["Alirio", "Josue", "Daniela"];
            opcion=crearOpcion(people);
            personal.innerHTML+=opcion;
            break;
        case "4":
            personal.innerHTML="<option disabled selected>Personal</option>";
            people=["Jeremy", "Felipe"];
            opcion=crearOpcion(people);
            personal.innerHTML+=opcion;;
            break;
        case "5":
            personal.innerHTML="<option disabled selected>Personal</option>";
            people=["Teresa", "María", "Jorge","Roberto","Angel","David"];
            opcion=crearOpcion(people);
            personal.innerHTML+=opcion;
            break;
        case "6":
            personal.innerHTML="<option disabled selected>Personal</option>";
            people=["Nelson", "Jaime", "Roxana"];
            opcion=crearOpcion(people);
            personal.innerHTML+=opcion;
            break;
    }
}

form.addEventListener("submit", e=>{
    e.preventDefault();
    let form_tarea=document.querySelector('#tarea');
    let tipo_tarea=document.querySelector('#form-tarea');
    let form_personal=document.querySelector('#form-personal');
    let form_descripcion=document.querySelector('#form-descripcion');
    let form_estado=document.querySelector('#form-estado');
    if(tipo_tarea.value==6){ 
        Swal.fire({
            title:"Error",
            text:"No se puede añadir mas tareas a este tipo",
            icon:"error"
        });
    }
    else{
        if(validarFormulario(form_tarea.value,tipo_tarea.value,form_personal.value,form_descripcion.value,form_estado.value)){
            let tarea={
                tarea:form_tarea.value,
                tareaTipo:tipo_tarea.options[tipo_tarea.selectedIndex].innerText,
                personal:form_personal.options[form_personal.selectedIndex].innerText,
                descripcion:form_descripcion.value,
                estado:form_estado.options[form_estado.selectedIndex].innerText,
            }
            guardarDtos(tarea);
            registroList++;
            crearCard(tarea);
            form.reset();
        }
    }
});

function crearOpcion(array){
    let salida="";
    array.forEach((element, index) => {
        salida+=`
        <option value="${index+1}">${element}</option>
        `;    
    });
    return salida;
}

function validarFormulario(tarea,form_tarea,form_personal,form_descripcion,form_estado){
    if(tarea=="" || form_tarea==""|| form_personal==""|| form_descripcion==""|| form_estado=="" || form_descripcion.length<20){
        Swal.fire({
            title:"Error",
            text:"Algunos campos estan vacios o la decripcion esta mal",
            icon:"error"
        });
        return false;
    }
    else{
        Swal.fire({
            title:`Tarea Añadida`,
            icon:"success"
        });

        return true;
    }
} 

function guardarDtos(datos){
    database.setItem(registroList,JSON.stringify(datos));
}

function crearCard(card){
    cards.innerHTML+=`
    <div class="card">
        <div class="card-titulo card-espacio">
            <h3>${card.tarea}</h3>
        </div>
        <div class="card-categoria card-espacio">
            <h3 class="card-ele">Categoria: </h3>
            <p>${card.tareaTipo}</p>
        </div>
        <div class="card-desarrollo card-espacio">
            <h3 class="card-ele">Desarollador: </h3>
            <p>${card.personal}</p>
        </div>
        <div class="card-estado card-espacio">
            <h3 class="card-ele">Estado: </h3>
            <p>${card.estado}</p>
        </div>
        <div class="card-categoria card-espacio">
            <p>
                ${card.descripcion}. <span>Ver mas</span>
            </p>
        </div>
    </div>
    `;
}

function consultarLocalStorage() {
    let cantidadDeRegistros = parseInt(database.getItem("cantidadDeRegistros"));
    if (cantidadDeRegistros > 0) {
        registroActual = cantidadDeRegistros;
        let claves = Object.keys(database).sort(function (a, b){return a-b});
        for (let i = 0; i < claves.length; i++) {
            var persona = JSON.parse(database.getItem(claves[i]));
            if(typeof(persona)!="number"){
                imprimirDatos(persona);
            }
        }
    }
}