<template>
  <div :class="getClass" :style="getStyle">
    <div class="work__gradient gradient" :style="getGradient"></div>
    <div class="work__details">
      <div class="work__details__header">
        <div class="work__details__header__logo">
          <img :src="'img/' + work.id + '-logo.png'" >
        </div>
        <div class="work__details__header__title" v-html="title"></div>
      </div>
      <div class="work__details__body">
        <div class="work__details__body__desc" v-html="description"></div>
        <a class="work__details__body__view">View Case Study</a>
      </div>
    </div>
    <div class="work__evidence">
      <slot></slot>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ['work'],
  mounted() {
    this.$emit('mounted')
  },
  computed: {
    description() {
      return this.work.description.replace(/\n/g, '<br>')
    },
    title() {
      return this.work.title.replace(/\n/g, '<br>')
    },
    getClass() {
      let id = 'work--' + this.work.id
      return ['work', id]
    },
    getStyle() {
      return {
      'z-index': '-1',
      'position': 'relative',
      'background-image': 'url(\'img/' + this.work.id + '.png\')'
      }
    },
    getGradient() {
      return {
      'z-index': '-2',
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'background-image': 'linear-gradient(to top, ' + this.work.bg_color + ',' + this.work.bg_color.replace(/\.(\d)/, '.8') + ' 71%)',
      }
    }
  }
}
</script>
