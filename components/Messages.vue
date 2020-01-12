<template>
  <div class="chats-container">
    <message v-for="(message, key) in messages" :message="message" :key=key />
  </div>
</template>

<script>
import Message from './Message'

export default {
  props: ['messages'],
  components: {
    Message
  },
  mounted() {
    console.log(this.messages)
  }
}
</script>

<style>
.chats-container {
  padding: 16px;
}
</style>