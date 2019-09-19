<template>
  <v-app  light>
                <!-- tampilan navigasi drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  v-text="item.title" />
          </v-list-item-content>
          
        </v-list-item>
        <!-- navigasi list -->

         <v-list-group
        v-for="item in items2"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
        nuxt
        router
        exact
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items2"
          :key="subItem.title"
          nuxt
          v-model="group"
          @click.stop="group = !group"
          :to="subItem.to"
          :append-icon="item.action"
          router
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      </v-list>
       <!-- tutup navigasi list -->

        <!-- tombol logout -->
       <template v-slot:append>
        <div class="pa-2">
          <v-btn  nuxt to="/login" 
                  block
                  color="#43A047">Logout</v-btn>
        </div>
      </template>
      <!-- tutup logout -->
    </v-navigation-drawer>
    <!-- tutup navigasi drawer -->

    <!-- navigasi  -->
    <v-app-bar
      :clipped-left="clipped"
      app
      color="#43A047"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <!-- baris footer -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>


<script>

export default {
  data: () =>  {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-account-circle',
          title: 'Welcome',
          to: '/profile'
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/dashboard'
        },
      ],
      group: false,
      items2: [
        { 
            title: 'kelola blog',
            action: 'mdi-chart-bubble',
            active: true,
            items2: [
              { 
                title: 'semua blog',
                action: 'mdi-chart-bubble',
                to: '/semua_blog'
              },
              { 
                title: 'tabel users',
                action: 'mdi-chart-bubble',
                to: '/table_user'
              },
              {
                title: 'kalkulator',
                to:'/kalkulator'
              },
              {
                title: 'todo',
                to:'/todo'
              },
              {
                title: 'pendaftaran',
                to:'/pendaftaran'
              }
            ],
          },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Dashboard'
    }
  }
}
</script>



















