import { useDispatch } from "react-redux";
import { logOutUser } from "../features/user/userSlise";

const Chat = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>chat</h1>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch(logOutUser())}
      >
        Log out
      </button>
    </div>
  );
};

export default Chat;
