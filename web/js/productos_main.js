
 if (document.getElementById("app")) {
    const app = new Vue({
      el: "#app",
      data: {
        productos: [],
        subtipos:{},
        errored: false,
        loading: true,
        nuevoProducto: {
          nombre: "",
          descripcion: "",
          subtipo: "",
          precio: 0,
          stock: 0,
          foto: ""
        }
      },
      created() {
        var url = 'https://codo25537.pythonanywhere.com/productos'
        var urlSubtipo = 'https://codo25537.pythonanywhere.com/subtipos'
        
        this.fetchData(url,urlSubtipo)
      },
      methods: {
        fetchData(url,urlSubtipo) {
          fetch(url)
            .then(response => response.json())
            .then(data => {
              this.productos = data;
              this.loading = false;
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
        eliminar(id) {
          const url = 'https://codo25537.pythonanywhere.com/productos/' + id;
         
          var options = {
            method: 'DELETE',
          }
          fetch(url, options)
            .then(res => res.text())
            .then(res => {
              location.reload();
            })
        },
        grabar() {
          const url = 'https://codo25537.pythonanywhere.com/productos';
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.nuevoProducto)
          };
  
          fetch(url, options)
            .then(response => response.json())
            .then(data => {
             
              console.log(data);
              console.log("creado");
          alert("Grabado");
              this.fetchData(url);
            })
            .catch(error => {
              console.error('Error al grabar el producto:', error);
            });
        }
      }
    })
  } 

  
  


if (document.getElementById("app2")) {
  const { createApp } = Vue;

  createApp({
      data() {
          return {
              url: 'https://codo25537.pythonanywhere.com/productos',
              error: false,
              datosFinales: [],
              datos: [],
              subtipos: [],
              subtipo: ""
          };
      },
      methods: {
          fetchdata(url) {
              fetch(url)
                  .then(response => response.json())
                  .then(data => {
                      this.datos = data;
                      this.datosFinales = data;
  
                      for (elemento of this.datos) {
                          if (this.subtipos.indexOf(elemento.subtipo) < 0)
                              this.subtipos.push(elemento.subtipo);
                      }
                      console.log(this.subtipos);
                  });
          },
          filtarDatos() {
              if (this.subtipo === "") {
                  this.datosFinales = [...this.datos]; // Mostrar todos los datos
              } else {
                  this.datosFinales = this.datos.filter(x => x.subtipo === this.subtipo);
                  
              }
          },
           ordenarDatos() {
            if (document.querySelector("#ordenNombreAsc").checked || document.querySelector("#ordenNombreDesc").checked) {
              this.datosFinales.sort((a, b) =>
                  (document.querySelector("#ordenNombreAsc").checked ?
                      a.nombre.toUpperCase() > b.nombre.toUpperCase() :
                      a.nombre.toUpperCase() < b.nombre.toUpperCase()) ? 1 : -1
              );
          
          } else if (document.querySelector("#ordenPrecioAsc").checked || document.querySelector("#ordenPrecioDesc").checked) {
              this.datosFinales.sort((a, b) =>
                  (document.querySelector("#ordenPrecioAsc").checked ? a.precio - b.precio : b.precio - a.precio)
              );
          }

            console.log(this.datosFinales);
        }
    },
      created() {
          this.fetchdata(this.url);
      }
  }).mount('#app2');
  
} 

