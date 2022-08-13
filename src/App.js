import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from "./Components/Signup/Signup"
import CompanyDetails from "./Components/Signup/CompanyDeatils"
import InviteTeam from "./Components/Signup/InviteTeam"
import Main from './Components/Dashboard/Main';
import Documents from './Components/Pages/Documents';
import Activity from "./Components/Pages/Activity"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/companydetails' element={<CompanyDetails />} />
          <Route path='/inviteteam' element={<InviteTeam />} />
          <Route path='/main' element={<Main />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/activity' element={<Activity />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
