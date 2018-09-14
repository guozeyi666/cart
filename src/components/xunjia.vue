<template>
    <div>
        <p>询价页面</p>
        <button @click="showCity(true)">当前选择：{{currentCity?currentCity:city.name+city.id}}</button>
        <cityList :class="isShowCity?'active': ''"></cityList>
        <div>
            <input type="text" placeholder="请输入你的手机号" ref="phone">
            <button @click="click" :class="isSendSMS?'disable':''">{{isSendSMS?timer:'获取短信验证码'}}</button>
        </div>
    </div>
</template>

<script>
    import cityList from './cityList.vue';
    import {mapState, mapMutations, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapState({
                isShowCity: state=>state.xunjia.isShowCity,
                currentCity: state=>state.xunjia.currentCity,
                city: state=>state.xunjia.city,
                isSendSMS: state=>state.xunjia.isSendSMS,
                timer: state=>state.xunjia.timer
            })
        },
        methods: {
            ...mapMutations({
                showCity: 'xunjia/showCity'
            }),
            ...mapActions({
                getCapture: 'xunjia/getCapture'
            }),
            click(){
                // console.log(isSendSMS);
                if (this.isSendSMS){
                    return;
                }
                let phone = this.$refs.phone.value;
                if (!/^1[3,4,5,7,8,9]\d{9}$/.test(phone)){
                    alert('请输入正确的手机号码');
                    return;
                }
                console.log('获取手机号：', phone);
                this.getCapture(phone);
            }
        },
        components: {
            cityList
        }
    }
</script>
<style lang="scss" scoped>
    button.disable{
        background: #666;
    }
</style>
