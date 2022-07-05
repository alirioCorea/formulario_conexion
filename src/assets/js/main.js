const form=document.querySelector('#formulario');
const newTarea=document.querySelector('#newTarea');
const form_content=document.querySelector('#form-content');

function newForm(){
    const formulario=`
    <div class="mb-3">
        <select class="form-select" aria-label="Default select example" id="form-tarea" onChange="crearLista()">
            <option disabled selected>Tarea</option>
            <option value="1">Desarrollo web</option>
            <option value="2">Desarrollo móvil</option>
            <option value="3">Videojuegos</option>
            <option value="4">Realidad virtual</option>
            <option value="5">Machine learning</option>
            <option value="6">Seguridad informática</option>
        </select>
    </div>
    <div class="mb-3">
        <select class="form-select" aria-label="Default select example" id="form-personal">
            <option disabled selected>Personal</option>
        </select>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label descripcion">Descripción</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <select class="form-select" id="form-estado">
            <option disabled selected>Estado</option>
            <option value="1">Iniciado</option>
            <option value="2">En progreso</option>
            <option value="3">Se reintentara</option>
            <option value="4">Terminada</option>
        </select>
    </div>
    <div class="mb-3 d-flex justify-content-center">
        <input type="submit" value="Añadir" class="btn btn-danger">
    </div>
    `;
    form.innerHTML=formulario;
    newTarea.style.display = 'none';
}

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

function validarFormulario(){
}