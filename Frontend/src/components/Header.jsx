import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from './Container';
import Logo from './Logo';
import { Home , LayoutDashboard , FileText , InfoIcon , Settings } from 'lucide-react'

function Header() {

  const navigate = useNavigate();
  const navItems = [
    {
      name : 'Home',
      icon : <Home/>,
      nav : '/'
    },{
      name : 'Input',
      icon : <InfoIcon/>,
      nav : '/input'
    },{
      name : 'Dashboard',
      icon : <LayoutDashboard/>,
      nav : '/dashboard'
    },{
      name : 'Pdf',
      icon : <FileText/>,
      nav : '/pdf'
    },{
      name : 'About',
      icon : <InfoIcon/>,
      nav : '/about'
    },
  ]

  //First show home page when we click on the getting start then the dashboard and header should be visible
  return (
    <header className="bg-white shadow-lg">
    <Container>
      <nav className="flex items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
          <Logo />
        </div>

        {/* Navigation Links */}
        <ul className="flex ml-auto space-x-6 items-center">
          {navItems.map((item) =>(
              <li key={item.name} className="relative group">
                <button
                  className="flex items-center text-lg px-4 py-2 text-[#004080] hover:bg-gray-100 rounded-lg duration-200"
                  onClick={() => navigate(item.nav)}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.name}
                </button>
                {/* Hover Indicator */}
                <div className="absolute left-0 right-0 h-1 bg-[#004080] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </li>
            )
          )}
        </ul>
      </nav>
    </Container>
  </header>
  )
}

export default Header
