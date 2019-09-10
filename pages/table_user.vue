<template>
  <v-card width="70%" class="mx-auto mt-10">
    <div class="text-center">
      <p>{{ loremTerbalik }}</p>
      <p>{{ nomor }}</p>
    <v-btn @click="tambah">Button</v-btn>
  </div>

  <v-data-table
    :headers="headers"
    :append-icon="headers.icon"
    :items="items"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>TABLE USERS</v-toolbar-title>
        <v-divider
          class="mx-5"
          inset
          vertical
        ></v-divider>
        
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <div class="mr-2"></div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on"> <v-icon class="mr-1">mdi-plus-box-multiple</v-icon>user</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field 
                      v-model="editedItem.email" 
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field 
                      v-model="editedItem.name"
                      :rules="nameRules"
                      label="name"
                      required 
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field 
                      v-model="editedItem.password" 
                      label="Password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="passwordRules"
                      :type="show1 ? 'text' : 'password'"
                      name="password"
                      @click:append="show1 = !show1"
                      required>
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
  </v-card>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    data: () => ({
      lorem:'lorem',
      show1: false,
      dialog: false,
      search: '',
      headers: [
        {
          text: 'name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { 
          text: 'Email', 
          value: 'email',
          sortable: false, 
        },
        { 
          text: 'Password', 
          value: 'password',
          icon: 'mdi-eye-off',
          sortable: false,
        },
        { 
          text: 'Actions', 
          value: 'action', 
          sortable: false },
      ],
      items:[],
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
        password: '',
      },
      defaultItem: {
        name: '',
        email: '',
        password: '',
      },
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 6) || 'Name must be less than 6 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
       password: '',
       passwordRules: [
        v => !!v || 'password is required.',
        v => v && v.length >= 8 || 'Min 8 characters',
       ],
    }),

    computed: {
      ...mapState({
        nomor: state => state.tabel.nomor,
        // items: state => state.tabel.items,
      }),
      ...mapGetters('tabel', [
        'formTitle'
      ]),
      formTitle () {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
      },
      loremTerbalik(){
        var splitString = this.lorem.split("")
        var reverseArray = splitString.reverse()
        var joinArray = reverseArray.join("")
        return joinArray
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      ...mapMutations('tabel', [
        'tambah',
        'initialize',
      ]),
      initialize () {
        this.items = [
          {
            name: 'Febrye Hasnan Boenari',
            email: 'febryhasnan03@gmail.com',
            password: 12345678,
          },
          {
            name: 'Fanny Mutianisa',
            email: 'Fanny@gmail.com',
            password: 12345678,
          },
          {
            name: 'Ilham Firmansyah',
            email: 'ilham@gmail.com',
            password: 12345678,
          },
        ]
      },
      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true 
        
      },
      deleteItem (item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      },
    },
    layout:'ldashboard'
  }
</script>