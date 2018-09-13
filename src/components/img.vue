<template>
  <div>
    <div class="img_top">
      <p>颜色 ∨</p>
      <p>车款 ∨</p>
    </div>
    <section>
      <div class="img_list" v-for="(item,index) in imgList" :key="index">
        <ul class="img_ul">
          <div class="img_box">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张></p>
          </div>
          <li v-for="(val,index) in item.List" :key="index">
            <img :src="val.Url">
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed : {
    ...mapState ({
      imgList: state => state.img.imgList
    })
  },
  methods : {
    ...mapMutations({
      imgData:"imgData"
    }),
    ...mapActions({
      getImgList:"getImgList"
    })
  },
  mounted() {
    this.getImgList(this.$route.query.id)
    console.log(this.$route)
  }
}
</script>
<style lang="scss" scoped>
  .img_top{
    display: flex;
    height: .8rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    background: #fff;
    p{
      flex:1;
      text-align: center;
      font-size:.35rem;
      &:nth-child(1){
        border-right: 1px solid #ccc;
      }
    }
  }
  section{
    width: 100%;
    .img_ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 2.45rem;
        height: 2.45rem;
        padding-left: 0.05rem;
        padding-top: 0.1rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .img_box{
      position: absolute;
      text-align: center;
      margin-top: .1rem;
      margin-left: 0.05rem;
      width: 2.45rem;
      height: 2.45rem;
      background: rgba(56,90,130,.5);
      p{
        font-size: .26rem;
        color: #fff;
      }
      p:first-child{
        margin-top: .9rem;
      }
    }
  }
</style>

