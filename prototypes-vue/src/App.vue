<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>
<style>
.text-red {
  color: var(--ion-color-danger) !important;
}

.text-white {
  color: var(--ion-color-tertiary) !important;
}

.text-gray {
  color: gray !important;
}

.text-blue {
  color: var(--ion-color-primary) !important;
}

.text-black {
  color: var(--ion-color-dark) !important;
}

.text-yellow {
  color: var(--ion-color-warning) !important;
}

.eslip-aproved-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: unset;
}

.eslip-dim {
  -webkit-filter: brightness(50%);
  -moz-filter: brightness(50%);
  filter: url(#brightness);
  filter: brightness(50%);
}

.content-full {
  min-height: 100%;
}

ion-card {
  margin: unset !important;
  border: none !important;
  width: auto !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border-radius: unset;
}

ion-card .qr {
  display: block;
  width: unset;
}

ion-card .icon {
  width: unset;
  display: unset;
}

ion-card .circle {
  border-radius: 50% !important;
}

ion-item img.circle {
  border-radius: 50% !important;
}

.center {
  margin-left: auto;
  margin-right: auto;
  float: none;
  display: block;
}

.searchbar-ios {
  background: unset;
}

form ion-item ion-label {
  font-weight: bold;
}

.non-circle {
  border-radius: unset !important;
}

.img-responsive {
  max-width: 100%;
  height: auto;
}

ion-fab {
  margin: 0 !important;
}

.bold {
  font-weight: bold;
}

.line-through {
  text-decoration: line-through;
}

.transaction .right-line {
  border-right: 0.55px solid #c8c7cc !important;
}

.transaction .right-arrow {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: var(--ion-color-medium);
  background-color: var(--ion-color-tertiary);
}

.transaction .indentation {
  background-image: url(./assets/imgs/indentationbg.png);
  background-repeat: repeat-x;
  height: 10px;
  margin-top: -1px;
  background-size: 16px;
}

.transaction .text-no-wrap {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.transaction .text-vertical-center {
  margin: auto 0px !important;
}

.transaction .content-center {
  display: flex;
  justify-content: center;
}

.transaction .padding-vertical-long {
  padding: 50px 0 !important;
}

.transaction ion-label {
  margin: unset !important;
}

.transaction .list-ios {
  margin: unset !important;
}

.transaction .transaction-img {
  width: 35px;
  height: 35px;
}

ion-avatar.avatar-xs {
  width: 18px;
  height: 18px;
}

ion-avatar.avatar-s {
  width: 30px;
  height: 30px;
}

ion-avatar.avatar-m {
  width: 45px;
  height: 45px;
}

ion-avatar.avatar-l {
  width: 60px;
  height: 60px;
}

.logo-xs {
  width: 18px;
  height: 18px;
}

.logo-s {
  width: 30px;
  height: 30px;
}

.logo-m {
  width: 45px;
  height: 45px;
}

.logo-l {
  width: 60px;
  height: 60px;
}

ion-fab-button.fab-small {
  width: 30px;
  height: 30px;
}

.no-shadow {
  --box-shadow: none !important;
  box-shadow: none !important;
}

.text-indent {
  text-indent: 5%;
}

.ion-select-full {
  max-width: unset;
  width: 100%;
}

ion-item.imageCenter img {
  height: 90px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

ion-label ion-skeleton-text {
  height: 17px;
  width: 80%;
}

H3 ion-skeleton-text {
  height: 14px;
  width: 60%;
}

.line-height2 {
  line-height: 2 !important;
}

.text-hidden {
  overflow: hidden;
}

.input-money {
  margin-left: 26px;
}

a.link-medium {
  text-decoration: none !important;
  color: var(--ion-color-medium) !important;
}

.upload-image-crop {
  padding: 20px;
  -webkit-mask-image: radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0.1) 50%);
  mask-image: radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0.1) 50%);
}

.border-radius {
  border-radius: 10px;
}

@font-face {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 300;
  src: url("./assets/fonts/kanit-v3-latin_thai-300.eot");
  /* IE9 Compat Modes */
  src: local("Kanit Light"), local("Kanit-Light"),
    url("./assets/fonts/kanit-v3-latin_thai-300.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */
    url("./assets/fonts/kanit-v3-latin_thai-300.woff2") format("woff2"),
    /* Super Modern Browsers */
    url("./assets/fonts/kanit-v3-latin_thai-300.woff") format("woff"),
    /* Modern Browsers */
    url("./assets/fonts/kanit-v3-latin_thai-300.ttf") format("truetype"),
    /* Safari, Android, iOS */
    url("./assets/fonts/kanit-v3-latin_thai-300.svg#Kanit") format("svg");
  /* Legacy iOS */
}

</style>