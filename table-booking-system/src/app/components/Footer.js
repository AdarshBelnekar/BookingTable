"use client";



const Footer = () => {
  return (
    <footer className="bg-gray-900  p-6 text-white" >
      <div className="container mx-auto flex flex-col items-center space-y-6 md:space-y-8">
        <div className="">
       
        <div className="text-center px-3">
          
          
          <p className="text-sm">© 2025 All rights reserved.</p>
        </div>

      
        <div className="flex  gap-2  md:flex-row md:space-y-0 md:space-x-6 text-center">
          <a href="#" className="hover:text-indigo-400">Home</a>
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#con" className="hover:text-indigo-400">Contact</a>
          <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
        </div>
        </div>

     
        <div className="text-center">
          <p className="font-medium">Contact Us:</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@restaurant.com</p>
        </div>

        
        <div className="flex justify-center space-x-4 text-center">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
        </div>

      

      </div>
    </footer>
  );
};

export default Footer;
