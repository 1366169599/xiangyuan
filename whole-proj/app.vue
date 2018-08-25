<template>
    <div class="container">
        <div v-for='item in news.auto'>
            {{item.source}}
            {{item.digest}}
        </div>
    </div>
</template>

<script>
let axios = require("axios");

export default {
  data() {
      return {
          news: {}
      }
  },
  mounted() {
    axios({
      method: "get",
      url: "https://www.apiopen.top/journalismApi"
    }).then((response) => {
      this.news = response.data.data;
      console.log(this.news)
    //   var result = "";
    //   for (var i = 0; i < res.auto.length; i++) {
    //     result += "<div>" + res.auto[i].source + "</div>";
    //   }
    //   console.log(result);

    //   document.getElementsByTagName("p")[0].innerHTML = result;
    });
  }
};
</script>

<style>

</style>

