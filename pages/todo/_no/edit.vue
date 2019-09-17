<template>
<v-card width="55%" class="mx-auto mt-10">
  <v-form>
    <v-container>
      <v-row>
            
      <v-col  cols="12" sm="5" md="10" class="mx-auto mt-2">
    <template >
      <v-toolbar flat color="white">
          <v-btn
            color="primary"
            nuxt
            to="/todo/"
          >
            Kembali
          </v-btn>
        </v-toolbar>
    </template>
          <v-toolbar-title>Edit Todo</v-toolbar-title>
          <v-text-field
            v-model="namaEdit"
            placeholder="Nama"
            outlined
          ></v-text-field>
        <v-textarea
          solo
          v-model="deskripsiEdit"
          name="input-7-4"
          label="Deskripsi"
        ></v-textarea>
        <v-toolbar flat color="white">
            <v-btn
                class="text-center ml-auto ml-1"
                color="primary"
                @click="sunting"
                nuxt
            ><v-icon class="mr-1">mdi-content-save-all</v-icon>
                Simpan
            </v-btn>
        </v-toolbar>
      </v-col>


      </v-row>
    </v-container>
  </v-form>
</v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
    ...mapState({
      items: state => state.todo.items,      
      }),
    },

    created (){
      //console.log(this.items)
      const idx = this.items.findIndex((val) => {
        return val.no === parseInt(this.$route.params.no)
        })
        // console.log(this.$route.params.no)
      //   console.log(idx)
      this.namaEdit = this.items[idx].nama
      this.deskripsiEdit = this.items[idx].deskripsi
      console.log(this.namaEdit)
      console.log(this.items[idx].namaEdit)
      //this.items.findIndex(idx)
     // this.idx = this.items.findIndex(idx)
      // this.items[idx].namaEdit = 'namaEdit'
      // this.items[idx].deskripsiEdit = 'deskripsiEdit'
      // this.noEdit = this.$route.params.no
      // this.deskripsiEdit = this.items[idx].deskripsiEdit
      // this.namaEdit = this.items[idx].namaEdit
      },

    methods:{
    ...mapMutations('todo', [
      'edit'
      ]),
      sunting () {
        const std = {
          noEdit: this.$route.params.no,
          namaEdit: (this.namaEdit),
          deskripsiEdit: (this.deskripsiEdit)
        }
        this.edit(std)
        this.$router.change('/todo')
      }

    },

    data: () => ({
      noEdit: null,
      namaEdit: '',
      deskripsiEdit: ''
    }),

    layout:'ldashboard'
}
</script>