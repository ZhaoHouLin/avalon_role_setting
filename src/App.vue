<template lang='pug'>
#app
  transition(name='page' mode='out-in')
    router-view
  #nav
    router-link(to='/') Home
    router-link(to='/tenRoles') 10人局
    router-link(to='/eightRoles') 8人局
  

</template>

<style lang="stylus">
@import '.\assets\style.styl'
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  flexCenter(space-around,center)
  size(100%,10vh)
  background-color #222
  border 1px solid #fff
  a
    border 1px solid #fff
    size(100%,100%)
    flexCenter()
    color white
    text-decoration none

.page-enter-active,.page-leave-active
  transition 0.5s
.page-enter,.page-leave-to
  opacity 0

</style>
