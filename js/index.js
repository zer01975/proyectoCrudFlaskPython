var cad = `
     

<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
<a class="navbar-brand" href="#">
    <img src="img/logo2 (1).jpeg" width="100" height="50" alt="Logo">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
        <!-- ... ( enlaces de navegación) ... -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sucursales.html">Sucursales</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Nuestros Productos.html">Nuestros Productos</a>
            </li>
            <li class="nav-item" id="crud" >
                <a class="nav-link" href="productos.html">Inventario Productos </a>
            </li>
            
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mi cuenta
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="login.html">Login</a>
                    <a class="dropdown-item" href="registro.html">Registro</a>
                    <div class="dropdown-divider"></div>
                    <a id="logoutLink" class="dropdown-item" href="#">logout</a>

                </div>
            </li>
           
            </li>
        </ul>
    </ul>
</div>
</nav>
`
document.getElementById("barraNav").innerHTML = cad
if (sessionStorage.getItem("adm")!="1"){
    document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
    document.querySelector("#crud").setAttribute('style', 'display:on')
}

cad = `
<div class="grupo-1">
<div class="logo">
    <a href="#">
        <img src="img/logo2 (2).jpeg" alt="Logo de SLee Dw">
    </a>
</div>
<div class="box">
    <h2>Nombre Proyecto</h2>
    <ul>
        <li><a href="#">Sobre el Proyecto</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Preguntas frecuentes</a></li>
        <li><a href="#">Ayuda</a></li>
    </ul>
</div>
<div class="box">
    <h2>SIGUENOS</h2>
    <div class="red-social">
        <a href="https://es-la.facebook.com/" class="fa fa-facebook"></a>
        <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
        <a href="https://twitter.com/?lang=es" class="fa fa-twitter"></a>
        <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
    </div>
</div>
</div>
<div class="grupo-2">
<p>&copy; 2023 <b>Clase-Codo a Codo</b> - Sitio desarrollado por:</p>
<span>Lucas González, Marcelo Pesoa, Lisandro Iguacel y Marcilia Nietto</span>
</div> 
`
document.getElementById("idfooter").innerHTML = cad
cad = `
<div class="modal fade" id="trackerModal" tabindex="-1" aria-labelledby="nuevoProyecto" aria-hidden="true">
<div class="modal-dialog" style="min-width: 75%;">
  <!--Con el min-width manejo el ancho del modal -->
  <div class="modal-content">

    <div class="modal-header">
      <h2 class="modal-title" id="nuevoProyecto">Registre nueva categoria</h2>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span>&times;</span>
              </button>
    </div>

    <div class="modal-body">
      <div class="container-fluid">
        <form>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="txtDescripcion">Descripcion:</label>
              <input type="text" class="form-control" name="txtDescripcion" id="txtDescripcion" :value="datos.descripcion" ><br>
            </div>
           
          </div>
        
        </form>
      </div>
    </div>
    <!--.modal-body-->
    <div class="modal-footer">
      
      <button  type="button"   class="btn btn-success" onclick="guardarSubtipo()">Grabar</button>
    </div>
  </div>
  <!--.modal-content-->
</div>
<!--.modal-dialog-->
</div>
`
document.getElementById("modalCargaCategoria").innerHTML = cad

cad=` <nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="index.html">Codo a Codo</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="index.html" aria-current="page">Home<span class="visually-hidden">(current)</span></a>
          </li>
        
          <li class="nav-item dropdown" id="crud"   >
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Administracion</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId" >
                  <a class="dropdown-item" href="productos.html">Productos</a>
                  <a class="dropdown-item" href="tipoproductos.html">Tipo Producto</a>
              </div>
          </li>
        <li class="nav-item">
              <a class="nav-link" href="registro.html">Registro</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="login.html">Login</a>
          </li>
      </ul>
  </div>
</div>
</nav>
`
document.getElementById("header").innerHTML=cad
if (sessionStorage.getItem("adm")!="1"){
    document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
    document.querySelector("#crud").setAttribute('style', 'display:on')
}





function guardarProducto() {

  let n = document.getElementById("txtNombre").value
  let d = document.getElementById("txtDescripcion").value
  let su =document.getElementById("txtSubtipo").value
  let p = parseFloat(document.getElementById("txtPrecio").value)
  let s = parseInt(document.getElementById("txtStock").value) 
  let f = document.getElementById("txtFoto").value
  
  let producto = {
      nombre: n,
      descripcion:d,
      subtipo:su,
      precio: p,
      stock: s,
      foto:f
  }
  let url = "https://codo25537.pythonanywhere.com/productos"

  var options = {
  body: JSON.stringify(producto),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     // redirect: 'follow'
  }
  fetch(url, options)
      .then(function () {
          console.log("creado")
          alert("Grabado")

          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          alert("Error al grabar" )

          console.error(err);
      })
}


document.getElementById("guardarBtn").addEventListener("click", guardarProducto);


 
function modificarProductos() {
  let id = document.getElementById("txtId").value
  let n = document.getElementById("txtNombre").value
  let d = document.getElementById("txtDescripcion").value
  let su = document.getElementById("txtSubtipo").value
  
  let p = parseFloat(document.getElementById("txtPrecio").value)
  let s = parseInt(document.getElementById("txtStock").value)
  let f =document.getElementById("txtFoto").value
  
  
  let producto = {
      nombre: n,
      descripcion:d,
      subtipo:su,
      precio: p,
      stock: s,
      foto:f
  }
 // let url = "http://192.168.1.115:8080/productos/"+id
  let url = "https://codo25537.pythonanywhere.com/productos/"+id
  var options = {
      body: JSON.stringify(producto),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      //redirect: 'follow'
  }
  fetch(url, options)
      .then(function () {
          console.log("modificado")
          alert("Registro modificado")
          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          console.error(err);
          alert("Error al Modificar")
      })      
}
// function guardarSubtipo() {

//     let d = document.getElementById("txtDescripcion").value
    
//     let producto = {
//         descripcion:d,
//     }
//     let url = "https://codo25537.pythonanywhere.com/subtipos"
  
//     var options = {
//         body: JSON.stringify(producto),
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//     }
//     fetch(url, options)
//         .then(function () {
//             console.log("creado")
//             alert("Grabado")
  
//             // Handle response we get from the API
//         })
//         .catch(err => {
//             //this.errored = true
//             alert("Error al grabar" )
  
//             console.error(err);
//         })
//   }
function guardarSubtipo() {
    let d = document.getElementById("txtDescripcion").value
    
    let producto = {
        descripcion: d,
    }
    let url = "https://codo25537.pythonanywhere.com/subtipos";
  
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("creado");
            alert("Grabado");
            
            // Agrega la recarga de la tabla
            location.reload();
        })
        .catch(err => {
            alert("Error al grabar");
            console.error(err);
        });
}

 function modificarSubtipo() {
  let id = document.getElementById("txtId").value
  let d = document.getElementById("txtDescripcion").value
  
  
  let subtipo = {
      descripcion:d
  }
  let url = "https://codo25537.pythonanywhere.com/subtipos/"+id
  var options = {
      body: JSON.stringify(subtipo),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      //redirect: 'follow'
  }
  fetch(url, options)
      .then(function () {
          console.log("modificado")
          alert("Registro modificado")
          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          console.error(err);
          alert("Error al Modificar")
      })      
} 

function mostrarVistaPrevia() {
    var urlImagen = document.getElementById('txtFoto').value;
    var vistaPrevia = document.getElementById('vistaPrevia');
    
    if (urlImagen.trim() !== '') {
      vistaPrevia.src = urlImagen;
      vistaPrevia.style.display = 'block';
    } else {
      vistaPrevia.src = '';
      vistaPrevia.style.display = 'none';
    }
  }
  
  // Evento para actualizar la vista previa cuando se cambia el valor del campo de la URL de la imagen
  document.getElementById('txtFoto').addEventListener('input', mostrarVistaPrevia);
  
  // Función para enviar el formulario (puedes modificarla según tus necesidades)
  function enviarFormulario() {
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // Por ejemplo, puedes usar AJAX para enviar los datos al servidor
    // y luego cerrar el modal si la operación fue exitosa
  
    // Cerrar el modal
    $('#myModal').modal('hide');
  }

