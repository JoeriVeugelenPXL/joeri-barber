<template>
  <div class="contacteer">
    <!-- INFO VANBOVEN OP DE PAGINA -->
    <h1 class="contacteer__header">CONTACT OPNEMEN</h1>
    <p class="contacteer__paragraph">
      Indien u vragen heeft kunt u het onderstaande formulier gebruiken om ze in
      te sturen.
    </p>

    <!-- FORMULIER -->
    <form @submit.prevent="submitInformation" ref="contacteerForm">
      <!-- INPUT BOX -->
      <v-text-field
        color="#00BFA5"
        class="contacteer__input"
        label="Naam"
        hide-details="auto"
        required
        v-model="naam"
        dark
      ></v-text-field>

      <v-text-field
        color="#00BFA5"
        class="contacteer__input"
        label="Email"
        hide-details="auto"
        required
        type="email"
        v-model="email"
        dark
      ></v-text-field>

      <v-textarea
        color="#00BFA5"
        class="contacteer__input"
        name="input-7-1"
        label="Bericht"
        hint="Nadat u dit formulier inzend sturen we zo snel mogelijk een mail naar u terug"
        required
        v-model="bericht"
        dark
      ></v-textarea>

      <!-- KNOP -->
      <div class="container">
        <v-btn class="mr-4 contacteer__appointmentButton" type="submit">
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
  data() {
    return {
      name: null,
      email: null,
      bericht: null,
      snackbar: false,
      text: "Formulier succesvol ingediend",
      timeout: 2000,
    };
  },
  methods: {
    submitInformation() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam: this.naam,
          email: this.email,
          bericht: this.bericht,
        }),
      };
      fetch("http://localhost:3000/contactBerichten", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          this.snackbar = true;
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.contacteer {
  height: 100%;
  background-image: url("https://i.pinimg.com/originals/fc/98/0b/fc980b6ec648175e3c8ac9e9f1ed57f2.jpg");
  color: white !important;
}
.contacteer__header {
  text-align: center;
  padding-top: 20px;
  text-decoration: underline;
  text-decoration-color: #00bfa5;
}
.contacteer__paragraph {
  text-align: center;
}

.contacteer__input {
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.container {
  width: 100%;
  text-align: center;
}
.contacteer__appointmentButton {
  color: white;
  background-color: #00bfa5 !important;
  padding: 10px;
  border-radius: 15px;
  font-weight: bold;
}
</style>
