import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed, { global: false })
// if you want to install the component globally with a different name
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })


<script src="vue-youtube-embed.umd.js"></script>
<script>
Vue.use(VueYouTubeEmbed)
</script> 


import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
let videoId = getIdFromURL(url)
let startTime = getTimeFromURL(url)

<youtube :player-vars="{ autoplay: 1 }"></youtube>




