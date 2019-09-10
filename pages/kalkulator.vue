<template>
 <v-card width="80%" class="mx-auto mt-10">
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form1"
            :rules="form"
            label="form1"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form2"
            :rules="form"
            label="form2"
            required
          ></v-text-field>
        </v-col>
        <v-btn class="mt-6 mr-4" @click="plus" value="+">tambah</v-btn>
      </v-row>
      <p>Hasil : {{ hasil }}</p>
      <p>Hasil kuadrat : {{ kuadrat }}</p>
      <p>Hasil kubik : {{ kubik }}</p>
    </v-container>
  </v-form>
 </v-card>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from 'vuex'

  export default {
    methods:{
      ...mapMutations('jumlah', [
        'tambah'
      ]),
      plus () {
        const payload = {
          form1: parseInt(this.form1),
          form2: parseInt(this.form2)
        }
        this.tambah(payload)
      }
    //   tambah(){
    //   //let jumlah = parseInt(this.form1)+parseInt(this.form2)
    //   //this.hasil=jumlah
    //   }
    },
    data: () => ({
      valid: false,
      // hasil:0,
      form1: null,
      form2: null,
      form: [v => !!v || 'Name is required', ],
      
    }),

    computed: {
      ...mapState({
        hasil: state => state.jumlah.hasil,
      }),
      ...mapGetters('jumlah', [
        'kuadrat',
        'kubik'
      ]),
      // kuadrat(){
      //   return this.hasil*this.hasil
      // },
      // kubik(){
      //   return this.hasil*this.hasil*this.hasil
      // }
    },
    layout:'ldashboard'
  }
</script>