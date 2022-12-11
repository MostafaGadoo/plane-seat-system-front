import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Layout from './UI/layout/Layout';
import AddFeedbackPage from './pages/AddFeedbackPage';
import ComplaintPage from './pages/ComplaintPage';
import AddFlightPage from './pages/AddFlightPage';
import MakeReportkPage from './pages/MakeReportPage';
import AdminSigninPage from './pages/AdminSigninPage';
import SiginForm from './components/auth/SigninForm';
import TicketsPage from './pages/TicketsPage';
import FeedbackPage from './pages/FeedbackPage';
import ComplaintsPage from './pages/ComplaintsPage';
import ViewLuggagePage from './pages/ViewLuggagePage';
import FlightPage from './pages/FlightPage';
import Bookticket from './pages/Bookticket';
import UpgradeTicket from './pages/UpgradeTicket';
import CancelBooking from './pages/CancelBooking';
import EditTicket from './pages/EditTicket';
import EditFlight from './pages/EditFlight';

const App = () => {
  return (
    <AuthProvider>

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Feedback" element={<AddFeedbackPage />} />
            <Route path="/Complaints" element={<ComplaintPage />} />
            <Route path="/Flights" element={<AddFlightPage />} />
            <Route path="/Reports" element={<MakeReportkPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signinForm" element={<SiginForm />} />
            <Route path="/Asignin" element={<AdminSigninPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/Feedbakcs" element={<FeedbackPage />} />
            <Route path="/ViewComplaint" element={<ComplaintsPage />} />
            <Route path="/Luggage" element={<ViewLuggagePage />} />
            <Route path="/Flight" element={<FlightPage />} />
            <Route path="/ticketsBooked/:ticketId" element={<Bookticket />} />
            <Route path="/ticketsUpgraded/:ticketId" element={<UpgradeTicket />} />
            <Route path="/cancelBooking/:ticketId" element={<CancelBooking />} />
            <Route path="/editbooking/:ticketId" element={<EditTicket />} />
            <Route path="/editflight/:flightId" element={<EditFlight />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
