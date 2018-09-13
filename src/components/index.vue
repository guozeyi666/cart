<template>
  <div class="wrap">
    <div class="box">
      <!-- 首页列表 -->
      <section>
        <div v-for="(item, index) in list" :key="index">
            <ul>
                <p :id="index">{{index}}</p>
                <li v-for="(value, key) in item" :key="key" @click="getMakeList(value.MasterID)">
                  <img :src="value.CoverPhoto">
                  <span>{{value.Name}}</span>
                </li>
            </ul>
        </div>
      </section>
      <section v-show="isShow" class="letter">
        <span>{{letter}}</span>
      </section>
      <!-- 侧边栏 -->
      <main @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <span v-for="(item, index) in zm" :key="index">{{item}}</span>
      </main>
    </div>
    <div>
      <Cebian></Cebian>
    </div>


  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Cebian from "./cebian";
export default {
  components:{
    Cebian
  },
  // 计算属性
  computed: {
    // 存放数据
    ...mapState({
      zm: state => state.index.zm,
      list: state => state.index.list,
      letter: state => state.index.letter,
      isShow: state => state.index.isShow
    })
  },

  methods: {
    ...mapActions({
      initState: "initState",
      getMakeList: 'getMakeList'
    }),
    ...mapMutations({
      showLetter: "showLetter",
      changeLetter: "changeLetter"
    }),
    touchStart(e) {
      this.showLetter(true);
      let letter = e.target.innerHTML;
      console.log("letter...", letter, e.target);
      if (this.letter != letter) {
        // 改变当前字母
        this.changeLetter(letter);
      }
    },
    touchMove(e) {
      console.log(e.touches);
      // 获取手指的位置
      let pageY = e.touches[0].pageY;
      // 计算当前在拿一个字母
      let index = Math.floor((pageY - this.marginTop) / this.height);
      // 字母边界处理
      if (index < 0) {
        index = 0;
      } else if (index > this.zm.length - 1) {
        index = this.zm.length - 1;
      }
      console.log("letter...", this.zm[index]);
      if (this.letter != this.zm[index]) {
        // 查询id为当前字母的元素
        let ele = document.getElementById(this.zm[index]);
        let top = ele.offsetTop;
        // 当该元素距离顶部的高度赋给滚动元素的scorllTop实现滚动
        document.querySelector(".box").scrollTop = top;
        // 改变当前字母
        this.changeLetter(this.zm[index]);
      }
    },
    touchEnd() {
      this.showLetter(false);
    }
  },

  mounted() {
    this.initState();
  },
  updated() {
    // 获取每个字母的高度
    this.height = 0.4 * window.innerWidth / 750 * 100;
    // 获取字母列表距离顶部的高度
    this.marginTop = (window.innerHeight - this.zm.length * this.height) / 2;
  }
};
</script>

<style scoped lang="scss">
.wrap {
  height: 100%;
}
.box {
  height: 100%;
  overflow: scroll;
}

ul {
  p {
    font-size: 0.28rem;
    line-height: 0.4rem;
    background: #f4f4f4;
    padding-left: 0.3rem;
    color: #aaa;
  }
  li {
    margin: 0 0.3rem;
    height: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
  }
  img {
    height: 0.8rem;
  }
  span {
    font-size: 0.32rem;
    margin-left: 0.4rem;
  }
}

main {
  position: fixed;
  top: 50%;
  right: 0.1rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 0.24rem;
    color: #666;
    font-weight: 500;
    padding: 0.02rem 0.1rem;
    height: 0.4rem;
    box-sizing: border-box;
  }
}
.letter {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 2rem;
  height: 2rem;
  background: rgba(0, 0, 0, 1);
  border-radius: 0.1rem;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  line-height: 2rem;
}
</style>
