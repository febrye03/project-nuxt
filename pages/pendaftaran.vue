<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-card width="55%" class="mx-auto mt-10">
    <v-col cols="12" sm="6"  class="mx-auto">
    <v-toolbar-title ><b><h2>TABLE USERS</h2></b></v-toolbar-title>
    </v-col>
    
    <v-col cols="12" sm="6" md="10" class="mx-auto">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="10" class="mx-auto">
    <v-text-field
      v-model="username"
      :rules="usernameRules"
      label="username"
      required
    ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="10" class="mx-auto">
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="password"
      @click:append="show = !show"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      required
    ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="10" class="mx-auto">
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    </v-col>

    <v-col cols="12" md="10" class="mx-auto">
    <v-btn
      color="success"
      class="mr-4"
      @click="save"
    >
      save
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
    </v-col>

    <v-col cols="12" md="11" class="mx-auto mt-10">
    <v-data-table
    :headers="headers"
    :append-icon="headers.icon"
    :items="items"
    sort-by="calories"
    class="elevation-1"
  >
    </v-data-table>
    </v-col>
    </v-card>    
  </v-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

  export default {
    data: () => ({
      valid: true,
      show: false,
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
       username: '',
       usernameRules: [
        v => !!v || 'username is required',
      ],
      checkbox: false,

      headers: [
        {
          text: 'username',
          align: 'left',
          sortable: false,
          value: 'username',
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
      ],
    //   items:[],
    }),

    computed:{
        ...mapState({
            items: state => state.daftar.items,
        })
    },

    methods: {
        ...mapMutations('daftar', [
            'simpan'     
        ]),
        save () {
        const payload = {
          username: (this.username),
          email: (this.email),
          password: (this.password)
        }
        this.simpan(payload)
        this.$router.push('/pendaftaran')
      },

      reset () {
        this.$refs.form.reset()
      },
    },
    layout:'ldashboard'
  }
</script>