import React from 'react'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <Layout>
        <div className="text-content leading-8 text-[#4F547B] py-3 px-3 h-full w-3/4">
          <p className=' mb-5'>Hernia repair is a surgical procedure used to correct a hernia, which occurs when an organ or fatty tissue protrudes through a weakened or torn area of the abdominal wall or groin.</p>
          <p className=' mb-5'>During a hernia repair procedure, the surgeon will make an incision in the area where the hernia is located. The protruding tissue or organ is then gently pushed back into the abdominal cavity, and the weakened or torn area of the abdominal wall is repaired using surgical techniques such as sutures or mesh.</p>
          <p className=' mb-5'>There are different types of hernia repair procedures, including open hernia repair and laparoscopic hernia repair. In open hernia repair, the surgeon makes a single larger incision in the abdomen to access the hernia, while in laparoscopic hernia repair, several smaller incisions are made and a small camera is inserted to guide the repair process.</p>
          <p>After the hernia is repaired, the incisions are closed using sutures or surgical staples. The recovery time for a hernia repair procedure can vary depending on the type of surgery and the individual patient, but most patients are able to return to their normal activities within a few weeks.</p>
          <a className=" mt-10 underline hover:text-[#6440FB] duration-300 cursor-pointer font-bold">show more</a>
        </div>
    </Layout>
  )
}

export default Home