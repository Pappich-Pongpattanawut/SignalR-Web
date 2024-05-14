import { Col, Row, Form } from "react-bootstrap";
import MessageContainer from "../components/MessageContainer";
import SendMessageForm from "../components/SendMessageForm";

const ChatRoom = ({ messages, sendMessage }) => {

    console.log("chatRoom" + messages);

    return (
        <div style={{ width : "500px", margin : "20px"}}>
            <Row className="px-1 py-1 bg-secondary rounded-top-3">
                <Col sm={10}>
                    <h2 className="text-white">Chat Room <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        </svg>
                    </h2>
                </Col>
            </Row>

            <Row className="px-5 border border-secondary">
                <Col sm={12} style={{ height: "400px", overflowY: "auto", marginTop : 15}}>
                    <MessageContainer messages={messages} />
                </Col>
            </Row>

            <Row className="px-5 border border-secondary">
                <Col sm={12} style={{ marginTop : 15}}>
                    <SendMessageForm sendMessage={sendMessage} />
                </Col>
            </Row>
        </div>
    );
}

export default ChatRoom;
