<template>
  <router-link :to="localizedRoute(route, $i18n.locale)" class="navbar-item">
    <div class="level" @click="$emit('click')">
      <span class="icon is-medium m-r-sm"><i :class="icon" class="fas fa-lg prefix"/></span>
      <span class="nav-text is-size-5">{{ name }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.navbar-item {
  padding-left: 12px;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.nuxt-link-exact-active {
  color: white;
  background-color: #374a59;
  border-left: 5px #84429a solid;
  padding-left: 7px;
}
</style>
