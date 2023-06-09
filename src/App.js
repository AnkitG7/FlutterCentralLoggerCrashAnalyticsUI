import React from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import CentralLoggerData from './components/CentralLoggerData';
import Home from './components/Home';
import CrashAnalyticsData from './components/CrashAnalyticsData';
import CrashAnalyticsSummary from './components/CrashAnalyticsSummary';
import CentralLoggerSummary from './components/CentralLoggerSummary';
import './App.css'; // Import a CSS file for styling

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/CrashAnalyticsData" activeClassName="active-link">
                Crash Analytics Data
              </NavLink>
            </li>
            <li>
              <NavLink to="/CentralLoggerData" activeClassName="active-link">
                Central Logger Data
              </NavLink>
            </li>
            <li>
              <NavLink to="/CrashAnalyticsSummary" activeClassName="active-link">
                Crash Analytics Summary
              </NavLink>
            </li>
            <li>
              <NavLink to="/CentralLoggerSummary" activeClassName="active-link">
                Central Logger Summary
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CrashAnalyticsData" element={<CrashAnalyticsData />} />
          <Route path="/CentralLoggerData" element={<CentralLoggerData />} />
          <Route path="/CrashAnalyticsSummary" element={<CrashAnalyticsSummary />} />
          <Route path="/CentralLoggerSummary" element={<CentralLoggerSummary />} />
          <Route
            path="*"
            element={
              <div className="not-found">
                <h2>404 - Page not found</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}




// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import CentralLoggerData from './components/CentralLoggerData';
// import Home from './components/Home';
// import CrashAnalyticsData from './components/CrashAnalyticsData';
// import CrashAnalyticsSummary from './components/CrashAnalyticsSummary';
// import CentralLoggerSummary from './components/CentralLoggerSummary';
// import './App.css'; // Import a CSS file for styling

// export default function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <nav className="navbar">
//           <ul className="nav-links">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/CrashAnalyticsData">Crash Analytics Data</Link>
//             </li>
//             <li>
//               <Link to="/CentralLoggerData">Central Logger Data</Link>
//             </li>
//             <li>
//               <Link to="/CrashAnalyticsSummary">Crash Analytics Summary</Link>
//             </li>
//             <li>
//               <Link to="/CentralLoggerSummary">Central Logger Summary</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CrashAnalyticsData" element={<CrashAnalyticsData />} />
//           <Route path="/CentralLoggerData" element={<CentralLoggerData />} />
//           <Route path="/CrashAnalyticsSummary" element={<CrashAnalyticsSummary />} />
//           <Route path="/CentralLoggerSummary" element={<CentralLoggerSummary />} />
//           <Route
//             path="*"
//             element={
//               <div className="not-found">
//                 <h2>404 - Page not found</h2>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import CentralLoggerData from './components/CentralLoggerData';
// import Home from './components/Home';
// import CrashAnalyticsData from './components/CrashAnalyticsData';
// import CrashAnalyticsSummary from './components/CrashAnalyticsSummary';
// import CentralLoggerSummary from './components/CentralLoggerSummary';
// import './App.css'; // Import a CSS file for styling

// export default function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <nav>
//           <ul className="nav-links">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/CrashAnalyticsData">Crash Analytics Data</Link>
//             </li>
//             <li>
//               <Link to="/CentralLoggerData">Central Logger Data</Link>
//             </li>
//             <li>
//               <Link to="/CrashAnalyticsSummary">Crash Analytics Summary</Link>
//             </li>
//             <li>
//               <Link to="/CentralLoggerSummary">Central Logger Summary</Link>
//             </li>
//           </ul>
//         </nav>
      


//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CrashAnalyticsData" element={<CrashAnalyticsData />} />
//           <Route path="/CentralLoggerData" element={<CentralLoggerData />} />
//           <Route path="/CrashAnalyticsSummary" element={<CrashAnalyticsSummary />} />
//           <Route path="/CentralLoggerSummary" element={<CentralLoggerSummary />} />
//           <Route
//             path="*"
//             element={
//               <div className="not-found">
//                 <h2>404 - Page not found</h2>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }



// import React from 'react';
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import CentralLoggerData from './components/CentralLoggerData';
// import Home from './components/Home';
// import CrashAnalyticsData from './components/CrashAnalyticsData';
// import CrashAnalyticsSummary from './components/CrashAnalyticsSummary';
// import CentralLoggerSummary from './components/CentralLoggerSummary';

// // import Navigation from './components/Navigation';
// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               {/* 👇️ link to dynamic path */}
//               <Link to="/CrashAnalyticsData">CrashAnalyticsData</Link>
//             </li>
//             <li>
//               {/* 👇️ link to dynamic path */}
//               <Link to="/CentralLoggerData">CentralLoggerData</Link>
//             </li>
//             <li>
//               {/* 👇️ link to dynamic path */}
//               <Link to="/CrashAnalyticsSummary">CrashAnalyticsSummary</Link>
//             </li>
//             <li>
//               {/* 👇️ link to dynamic path */}
//               <Link to="/CentralLoggerSummary">CentralLoggerSummary</Link>
//             </li>
//             <li>
//               {/* 👇️ link to catch all route */}
//               <Link to="/does-not-exist">Catch all route</Link>
//             </li>
//           </ul>
//         </nav>
//         {/* 👇️ Wrap your Route components in a Routes component */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CrashAnalyticsData" element={<CrashAnalyticsData />} />
//           <Route path="/CentralLoggerData" element={<CentralLoggerData />} />
//           <Route path="/CrashAnalyticsSummary" element={<CrashAnalyticsSummary />} />
//           <Route path="/CentralLoggerSummary" element={<CentralLoggerSummary />} />
//           {/* 👇️ only match this when no other routes match */}
//           <Route
//             path="*"
//             element={
//               <div>
//                 <h2>404 Page not found etc</h2>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }