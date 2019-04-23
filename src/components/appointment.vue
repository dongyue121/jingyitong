<template>
    <div class="appointmentPage">
        <div class="tittle">滦平县妇幼保健院挂号平台</div>
        <div class="doctorInfo">
            <p class="doctorName">丁晓玲</p>
            <div class="otherinfo">
                <p class="otherinfo-title">门诊科室：</p>
                <p class="otherinfo-text">妇科门诊</p>
            </div>
            <div class="otherinfo">
                <p class="otherinfo-title">号源名称：</p>
                <p class="otherinfo-text">妇科专家一倆癌</p>
            </div>
            <div class="otherinfo">
                <p class="otherinfo-title">医生简介：</p>
                <p class="otherinfo-text">
                    毕业于河北医科大学中医学院中西医结合专业 从事临床工作20余年。
                </p>
            </div>
            <img class="avatar" src=".././assets/avatar.png" alt="">
        </div>
        <div class="date">
            <div class="date-left">
                <div class="dateitem" v-for="(item,index) in dateList" :key="index">
                    <p>{{item.weekTime}}</p>
                    <p>{{item.dayTime}}</p>
                    <p>{{item.state}}</p>
                </div>
            </div>
            <div class="date-right">
                <div>
                    <p class="text">全部</p>
                    <p class="text">日期</p>
                    <div class="iconwrraper">
                        <div class="icon"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="divid-line"></div>
        <div class="select-table">
            <p class="select-item">2019-04-15（星期一）上午 （满）</p>
            <p class="select-item">2019-04-15（星期一）上午 （满）</p>
            <p class="select-item">2019-04-15（星期一）上午 （满）</p>
            <p class="select-item">2019-04-15（星期一）下午 15：30</p>
        </div>
        <div class="calendar">
            <div class="weekwrraper">
                <div>
                    <div class="item" v-for="(item,index) in weekList" :key="index">{{item}}</div>
                </div>
            </div>
            <div class="daywrraper">
                <div>
                    <div class="item" v-for="(item,index) in days" :key="index">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                dateList:[{
                    weekTime:'今日',
                    dayTime:'04-15',
                    state:'即将约满'
                },{
                    weekTime:'今日',
                    dayTime:'04-15',
                    state:'即将约满'
                },{
                    weekTime:'今日',
                    dayTime:'04-15',
                    state:'即将约满'
                }],
                weekList:['一','二','三','四','五','六','七'],
                currentDay:null,
                weekDay:null,
                days:12
            }
        },
        mounted() {
        //    axios.post('/api/wxguahao/getAllDeparts.do').then((res)=>{
        //        console.log(res)
        //    })
        // function rds(){
        //         var url="http://192.168.0.106:8088/wxguahao/getHisDoctors.do";
        //         $.ajax({
        //             url: url,                              
        //             type:'post',
        //             dataType:'jsonp',
        //             async: false,
        //             jsonp:'callback',
        //             jsonpCallback:"cb",
        //             data:{'regitemcode': "4019",'doccode':'1225'},
        //             success:function(rs) {
        //                 console.log(rs);
        //             }
        //         });
        //     }
        //     rds()
        let date=new Date()
        this.currentDay=date.getDate()
        this.weekDay=date.getDay()
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
.doctorInfo{
    padding-left: 80px;
    position: relative;
    margin-top: 26px;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
}
.doctorInfo .doctorName,.doctorInfo .otherinfo{
    margin-bottom: 10px;
}
.doctorName{
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    font-family: PingFangSC-regular;
    font-weight: bolder
}
.otherinfo{
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    font-family: PingFangSC-regular;
    display: flex;
}
.otherinfo .otherinfo-title{
    flex-shrink:0;
}
.otherinfo .otherinfo-text{
    padding-right: 18px;
}
.avatar{
    border-radius: 50%;
    top: 20px;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 18px;
    top: 0;
}
.date{
    display: flex;
    margin: 18px 0;
}
.date .date-left{
    display: flex;
    padding-right: 20px;
    border-right:1px solid rgba(187, 187, 187, 1);
}
.date .date-left .dateitem{
    width: 80px;
    height: 80px;
    border-radius: 17px;
    background-color: rgba(40, 184, 161, 1);
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 5px;
}
.date .date-left .dateitem p{
    text-align: center;
}
.date-right{
    flex: 1;
    padding-top: 6px;
}
.date-right .text{
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    font-family: PingFangSC-regular;
    margin: 5px 0;
    text-align: center;
}
.date-right .iconwrraper{
    text-align: center;
}
.date-right .icon{
    display: inline-block;
    border-top:9px solid rgba(187, 187, 187, 1);
    border-left: 9px solid transparent;
    border-right:9px solid transparent;
}
.select-item{
    font-size: 14px;
    font-family: PingFangSC-regular;
    margin: 0 20px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
}
.calendar{
    text-align: center;
}
.weekwrraper{
    display: inline-block;
    text-align: left;
}
.weekwrraper>div{
    display: inline-block;
}
.weekwrraper .item{
    display: inline-block;
    width: 50px;
    text-align: center;
}
.daywrraper{
    display: inline-block;
}
.daywrraper>div{
    text-align: left;
    display: inline-block;
    width: 350px;
}
.daywrraper .item{
    display: inline-block;
    width: 50px;
    text-align: center;
}
</style>