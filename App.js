import { useEffect } from \"react\";
import \"./App.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import axios from \"axios\";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div>
      <header className=\"App-header\">
        <a
          className=\"App-link\"
          href=\"https://emergent.sh\"
          target=\"_blank\"
          rel=\"noopener noreferrer\"
        >
          <img src=\"https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4\" />
        </a>
        <p className=\"mt-5\">Building something incredible ~!</p>
      </header>
    </div>
  );
};

function App() {
  return (
    <div className=\"App\">
      <BrowserRouter>
        <Routes>
          <Route path=\"/\" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;" --new-str "import \"./App.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import { Toaster } from \"./components/ui/sonner\";
import { Navbar } from \"./components/Navbar\";
import { Footer } from \"./components/Footer\";
import { Home } from \"./pages/Home\";
import { About } from \"./pages/About\";
import { WhatWeDo } from \"./pages/WhatWeDo\";
import { LearningPaths } from \"./pages/LearningPaths\";
import { Testimonials } from \"./pages/Testimonials\";
import { Apply } from \"./pages/Apply\";

function App() {
  return (
    <div className=\"App\">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path=\"/\" element={<Home />} />
          <Route path=\"/about\" element={<About />} />
          <Route path=\"/what-we-do\" element={<WhatWeDo />} />
          <Route path=\"/learning-paths\" element={<LearningPaths />} />
          <Route path=\"/testimonials\" element={<Testimonials />} />
          <Route path=\"/apply\" element={<Apply />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}