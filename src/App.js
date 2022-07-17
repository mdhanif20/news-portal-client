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
              {/* <Route path="/details/:id" element={<Details />} />  */}
              
              {/* <Route path="/deshboard/*" element={<Deshboard/>}> 
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

