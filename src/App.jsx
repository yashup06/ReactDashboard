import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Customertableheading from "./components/Customertableheading";
import Customerdetails from "./components/Customerdetails";
import PostListProvider from "./store/store";

function App() {
  return (
    <PostListProvider>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <Home />
        <Customertableheading></Customertableheading>
        <Customerdetails />
      </div>
    </PostListProvider>
  );
}

export default App;
