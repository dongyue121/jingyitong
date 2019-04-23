<template>
  <div class="home-page">
    <div class="tittle">滦平县妇幼保健院挂号平台</div>
    <div class="hospital-info">
      <img class="logo-img" src=".././assets/logo.png" width="50" height="50" alt>
      <p class="h-name">滦平县妇幼保健院</p>
      <p class="other-info">每天中午12点开放第二天的号源</p>
      <p class="other-info qr-code">
        扫二维码即时挂号
        <img src=".././assets/saoma.png" alt>
      </p>
      <p class="other-info">地址：滦平县妇幼保健院</p>
    </div>
    <div class="doctor-list">
      <div class="tab-list" v-if="code.length!=0">
        <div
          class="tab-item"
          @click="selectItem(index)"
          :class="{activeItem:currentIndex==index}"
          v-for="(item,index) in doctorType"
          :key="index"
        >{{item.hosdepname}}</div>
      </div>
      <div class="doctors">
        <div class="doctor-item" v-for="(item,index) in doctorList" :key="index">
          <p class="line"></p>
          <img class="avatar" src=".././assets/avatar.png" width="50" height="50" alt>
          <div class="doctor-info">
            <p>{{item.docName}}</p>
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      currentIndex: 0,
      doctorType: [],
      doctorList: [],
      code: []
    };
  },
  mounted() {
    this.getuser();
    // this.getuaerList();
  },
  methods: {
    //切换tab
    selectItem(index) {
      this.currentIndex = index;
      console.log(this.code[index]);
      this.getuaerList(this.code[index]);
    },
    getuser() {
      var url = "http://192.168.0.106:8088/wxguahao/getAllDeparts.do";
      this.doctorType = [];
      var doctorType = this.doctorType;
      var _this = this;
      $.ajax({
        url: url,
        type: "post",
        dataType: "jsonp",
        async: false,
        jsonp: "callback",
        jsonpCallback: "cb",
        data: "",
        success: function(data) {
          for (var i = 0; i < data.data.length; i++) {
            doctorType.push(data.data[i]);
            _this.code.push(data.data[i].hosdepcode);
          }
          _this.getuaerList(_this.code[0]);
          console.log(data);
        },
        error: function(data) {
          debugger;
        }
      });
    },
    getuaerList(code) {
      var callcode = "c" + new Date().getTime().toString();
      var url = "http://192.168.0.106:8088/wxguahao/getHisDoctors.do";
      this.doctorList = [];
      var doctorList = this.doctorList;
      $.ajax({
        url: url,
        type: "post",
        dataType: "jsonp",
        async: false,
        jsonp: "callback",
        jsonpCallback: callcode,
        data: { depcode: code },
        success: function(data) {
          for (var i = 0; i < data.data.length; i++) {
            doctorList.push(data.data[i]);
          }
          console.log(data);
        },
        error: function(data) {
          debugger;
        }
      });
    }
  },
  computed: {}
};
</script>

<style scoped>
.home-page {
  height: 100%;
  overflow: auto;
}
.tittle {
  background: #28b8a1;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-family: PingFangSC-regular;
}
.hospital-info {
  position: relative;
  padding-left: 80px;
}
.h-name {
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin: 10px 0;
}
.other-info {
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin: 10px 0;
}
.qr-code {
  line-height: 60px;
}
.qr-code img {
  vertical-align: middle;
  margin-left: 60px;
}
.logo-img {
  position: absolute;
  left: 20px;
  top: 20px;
}
.doctor-list {
  position: relative;
  background: rgb(204, 204, 204);
  padding-top: 10px;
}
.tab-list {
  position: absolute;
  top: 10px;
  left: 0;
  width: 150px;
  background: rgb(204, 204, 204);
}
.tab-item {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.activeItem {
  background: rgb(255, 255, 255);
}
.doctors {
  padding-left: 150px;
}
.doctor-item {
  position: relative;
  padding: 10px 40px;
  background: rgb(255, 255, 255);
}
.avatar {
  border-radius: 50%;
  position: absolute;
  top: 20px;
}
.doctor-info {
  padding-left: 60px;
  font-size: 14px;
}
.doctor-info p {
  margin: 10px 0;
}
.line {
  border-bottom: 1px solid rgb(187, 187, 187);
  position: absolute;
  width: 150px;
  bottom: 1px;
  left: 30px;
}
</style>