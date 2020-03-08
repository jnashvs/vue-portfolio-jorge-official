<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand homebutton" to="/">Home</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        ref="navcolapse"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active" @click="closer">
            <router-link to="/">About me</router-link>
          </li>
          <li class="nav-item" @click="closer">
            <!--<a class="list-group-item list-group-item-action" href="#list-item-1">Experiences</a>-->
            <router-link to="/experiences">Experiences</router-link>
          </li>
          <li class="nav-item last" @click="closer">
            <router-link to="/projects">Projects</router-link>
          </li>
          <!--
                    <li class="nav-item" @click="closer">
                        <router-link to="/articles">Articles</router-link>
                    </li>
                    <li class="nav-item last" @click="closer">
                        <router-link to="/contact-me">Contact me</router-link>
                    </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    name: "Vue.js"
  }),
  methods: {
    closer: function(event) {
      var x = this.$refs.navcolapse.setAttribute(
        "class",
        "navbar-collapse collapse"
      );
    }

    // this.$store.dispatch('closer', function(){
    //           console.log(this.$refs)
    //           return false;
    //         })

  }
};
</script>
