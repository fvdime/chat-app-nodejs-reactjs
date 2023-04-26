import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId = '78e0caf4-aec6-4bd2-af13-90255c9b55c9'
            username={props.user.username}
            secret = {props.user.secret}
            style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage;