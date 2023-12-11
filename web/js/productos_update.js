var id = location.search.substring(4).split('&');
// lee los argumentos pasados a este formulario

const app = new Vue({
    el: "#appUpdate",
    data: {
        productos: [],
        subtipos:{},
        errored: false,
        loading: true
    },
    created() {
        // var url = 'https://codo25537.pythonanywhere.com/productos/'+id  
        // var urlSubtipo = 'https://codo25537.pythonanywhere.com/subtipos'
        var url = 'https://codo25537.pythonanywhere.com/productos/'+id  
        var urlSubtipo = 'https://codo25537.pythonanywhere.com/subtipos'
        this.fetchData(url,urlSubtipo)
    },
    methods: {
        fetchData(url,urlSubtipo) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
             //       this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
            fetch(urlSubtipo)
                .then(response => response.json())
                .then(data => {
                    this.subtipos = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        
    }
})








/* 
function modificarProductos() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let d = document.getElementById("txtDescripcion").value
    let su = parseInt(document.getElementById("txtSubtipo").value)
    
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
    let url = "http://localhost:5000/productos/"+id
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
*/