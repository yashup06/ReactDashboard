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
      <div className="Container">
        <Sidebar />
        <div className="Headercontainer">
          <Header />
          <Home />
          <div className="customerdetails">
            <Customertableheading></Customertableheading>
            <Customerdetails />
          </div>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
