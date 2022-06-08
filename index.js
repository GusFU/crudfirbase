
    //Me traigo mi db firestore
    import { getTasks, insertTask, deleteTask, updateTask, obtener_tarea} from "./utils.js";
    //console.log(db);
    //Extraigo todos los documentos de tasks y creo tarjetas con ellos
    getTasks();


    //Obtenemos el form y capturamos el submit
    const form = document.getElementById("task-form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const task = {
            title: form["task-title"].value,
            description: form["task-description"].value
        }

        insertTask(task);
    })


    const buttonsCardD = document.getElementsByName("delete");
    buttonsCardD.forEach(element => {
        element.addEventListener("click",  () => {
            var divDelete = element.parentNode.parentNode;
            document.body.removeChild(divDelete);
            //console.log("Estoy borrando la tarea: "+element.id);
            deleteTask(element.id);
        })
    });








    const form1 = document.getElementById("task-form1");
    form1.addEventListener("submit", e => {
        e.preventDefault();
        const id1 =  form1["task-id"].value
        const task1 = {
            title: form1["task-title1"].value,
            description: form1["task-description1"].value
        }
        updateTask(id1,task1);
    })

   const botonMod = document.getElementById("boton_modificar")
    botonMod.addEventListener("click", e => {
        e.preventDefault();
        const id2 =  form1["task-id"].value
        
        obtener_tarea(id2)
    })


