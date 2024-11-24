import React from 'react'
import {UserButton } from '@clerk/nextjs'

export default function NavBar() {
    return (
      <>
      <div className='flex flex-row items-center'>
        <span>navbar</span>
        <UserButton afterSignOutUrl='/'/>
      </div>
      </>
    );
  }