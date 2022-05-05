<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

  body {
    background: #2B2B3D;
    font-family: 'Titillium Web[RUS by Daymarius]';
    font-size: 16px;
    color: #B6B6DD;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Titillium Web[RUS by Daymarius]';
    src: url('~@/assets/fonts/titilliumwebrusbydaymarius_light.eot');
    src: local('SF Pro Display Light'), local('~@/assets/fonts/SFProDisplay/titilliumwebrusbydaymarius_light'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_light.woff2') format('woff2'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_light.woff') format('woff'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Titillium Web[RUS by Daymarius]';
    src: url('~@/assets/fonts/titilliumwebrusbydaymarius_rg.eot');
    src: local('SF Pro Display Regular'), local('~@/assets/fonts/SFProDisplay/titilliumwebrusbydaymarius_rg'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_rg.woff2') format('woff2'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_rg.woff') format('woff'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_rg.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Titillium Web[RUS by Daymarius]';
    src: url('~@/assets/fonts/titilliumwebrusbydaymarius_sm.eot');
    src: local('SF Pro Display Regular'), local('~@/assets/fonts/SFProDisplay/titilliumwebrusbydaymarius_sm'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_sm.woff2') format('woff2'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_sm.woff') format('woff'),
      url('~@/assets/fonts/titilliumwebrusbydaymarius_sm.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  .btn__style {
    border-radius: 4px;
  }

  .color-btn__style a {
    color: #FFFFFF;
  }

  :hover, :active, :focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
  }

  input {
    outline:none;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  body, h1, h2, h3, h4, h5, h6,
  p, ul, ol, li, figure, figcaption,
  blockquote, dl, dd {
    margin: 0;
  }

  .container {
    padding: 0 130px;

    @media screen and (min-width:1024px) and (max-width: 1310px) { 
      padding: 0 40px;
    }

    @media screen and (min-width:768px) and (max-width: 1023px) { 
      padding: 0 34px;
    }

    @media screen and (min-width:320px) and (max-width: 767px) { 
      padding: 0 10px;
    }
  }

</style>
