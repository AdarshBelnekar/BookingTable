'use client';
import React from 'react';

import Sidebar from '../components/Sidebar';
import TableComponent from '../components/TableComponent';

import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter()
  return (
    <div className="flex h-screen bg-yellow-50">
      {/* Sidebar */}
      <div className=" flex w-1/6">
        <Sidebar />
        
      </div>
      
      {/* Main Content */}
      <div className=" flex justify-center items-start min-h-screen w-full h-full">
      
        <TableComponent />
      </div>
    </div>
  );
};

export default Page;
