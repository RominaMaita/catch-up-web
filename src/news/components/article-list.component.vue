<script>
import ArticleItem from "./article-item.component.vue";

export default {
  name: "article-list",
  components: {ArticleItem},
  props: {articles: { type: Array, required: true }},
}
</script>

<template>
  <div v-for="article in articles">
    <article-item :article="article"/>
  </div>
</template>

<style scoped>

</style>