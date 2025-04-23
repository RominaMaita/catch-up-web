<script>
import {NewsApiService} from "./news/services/news-api.service.js";
import {ArticleAssembler} from "./news/services/article.assembler.js";
import {SourceAssembler} from "./news/services/source.assembler.js";
import SourceList from "./news/components/source-list.component.vue";
import LanguageSwitcher from "./public/components/language-switcher.component.vue";
import UnavailableContent from "./news/components/unavailable-content.component.vue";

export default {
  name: 'App',
  components: {UnavailableContent, LanguageSwitcher, SourceList},
  data(){
    return{
      drawerVisible:false,
      articles: [],
      sources: [],
      errors: [],
      newsApi: new NewsApiService(),
    }
  },
  methods:{
    getArticlesForSourceWithLogo(source){
      this.newsApi.getArticlesFromSourceId(source.id)
          .then((response) => {
            this.articles = ArticleAssembler.toEntitiesFromResponse(response);
          })
          .catch((error) => {
            this.errors.push(error);
            this.articles = [];
          })
    },
    getSources(){
      this.newsApi.getSources()
          .then((response) => {
            console.log(response);
            this.sources = SourceAssembler.toEntitiesFromResponse(response);
            this.getArticlesForSourceWithLogo(this.sources[0]);
          })
          .catch((error) => {
            this.errors.push(error);
            this.sources = [];
          });
    },
    toggleSidebar(){
      this.drawerVisible = !this.drawerVisible;
    },
    setSource(source) {
      this.getArticlesForSourceWithLogo(source);
      this.toggleSidebar();
      }
    },
    created(){
      this.getSources();
    }
  }

</script>
<template>
  <div>
    <div>
      <pv-menubar>
        <template #start></template
        <pv-button icon="pi pi-bars" label="CatchUp" text @click="toggleSidebar"/>
        <source-list v-model:visible="drawerVisible" vmodel:sources="sources"
                     v-on:source-selected="setSource"/>
        <template #end>
          <language-switcher/>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    <article-list v-if="errors" :articles="articles"/>
    <unavailable-content v-else :errors="errors" />
  </div>
</template>