<template>
  <div class="orderList-page">
    <div class="tittle">订单列表</div>
    <div class="content content1">
      <div class="PersonSeekingMedicalService">
        <span>选择就诊人</span>
        <span>
          <a href="#">王浩伟▽</a>
        </span>
      </div>
    </div>
    <div class="content" v-for="(item,index) in orderList" :key="index">
      <div class="lineItem">
        <p>
          <span>滦平妇幼保健院</span>
          <span v-if="item.zhuangtai==0">已取消</span>
          <span v-if="item.zhuangtai==1" class="green">待就诊</span>
          <span v-if="item.zhuangtai==2">待评价</span>
        </p>
        <p>
          <span>就诊科室</span>
          <span>{{item.keshi}}</span>
        </p>
        <p>
          <span>就诊时间</span>
          <span>{{item.jiuTime}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [
        {
          listPeople: "王浩伟",
          keshi: "产科门诊",
          jiuTime: "2019-04-26 14:30-15:00",
          zhuangtai: 0
        },
        {
          listPeople: "王浩伟",
          keshi: "产科门诊",
          jiuTime: "2019-04-26 14:30-15:00",
          zhuangtai: 1
        },
        {
          listPeople: "王浩伟",
          keshi: "产科门诊",
          jiuTime: "2019-04-26 14:30-15:00",
          zhuangtai: 2
        }
      ]
    };
  }
};
</script>
<style scoped>
.orderList-page {
  height: 100%;
  overflow: auto;
}
.tittle {
  background: #ccc;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: black;
  font-size: 20px;
  font-family: PingFangSC-regular;
  font-weight: 900;
}
.content {
  width: 89%;
  display: inline-block;
  padding: 10px 5%;
  border-bottom: 7px solid #ccc;
}
.PersonSeekingMedicalService {
  position: relative;
  padding: 20px 0;
  font-size: 18px;
}
.PersonSeekingMedicalService span:nth-child(2) {
  position: absolute;
  right: 10%;
  font-size: 18px;
}
.PersonSeekingMedicalService span:nth-child(2) a {
  text-decoration: none;
  color: #28b8a1;
}
.lineItem p {
  padding: 15px 0;
}
.lineItem p:nth-of-type(1) {
  position: relative;
}
.lineItem p:nth-of-type(1) span:nth-of-type(2) {
  position: absolute;
  right: 14%;
  font-weight: 900;
}
.green {
  position: absolute;
  right: 14%;
  color: #28b8a1;
  font-weight: 900;
}
.lineItem p:nth-of-type(1) span:nth-of-type(1) {
  font-weight: 600;
}
.lineItem p:nth-of-type(2) span:nth-of-type(1) {
  display: inline-block;
  padding: 0 15px 0 0;
  color: #7f7f7f;
}
.lineItem p:nth-of-type(2) span:nth-of-type(2) {
  display: inline-block;
  padding: 0 0 0 15px;
  font-weight: 600;
}
.lineItem p:nth-of-type(3) span:nth-of-type(1) {
  display: inline-block;
  padding: 0 15px 0 0;
  color: #7f7f7f;
}
.lineItem p:nth-of-type(3) span:nth-of-type(2) {
  display: inline-block;
  padding: 0 0 0 15px;
  font-weight: 600;
}
</style>