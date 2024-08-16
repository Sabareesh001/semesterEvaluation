import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import COEpage from './pages/COEpage';
import { IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FacultyAllocation from './pages/FacultyAllocation';
import FacultyAllocationRequests from './pages/FacutlyAllocationRequests';
import FacultyApprovalPage from './pages/FacultyApprovalPage';
import FacultyChangeRequests from './pages/FacultyChangeRequests';
import ReportDownloadPage from './pages/ReportDownloadPage';
import FacultyAllocationDashboard from './pages/FacultyAllocationDashboard';
import COEDashboard from './pages/COEDashboard';


function App() {
  return (
    <Router>
      <div className="appContainer">
        <Sidebar />
        <div className="content">
          <div className="header">
            <IconButton>
            <AccountCircle sx={{ fontSize: 40, color: '#333' }} /> {/* Adjust size and color */}
            </IconButton>
          </div>
          <Routes>
            <Route path="/" element={<COEpage />} />
            <Route path='/createSemesterEvaluation' element={<COEpage/>}/>
            <Route path='/semesterEvaluationReport' element={<ReportDownloadPage/>}/>
            <Route path="/facultyAllocation" element={<FacultyAllocation />} />
            <Route path="/facultyAllocationDashboard" element={<FacultyAllocationDashboard />} />
            <Route path="/COEDashboard" element={<COEDashboard />} />
            <Route path="/facultyAllocationRequests" element={<FacultyAllocationRequests />} />
            <Route path="/facultyChangeRequests" element={<FacultyChangeRequests />} />
            <Route path="/facultyApproval" element={<FacultyApprovalPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
