//show all msg
const MessageContainer = ({ messages }) => {
    if (!messages || messages.length === 0) {
        return <div className="fw-light">No message...</div>;
    }

    return (
        <div>
            {
                messages.map((msg, index) =>
                    <table striped border>
                        <tr key={index}>
                            <td>{msg.username} : {msg.msg}</td>
                        </tr>
                    </table>
                )
            }
        </div>
    );
}

export default MessageContainer;
