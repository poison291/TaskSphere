import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Image from './mini-Coponent/Image'

export default function DashBoard() {
  const navigate = useNavigate()

  const started = () => {
    navigate('/')
  }

  return (
    <>
      <div className="">
        {/* Navbar */}
        <div className="flex pl-5 pt-2 bg-gradient-to-r from-[#85C88A] via-[#A7D49B] to-[#E7F3D4] pb-2 top-0 z-10">
          <img
            src="./blue-icon.png"
            className="h-12 w-12 mr-2"
            alt="icon"
          />

          <h1 className="mt-2 text-2xl font-mono font-semibold">
            Vetra
          </h1>

          <div className="flex flex-1 justify-end space-x-6 items-center mr-5">
            <Link className="text-black font-semibold hover:text-green-600">
              Features
            </Link>
            <Link className="text-black font-semibold hover:text-green-600">
              Support
            </Link>
            <Link className="text-black font-semibold hover:text-green-600">
              Testimonials
            </Link>

           
            <button
              onClick={started}
              className="bg-green-500 text-white rounded-2xl px-3 py-2 hover:bg-green-600"
              >
             Get Started
            </button>
         
          </div>
        </div>

        {/* Hero Section */}
        <div className="select-none bg-gradient-to-r from-green-500 via-green-400 to-beige-300 h-80 flex flex-col justify-center items-center">
          <h1 className="text-white text-center text-3xl pt-20">
            Unlock Your Productivity Potential
          </h1>
          <p className="text-white text-center text-lg mt-5">
            Vetra helps you manage tasks, take notes, and plan efficiently, all in one place.
          </p>


          <Link 
            to={`https://discord.gg/dJHUT68ckR`}
            target='_blank'
            >
          <button
            onClick={started}
            className="bg-green-600 text-white rounded-xl px-6 py-3 mt-10 mb-10 hover:bg-green-700"
          >
           Join Discord
          </button>
          </Link>
        </div>

        {/* Trusted Section */}
        <div className="bg-[#F7F8F5] text-black py-16">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Trusted by 1,000+ Users
          </h1>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust our platform to help them stay organized, productive, and efficient every day.
            We're here to make your tasks easier to manage and your goals achievable.
          </p>
        </div>

        <hr className="border-t-4 border-gray-400 my-4" />

        {/* Features */}
        <div className="overflow-hidden">
          <h1 className="text-4xl font-semibold text-center mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 select-none">
            Features
          </h1>
          <Image
            name="Task Management"
            image="/todolanding.jpg"
            desc="Easily manage and organize your daily tasks with our intuitive task management tool. Stay on top of deadlines and never miss a task again!"
            direction="right"
          />

          <Image
            name="Note-taking"
            image="/note.jpg"
            desc="Take detailed notes, organize them by projects or categories, and access them anytime. Your thoughts and ideas, all in one place."
            direction="left"
          />

          <Image
            name="Task Reminders & Notifications"
            image="/reminder.jpg"
            desc="Never forget a task again with customizable reminders and notifications for deadlines and priorities. Stay ahead of your to-do list."
            direction="right"
          />

          <Image
            name="Progress Tracking"
            image="/progress.jpg"
            desc="Track your progress on tasks and projects with visual indicators and detailed reports. See how much you've accomplished!"
            direction="left"
          />

          <Image
            name="Team Collaboration"
            image="/team.jpg"
            desc="Work seamlessly with your team. Share tasks, assign responsibilities, and communicate efficiently in real time."
            direction="right"
          />
        </div>
      </div>
    </>
  )
}
