import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'

const  Navbar =()=> {
    const user = undefined
    const isAdmin = false

  return (
    <nav className=' sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all' >
        <MaxWidthWrapper>
            <div className=" flex h-14  items-center justify-between border-b border-zinc-200">
                <Link href='/'  className=' flex z-10 font-semibold'>
                Lu <span className=' text-green-600'>cky</span></Link>

                <div className=" h-full  flex items-center space-x-4">
{user ? (
    <>
    <Link href='/api/auth/logout' className={buttonVariants ({
        size: 'sm', variant: "ghost"
    })}>
        Sign Out
    
    </Link>
    {isAdmin ?
        <Link href='/api/auth/logout' className={buttonVariants ({
            size: 'sm', variant: "ghost"
        })}>
           Dashboard  ✨
        
        </Link>: null
    }

<Link href='/configure/upload' className={buttonVariants ({
        size: 'sm', className: ' hidden sm:flex items-center gap-1 '
    })}>
       Create Case
       <ArrowRight  className=' ml-1.5  h-5 w-5 '/>
    
    </Link>
    </>
):(
    <>
    
    
    </>
)}
                </div>
            </div>
        </MaxWidthWrapper>

    </nav>
  )
}

export default Navbar
