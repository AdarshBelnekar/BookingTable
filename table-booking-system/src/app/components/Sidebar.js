import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Sidebar = () => {

  const router=useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" h-screen">
        <button
        onClick={toggleSidebar}
        className={` fixed top-4 left-4 bg-indigo-700 text-white p-2 rounded-sm shadow-lg focus:outline-none z-10 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
       <i className=" fa-solid fa-user px-2"></i>
      </button>
      {/* Sidebar */}
      <div
        className={` top-0 left-0 h-full w-64 bg-indigo-600 text-white p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 shadow-lg z-20`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleSidebar} className="text-white text-2xl focus:outline-none">
            ×
          </button>
          <button type='button'
          onClick={() => router.push('/')}
          className='bg-black text-white min-w-fit px-4 py-2 rounded-md hover:bg-indigo-900 transition-all ease-in-out shadow-lg'>
          <i class="fa-solid fa-home"></i>
        </button>

        </div>
        <ul className="space-y-3">
          <li>
            <a href="#" className="block hover:bg-indigo-700 p-2 rounded-md">
              General
            </a>
          </li>
          <li>
           
          </li>
          <li>
            <a href="#" className="block hover:bg-indigo-700 p-2 rounded-md">
              Delete
            </a>
          </li>
          <li>
            <a href="#" className="block hover:bg-indigo-700 p-2 rounded-md">
              Invoices
            </a>
          </li>
          <li>
            <details className="group">
              <summary className="cursor-pointer hover:bg-indigo-700 p-2 rounded-md">
                Account
              </summary>
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <a href="#" className="block hover:text-gray-200">
                    Details
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-gray-200">
                    Security
                  </a>
                </li>
                <li>
                  <button className="block hover:text-gray-200">Logout</button>
                </li>
              </ul>
            </details>
            
          </li>
          <li>
                  <a href="#" className="block hover:text-gray-200">
                    Privacy Policy 
                  </a>
                </li>
        </ul>
      </div>

      {/* Toggle Button */}
      
    </div>
  );
};

export default Sidebar;
