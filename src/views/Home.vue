<template lang='pug'>
  .home
    each name in ['merlin','percival','morgana','mordred']
      div(class=name)
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="stylus">
@import '..\assets\style.styl'
bg(u,p1=0,p2=0,z=cover)
  background url(u)
  background-position p1 p2
  background-size z

.home
  size(100%,90vh)
  flexCenter()
  .merlin
    size(100%,100%)
    bg('https://drive.google.com/uc?export=view&id=1mtoXatoI0gWL7KEPyLZ5HW4uTMriYrZH',center,center,)
    opacity 0
    animation fadeIn 1s 1s forwards
  .percival
    size(100%,100%)
    bg('https://drive.google.com/uc?export=view&id=1GmDfqdGf_5cvfqYsxqCaWQlgw1C1UpSk',center,center,)
    opacity 0
    animation fadeIn 1s 1.5s forwards
  .morgana
    size(100%,100%)
    bg('https://drive.google.com/uc?export=view&id=10U6MH4UWdFN8s09gB8tmRYPMmrkx_R6J',center,center,)
    opacity 0
    animation fadeIn 1s 2s forwards
  .mordred
    size(100%,100%)
    bg('https://drive.google.com/uc?export=view&id=15yHtj0llK-C8IhdHGfSgJVgGTLl2t82f',center,center,)
    opacity 0
    animation fadeIn 1s 2.5s forwards



</style>
