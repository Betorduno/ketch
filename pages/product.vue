<template>
  <div>
     <body class="">
  <div class="site-wrapper">
    <productHeader/>
    <productBody/>
    <productFooter/>
  </div>
 </body>
  </div>
</template>
<script>
import productHeader from '../components/header';
import productBody from '../components/Product/body';
import productFooter from '../components/footer';

export default {
  components: {
    productHeader,
    productBody,
    productFooter
  },
  methods:{
      precharge(){
         $(document).ready(function () {
                    // Mobile Menu Trigger
                    $('.nav-burger').click(function () {
                        $('body').toggleClass('site-head-open');
                    });
                });
      }
  },
  mounted(){
    this.precharge();
  }
}
</script>
