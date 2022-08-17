import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from "./Components/Signup/Signup";
import CompanyDetails from "./Components/Signup/CompanyDeatils";
import InviteTeam from "./Components/Signup/InviteTeam";
import Main from './Components/Dashboard/Main';
import Documents from './Components/Pages/Documents';
import Activity from "./Components/Pages/Activity";
import ProjectsSettings from "./Components/Pages/ProjectSettings";
import EditDocument from './Components/Pages/EditDocument';
import NFTmarketplace from './Components/Pages/NFTmarketplace';
import Datatable from './Components/Pages/Datatable';
import Setting from './Components/Pages/Setting';
import Candidates from './Components/Pages/Candidates';


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
          <Route path='/editdocument' element={<EditDocument/>} />
          <Route path='/projectsettings' element={<ProjectsSettings />} />
          <Route path='/nftmarketplace' element={<NFTmarketplace/>} />
          <Route path='/datatable' element={<Datatable />} />
          <Route path='/setting' element={<Setting/>} />
          <Route path='/candidates' element={<Candidates/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;