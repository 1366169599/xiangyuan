<template>
<div>
    <nav-bar></nav-bar>
    <div class="container">
    <menu-bar></menu-bar>
        <div class="books">
        <div v-for='img in container' class="book">
            <div class="book-img"><img :src="img.book_cover" alt="">
            </div>
            <div class="book-text">
                <h4 class="name">{{img.bookname}}</h4>
                <p class="auther"><span>{{img.author_name}}</span><span>{{img.class_name}}</span><span>{{img.stat_name}}</span></p>
                <p class="introduction">{{img.book_info}}</p>
            </div>
        </div>
    </div>  
        </div>
</div>
</template>

<script>
import NavBar from "./navbar.vue";
import menuBar from "./menuBar.vue";
// let NavBar = require('./navbar.vue')
let axios = require("axios");
export default {
  data() {
    return {
      container: {},
      bookname: "",
      author_name: ""
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "https://www.apiopen.top/novelApi"
    }).then(response => {
      this.container = response.data.data;
    });
  },
  components: {
    "nav-bar": NavBar,
    "menu-bar":menuBar
  }
};
</script>
<style lang=less>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 1200px;
  height: 1000px;
  margin: auto;
  border: 1px solid red;
  position: relative;
  .books{
    width: 960px;
    position: absolute;
    right: 0;
    top:0;
    }
}
.book {
  width: 480px;
  height: 150px;
  float: left;
  margin: 20px 0;

  .book-img {
    width: 100px;
    height: 135px;
    float: left;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .book-text {
    width: 380px;
    height: 200px;
    float: left;

    .name {
      margin: 10px 0 10px 20px;
    }
    .auther {
      margin-left: 10px;
      span {
        margin: 10px;
        font-size: 14px;
        opacity: 0.5;
        cursor: pointer;
      }
      span:hover {
        color: red;
      }
    }
    .introduction {
      margin: 10px;
      overflow: hidden;
      font-size: 14px;
      line-height: 15px;
      height: 45px;
    }
  }
}
</style>



