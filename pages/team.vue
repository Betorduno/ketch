<template>
  <div>
    <body class="">
  <div class="site-wrapper">
    <teamHeader/>
    <teamBody/>
    <teamFooter/>
  </div>
 </body>
  </div>
</template>
<script>
import teamFooter from '../components/footer';
import teamBody from '../components/Contact/body';
import teamHeader from '../components/header';
export default {
  components:{
 teamFooter,
 teamBody,
 teamHeader
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
