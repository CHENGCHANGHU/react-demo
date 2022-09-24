export async function getMessagesListMock(chatId) {
  switch (chatId) {
    case '1':
      return [
        {
          type: 'text',
          content: {
            text: '好久不见，一起吃饭？'
          },
          isMe: true,
        },
        {
          type: 'text',
          content: {
            text: 'Tomorrow'
          },
          isMe: false,
        }
      ];
    case '2':
      return [
        {
          type: 'text',
          content: {
            text: 'I am WeChat assistant'
          },
          isMe: false,
        },
        {
          type: 'image',
          content: {
            url: 'https://picsum.photos/400/400?random=1',
          },
          isMe: false,
        }
      ];
    default:
      return [];
  }
}
