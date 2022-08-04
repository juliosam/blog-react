import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import Home from "./home";
import About from "./about";
import Missing from "./missing";
import PostPage from "./postPage";
import NewPost from "./newPost";
import { Routes, Route} from "react-router-dom";
import EditPost from "./editPost";
import { DataProvider } from "./context/dataContext";

function App() {

  return (
    <div className="App">
      <Header title="Julio's Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path="/post" element={<NewPost/>}/>
          <Route path="/edit/:id" element={<EditPost/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
      </DataProvider>
      <Footer/>
    </div>
  );
}

export default App;
