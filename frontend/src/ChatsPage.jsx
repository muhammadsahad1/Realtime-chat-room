import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={"00a563f5-c2ac-4ff5-ab13-6265b9118e89"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};
export default ChatsPage;
