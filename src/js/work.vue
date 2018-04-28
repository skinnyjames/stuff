<template>
	<div :class="getClass" :style="getStyle">
    <div class="gradient" :style="getGradient"></div>
		<div class="work__details">
			<div class="work__details__logo">
				<img :src="'img/' + work.id + '-logo.png'" >
			</div>
			<div class="work__details__summary">
				<div class="work__details__summary__title" v-html="title">
				</div>
				<div class="work__details__summary__desc">
					{{ work.description }}
				</div>
			</div>
			<button class="work__summary__view">View Case Study</button>
		</div>
		<div class="work__evidence">
			<slot></slot>
		</div>
	</div>
</template>

<script>
module.exports = {
	props: ['work'],
	computed: {
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
<style>
.gradient {
  width: 100%;
  height: 100%;
  position: absolute;
}
