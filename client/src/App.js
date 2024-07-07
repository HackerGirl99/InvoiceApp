// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<SignUp />} />
//                 <Route path="/aboutus" element={<AboutUs />} />
//                 <Route path="/contactus" element={<ContactUs />} />
//             </Routes>
//             <Footer />
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import InvoicesPage from './pages/InvoicesPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/invoices" element={<InvoicesPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
