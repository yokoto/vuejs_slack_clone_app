<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <p v-for="(channel, key) in channels" :key="key">
        <nuxt-link :to="`/channels/${channel.id}`">
          {{ channel.name }}
        </nuxt-link>
      </p>
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'

export default {
  data() {
    return {
      channels: []
    }
  },
  mounted () {
    db.collection('channels').get()
      .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          this.channels.push({id: doc.id, ...doc.data()})
        })
      })
      console.log(this.channels)
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.app-layout {
  display: flex;
}

.sidebar {
  width: 300px;
  background: #4A4141;
  height: 100vh;
  padding: 20px;
}

.sidebar p {
  color: #DDDDDD;
  padding-top: 4px;
}

.main-content {
  width: 100%;
  background: #F1F1F1;
  height: 100vh;
}
</style>