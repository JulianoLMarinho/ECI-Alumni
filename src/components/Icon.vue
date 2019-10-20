<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" class="icon-svg">
    <component :is="icon" :key="name" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
import UserIcon from './icons/UserIcon.vue';
const icons: { [name: string]: Vue.Component } = {
    userIcon: UserIcon,
};
interface Data {
  icon: Vue.Component;
}
export default Vue.extend({
  props: {
    name: { type: String, default: 'userIcon' },
    size: { type: Number, default: 24 },
  },
  data(): Data {
    return { icon: icons[this.name] };
  },
});
</script>

<style lang="scss" scoped>
.icon-svg {
  fill: #134563;
}
</style>