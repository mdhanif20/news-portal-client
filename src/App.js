import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from './Pages/Sheared/Firebase/AuthProvider';
import Reagister from './Pages/Reagister/Reagister';
import BdNews from './Pages/BangladeshNews/BdNews';
import Sports from './Pages/Sports/Sports';
import Business from './Pages/Business/Business';
import Health from './Pages/Health/Health';
import Technology from './Pages/Technology/Technology';
import Entartainment from './Pages/Entartainment/Entartainment';
import Contact from './Pages/Contact/Contact';
import Deshboard from './Pages/Deshboard/DeshBoard/Deshboard';
import DeshSport from './Pages/Deshboard/DeshSport/DeshSport';
import DeshBangladesh from './Pages/Deshboard/DeshBangladesh/DeshBangladesh';
import DeshBusiness from './Pages/Deshboard/DeshBusiness/DeshBusiness';
import DeshHealth from './Pages/Deshboard/DeshHealth/DeshHealth';
import DeshTechnology from './Pages/Deshboard/DeshTechnology/DeshTechnology';
import DeshEntertainment from './Pages/Deshboard/DeshEntartainment/DeshEntartainment';



function App() {

  return (
    <div className='App'>
     <AuthProvider> 
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reagister" element={<Reagister />} />
              <Route path="/bdnews" element={<BdNews />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/business" element={<Business />} />
              <Route path="/health" element={<Health />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/entartainment" element={<Entartainment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/deshboard/*" element={<Deshboard />}>
                <Route path="*" element={<DeshBangladesh/>}/>
                <Route path="sport" element={<DeshSport/>}/>
                <Route path="business" element={<DeshBusiness/>}/>
                <Route path="health" element={<DeshHealth/>}/>
                <Route path="technology" element={<DeshTechnology/>}/>
                <Route path="entertainment" element={<DeshEntertainment/>}/>
              </Route>              
              {/*<Route path="/deshboard/*" element={<Deshboard/>}> 
                <Route path="patients" element={<Patients/>}/>  
                <Route path="*" element={<ClientInfo/>}/>
                  <Route path="*" element={<AdminRoute/>}> 
                    <Route path="allAppointment" element={<AllAppointment/>}/>
                    <Route path="makeadmin" element={<MakeAdmin/>}/>
                  </Route>
              </Route>
              <Route path="/reagister" element={<Reagister/>} />
              <Route path="/*" element={<PrivateRoute/>}>
                  <Route path="appointment" element={<Appointment/>}/>
                  <Route path="contact" element={<ContactUs/>} />
              </Route> */}
            </Routes>
        </BrowserRouter>
     </AuthProvider>
     
      </div>
  );
}

export default App;

