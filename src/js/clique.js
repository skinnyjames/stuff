import Vue from 'vue'
import YAML from 'js-yaml'

window.CliqueDemo = window.CliqueDemo || (function(){
  return {
    init(args) {
      new Vue({
        el: args.el,
        data: {
          mobileMenu: false,
          work: [],
          media: im,
        },
        beforeMount() {
          let vm = this
          this.media.setElement(document.body)
          this.media.setUpdateMode('manual')
          window.onresize = (e) => {
            if (vm.media.greaterThan('tablet')) {
              vm.mobileMenu = false
            }     
            vm.media.update()
            vm.$forceUpdate()
  
          }
        },
        mounted() {
        },
        computed: {
        },
        methods: {
          getMenuClass() {
            var active = false
            if (this.media.lessThan('tablet') && this.mobileMenu) {
              active = true  
            }
            return {
              'header__info__primary__links': true,
              'header__info__primary__links--active': active
            }
          },
        },
      })
    }
  }
}())
