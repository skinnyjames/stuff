import Vue from 'vue'
import YAML from 'js-yaml'

window.CliqueSite = window.CliqueSite || (function(){
  return {
    init(args) {
      new Vue({
        el: args.el,
        data: {
          work: [],
        },
        mounted() {
          let vm = this
          let type = 'GET'
          let url = 'data/work.yml'
          let dataType = 'text'
          let success = (yaml) => {
            vm.work = YAML.safeLoad(yaml)
          }
          $.ajax({ type, url, dataType, success })
        },
        computed: {
        },
        methods: {
        },
      })
    }
  }
}())
