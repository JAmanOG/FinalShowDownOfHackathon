import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import { Home, LayoutDashboard, FileText, InfoIcon } from "lucide-react";

function Header() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", icon: <Home />, nav: "/" },
    { name: "Input", icon: <InfoIcon />, nav: "/input" },
    { name: "Dashboard", icon: <LayoutDashboard />, nav: "/dashboard" },
    // { name: "Pdf", icon: <FileText />, nav: "/pdf" },
    { name: "About", icon: <InfoIcon />, nav: "/about" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg">
      <Container>
        <nav className="flex items-center py-4">
          {/* Logo Section */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Logo />
            <span className="text-white text-xl font-bold">ART Finder</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex ml-auto space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <button
                  className="flex items-center text-lg px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => navigate(item.nav)}
                >
                  {item.icon && (
                    <span className="mr-2 text-indigo-400 group-hover:text-yellow-400 transition-colors duration-200">
                      {item.icon}
                    </span>
                  )}
                  {item.name}
                </button>
                {/* Hover Indicator */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
