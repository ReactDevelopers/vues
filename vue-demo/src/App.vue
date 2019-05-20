<template>
  <div id="app">
    <RwvHeader />
    <router-view></router-view>
    <RwvSide />
    <RwvFooter />
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader";
import RwvSide from "@/components/TheSideMenu";
import RwvFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvSide,
    RwvFooter
  }
};
</script>

<style></style>
