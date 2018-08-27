<style lang=less>
@import './reset.css';
.top-bar{
    width: 1200px;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-around;
        align-items: center;

    .logo{
        font-size: 40px;
        line-height: 100px;
        width: 220px;
    }
    .serch{
        width: 400px;
        height: 40px;
        font-size: 0;
        input{
            display: inline-block;
            width: 350px;
            height: 40px;
            vertical-align: middle;
            box-sizing: border-box;
            border:1px solid gray;
            border-right: none;
            font-size: 25px;
            &:focus{
                outline: none;
            }
        }
        button{
            display: inline-block;
            width: 40px;
            height: 40px;
            vertical-align: middle;

        }
    }
    .mybook{
        font-size: 20px;
        p{
            border:solid 2px black;
        }
    }
}
.nav-bar{
    width: 100%;
    height: 50px;
    background: #3F3C43;
    position: relative;
    .classes{
        width: 240px;
        height: 350px;
        position: absolute;
        top: 50px;
        left: 112px;
        z-index: 10;
        font-size: 0;
        display: none;
        a{
            display: inline-block;
            box-sizing: border-box;
            width: 120px;
            height: 50px;
            line-height: 50px;
            font-size: 25px;
            background: #F7F7F7;
            text-decoration: none;
            text-align: center;
            cursor: pointer;
            &:hover{
                color: red;
                font-size: 30px;
            }
        }
    }
    .menu{
        width: 1200px;
        height: 50px;
        margin: auto;
        .ul{
            list-style: none;
            display: flex;
            li{
                color: white;
                line-height: 50px;
                font-size: 20px;
                padding: 0 20px;
                cursor: pointer;
                &:hover{
                    background: #252428;
                }
            }
            
            .first{
                width: 200px;
            }
          
            .game-web{
                margin-left: 180px
            }
            .game-web,.game-phone{
                &:hover{
                    color: orange;
                }
            }

        }
    }
}
</style>


<template>
<div>
    <div class="top-bar">
        <div class="logo">
            <p>起点中文网</p>
        </div>
        <div class="serch">
            <input type="text">
            <button></button>
        </div>
        <div class="mybook">
            <p>我的书架</p>
        </div>
    </div>
    <div class="nav-bar">
        <div class="classes">
            <a href="">玄幻</a>
            <a href="">奇幻</a>
            <a href="">武侠</a>
            <a href="">仙侠</a>
            <a href="">都市</a>
            <a href="">现实</a>
            <a href="">军事</a>
            <a href="">历史</a>
            <a href="">游戏</a>
            <a href="">体育</a>
            <a href="">科幻</a>
            <a href="">灵异</a>
            <a href="">二次元</a>
            <a href="">女生网</a>
        </div>
        <div class="menu">
            <ul class="ul">
                <li class="first">作品分类</li>
                <li class="middle">全部作品</li>
                <li ><span class="middle">排行</span></li>
                <li class="middle">完本</li>
                <li class="middle">免费</li>
                <li class="middle">作家专区</li>
                <li class="middle">客户端</li>
                <li class="game-web">页游</li>
                <li class="game-phone">手游</li>
            </ul>
        </div>
    </div>
</div>
</template>


<script>
export default {
    
}
</script>
