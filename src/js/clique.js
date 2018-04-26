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
        },
        beforeCreate() {
          im.setElement(document.body)
        },
        computed: {
          getMenuClass() {
            var active = false
            if (im.lessThan('tablet') && this.mobileMenu) {
              active = true  
            }
            return {
              'header__info__primary__links': true,
              'header__info__primary__links--active': active
            }
          },
        },
        methods: {
          resize(e) {
            console.log(im.getActive());
          }
        },
      })
    }
  }
}())
