import { useState, useRef, useEffect } from "react";
import { getChatListMock } from "./api/chat";
import { getMessagesListMock } from "./api/message";

export function WeChatImitation() {
  const [chatList, setChatList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const inputEl = useRef(null);

  useEffect(() => {
    getChatListMock().then((_chatList) => {
      setChatList(_chatList);
    });  
  }, []);

  useEffect(() => {
    console.log('new chatList', chatList);
  }, [chatList]);

  // return (<div>chat</div>);

  const fetchMessageList = chatId => {
    getMessagesListMock(chatId).then((_messageList) => setMessageList(_messageList));
  }

  const handleClickSend = () => {
    setMessageList(messageList.concat([{
      type: 'text',
      content: {
        text: inputEl.current.value
      },
      isMe: true,
    }]));
    inputEl.current.value = '';
  };

  return (
    <div
      style={{
        width: "800px",
        height: "600px",
        display: "flex",
        flexFlow: "row nowrap",
        border: "1px solid #666",
        borderRadius: "8px",
        margin: "16px auto"
      }}
    >
      <ul
        style={{
          margin: 0,
          padding: '4px',
          width: "30%",
          borderRight: "1px solid #666",
          boxSizing: "border-box",
          display: "flex",
          flexFlow: "column nowrap",
          rowGap: '4px',
        }}
      >
        {chatList.map(({ id, avatar, name, recentMsg }) => {
          return (
            <li
              key={id}
              style={{
                display: "flex",
                flexFlow: "row nowrap",
                alignItems: "center",
                padding: "0 8px",
                columnGap: '8px',
                backgroundColor: '#eee',
              }}
              onClick={() => fetchMessageList(id)}
            >
              <img
                src={`https://picsum.photos/seed/${Math.random() > 0.5 ? 1 : 2}/200/200`}
                alt={avatar}
                style={{
                  width: '40px',
                  height: "40px",
                }}
              />
              <div>
                <div>{name}</div>
                <div
                  style={{
                    color: "#666",
                    fontSize: "14px"
                  }}
                >
                  {recentMsg}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div
        style={{
          width: "70%",
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <ul
          style={{
            flex: 1,
            display: 'flex',
            flexFlow: 'column nowrap',
            rowGap: '4px',
          }}
        >
          {
            messageList.map(({ type, content, isMe }, index) => {
              return (
                <li
                  key={index}
                  style={
                    isMe ? {
                      backgroundColor: 'green',
                    } : {
                      backgroundColor: 'white',
                    }
                  }
                >
                  {
                    type === 'text' ? <div>{content.text}</div> : <img src={content.url} alt={content.url}/>
                  }
                </li>
              );
            })
          }
        </ul>
        <div
          style={{
            minHeight: '200px',
          }}
        >
          <input ref={inputEl} type="text"/>
          <button onClick={handleClickSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
