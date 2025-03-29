import React from "react";

const Nav = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/Card" className="hover:text-gray-200">
                            Card
                        </a>
                    </li>
                    <li>
                        <a href="/Calculadora" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/Registro" className="hover:text-gray-200">
                            Registro de estudiantes
                        </a>
                    </li>
                    <li>
                        <a href="/ToDoList" className="hover:text-gray-200">
                            ToDoList
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;