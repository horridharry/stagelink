// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const NavSVG = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"></path></svg>
const CloseSVG = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>

function NavListItems() {
    const NavArray = [{name:"Section 1", link:""},{name:"Section 2", link:""},{name:"Section 3", link:""}];
  
    return NavArray.map((item) => <button className='select-none appearance-none font-bold transition duration-150 ease-in-out opacity-30 hover:opacity-100' key={item}>{item.name}</button>);
  }

const Bar = () => {
    const [modal, setModal] = useState(false);
    const Modal = () => {
        return (
            <div className='bg-black fixed inset-0 z-30 flex flex-col items-start h-full overflow-hidden'>
                <div className='flex w-full'>
                    <div className='flex-1'>
                        <Link to='/' className='p-5 flex w-max items-center'>
                            <div className='text-white text-lg font-bold'>Stage</div>
                            <img className="w-4 h-full filter invert" src={require("./images/link.png").default} alt="" />
                            <div className='text-white text-lg font-bold'>Link</div>
                        </Link>
                    </div>
                    <button className='p-5 text-white mr-4' onClick={() => setModal(!modal)}>{CloseSVG}</button>
                </div>
                <div className='flex flex-col h-full w-full justify-center text-white text-3xl space-y-12'><NavListItems/></div>
            </div>
        )
    }
    return (
        <div>
            <div className='select-none fixed bg-gray-800 text-white z-30 bg-opacity-95 flex items-center h-16 px-5 w-full'>
                <div className='flex flex-1 items-center'>
                    <Link to='/' className='flex items-center'>
                        <div className='text-white text-lg font-bold'>Stage</div>
                        <img className="w-4 h-full filter invert" src={require("./images/link.png").default} alt="" />
                        <div className='text-white text-lg font-bold'>Link</div>
                    </Link>
                </div>
                <button className='lg:hidden'>
                    {
                    !modal ?
                    <button className='p-4' onClick={() => setModal(!modal)}>{NavSVG}</button>
                    :
                    <button className='p-4' onClick={() => setModal(!modal)}>{CloseSVG}</button>
                    }
                </button>
                <div className='hidden lg:flex pr-12 space-x-10 text-lg'><NavListItems/></div>
            </div>
            <div className='fixed bg-gray-800 h-16 z-20 w-full flex filter blur-lg opacity-80'></div>
            {
                !modal ?
                null
                :
                <Modal />
            }   
        </div>
    )
}

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container mx-auto p-12 flex flex-col'>
                <div className='flex h-7 space-x-10 mt-36'>
                    <a className='h-full filter invert' href={"https://t.me/StageLink"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/telegram.png").default} alt="" />
                    </a>
                    <a className='h-full filter invert' href={"https://twitter.com/StageLinkToken"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/twitter.png").default} alt="" />
                    </a>
                    <a className='h-full filter invert' href={"https://www.instagram.com/stagelinkofficial/"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/instagram.png").default} alt="" />
                    </a>
                </div>
                <div className='font-bold text-sm mt-10'>© 2021 STAGELINK. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export { Bar, Footer }
