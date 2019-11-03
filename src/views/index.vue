<template>
  <div class="h1">
    <div style="height:20px">&nbsp;</div>
    <div>
      <a-row type="flex" justify="center">
        <a-col :span="7"></a-col>
        <a-col :span="10">
          <a-row type="flex" justify="center">
            <a-col :span="4">
              <div class="diamond"></div>
              <div class="diamond1"></div>
            </a-col>
            <a-col :span="16">
              <div class="h2">河北东软就诊问诊挂号自助机</div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="7"></a-col>
      </a-row>
      <a-row style="height:12vh">
        <a-col :span="12"></a-col>
        <a-col :span="12"></a-col>
      </a-row>
      <a-row>
        <a-col :span="2"></a-col>
        <a-col :span="22">
          <div class="h3">
            <img width="150px" src="@/assets/h1aa.png" />
            <div class="h4" style="text-align: center; padding-top: 20%;">
              <router-link to="/doclist">
                <span style="color:black">预约挂号</span>
              </router-link>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "world"
    };
  }
};
</script>
<style lang="less">
.bg-info {
  background: rgb(207, 226, 34);
}
.bg-warn {
  background: rgb(199, 114, 57);
}
.h1 {
  width: 100vm;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(38, 135, 238, 1) 0%,
    rgba(70, 176, 248, 1) 54%,
    rgba(85, 200, 254, 1) 100%
  );
}
.diamond {
  position: absolute;
  width: 43px;
  height: 43px;
  background: #93e2d3;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  /* Internet Explorer */
  -moz-transform: rotate(45deg);
  /* Firefox */
  -webkit-transform: rotate(45deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(45deg);
  margin-top: 21px;
  /* Opera */
  /* margin: 50px auto; */
  /*让菱形浏览器上居中*/
}

.diamond1 {
  position: absolute;
  width: 34px;
  height: 34px;
  background: #5dd1bb;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  /* Internet Explorer */
  -moz-transform: rotate(45deg);
  /* Firefox */
  -webkit-transform: rotate(45deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(45deg);
  margin-top: 26px;
  margin-left: 35px;
  /* Opera */
  /* margin: 50px auto; */
  /*让菱形浏览器上居中*/
}
.h2 {
  margin-top: 5px;
  font-size: 28px;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 68px;
}

.h3 {
  width: 324px;
  height: 405px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 0px rgba(26, 95, 133, 1);
  border-radius: 6px;
  color: white;
  text-align: center;
  margin-left: 80px;
  padding-top: 10%;
}

.h4 {
  cursor: hand;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
}

.h5 {
  width: 44px;
  height: 45px;
}
</style>
