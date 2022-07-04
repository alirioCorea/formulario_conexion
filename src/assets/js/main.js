const form=document.querySelector('#formulario');
const newTarea=document.querySelector('#newTarea');

function newForm(){
    const formulario=`
    <div class="mb-3">
        <select class="form-select" aria-label="Default select example">
            <option selected>Tarea</option>
            <option value="1">Desarrollo web</option>
            <option value="2">Desarrollo móvil</option>
            <option value="3">Videojuegos</option>
            <option value="3">Realidad virtual</option>
            <option value="3">Machine learning</option>
            <option value="3">Seguridad informática</option>
        </select>
    </div>
    <div class="mb-3">
        <select class="form-select" aria-label="Default select example">
            <option selected>Personal</option>
        </select>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label descripcion">Descripción</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <select class="form-select">
            <option selected>Estado</option>
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

form.addEventListener("submit", e=>{
    e.preventDefault();
});