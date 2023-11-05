// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TenantSubmitRequest from './components/TenantSubmitRequest';
import StaffRequestList from './components/StaffRequestList';
import ManagerTenantControl from './components/ManagerTenantControl';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/submit-request" element={<TenantSubmitRequest />} />
                <Route path="/staff/requests" element={<StaffRequestList />} />
                <Route path="/manager/tenants" element={<ManagerTenantControl />} />
            </Routes>
        </Router>
    );
}

export default App;
