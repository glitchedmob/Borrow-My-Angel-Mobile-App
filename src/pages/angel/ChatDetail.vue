<template>
  <h1>Chat Detail</h1>
</template>

<script>
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

export default {
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
              console.log(`Received new message: ${message.text}`);
            },
          },
        });
      })
      .catch((error) => {
        console.error('error:', error);
      });
  },
};
</script>

<style>

</style>
