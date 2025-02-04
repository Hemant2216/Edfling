import React from 'react'
import ClassroomTopBanner from '../Components/ClassroomTopBanner'
import companies from '../images/page65/companies.svg'
import PlacementStats from '../Components/PlacementStats'
import SideBarCourses from '../Components/SidebarCourses'
import line1 from '../images/page65/line1.svg'
import line2 from '../images/page65/line2.svg'
import Page65Card from '../Components/Page65Card'
import ExploreMore from '../Components/ExploreMore'

import "../CSS/Page65.css";

const Page65 = () => {
  let heading = "Placed Edflinger";
  let description = "Students who have pursued this course have managed to bag a job at reputed tech companies and emerging startups";
  return (
    <div className='page65 flex w-11/12 mx-auto'>
      
      <div>
        <SideBarCourses/>
      </div>
      
      <div className='mt-10 flex flex-column'>
        <ClassroomTopBanner heading={heading} description={description} image={companies}/>
        <PlacementStats/>
        <div>
          <div className='flex justify-center self-center mt-5 font-poppins'>
            <img className='w-28' src={line1}/>
            <h3 className='text-2xl text-green-800 font-medium'>Your College Mate</h3>
            <img className='w-28' src={line2}/>
          </div>
          <div className='pg65grid grid grid-cols-3 '>
            <Page65Card/>
            <Page65Card/>
            <Page65Card/>
            <Page65Card/>
            <Page65Card/>
            <Page65Card/>
            <ExploreMore/>
          </div>
        </div>

        
        <div mt-5>
          <div className='flex justify-center self-center font-poppins pt-5 pl-12'>
            <img className='w-28' src={line1}/>
            <h3 className='text-2xl text-green-800 font-medium'>Your Batch Mate</h3>
            <img className='w-28' src={line2}/>
          </div>
          <div className='pg65grid grid grid-cols-3 '>
            <Page65Card/>
            <Page65Card/>
            <Page65Card/>
            <Page65Card/>
            <Page65Card/>
            <Page65Card/>
            <ExploreMore/>
          </div>
        </div>

        
      </div>

      
      

    </div>
  )
}

export default Page65
