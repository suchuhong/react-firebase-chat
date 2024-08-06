import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Demo1 from "./components/demo/Demo1";

const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default App;
