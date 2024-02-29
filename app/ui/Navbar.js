import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 overflow-auto">
            <div className="flex items-center space-x-4">
                <span className="text-2xl font-extrabold">Mijn React App</span>
            </div>
            <nav>
                <ul className="space-y-3">
                    <li>
                        <Link href="/start" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md">
                            Home
                        </Link>
                    </li>
                    <li>
                    <Link href="/start/login" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md">
                            Login
                        </Link>
                    </li>
                    <li>
                    <Link href="/start/register" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md">
                            Register
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}