<template>
  <v-card width="55%" class="mx-auto mt-10">
  <v-data-table
    :headers="headers"
    :items="items"
    sort-by="calories"
    class="elevation-1"
  >
  <template v-slot:top>
      <v-toolbar flat color="white">
          <v-btn
            color="primary"
            nuxt
            to="/todo/add"
          ><v-icon class="mr-1">mdi-plus-box-multiple</v-icon>
            Tambah
          </v-btn>
          <v-divider
          class="mx-5"
          inset
          vertical
        ></v-divider>
        <v-toolbar-title>DATA TABLE</v-toolbar-title>
      </v-toolbar>
  </template>
    <template v-slot:item.action="{ item }">
       <v-btn 
        class="ma-2" 
        text icon 
        :to="`/todo/${item.no}/edit`"
        >
      <v-icon
        small
        class="mr-2"
        nuxt
      >
        mdi-pencil
      </v-icon>
       </v-btn>
      <v-icon
        small
        @click="deleteItem(item)"
        nuxt
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

  export default {
    data: () => ({
      headers: [
        {
          text: 'No',
          align: 'left',
          sortable: false,
          value: 'no',
        },
        { 
          text: 'Nama', 
          sortable: false,
          value: 'nama', 
        },
        { 
          text: 'Deskripsi',
          sortable: false, 
          value: 'deskripsi' 
          },
        { 
          text: 'Actions', 
          value: 'action', 
          sortable: false 
        },
      ],
      // items: [],
      editedIndex: -1,
      editedItem: {
      },
    }),

    computed: {
    ...mapState({
      items: state => state.todo.items,      
      }),
    },

    methods: {
      // initialize () {
      //   this.items = [
      //     {
      //       no: 1,
      //       nama: 'todo 1',
      //       deskripsi: 'asal',
      //     },
      //     {
      //       no: 2,
      //       nama: 'todo 2',
      //       deskripsi: 'asal',
      //     },
      //     {
      //       no: 3,
      //       nama: 'todo 3',
      //       deskripsi: 'asal',
      //     },
      //   ]
      // },

      editItem(item) {
        
      },

      deleteItem (item) {
        const index = this.items.indexOf(item) 
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },
    },
    layout:'ldashboard'
  }
</script>