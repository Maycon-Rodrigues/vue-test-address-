new Vue({
  el: '#app',
  data: {
    cep: '',
    endereco: {}
  },
  methods: {
    buscar: function(){
      if(this.cep.length == 8){
        $.get('https://viacep.com.br/ws/'+this.cep+'/json', res =>{
          this.endereco = res
          $("#number-input").focus()
        })
      }else {
        this.endereco = {}
      }
    }
  }
})
