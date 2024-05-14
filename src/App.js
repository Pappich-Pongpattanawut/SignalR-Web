import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'react-bootstrap';
import WaitingRoom from './pages/waitingRoom';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './pages/chatRoom';

function App() {

  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {

      //start connection SignalR Hub
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5235/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      //set up handler
      connection.on("JoinSpecificChatRoom", (msg) => {
        console.log("msg: ", msg)
      });
      connection.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(messages => [...messages, { username, msg }]);
      })

      await connection.start();
      //send data to server -> call method: JoinSpecificChatRoom
      await connection.invoke("JoinSpecificChatRoom", { username, chatroom })

      setConnection(connection);
    }
    catch (e) {
      console.log(e)
    }
  }

  //send msg to room chat
  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <main>
        <Container style={{ marginTop: 20 }}>
          <Row class='px-5 my-5'>
            <Col sm='12'>
              <h2 className='fst-italic fw-bold'>Welcome To SignalR Chat  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg></h2>
            </Col>
          </Row>
          <br />
          {!connection
            ? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
            : <ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
          }
        </Container>
      </main>
    </div>
  );
}

export default App;
