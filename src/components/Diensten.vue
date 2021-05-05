<template>
  <div class="diensten">
    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="item.img" height="225px">
                  <v-card-title
                    class="title white--text"
                    style="margin-top: 50px; font-weight: bold"
                  >
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p
                        class="mt-4 subheading text-center"
                        style="
                          background-color: rgb(30, 30, 30);
                          width: 75%;
                          margin: 0 auto;
                          color: white;
                          border: 2px solid #00bfa5;
                          border-radius: 15px;
                        "
                      >
                        {{ item.title }}
                      </p>

                      <div>
                        <p
                          class="body-1 font-weight-bold font-italic text-center"
                          style="
                            background-color: rgb(30, 30, 30);
                            width: 50%;
                            margin: 0 auto;
                            color: white;
                            border-radius: 15px;
                          "
                        >
                          {{ item.text }}
                        </p>
                        <p
                          class="caption font-weight-medium font-italic text-center"
                          style="
                            background-color: #00bfa5;
                            width: 25%;
                            margin: 0 auto;
                            color: rgb(30, 30, 30);
                            border-radius: 15px;
                            border: 2px solid rgb(30, 30, 30);
                          "
                        >
                          {{ item.subtext }}
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    items: [
      {
        title: "HAIRCUT",
        text: `Keuze uit alle stijlen`,
        subtext: "30 EUR",
        img:
          "https://st4.depositphotos.com/7838116/29817/i/450/depositphotos_298171872-stock-photo-mens-haircut-haircut-with-scissors.jpg",
      },
      {
        title: "BEARD",
        text: "Keuze uit alle stijlen",
        subtext: "20 EUR",
        img:
          "https://img.freepik.com/free-photo/barber-works-with-beard-clipper-hipster-client-getting-haircut-hands-hairdresser-with-beard-clipper-closeup-black-white_293990-319.jpg?size=626&ext=jpg",
      },
      {
        title: "HAIR + BEARD",
        text: "Keuze uit alle stijlen",
        subtext: "45 EUR",
        img:
          "https://p2.piqsels.com/preview/476/642/571/black-and-white-monochrome-haircut-barbershop.jpg",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>

<style lang="scss" scoped></style>
