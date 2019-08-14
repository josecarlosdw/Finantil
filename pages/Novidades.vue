<template>
<q-page class="container">
  <div class="row">
    <div class="col-xs-12 col-lg-4 my-card" v-for="(article, index) in articles" :key="index">
      <q-card>
        <q-card-media class="my-media">
          <img :src="article.urlToImage">
        </q-card-media>
        <q-card-title>
          <p>{{ article.title }}</p>
        </q-card-title>
        <q-card-main>
        {{ article.description }}
        </q-card-main>
      </q-card>
    </div>
  </div>
</q-page>
</template>

<style>
.my-card{
  padding: 10px;
  margin: 10px
}
.my-media img{
  width: 95%;
  border-radius: 10px;
}
</style>

<script>
export default {
  name: 'Novidades',
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.getArticles()
  },
  methods: {
    getArticles () {
      this.$axios.get('https://newsapi.org/v2/everything?q=estudantil&apiKey=4feb77b8660e4904a51ecbcae805ce03')
        .then((resp) => {
          this.articles = resp.data.articles
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>
