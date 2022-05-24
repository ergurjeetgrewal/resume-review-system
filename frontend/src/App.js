import { Fragment, useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { bindActionCreators } from "redux";
import { authactionCreators } from "./state";
import { Route, Routes } from "react-router-dom";
import Application from "./pages/Application";
import Newresume from "./pages/Newresume";
import Messager from "./components/Messager";

function App() {
  const [show, setShow] = useState(false);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const { localstorageLoad } = bindActionCreators(authactionCreators, dispatch)
  useEffect(() => {
    localstorageLoad();
  }, [localstorageLoad])

  return (
    <Fragment>
      <Messager/>
      {isAuthenticated ? <>
        <Topbar setShow={setShow} show={show} />
        <div className="grid grid-cols-12">
          <div className='md:col-span-2'><Sidebar setShow={setShow} show={show} /></div>
          <div className='md:col-span-10 mt-2 col-span-full mr-5'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/application" element={<Application />} />
              <Route path="/addnewcandidate" element={<Newresume />} />
            </Routes>    
          </div>
        </div>
      </> : <Login />}
    </Fragment>
  );
}

export default App;
