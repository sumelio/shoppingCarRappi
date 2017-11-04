<template lang="pug">
  #app
    header
        section
            .columns.is-gapless.topbar
                .column.is-2
                    .logo
                        img(src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" class="image" draggable="false")
                .column.is-8
                        .search
                            .control
                                input(class="input" type="text" placeholder="¿Qué buscas?")
                .column.is-2
                    .profile
                        .prof-name
                            span User Name
                        .prof-img
                            img(src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" class="image" draggable="false")
    section
        .left-menu
            .columns.s-gapless.left-menu-cont
                .item
                    img(src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" draggable="false")
                    span Home
                .item
                    img(src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" draggable="false")
                    span Trending
                .item
                    img(src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" draggable="false")
                    span Más Likes
                .item
                    img(src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" draggable="false")
                    span Ajustes
    section
        .content-web.view-wraps
            .tile.is-ancestor
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            .tile.is-ancestor
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            .tile.is-ancestor
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                .tile.is-parent
                    .item-cont.tile.is-child.box
                        .data
                            h1 Title
                            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud


</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

    $purple:#50557f;
    $rose:#FF535B;

    header{
        .topbar{
            background:#FFF;
            align-items: center;
            justify-content: center;
            position: fixed;
            width: 100%;
            z-index:5;
            top:0;
            box-shadow: 0px0px14px0px rgba(0,0,0,0.75);
            .search {
    	        margin: 0;
    	    	padding: 05pc;
                input{
                    border:1px solid $purple;
                    transition:border 0.5s ease-out;
                &:focus{
                    border-color: $rose;
                    }
                }
            }
            .logo{
            	max-width:4.5pc;
            	margin: 0 auto;
                img{

                }
            }
            .profile{
                display: flex;
                align-items: center;
                justify-content: center;
                .prof-name{
                    span{
                        font-weight: bold;
                        color:$purple;
                    }
                }
                .prof-img {
                     align-self: flex-end;
                     margin: 015px;
                    img{
                        border-radius:50%;
                        max-width:45px;
                    }
                }
            }
        }
    }
    .left-menu{
        position:fixed;
        top:0;
        left:0;
        width:90px;
        height:100%;
        background-color:$rose;
        z-index:4;
        .left-menu-cont{
            position: absolute;
            flex-direction:column;
            width: 100%;
            height: 100%;
            padding-top: 75px;
            margin:0;
            top:0;
            left:0;
            justify-content: flex-start ;

            .item{
                text-align: center;
                padding:10px;
                align-self:flex-start;
                &:last-child{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
                img{
                    max-width:45px;
                }
                span{
                    color:#FFF;
                    font-size:15px;
                    font-weight:bold;
                }
            }
        }
    }
    .content-web{
        .item-cont{
            position:relative;
            width:287px;
            height: 192px;
            background-image:url("https://i.pinimg.com/originals/46/4e/2a/464e2ab379f85aceb6ead5a4312c152f.png");
            overflow:hidden;
            &:hover{
                .data{
                    bottom:0;
                }
            }
            .data {
                position: absolute;
                bottom: -200px;
                width: 100%;
                left: 0;
                padding: 20px15px;
                color:#FFF;
                background:rgba(255, 83, 91, 0.75);
                transition: bottom 0.5s ease-in-out;
                h1{
                    font-size:22px;
                    font-weight:300;
                }
                p{
                    font-size:14px;
                }
            }
        }
    }
    .view-wraps{
        margin-top: 70px;
        padding-top: 20px;
        margin-left: 75px;
        padding-left: 40px;
        padding-right: 20px;
        padding-bottom: 35px;
        }
    </style>
