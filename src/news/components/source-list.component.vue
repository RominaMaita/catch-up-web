<script>
import {Drawer as PvDrawer} from "primevue";
import SourceItem from "./source-item.component.vue";

export default {
  name: "source-list",
  components: {SourceItem, PvDrawer},
  props: {
    visible: Boolean,
    sources: {
      type: Array,
      required: true
    }
  },
  data(){
    return{
      errors: [],
    }
  },
  methods: {
    onSourceSelected(source){
      this.$emit('source-selected', source);
    }
  }
}
</script>

<template>
  <pv-drawer v-bind:visible="visible">
    <source-item v-for="source in sources"
                 :key="source.id"
                 :source="source"
                 @source-selected="onSourceSelected(source)"/>
  </pv-drawer>


</template>

<style scoped>

</style>