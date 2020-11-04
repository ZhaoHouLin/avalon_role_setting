<template lang="pug">
.avalon
  .screen
    .result(v-if='num>=15')
      h4 角色位置:
      .seat(v-for='(role,id) in sevenRoles' ) 位置{{id+1}} : {{role.name}}
    .cards(:style='nextPage')
      .cover(v-for='(role,id) in sevenRoles' )
        .space 您的角色是???
        .card
          img(:src='role.cover')
          .info
            h3 您是{{role.name}}
            h3 {{role.info}}
  .use
    button(@click='setEight') ⟲
    button(@click='next') next

</template>

<script>
export default {
  data() {
    return {
      sevenRoles : [
        {name:"梅林",cover:'https://drive.google.com/uc?export=view&id=1mtoXatoI0gWL7KEPyLZ5HW4uTMriYrZH'},
        {name:"派西維爾",cover:'https://drive.google.com/uc?export=view&id=1GmDfqdGf_5cvfqYsxqCaWQlgw1C1UpSk'},
        {name:"亞瑟的忠臣",cover:'https://drive.google.com/uc?export=view&id=1SwT5OFBH5XZPiSL-sAzPDpFKCEJZUCA4'},
        {name:"亞瑟的忠臣",cover:'https://drive.google.com/uc?export=view&id=1SwT5OFBH5XZPiSL-sAzPDpFKCEJZUCA4'},
        {name:"莫甘娜",cover:'https://drive.google.com/uc?export=view&id=10U6MH4UWdFN8s09gB8tmRYPMmrkx_R6J'},
        {name:"刺客",cover:'https://drive.google.com/uc?export=view&id=1xG3yTAxFK15UehD145Rf-InAbPbzkuQO'},
        {name:"奧伯倫",cover:'https://drive.google.com/uc?export=view&id=1Q5HZ0520bZUtVMNK4CK8xU9Hq0zmcosq'}
      ],
      assassinMates: [],
      morganaMate: [],
      merlinSee: [],
      percivalSee: [],
      num: 0
    }
  },
  methods: {
    setEight() {
      this.sevenRoles.sort(()=> {
        return Math.random()>0.5?-1:1
      })
      this.num = 0
      this.assassin()
      this.morgana()
      this.merlin()
      this.percival()
    },
    assassin() {
      this.assassinMates = []
      this.assassinMates.push(this.sevenRoles.findIndex(x=>x.name==="莫甘娜")+1)
      this.assassinMates.sort(()=> {
        return Math.random()>0.5?-1:1
      })
      this.sevenRoles[this.sevenRoles.findIndex(x=>x.name==="刺客")].info=("您的隊友在第"+this.assassinMates+"位置")
    },
    morgana() {
      this.morganaMate = []
      this.morganaMate.push(this.sevenRoles.findIndex(x=>x.name==="刺客")+1)
      this.morganaMate.sort(()=> {
        return Math.random()>0.5?-1:1
      })
      this.sevenRoles[this.sevenRoles.findIndex(x=>x.name==="莫甘娜")].info=("您的隊友在第"+this.morganaMate+"位置")
    },
    merlin() {
      this.merlinSee = []
      this.merlinSee.push(this.sevenRoles.findIndex(x=>x.name==="刺客")+1)
      this.merlinSee.push(this.sevenRoles.findIndex(x=>x.name==="莫甘娜")+1)
      this.merlinSee.push(this.sevenRoles.findIndex(x=>x.name==="奧伯倫")+1)
      this.merlinSee.sort(()=> {
        return Math.random()>0.5?-1:1
      })
      this.sevenRoles[this.sevenRoles.findIndex(x=>x.name==="梅林")].info=("您能看到的壞人在第"+this.merlinSee+"位置")
    },
    percival() {
      this.percivalSee = []
      this.percivalSee.push(this.sevenRoles.findIndex(x=>x.name==="梅林")+1)
      this.percivalSee.push(this.sevenRoles.findIndex(x=>x.name==="莫甘娜")+1)
      this.percivalSee.sort(()=> {
        return Math.random()>0.5?-1:1
      })
      this.sevenRoles[this.sevenRoles.findIndex(x=>x.name==="派西維爾")].info=("您要辨認的人在第"+this.percivalSee+"位置")
    },
    next() {
      this.num+=1
      if (this.num>=16) {
        this.num = 0
      }
    },
  },
  mounted() {
    this.setEight()
  },
  computed: {
    nextPage() {
      return {
        "right": `${this.num*100}` + "%"
      }
  },
  }

}
</script>


<style lang="stylus" scoped>
@import '..\assets\style.styl'

</style>