<template>
  <div class="flex wrapper">
    <div class="chat-list">
      <template v-for="(message, i) in messages">
        <template v-if="message.senderId === 'person1'">
          <q-chat-message
            name="Me"
            :key="i"
            :text="[message.text]"
            sent
          />
        </template>
        <template v-else>
          <q-chat-message
            :key="i"
            name="Angel"
            :text="[message.text]"
          />
        </template>
      </template>
    </div>
    <div class="new-message row fixed-bottom">
      <q-field class="col-10 new-message-field">
        <q-input
          class="q-ma-xs new-message-input"
          v-model="newMessage"
          type="textarea"
          inverted-light
          color="white"
        />
      </q-field>
      <div class="col-2">
        <q-btn class="send-button" @click="sendMessage">Send</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

let globalCurrentUser = null;

export default {
  data: () => ({
    newMessage: '',
    messages: [],
  }),
  mounted() {
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:91cc3090-f513-433f-a90e-779c8df8b236',
      userId: 'angel1',
      tokenProvider: new TokenProvider({ url: 'https://borrowmyangel.unitedco.de/api/chat/token' }),
    });
    chatManager
      .connect()
      .then((currentUser) => {
        currentUser.subscribeToRoom({
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: (message) => {
              this.messages = [
                ...this.messages,
                message,
              ];
            },
          },
        });

        globalCurrentUser = currentUser;
      })
      .catch((error) => {
        console.error('error:', error);
      });
  },

  methods: {
    sendMessage() {
      globalCurrentUser.sendMessage({
        text: this.newMessage,
        roomId: globalCurrentUser.rooms[0].id,
      });

      this.newMessage = '';
    },
  },
};
</script>

<style>
  body {
    background-color: #8C9EFF;
  }

  .wrapper {
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 8rem;
    height: 100vh;
  }

  .logo img {
    width: 100%;
    max-height: 250px;
  }

  h5 {
    font-size: 1.2em;
    color: #8C81CC;
  }

  .main {
    padding-bottom: 1.5em;
  }

  .sub-sub {
    padding-bottom: 2em;
    border: 1px solid transparent
  }

  ul {
    list-style-type: none;
  }

  .chat-list {
    width: 90vw;
    margin: 0 auto;
  }

  .new-message {
    background: #FFFFFF;
    width: 100vw;
    padding: .5rem;
  }

  .new-message-input {
    height: 100%;
    position: relative;
    top: -4px;
    border: 1px solid #333;
  }

  .send-button {
    background-color: #8C9EFF;
    color: #FFFFFF;
    height: 100%;
  }
</style>
