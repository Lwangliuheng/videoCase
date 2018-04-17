<template>
  <div class="footer">
    <div class="footer-inner footer_p">
      <p> 版权所有：北京中车宝联科技有限责任公司</p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background: #2EAB3B;
  }
  .footer-inner{
    text-align: center;
    position: absolute;
    z-index: auto;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .footer-inner p{
    line-height: 64px;
    font-size: 14px;
    color: #fff;
    margin: 0;
  }

</style>
