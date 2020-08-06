const app = new Vue({
    el: '#app',
    data: {
        apellidos: [],
        nuevoApellido: '',
    },
    methods: {
        agregarApellido: function(){
            this.apellidos.push({
                apellido: this.nuevoApellido
            });
            this.nuevoApellido= '';
        },
    },
})