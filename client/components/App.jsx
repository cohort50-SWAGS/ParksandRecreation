import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Main from './Main.js';
import Error from './Error.js';
import '../styling/style.css';
import SearchTrips from './SearchTrips.js';
import SavedTrips from './SavedTrips.js'

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/main/" element={<Main />}>
              <Route path="searchTrips" element={<SearchTrips/>} />
              {/* Have a Saved List/Likes Page nested in Main */}``
              <Route path="savedTrips" element={<SavedTrips/>} />
            </Route>
            <Route path='/error' element={<Error/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<PublicPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route
//             path="/protected"
//             element={
//               <RequireAuth>
//                 <ProtectedPage />
//               </RequireAuth>
//             }
//           />
//         </Route>
//       </Routes>

export default App;