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
            placeholder="Nama"
            outlined
          ></v-text-field>
        <v-textarea
          solo
          name="input-7-4"
          label="Deskripsi"
        ></v-textarea>
        <v-toolbar flat color="white">
            <v-btn
                class="text-center ml-auto ml-1"
                color="primary"
                to="/todo/"
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
export default {
    layout:'ldashboard'
}
</script>