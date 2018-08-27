<template>
    <div class="menu-bar">
        <div class="group">
            <a href="">男生</a>
            <a href="">女生</a>
            <a href="">出版</a>
        </div>
        <div class="choose">
            <p>已选</p>
            <p class="p">全部</p>
        </div>
        <div class="all">
            <div class="classification">
                <h3>分类</h3>
                <ul>
                    <li>
                        <a href="" class="first">全部</a>
                    </li>
                    <li>
                        <a href="">奇幻</a>
                    </li>
                    <li>
                        <a href="">玄幻</a>
                    </li>
                    <li>
                        <a href="">武侠</a>
                    </li>
                    <li>
                        <a href="">仙侠</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">都市</a>
                    </li>
                    <li>
                        <a href="">现实</a>
                    </li>
                    <li>
                        <a href="">军事</a>
                    </li>
                    <li>
                        <a href="">历史</a>
                    </li>
                    <li>
                        <a href="">游戏</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">体育</a>
                    </li>
                    <li>
                        <a href="">科幻</a>
                    </li>
                    <li>
                        <a href="">灵异</a>
                    </li>
                    <li>
                        <a href="">二次元</a>
                    </li>
                    <li>
                        <a href="">短篇</a>
                    </li>
                </ul>
            </div>
            <div class="state">
                <h3>状态</h3>
                <ul>
                    <li>
                        <a href="" class="first">全部</a>
                    </li>
                    <li>
                        <a href="">连载</a>
                    </li>
                    <li>
                        <a href="">完本</a>
                    </li>
                </ul>
            </div>
            <div class="attribute">
                <h3>属性</h3>
                <ul>
                    <li>
                        <a href="" class="first">全部</a>
                    </li>
                    <li>
                        <a href="">免费</a>
                    </li>
                    <li>
                        <a href="">VIP</a>
                    </li>
                </ul>
            </div>
            <div class="words">
                <h3>字数</h3>
                <ul>
                    <li>
                        <a href="" class="first">全部</a>
                    </li>
                    <li>
                        <a href="">30万字一下</a>
                    </li>
                    <li>
                        <a href="">30-50万字</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">50-100万字</a>
                    </li>
                    <li>
                        <a href="">100-200万字</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">200万字以上</a>
                    </li>
                </ul>
            </div>
            <div class="quality">
                <h3>品质</h3>
                <ul>
                    <li>
                        <a href="" class="first">全部</a>
                    </li>
                    <li>
                        <a href="">签约作品</a>
                    </li>
                    <li>
                        <a href="">精品小说</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<style lang=less>
.menu-bar {
  width: 240px;
  height: 1000px;
  padding: 20px;
  box-sizing: border-box;
  /* background: rgb(189, 241, 224);  */
  position: relative;
  .all {
    width: 240px;
    height: 800px;
    /* background: rgb(134, 236, 202); */
    position: absolute;
    left: 0;
    top: 130px;
    h3 {
      margin: 20px 10px;
    }
    ul {
      display: flex;
      margin: 5px;
      .first {
        background: black;
        color: white;
      }
      a {
        text-decoration: none;
        padding: 5px;
        cursor: pointer;
        color: black;
        display: block;
        box-sizing: border-box;
        &:hover {
          color: red;
        }
      }
    }
    .quality {
      height: 80px;
      box-sizing: border-box;
      border-bottom: 1px solid#403B43;
    }
    .words {
      height: 140px;
      box-sizing: border-box;
      border-bottom: 1px solid#403B43;
    }
    .attribute {
      height: 80px;
      box-sizing: border-box;
      border-bottom: 1px solid#403B43;
    }
    .state {
      height: 80px;
      box-sizing: border-box;
      border-bottom: 1px solid#403B43;
    }
    .classification {
      width: 240px;
      height: 140px;
      box-sizing: border-box;
      border-bottom: 1px solid#403B43;
    }
  }
  .group {
    width: 240px;
    height: 50px;
    font-size: 0px;
    position: absolute;
    text-align: center;
    align-items: center;
    line-height: 50px;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border-bottom: 1px solid#403B43;
    a {
      text-decoration: none;
      border: 1px solid black;
      font-size: 20px;

      padding: 0 10px;
    }
  }
  .choose {
    width: 240px;
    height: 80px;
    position: absolute;
    top: 50px;
    left: 0;
    box-sizing: border-box;
    border-bottom: 1px solid#403B43;
    .p {
      /* width: 50px;
            height: 40px;
            background: red; */
      color: red;
    }
    p {
      height: 40px;
      padding-left: 20px;
      line-height: 40px;
    }
  }
}
</style>

