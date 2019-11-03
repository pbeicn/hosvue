<template>
  <div id="docinfo">
    <a-row type="flex" justify="space-around" class="doch1" align="middle">
      <a-col :span="2">
        <p class="height-100">
          <font-awesome-icon icon="angle-left" class="doch2" />&nbsp;&nbsp;
          <router-link to="/doclist">
            <span class="doch2">返回</span>
          </router-link>
        </p>
      </a-col>
      <a-col :span="18">
        <p class="height-50">
          <span class="doch3">扫码挂号</span>
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
    <br />
    <br />
    <table style="width:100%;" border="0">
      <tr>
        <td width="5%"></td>
        <td>
          <div class="infoh4">
            <table style="width:100%;height: 100%;">
              <tr>
                <td style="width:45%;height: 100%;">
                  <div class="row">
                    <table style="width:100%;height: 100%;">
                      <tr>
                        <td>
                          <div>
                            <img src="@/assets/h23.png" />
                          </div>
                        </td>
                        <td>
                          <div class="infoh9" v-html="docname"></div>
                        </td>
                        <td>
                          <div class="infoh10" v-html="docGrade"></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col-md-12">
                      <div id="docintro" class="infoh8" v-html="docintro"></div>
                    </div>
                  </div>
                </td>
                <td style="width:45%;height: 100%;" align="center" id="aaa">
                  <!-- <img src="../img/h31.png" onclick="getHao()"> -->
                  <div id="qrCode" ref="qrCodeDiv"></div>
                  <br />
                  <br />
                  <div class="infoh5">
                    医生:
                    <span id="did" v-html="registerCode"></span>
                  </div>
                  <br />
                  <br />
                  <div class="infoh6">
                    提示：请使用手机APP扫码医生二维码码挂号
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </td>
        <td width="5%"></td>
      </tr>
    </table>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      msg: "world",
      docname: "",
      docGrade: "",
      registerCode: "",
      docintro: ""
    };
  },
  created() {},
  mounted() {
    let docid = sessionStorage.getItem("docinfouid");
    this.$ajax
      .get("/api/v1/doctor/" + docid)
      .then(res => {
        window.console.log(res);
        this.docname = res.data.name;
        this.docGrade = res.data.grade;
        this.docintro = res.data.location;
      })
      .catch(res => {
        window.console.log(res);
      });
    this.$ajax
      .post("/api/v1/register/" + docid)
      .then(res => {
        window.console.log(res);
        this.registerCode = res.data.registerCode;
        new QRCode(this.$refs.qrCodeDiv, {
          text: res.data.registerCode,
          width: 200,
          height: 200,
          colorDark: "#333333", //二维码颜色
          colorLight: "#ffffff", //二维码背景色
          correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
        });
      })
      .catch(res => {
        window.console.log(res);
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

.infoh4 {
  width: 100%;
  height: 450px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 23px;
}

.infoh5 {
  width: 433px;
  height: 40px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}

.infoh6 {
  width: 489px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(0, 144, 255, 1);
  line-height: 33px;
}

.infoh7 {
  width: 74px;
  height: 50px;
  font-size: 36px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
}

.infoh8 {
  /* width: 74px;
            height: 50px; */
  font-size: 36px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
}

.infoh9 {
  white-space: nowrap;
  height: 135px;
  font-size: 36px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
  margin-top: 40px;
  /* margin-left: 60px; */
}

.infoh10 {
  white-space: nowrap;
  height: 135px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
  margin-top: 42px;
  /*margin-left: 20px; */
}
</style>
