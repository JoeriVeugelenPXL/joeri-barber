<template>
  <div class="afspraak">
    <!-- INFO VANBOVEN OP DE PAGINA -->
    <h1 class="afspraak__header">AFSPRAAK MAKEN</h1>
    <p class="afspraak__paragraph">
      U kunt uit onderstaande lijst een tijdstip kiezen dat het best voor u
      past.
    </p>

    <!-- LIJST VAN BESCHIKBARE AFSPRAKEN -->
    <v-card class="mx-auto afspraak__afspraken" max-width="300" tile>
      <v-list shaped>
        <v-subheader>BESCHIKBARE AFSPRAKEN:</v-subheader>
        <v-list-item-group color="primary" active-class="bg-active">
          <v-list-item
            v-for="item in afspraken"
            :key="item.id"
            @click="selectedItem = item.id"
          >
            <v-list-item-icon>
              <v-icon>mdi-content-cut</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.datum"></v-list-item-title>
              <v-list-item-subtitle v-text="item.tijd"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <form @submit.prevent="makeAfspraak" ref="afspraakForm">
      <!-- INPUT BOX -->
      <v-text-field
        color="#00BFA5"
        class="afspraak__nameInput"
        label="Naam"
        hide-details="auto"
        required
        dark
        v-model="naam"
      ></v-text-field>

      <!-- KNOP -->
      <div class="container">
        <v-btn class="mr-4 afspraak__appointmentButton" type="submit">
          submit
        </v-btn>
      </div>
    </form>

    <!-- SNACKBAR -->
    <v-snackbar color="#00BFA5" v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.getAfspraken();
  },
  data() {
    return {
      selectedItem: null,
      afspraken: null,
      naam: null,
      snackbar: false,
      text: "Afspraak succesvol gemaakt",
      timeout: 2000,
    };
  },
  methods: {
    getAfspraken() {
      const uri = "http://localhost:3000/afspraken?ingepland=false";
      fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          if (!response.ok) {
            alert("Er is iets fout gegaan tijdens het laden van de afspraken");
          } else {
            response.json().then(
              (data) => (
                {
                  data: data,
                  status: response.status,
                },
                (this.afspraken = data)
              )
            );
          }
        })
        .catch(() => {
          alert("Er is iets fout gegaan tijdens het laden van de afspraken");
        });
    },
    makeAfspraak() {
      if (this.selectedItem != null) {
        let url = `http://localhost:3000/afspraken/${this.selectedItem}`;
        const requestOptions = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            naam: this.naam,
            ingepland: true,
          }),
        };
        fetch(url, requestOptions)
          .then(async (response) => {
            const data = await response.json();

            if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
            this.snackbar = true;
            setTimeout(() => {
              this.$router.go();
            }, 2000);
          })
          .catch((error) => {
            this.errorMessage = error;
            console.error("There was an error!", error);
          });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.afspraak {
  height: 100%;
  background-image: url("https://i.pinimg.com/originals/fc/98/0b/fc980b6ec648175e3c8ac9e9f1ed57f2.jpg");
  color: white;
}

.afspraak__header {
  text-align: center;
  padding-top: 20px;
  text-decoration: underline;
  text-decoration-color: #00bfa5;
}
.afspraak__paragraph {
  text-align: center;
}
.afspraak__afspraken {
  margin-top: 20px;
}

.afspraak__nameInput {
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.container {
  width: 100%;
  text-align: center;
}
.afspraak__appointmentButton {
  color: white;
  background-color: #00bfa5 !important;
  padding: 10px;
  border-radius: 15px;
  font-weight: bold;
}

/* VUETIFY CLASSES */
.bg-active {
  background-color: #00bfa5 !important;
  color: rgb(30, 30, 30);
}
</style>
