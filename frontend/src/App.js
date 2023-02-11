import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
// import Home from "./Home";
// import Signin from ".Operator/components/Form/Login";
// import AdminDashboard from "./user/AdminDashboard";
// import ApplicationInputForm from "./components/Form";
// import Search from "./components/Search";
import Signin from "./Operator/components/Form/Login"
import Search from "./Operator/components/Search";
import ApplicationInputForm  from './Operator/components/Form'
import AdminDashboard  from "./Operator/user/AdminDashboard"
import Header from "./Operator/components/Header"
import Showform from "./Operator/components/Showfrom/formdetails";
import OperatorEndorsment from "./Operator/components/Endorsment";
import FinalOperatorEndorsment from "./Operator/components/finalendorsment";
import CreateUser from "./Operator/components/Createuser";
import OperatorInputlist from "./Operator/components/Inputlist";
import MemberDashboard from "./Member/components/dashboard/MemeberDashboard";
import MemberHeader from "./Member/components/header/index"
import MemberQuestion from "./Member/components/questionlist";
import AdminstrationEndorsment from "./Adminstration/components/endorsmentlist";
import AdminstrationDashboard from "./Adminstration/components/dashboard/MemeberDashboard";
import AdministrationHeader from "./Adminstration/components/header";

const PrivateRoot = ({
  children,
  user,
  isPrivate = true,
  isLoading = false,
}) => {
  console.log(children, user, isPrivate);
  if (isLoading) return <div>Loading...</div>;
  if (isPrivate) {
    if (!user) return <Redirect to="/signin" />;
    return children;
  } else {
    if (user) return <Redirect to="/admin" />;
    return children;
  }
};

function App() {
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(false);

  // const history = useHistory();

  // React.useEffect(() => {
  //   (function () {
  //     fetch("/api/user-profile")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setLoadingUser(false);
  //         if (!res.user) {
  //           setUser(null)
  //           history.replace("/signin");
  //         } else {
  //           setUser(res.user);
  //         }
  //       })
  //       .catch((e) => {
  //         setLoadingUser(false);
  //         setUser(null)
  //         console.error("user error", e);
  //         history.replace("/signin");
  //         alert("Fail user");
  //       });
  //   })();
  // }, [reload]);

  return (
    // <BrowserRouter>
    <>
    {/* {user && <Header onReload={()=>setReload(pv=> !pv)} />} */}

    <Switch>
      {/* <Route
        path="/signin"
        exact
        children={
          <PrivateRoot isPrivate={false} user={user} isLoading={loadingUser}>
            <Signin onReload={()=>setReload(pv=> !pv)} />
          </PrivateRoot>
        }
      />
      <Route path="/" exact >
        <Redirect to="/signin" />
      </Route>
      <Route path="/admin" exact>
        <PrivateRoot isPrivate={true} user={user} isLoading={loadingUser}>
          <AdminDashboard />
        </PrivateRoot>
      </Route>

      <Route path="/admin/input" exact>
        <PrivateRoot isPrivate={true} user={user} isLoading={loadingUser}>
          <ApplicationInputForm />
        </PrivateRoot>
      </Route>
      <Route path="/admin/search" exact>
        <PrivateRoot isPrivate={true} user={user} isLoading={loadingUser}>
          <Search />
        </PrivateRoot>
      </Route> */}
      <Route path="/" exact >
        <Redirect to="/signin" />
      </Route>
      <Route path="/admin" exact>
        <PrivateRoot isPrivate={true} user={user} isLoading={loadingUser}>
          <AdminDashboard />
        </PrivateRoot>
      </Route>
      <Route
        path="/signin"
        exact
        children={
          <PrivateRoot isPrivate={false} user={user} isLoading={loadingUser}>
            <Signin onReload={()=>setReload(pv=> !pv)} />
          </PrivateRoot>
        }
      />
       <Route path="/admin/input" exact>
       <Header/>
       <ApplicationInputForm />
      </Route>
     <Route path="/admin" exact>
     <Header/>
     <AdminDashboard />
      </Route>
      <Route path="/admin/search" exact>
      <Header/>
      <Search />
      </Route>
      <Route path="/admin/endorsment" exact>
        <Header/>
        <OperatorEndorsment/>
      </Route>
      <Route path="/admin/inputlist" exact>
        <Header/>
        <OperatorInputlist/>
      </Route>
      <Route path="/admin/showlist" exact>
        <Header/>
        <Showform/> 
      </Route>
      <Route path="/admin/user" exact>
        <Header/>
        <CreateUser/> 
      </Route>
      <Route path="/admin/finalendorsment" exact>
        <Header/>
        <FinalOperatorEndorsment/>
      </Route>
      <Route path="/member/dashboard" exact>
        <MemberHeader/>
        <MemberDashboard/>
      </Route>
      <Route path="/member/questionlist" exact>
        <MemberHeader/>
        <MemberQuestion/>
      </Route>
      <Route path="/administration/dashboard" exact>
        <AdministrationHeader/>
        <AdminstrationDashboard/>
      </Route>
      <Route path="/administration/endorsmentlist" exact>
        <AdministrationHeader/>
        <AdminstrationEndorsment/>
      </Route>
    </Switch>
      
    </>
    // <BrowserRouter/>
  );
}

export default App;
