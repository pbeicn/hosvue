<template>
  <div id="doclist">
    <a-row type="flex" justify="space-around" class="doch1" align="middle">
      <a-col :span="2">
        <p class="height-100">
          <font-awesome-icon icon="angle-left" class="doch2" />&nbsp;&nbsp;
          <router-link to="/">
            <span class="doch2">返回</span>
          </router-link>
        </p>
      </a-col>
      <a-col :span="18">
        <p class="height-50">
          <span class="doch3">医生列表</span>
        </p>
      </a-col>
      <a-col :span="2">
        <p class="height-100">
          <router-link to="/">
            <font-awesome-icon icon="home" class="doch4" />
          </router-link>
        </p>
      </a-col>
    </a-row>
    <div class="doch6" id="docList">
      <div class="doch7" v-for="doc in docs" :key="doc.ids">
        <div class="ms">
          <img src="@/assets/h23.png" />
        </div>
        <table width="100%" style="margin-top: 60px" border="0">
          <tr>
            <td align="right" width="33%">
              <div class="h8" id="d1">{{ doc.name }}</div>
            </td>
            <td align="right">
              <div class="h9" id="d2">{{ doc.department }}</div>
            </td>
            <td align="center">
              <div class="h9" id="d3">{{ doc.grade }}</div>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <br />
              <div class="h10" id="d4">{{ doc.location }}</div>
            </td>
          </tr>
          <tr>
            <td colspan="3" align="center" @click="getDocInfo(doc.id)">
              <a-button type="primary" style="width:200px">挂号</a-button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "world",
      docname: "",
      docs: []
    };
  },
  methods: {
    getDocInfo(docid) {
      window.console.log(docid);
      sessionStorage.setItem("docinfouid", docid);
      this.$router.push("/docinfo");
    }
  },
  mounted() {
    this.$ajax
      .get("/api/v1/doctor")
      .then(res => {
        // window.console.log(res);
        for (var i = 0; i < res.data.length; i++) {
          let doc = res.data[i];
          // window.console.log(doc.id);
          this.docs = res.data;
          if (i === 0) {
            this.docname = doc.name;
          }
        }
      })
      .catch(res => {
        window.console.log(res);
        //  for (var i = 0; i < res.data.length; i++) {
      });
  }
};
</script>
<style lang="less" scoped>
.doch1 {
  height: 100px;
  width: 100vw;
  background: linear-gradient(
    270deg,
    rgba(38, 135, 238, 1) 0%,
    rgba(70, 176, 248, 1) 54%,
    rgba(85, 200, 254, 1) 100%
  );
  padding: 0px;
  margin: 0px;
}

.doch2 {
  font-size: 32px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.doch3 {
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}

.doch4 {
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  text-align: right;
}

.doch6 {
  /* width: 1600px; */
  /* height: 800px; */
  background: rgba(246, 247, 251, 1);
  display: flex;
  /* justify-content: flex-start space-between; */
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  text-align: center;
  padding-left: 5%;
}

.doch7 {
  margin-top: 100px;
  position: relative;
  width: 369px;
  height: 250px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  margin-left: 20px;
  margin-right: 20px;
}

.ms {
  position: absolute;
  top: -75px;
  left: 25px;
  width: 100px;
  height: 100px;
}

.h8 {
  /* margin-top: 80px;
            margin-left: 50px; */
  /* width: 58px; */
  height: 40px;
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}

.h9 {
  width: 68px;
  height: 30px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
}

.h10 {
  padding-left: 20px;
  width: 296px;
  height: 65px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 25px;
}

.doch11 {
  cursor: hand;
  width: 176px;
  height: 32px;
  background: rgba(24, 144, 255, 1);
  border-radius: 4px;
}

.doch12 {
  cursor: hand;
  width: 112px;
  height: 24px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}
</style>
