import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Members from './pages/Members';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import DetailPrograms from './pages/DetaiPrograms';

// Import Project Detail Pages
import CiscoProjectDetail from './project/CiscoProjectDetail';
import MikrotikProjectDetail from './project/MikrotikProjectDetail';
import WebProjectDetail from './project/WebProjectDetail';
import IotProjectDetail from './project/IotProjectDetail';
import ServerProjectDetail from './project/ServerProjectDetail';
import FiberProjectDetail from './project/FiberProjectDetail';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Programs Detail */}
          <Route path="/programs/:id" element={<DetailPrograms />} />
          
          {/* Projects Detail - Individual Routes */}
          <Route path="/projects/cisco-project" element={<CiscoProjectDetail />} />
          <Route path="/projects/mikrotik-project" element={<MikrotikProjectDetail />} />
          <Route path="/projects/web-project" element={<WebProjectDetail />} />
          <Route path="/projects/iot-project" element={<IotProjectDetail />} />
          <Route path="/projects/server-project" element={<ServerProjectDetail />} />
          <Route path="/projects/fiber-project" element={<FiberProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;