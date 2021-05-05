<template>
  <div class="home">
    <!-- CAROUSEL -->
    <v-carousel class="home__carousel">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <!-- WELKOMS BOODSCHAP -->
    <div class="home__welcome">
      <h1 class="home__welcomeHeader">WELKOM!</h1>
      <p class="home__welcomeText">
        Welkom op mijn website. Hier vind je nuttige informatie zoals de
        diensten en prijzen van de barbershop en de mogelijkheden om een
        afspraak te maken. Ik verheug mij op je bezoek aan BARBER JOERI.
      </p>
    </div>

    <!-- DIENSTEN -->
    <div class="home__services">
      <h1 class="home__servicesHeader">DIENSTEN</h1>
      <Diensten class="home__servicesItem"></Diensten>
    </div>

    <!-- AFSPRAAK MAKEN -->
    <div class="home__appointment">
      <h1 class="home__appointmentHeader">AFSPRAAK MAKEN</h1>
      <p class="home__appointmentText">
        Als u graag een afspraak wilt maken dan nodigen we u vriendelijk uit om
        naar het nummer <span style="font-weight: bold">0473 61 43 90</span> te
        bellen of online een afspraak te maken via onderstaande knop.
      </p>
      <a class="home__appointmentButton" @click="goToAfspraakPage"
        >AFSPRAAK MAKEN</a
      >
    </div>

    <!-- FOOTER -->
    <Footer></Footer>
  </div>
</template>

<script>
import Diensten from "../components/Diensten.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Diensten,
    Footer,
  },
  data() {
    return {
      items: [
        {
          src: "https://wallpaperaccess.com/full/1936492.jpg",
        },
        {
          src: "https://wallpaperaccess.com/full/1936484.jpg",
        },
        {
          src: "https://wallpaperaccess.com/full/1936586.jpg",
        },
      ],
    };
  },
  methods: {
    goToAfspraakPage() {
      this.$router.push("afspraak");
    },
  },
};
</script>

<style lang="css" scoped>
.home {
  color: rgb(30, 30, 30);
}

.home__carousel {
  border-bottom: 5px solid rgb(30, 30, 30);
  background-color: black;
}

.home__welcome {
  margin-top: 20px;
  text-align: center;
  border-bottom: 5px solid black;
}
.home__welcomeHeader {
  text-decoration: underline;
  text-decoration-color: #00bfa5;
}
.home__welcomeText {
  margin-top: 10px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.home__services {
  text-align: center;
  background-color: rgb(30, 30, 30);
  color: white;
}
.home__servicesHeader {
  padding-top: 20px;
  text-decoration: underline;
  text-decoration-color: #00bfa5;
}
.home__servicesItem {
  padding-bottom: 20px;
  border-bottom: 5px solid black;
}

.home__appointment {
  margin-top: 20px;
  text-align: center;
  border-bottom: 5px solid black;
  padding-bottom: 20px;
}
.home__appointmentHeader {
  color: rgb(30, 30, 30);
  text-decoration: underline;
  text-decoration-color: #00bfa5;
}
.home__appointmentText {
  margin-top: 10px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.home__appointmentButton {
  text-decoration: none;
  color: white;
  background-color: #00bfa5;
  padding: 10px;
  border-radius: 15px;
  font-weight: bold;
}
</style>
