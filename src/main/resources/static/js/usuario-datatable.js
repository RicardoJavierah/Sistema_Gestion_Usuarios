// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuario();
  $('#usuarios').DataTable();
});

async function cargarUsuario(){
 let request =  await fetch("usuarios",{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })

    document.getElementById("fila-relleno").remove();//para eliminar la fila que pusimos de rellno para que no nos salga un mensaje de alerta
      let usuarios = await request.json();
      for (const usu of usuarios) {
        let registroHtml = ` <tr>
                                <td>${usu.id}</td>
                                <td>${usu.nombre}</td>
                                <td>${usu.apellido}</td>
                                <td>${usu.email}</td>
                                <td>${usu.telefono}</td>
                                <td>${usu.password}</td>
                                <td>
                                    <a href="#" class="btn btn-success btn-circle">
                                        <i class="fas fa-check"></i>
                                    </a>
                                    <a href="#" class="btn btn-warning btn-circle">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </a>
                                    <a href="#" class="btn btn-danger btn-circle">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>`
        document.querySelector("#usuarios tbody").outerHTML+=registroHtml;

      }
      
      
}