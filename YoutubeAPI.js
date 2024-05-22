<div id="#app">
  <section>
    <h2>listening events</h2>
    <youtube :video-id="videoId" @ready="ready" @playing="playing"></youtube>
  </section>
  <section>
    <h2>add options</h2>
    <youtube :video-id="videoId" player-width="1280" player-height="750" :player-vars="{autoplay: 1}"></youtube>
  </section>
</div>


'use strict'
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
 
Vue.use(VueYouTubeEmbed)
 
const app = new Vue({
  el: '#app',
  data: {
    videoId: 'videoId',
  },
  methods: {
    ready (event) {
      this.player = event.target
    },
    playing (event) {
      // The player is playing a video.
    },
    change () {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = 'another video id'
    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    }
  }
})


# diegoalejandro programador Web 
exit()




