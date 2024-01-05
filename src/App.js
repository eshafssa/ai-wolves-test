import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Layout from './components/Layout/Layout'
import Index from './pages/Home/Index'
import ForgotPssword from './pages/forgotPassword/ForgotPssword'
import {
	BrowserRouter,
	Route,
	Routes,
  } from "react-router-dom";
function App() {
  return (
    <div>
      <main>
		<BrowserRouter>
          <div>
            <main>
              <Layout>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/ForgotPssword" element={<ForgotPssword />} />
                </Routes>
               </Layout>
            </main>
         </div>
    </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
