<template>
  <div id="home">
    <h4>Agendamentos</h4>

    <div class="loading" v-if="this.loading">
      CARREGANDO...
    </div>
    <div class="loaded" v-else>
      <div class="noAppointments" v-if="appointments.length === 0">
        Você não tem Compromissos agendados.
      </div>
      <div v-else class="appointments">
        <AppointmentCard
          v-for="a in appointments"
          :key="a.date"
          :area="a.area"
          :date="a.date"
          :apartament="a.apartament"
          :responsible="a.responsible"
        />
      </div>
      <router-link to="/RecreationArea"><button class="agenda">Agenda</button></router-link>
    </div>
  </div>
</template>

<script>
import AppointmentCard from "@/components/AppointmentCard/AppointmentCard";

import axios from "axios";
export default {
  name: "Home",
  components: { AppointmentCard },
  async mounted() {
    axios
      .get(
        "https://bcc1ce47-b230-4d45-adf5-3c6f51286fce.mock.pstmn.io/appointments"
      )
      .then((response) => {
        this.appointments = response.data.appointments;
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
        console.log(error);
      });
  },
  data() {
    return {
      appointments: [],
      loading: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./Home.scss";
</style>
