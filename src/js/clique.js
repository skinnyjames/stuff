import Vue from 'vue'
import YAML from 'js-yaml'

import Work from './work.vue'

Vue.component('clique-work', Work)

window.CliqueDemo = window.CliqueDemo || (function(){
  return {
    init(args) {
      new Vue({
        el: args.el,
        data: {
          mobileMenu: false,
          works: null,
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
          // Load Work Examples File
          let vm = this
          let type = 'GET'
          let url = 'data/examples.yml'
          let dataType = 'text'
          let success = (yaml) => {
            vm.works = YAML.safeLoad(yaml)
            console.log(vm.works)
          }
          $.ajax({ type, url, dataType, success })

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
