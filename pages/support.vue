<template>
  <div>
    <body class="">
  <div class="site-wrapper">
   <supportHeader/>
   <div class="headline4" style="text-align:center;width:100%;margin-bottom: 40px;margin-top:100px; ">
    Support
   </div>
   <div class="features">
    <div class="row">
     <div class="col-sm-12 col-md-4">
      <br/>
      <div class="headline5">
       Replica Voice Overview
      </div>
      <p>
       The
       <strong>
        <a href="https://www.notion.so/replicastudios/Replica-Voice-Overview-de17d36b0bf84ce281514c1b7de14836" target="_blank">
         Replica Voice Overview
        </a>
       </strong>
       will help you clone your voice and show you how to improve the quality.
      </p>
     </div>
     <div class="col-sm-12 col-md-4">
      <br/>
      <h5 class="headline5">
       Replica Studio Overview
      </h5>
      <p>
       The
       <strong>
        <a href="https://www.notion.so/replicastudios/Replica-Studios-Overview-3a2dad8930e941b5a31271ec93203dd2" target="_blank">
         Replica Studio Overview
        </a>
       </strong>
       will get you setup and started using Replica Studio.
      </p>
     </div>
     <div class="col-sm-12 col-md-4">
      <br/>
      <div class="headline5">
       Need Help?
      </div>
      <p>
       Have more questions? Message us in the app or email us at
       <a href="mailto:contact@replicastudios.com">
        contact@replicastudios.com
       </a>
      </p>
     </div>
    </div>
   </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <h5 class="headline5">
    Have a question? We'd love to hear from you:
    <br/>
    <br/>
    <a class="button-large" href="mailto:team@replicastudios.com">
     team@replicastudios.com
    </a>
   </h5>
   <br/>
   <br/>
   <br/>
   <br/>
   <supportFooter/>
  </div>
 </body>
  </div>
</template>
<script>
import supportHeader from '../components/header';
import supportFooter from '../components/footer';
export default {
  components: {
    supportHeader,
    supportFooter
  },
  mounted(){
    $(document).ready(function () {
                    // Mobile Menu Trigger
                    $('.nav-burger').click(function () {
                        $('body').toggleClass('site-head-open');
                    });
                });
  }
}
</script>
