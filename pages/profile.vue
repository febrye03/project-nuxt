<template>
    <div>
        <v-flex class="text-center">
        <h2>Hello world</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem, minima tempora odit laudantium saepe expedita fugiat dolorem ea! Cum accusantium vel eveniet voluptatem voluptates earum itaque omnis, recusandae tempora.</p>
        <v-btn
            nuxt to="/"
          >back
        </v-btn>
        </v-flex>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'nuxt it\'s so cool..'
        }
    },
    methods:{
        showAlert(e){
            alert(this.massage)
        }
    },
    layout:'ldashboard'
}
    
</script>

<style scoped>
/* body {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h2 {
  font-size: 48px;
  color: #389acd;
}
p {
  font-size: 18px;
  color: white;
} */
</style>