<style scoped>
  .seatManage{
    background: #fff;
    margin: 15px auto;
    width: 80%;
    overflow-y: scroll;
    height: 82vh;
    padding-bottom: 20px;
  }
  .seatTab{
    width: 86%;
    margin: 15px auto;
  }
  .seatTab .seatTitle{
    cursor: pointer;
    display: inline-block;
    height: 45px;
    width: 100px;
    background: #fff;
    color: #232323;
    line-height: 45px;
    text-align: center;
    border: 1px solid #DFE4ED;
    border-bottom: none;
    font-size: 15px;
  }
  .seatManage .active{
    color: #2EAB3B;
  }
  .seatManage .seatContent{
    margin-left: 10px;
  }
  .seatManage .lineBox{
    width: 90%;
    height: 1px;
    background: #DFE4ED;
    margin-top: -1px;
    margin-left: 100px;
  }
</style>
<template>
  <div class="seatManage">
    <div class="seatTab">
      <span class="seatTitle active" >坐席管理</span>
      <div class="lineBox"></div>
    </div>
    <div class="seatContent">
      <seat-list ></seat-list>
    </div>
  </div>
</template>
<script>
  import seatList from '@/components/seatList'
  export default {
    data() {
      return{
        jianKongActive: true,
        allCaseActive: false
      }
    },
    methods: {
      tabChange(event){
        var attributes = event.target.attributes;
        for(var i=0;i< attributes.length;i++){
          if(i == 1){
            if(attributes[i].nodeValue.indexOf('caseJiankong') > -1){
              attributes[i].nodeValue = 'caseJiankong active';
              $(".allCase").attr("class","allCase");
              this.jianKongActive = true;
              this.allCaseActive = false;
            }else  if(event.target.attributes[i].nodeValue.indexOf('allCase') > -1){
              $(".caseJiankong").attr("class","caseJiankong");
              attributes[i].nodeValue = 'allCase active';
              this.jianKongActive = false;
              this.allCaseActive = true;
            }
          }
        }
      }
    },
    components: {
      seatList,
    },
  }

</script>
