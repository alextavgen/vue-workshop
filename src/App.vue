<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light"> WorkShop</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <!--hello-world></hello-world-->
      <alerts></alerts>
    </v-content>
  </v-app>
</template>

<script>
import Alerts from './components/Alerts'
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    Alerts, HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
