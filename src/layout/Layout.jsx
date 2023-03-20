import React from 'react'
import logo from '../assets/logo-cardio.png'
import folder from '../assets/active.png'
import bars from "../assets/bars.png"
import { Link } from 'react-router-dom'

const navigation = [{title:"overview", link:"/"},
                    {title:"people", link:"/text"},
                    {title:"procedures", link:"/"},
                    {title:"conditions", link:"/"},
                    {title:"panel health", link:"/"}]

const sideTitles = [{title:"Related Disease and Medical Use", array:[]},
                    {title:"Techniques and Approaches", array:["Ventral hernia repair","Inguinal hernia repair","Femoral hernia repair"]},
                    {title:"Devices", array:["Hernia Mesh","Polypropylene Mesh","Articulating and Reloadable Fixation Device","Fixation Device for Hernia Repair","Absorbable Mesh Fixation Device"]},
                    {title:"Speciality", array:["General Surgery"]},
                    {title:"Physician Title", array:["Hernia Surgeon","General Surgeon"]}]

const Layout = ({children}) => {
  return (
    <div className="App flex">
        <div className="sidebar bg-[#151357] py-2 px-3 hidden md:flex flex-col gap-6">
            <img src={logo} alt="logo" />
            <div className="folder flex items-center justify-center py-2 px-2 border-[1.5px] border-[#2A278F] bg-[#0D0B45] rounded-lg">
                <img src={folder} alt="folder" />
            </div>
        </div>
        <div className='flex flex-col w-full h-full'>
        <div className="header px-2 py-2 flex w-full justify-between">
            <div className="header-text">
                <p className=' text-xl font-medium mb-1'>Interventional Cardiologist</p>
                <p className=' text-gray-400'>Medical Special <span className=' text-blue-700'>Procedure</span></p>
            </div>
            <div className="header-search flex justify-end">
                <input className='outline-[none] max-h-fit' type="text" name="" id="" placeholder='Search for task and etc.'/>
            </div>
        </div>
            <div className="navigation px-2 py-2 ">
            <ul className='flex gap-4'>
                {
                navigation.map((nav, key) => {
                    return (
                    <li className=' hover:text-purple-600 duration-300 hover:border-purple-600 border-white border-b-2 pb-3' key={key}>
                        <Link to={nav.link} className=' flex gap-1 items-center justify-center'>
                        <span className='mr-2'>{nav.title}</span>
                        <span className=' bg-gray-300 text-xs flex items-center justify-center w-5 h-5 text-gray-600 rounded-full'>2</span>
                        </Link>
                    </li>
                    )
                })
                }
            </ul>
            </div>
            <div className="edit px-2 py-2 w-full flex justify-end border-t-2 border-b-2">
                <button className='rounded-lg border-2 px-2 py-1'>Edit</button>
            </div>
            <div className="main-content flex h-full">

                    {children}

            <div className="sidebar border-l-2 w-1/4 px-2 py-2 max-h-full">
                <div className="top-prod flex gap-4 pb-6">
                <p className='bg-[#EDEDFC] px-1 py-1 rounded-lg'><span className='text-[#5E5ADB]'>Projects:</span> 10</p>
                <p className='bg-[#EDEDFC] px-1 py-1 rounded-lg'><span className='text-[#5E5ADB]'>Panel:</span> 10</p>
                </div>
                <div className="releases flex flex-col gap-3">
                <div className='flex flex-col gap-3'>
                <p className='border-b-2 pb-3'>Related Disease and Medical Use</p>
                <div className="realse-types flex flex-wrap gap-3">
                    <span className='flex  items-center justify-center gap-3 px-2 py-1 border-2 rounded-lg text-[#5035F9]'>
                        <img src={bars} alt="" />
                        Hernia
                    </span>
                    <span className='px-2 py-1 border-2 rounded-lg text-white bg-[#5035F9]'>
                        Ventral hernia repair
                    </span>
                </div>
                </div>
                {
                sideTitles.map((data, key) => {
                    return (
                    <div className='flex flex-col gap-3' key={key}>
                        <p className='border-b-2 pb-3'>{data.title}</p>
                        <div className="realse-types flex flex-wrap gap-3">
                            {
                            data.array.map((dt, ky) => {
                                return (
                                    <span key={ky} className='px-2 py-1 border-2 rounded-lg text-[#5035F9]'>
                                    {dt}
                                    </span>
                                )
                            })
                            }
                        </div>
                    </div>
                    )
                })
                }
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Layout