(1) ROUTES
    Gemeenschappelijk:
        GET /afspraken
        GET /afspraken?ingepland=false
        PATCH /afspraken/{id}
    Joeri Veugelen
        POST /contactBerichten
  
(2) VALIDATIE
  PATCH /afspraken/{id} src/views/Afspraak.vue r.32-50 & r.109-138
  POST /contactBerichten src/components/UpdatablePerson.vue r.11-51 & r.79-103
  
(3) SCREENCASTS
  Joeri Veugelen https://www.youtube.com/watch?v=SF5RtxIMJWE
  
(4) BONUSPUNTEN
  .vue files src/components/ & src/views
  Vuex src/store/index.js (niet nodig gehad maar wel geïmporteerd)
  vue-router src/router/routes.js
  eslint eslint.txt

  
