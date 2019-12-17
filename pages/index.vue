<template>
<div>
  <body class>
    <div class="site-wrapper">
      <homeHeader/>
      <homeBody/>
      <homeFooter/>
    </div>
    <script type="text/javascript">
    var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq ||
    {widgetcode:"884748fc8d0355be9440168f61c11816505d38772e08984dd2eb970d15a7cdba1fea372251f2bf7e5a967c7e41d040f2", values:{},ready:function(){}};
    var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;
    s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
    </script>

  </body>
</div>
</template>

<script>
// import Logo from "~/components/Logo.vue";
import homeHeader from '../components/header';
import homeBody from '../components/Home/page-body';
import homeFooter from '../components/footer';
export default {
  components: {
    homeHeader,
    homeBody,
    homeFooter
  },
  methods: {
    prechange() {

      $(document).ready(function() {
        // Mobile Menu Trigger
        $(".nav-burger").click(function() {
          $("body").toggleClass("site-head-open");
        });
      });


    },
    getData() {
      const client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "p0xdyl00ot4c",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "H38I9XnRZpfnTkbw3Iq-pVNzPIIFpk2kU9KZmQFHBcc"
      });
      // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
      client
        .getEntry("5EZ6gqgnmh6XybT19yeykA")
        .then(entry => console.log(entry));
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getData();
    this.prechange();
  }
};
</script>
