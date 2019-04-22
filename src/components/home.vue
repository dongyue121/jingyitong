<template>
  <div class="home-page">
    <div class="tittle">
      滦平县妇幼保健院挂号平台
    </div>
    <div class="hospital-info">
      <img class="logo-img" src=".././assets/logo.png" width="50" height="50" alt="">
      <p class="h-name">滦平县妇幼保健院</p>
      <p class="other-info">每天中午12点开放第二天的号源</p>
      <p class="other-info qr-code">扫二维码即时挂号 <img src=".././assets/saoma.png" alt=""></p>
      <p class="other-info">地址：滦平县妇幼保健院</p>
    </div>
    <div class="doctor-list">
      <div class="tab-list">
          <div class="tab-item" @click="selectItem(index)" :class="{activeItem:currentIndex==index}" v-for="(item,index) in doctorType" :key="index">
              {{item}}
          </div>
      </div>
      <div class="doctors">
          <div class="doctor-item" v-for="(item,index) in doctorList" :key="index">
              <p class="line"></p>
              <img class="avatar" src=".././assets/avatar.png" width="50" height="50" alt="">
              <div class="doctor-info">
                  <p>{{item.name}}</p>
                  <p>{{item.type}}</p>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        currentIndex:0,
        doctorType:['妇科','产后妇科','孕期检查','婚前检查','术后复诊','妇科疾病','产科门诊','儿科','皮肤美容'],
        doctorList:[{
          name:'邓九龄',
          type:'主治医师'
        },{
          name:'邓九龄',
          type:'主治医师'
        },{
          name:'邓九龄',
          type:'主治医师'
        },{
          name:'邓九龄',
          type:'主治医师'
        },{
          name:'邓九龄',
          type:'主治医师'
        },{
          name:'邓九龄',
          type:'主治医师'
        },{
          name:'邓九龄',
          type:'主治医师'
        },{
          name:'邓九龄',
          type:'主治医师'
        },{
          name:'邓九龄',
          type:'主治医师'
        },]
      }
    },
    methods: {
      //切换tab
      selectItem(index){
        this.currentIndex=index
      }
    },
    mounted() {
      
    },
  }
</script>

<style scoped>
.home-page{
  height: 100%;
  overflow: auto;
}
.tittle{
  background: #28B8A1;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: rgb(255,255,255);
  font-size: 16px;
  font-family: PingFangSC-regular;
}
.hospital-info{
  position: relative;
  padding-left:80px;
}
.h-name{
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin: 10px 0;
}
.other-info{
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin: 10px 0;
}
.qr-code{
  line-height: 60px;
}
.qr-code img{
  vertical-align:middle;
  margin-left: 60px;
}
.logo-img{
  position: absolute;
  left: 20px;
  top: 20px;
}
.doctor-list{
  position: relative;
  background: rgb(204, 204, 204);
  padding-top: 10px;
}
.tab-list{
  position: absolute;
  top: 10px;
  left: 0;
  width: 150px;
  background: rgb(204, 204, 204);
}
.tab-item{
  height:50px;
  text-align: center;
  line-height: 50px;
}
.activeItem{
  background: rgb(255, 255, 255)
}
.doctors{
  padding-left: 150px;
}
.doctor-item{
  position: relative;
  padding: 10px 40px;
  background: rgb(255, 255, 255);
}
.avatar{
  border-radius: 50%;
  position:absolute;
  top: 20px;
}
.doctor-info{
  padding-left: 60px;
  font-size: 14px;
}
.doctor-info p{
  margin:10px 0;
}
.line{
  border-bottom: 1px solid rgb(187, 187, 187);
  position: absolute;
  width: 150px;
  bottom: 1px;
  left: 30px;
}
</style>