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
          <v-toolbar-title>Tambah Todo</v-toolbar-title>
          <v-text-field
            class="mx-12 ml-1"
            v-model="noTambah"
            placeholder="No"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="namaTambah"
            placeholder="Nama"
            outlined
          ></v-text-field>
        <v-textarea
          solo
          v-model="deskripsiTambah"
          name="input-7-4"
          label="Deskripsi"
        ></v-textarea>
        <v-toolbar flat color="white">
            <v-btn
                class="text-center ml-auto ml-1"
                color="primary"
                @click="save"
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

    methods:{
    ...mapMutations('todo', [
      'tambah'
      ]),
      save () {
        const payload = {
          noTambah: (this.noTambah),
          namaTambah: (this.namaTambah),
          deskripsiTambah: (this.deskripsiTambah)
        }
        this.tambah(payload)
        this.$router.push('/todo')
      }
    },
    data: () => ({
      noTambah: null,
      namaTambah: '',
      deskripsiTambah: ''
    }),

    layout:'ldashboard'
}
</script>