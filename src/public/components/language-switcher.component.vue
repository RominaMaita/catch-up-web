<script>
import {SelectButton as PvSelectButton} from "primevue";

export default {
  name: "language-switcher",
  data(){
    return{
      language: "en",
      languages: ['en', 'es']
    }
  }
}
</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="languages" class="uppercase"/>
</template>

<style scoped>

</style>