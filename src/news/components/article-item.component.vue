<script>
import {Article} from "../model/article.entity.js";

export default {
  name: "article-item",
  emits: ['show-tooltip'],
  props: {
    article: { type: Article, required: true },
  },
  methods: {
    async shareArticle(){
      const shareData = { title: this.article.title, url: this.article.url };
      if(navigator.share){
        try {
          await navigator.share(shareData);
          console.log("Article shared successfully");
        }catch(error){
          console.error("Error sharing article: ", error);
        }
      }else{
        try{
          await navigator.clipboard.writeText(this.article.url);
          this.$emit('show-tooltip', this.article.url);
        }catch(error){
          console.error("Error copying clipboard: ", error);
        }
      }
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>