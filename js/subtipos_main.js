 if (document.getElementById("appSubtipo")) {
    const app1 = new Vue({
        el: "#appSubtipo",
        data: {
            datos: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'https://codo25537.pythonanywhere.com/subtipos'
            // var url = 'http://127.0.0.1:5000/subtipos'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.datos = data;
                        this.loading = false;
                        console.log(this.datos)             
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(id) {
             const url = 'https://codo25537.pythonanywhere.com/subtipos/' + id;              
                // const url = 'http://127.0.0.1:5000/subtipos/' + id;              
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            },
            
        }
    })
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
    // let url = "https://codo25537.pythonanywhere.com/productos"
    let url = "http://127.0.0.1:5000/productos"
  
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
  function mostrarVistaPrevia() {
    var inputFoto = document.getElementById("txtFoto");
    var vistaPrevia = document.getElementById("vistaPrevia");

    // Verificar si se proporciona una URL de imagen
    if (inputFoto.value) {
        // Mostrar la vista previa y establecer la URL de la imagen
        vistaPrevia.style.display = "block";
        vistaPrevia.src = inputFoto.value;
    } else {
        // Ocultar la vista previa si no hay URL de imagen
        vistaPrevia.style.display = "none";
    }
}

