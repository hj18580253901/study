<template>
  <transition name="ajax-loading">
    <div class="ajax-loading" v-show="visible">
      <div class="ajax-loading-wrapper">
        <div class="loading-box">
          <div class="loading-ball"></div>
          <div class="loading-ball"></div>
          <div class="loading-ball"></div>
        </div>
      </div>
      <div class="ajax-loading-mask"></div>
    </div>
  </transition>
</template>
<script>
export default{
  name: 'Loading',
  data () {
    return {
      visible: false
    }
  }
}
</script>
<style lang="scss" scoped>
.ajax-loading{
  transition: all 0.2s linear;
}
.ajax-loading-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  .loading-ball{
    display: inline-block;
    margin: 2px;
    width: 15px;
    height: 15px;
    background-color: #1067d7;
    border-radius: 100%;
    animation-fill-mode: both;
    &:nth-child(1) {
      animation: scale 1.4s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
    &:nth-child(2) {
      animation: scale 1.4s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
    &:nth-child(3) {
      animation: scale 1.4s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
  }
}
.ajax-loading-mask{
  position: fixed;
  top:0;
  left:0;
  size: 100%;
  opacity: 0;
  background: transparent;
  z-index: 10;
}
.ajax-loading-enter,
.ajax-loading-leave-active {
  opacity: 0;
}
@keyframes scale {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>
