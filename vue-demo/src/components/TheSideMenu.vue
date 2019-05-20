<template>
  <nav class="navbar navbar-light">
    <div id="main">
      
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RwvSide",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    makeActive: function(item){
        alert(item);
        this.active = item;
    }
  }
};
</script>
