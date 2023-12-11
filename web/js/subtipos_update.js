
// lee el argumento id pasados a este formulario
var id = location.search.substring(4).split('&');
const app = new Vue({
    el: "#appSubtipo",
    data: {
        datos: [],
        errored: false,
        loading: true
    },
    created() {
         var url = 'https://codo25537.pythonanywhere.com/subtipos/'+id  
        // var url = 'http://127.0.0.1:5000/subtipos/'+id  //localhost:5000/subtipos/2
    
        this.fetchData(url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.datos = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },        
    }
})








/* function modificarSubtipo() {
    let id = document.getElementById("txtId").value
    let d = document.getElementById("txtDescripcion").value
    
    
    let subtipo = {
        descripcion:d
    }
    let url = "http://localhost:5000/subtipos/"+id
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
 */