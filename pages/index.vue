<template>
  <div class="container">
    <div class="chats-layout">
      <messages />
    </div>
    <div class="input-layout">
      <chat-form />
    </div>
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'
import { db } from '~/plugins/firebase'

export default {
  components: {
    Messages,
    ChatForm
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}

.chats-layout {
  overflow: scroll;
  height: 90%;
}

.input-layout {
  padding: 10px;
  height: 10%;
}

textarea {
  width: 100%;
  height: 100%;
}
</style>
