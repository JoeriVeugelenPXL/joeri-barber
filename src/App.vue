<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="title"
            style="
              background-color: #1e1e1e;
              color: white;
              padding: 0 20px;
              border-radius: 15px;
              text-align: center;
              text-decoration: underline;
              text-decoration-color: #00bfa5;
            "
          >
            BARBER JOERI
          </v-list-item-title>
          <v-list-item-subtitle style="text-align: center">
            BELGIUM'S BEST BARBER
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider style="margin-top: -3px"></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        style="
          background-color: #1e1e1e;
          color: white;
          padding: 0 20px;
          border-radius: 15px;
          text-decoration: underline;
          text-decoration-color: #00bfa5;
        "
        >BARBER JOERI</v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Afspraak maken", icon: "mdi-pencil", to: "/afspraak" },
      { title: "Contacteer", icon: "mdi-card-account-mail", to: "/contacteer" },
    ],
  }),
};
</script>

<style lang="css" scoped></style>
