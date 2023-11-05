import React from 'react';

const Tenant = ({ tenantName }) => {
    return (
        <div>
            {/* Header */}
            <header className="bg-white text-gray-800 p-4 flex justify-between items-center">
                <nav className="flex gap-5">
                    <a href="/profile" className="hover:text-blue-500">Profile</a>
                    <a href="/my-requests" className="hover:text-blue-500">My Requests</a>
                    <a href="/settings" className="hover:text-blue-500">Settings</a>
                </nav>
                <a href="/logout" className="hover:text-blue-500">Logout</a>
            </header>

            {/* Banner */}
            <div className="bg-blue-500 text-white p-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Welcome {tenantName}</h1>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700">Button</button>
            </div>

        </div>
    );
};

export default Tenant;
