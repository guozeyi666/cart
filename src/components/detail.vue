<template>
  <div class="detail_box">
    <div class="cart">
      <div class="content">
        <img :src="lists.Picture" @click="imgClick(lists.SerialID)">
        <span>{{lists.pic_group_count}}</span>
      </div>
      <div class="info">
        <p>{{lists.market_attribute && lists.market_attribute.dealer_price}}</p>
        <p>指导价 {{lists.market_attribute && lists.market_attribute.official_refer_price}}</p>
        <div class="action active flex-row">
            <button data-hover="hover">{{lists.BottomEntranceTitle}}</button>
        </div>
      </div>
        <li class="year">

          <span @click="changeYear(item)" v-for="(item, index) in year" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
        </li>
        <section>
             <ul v-for="(item, index) in list" :key="index">
                <p>{{index}}</p>
                <li v-for="(value, key) in item" :key="key">
                    <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
                    <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
                    <p>
                        <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                        <span>{{value.market_attribute.official_refer_price}}</span>
                    </p>
                    <button>{{lists.BottomEntranceTitle}}</button>
                </li>
            </ul>
        </section>
    </div>
    <div class="bottom flex-column flex-centerY">
        <p>{{lists.BottomEntranceTitle}}</p>
        <p>{{lists.BottomEntranceSubTitle}}</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      lists: state => state.detail.lists,
      currentYear: state => state.detail.currentYear
    }),
    ...mapGetters({
      year: "year",
      list: "list"
    })
  },
  methods: {
    ...mapMutations({
      px: "px",
      changeYear: "changeYear"
    }),
    ...mapActions({
      getList: "getList"
    }),
    imgClick(id){
      this.$router.push({
        path:"/img",
        query:{
          id
        }
      })
    }
  },
  mounted() {
    this.getList(this.$route.query.id);
    console.log(this.$route);
  }
};
</script>

<style lang="scss" scoped>
.detail_box {
  width: 100%;
  height: 100%;
  .cart {
    height: 100%;
    .content {
      position: relative;
      height: 3.5rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 4.7rem;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
      }
      span {
        position: absolute;
        bottom: 0.3rem;
        right: 0.3rem;
        color: #fff;
        padding: 1px 0.1rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.6);
        font-size: 0.24rem;
      }
    }
    .info {
      padding: 0.36rem 0.2rem 0.3rem;
      background: #fff;
      position: relative;
    }
    .info p:first-child {
      font-size: 0.36rem;
      color: red;
      font-weight: 500;
    }
    .info p:nth-child(2) {
      font-size: 0.26rem;
      color: silver;
    }
    .info p {
      max-width: 3.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .info .action {
      padding-top: 0.2rem;
      justify-content: space-between;
      width: 50%;
      position: absolute;
      right: 0.1rem;
      top: 0.22rem;
    }
    .flex-row {
      display: -webkit-box;
      display: flex;
      -webkit-box-direction: normal;
    }
    .info .action button:last-child {
      background: #00afff;
      color: #fff;
    }
    .info .action button {
      border-radius: 0.1rem;
      font-size: 0.32rem;
      height: 0.7rem;
      width: 3.45rem;
      border: none;
      box-sizing: border-box;
    }
  }
  li {
    list-style: none;
    span {
      padding-right: 0.46rem;
    }
  }
  .year {
    border-top: 0.15rem solid #f4f4f4;
    padding: 0 0.3rem;
    font-size: 0.32rem;
    height: 0.77rem;
    line-height: 0.77rem;
    background: #fff;
  }
  .year .active {
    color: #3aacff;
  }
  section{
    margin-bottom: 1rem;
  }
  ul > p {
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.26rem;
    color: #999;
    background: #f4f4f4;
  }
  ul > li {
    padding: 0 0.2rem;
    border-bottom: 0.18rem solid #f4f4f4;
    overflow: hidden;
    p:nth-child(1) {
      padding: 0.26rem 0 0.18rem;
      font-size: 0.3rem;
      line-height: 1;
      color: #3d3d3d;
    }
    p:nth-child(2) {
      color: #bdbdbd;
      font-size: 0.26rem;
    }
    p:nth-child(3) {
      text-align: right;
      padding-bottom: 0.1rem;
      font-size: 0.24rem;
      color: #818181;
      span:nth-child(2) {
        font-size: 0.3rem;
        color: #ff2336;
        margin-left: 0.1rem;
      }
    }
    button {
      border: none;
      border-top: 1px solid #eee;
      width: 110%;
      height: 0.8rem;
      font-size: 0.32rem;
      color: #00afff;
      background: #fff;
      font-weight: 500;
      margin-left: -0.3rem;
    }
  }
  ul > li:last-child {
    border-bottom: 0;
  }
  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #3aacff;
    height: 1rem;
    color: #fff;
    z-index: 10;
    p:first-child {
      font-size: 0.32rem;
      margin-top: 0.12rem;
      font-weight: 500;
    }
    p:nth-child(2) {
      font-size: 0.24rem;
    }
  }
  .flex-centerY {
    display: flex;
    align-items: center;
  }
  .flex-column {
    -webkit-box-orient: vertical;
    flex-direction: column;
  }

}
</style>
