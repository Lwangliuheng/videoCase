<style scoped>

</style>
<template>
  <div class="message">
    
  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
       }
    },
    watch: {
     
    },
    created() {
      
    },
    mounted() {
       this.getInfo();
    },
    methods: {
       getInfo(){
         var id = localStorage.getItem("wIdData");
         // alert(id)
         axios.get(this.ajaxUrl+"/survey_single/v1/view?surveySingleId="+ id)
          .then(response => {
            //alert(111)
            $("html").html(response.data)
            //console.log(response,55555555555)
          }, err => {
                console.log(err);
          })
          .catch((error) => {
                console.log(error)
          })
       }

    },
    components: {
      
    },
    computed: {

    }
     
    
  }

</script>

