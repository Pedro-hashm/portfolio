"use client";
import React from 'react'
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function EmailSection() {

    const handleSubmit = async (e) => {

        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONdata
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if (resData.status === 200) {
            console.log('Email sent!');
        }
    };

  return (
    <section id='contact'>
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-2 px-4 xl:gap-16 sm:py-16 mt-6">

        <div className="flex flex-col place-self-start mb-4 gap-4">
            <h1 className="text-4xl">
                Let's Connect!
            </h1>
            <p className="text-[#858585]">
            Have an exciting project in mind? Whether you’re looking to build a custom Shopify store, launch a high-performance web app, or bring your digital vision to life, I’m here to help. Let’s collaborate and create something impactful together.
            </p>
            <div className="flex flex-row gap-2">
                <Link href="https://github.com/Pedro-hashm" target="_blank">
                    <FaGithub className="text-white w-8 h-8" />
                </Link>
                <Link href="https://www.linkedin.com/in/pedro-vieira-2b83382b7/" target="_blank">
                    <FaLinkedin className="text-white w-8 h-8" />
                </Link>
            </div>
        </div>

        <div className="flex flex-col grid-col-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                    <label
                        htmlFor='email' 
                        className="text-white text-lg"
                    >
                        Your Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className='bg-[#171717] text-white w-full p-2 mt-2 rounded-lg border border-[#3a3a3a]'
                        placeholder='fulano@gmail.com'
                    />
                </div>
                <div>
                    <label
                        htmlFor='subject' 
                        className="text-white text-lg"
                    >
                        Subject
                    </label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className='bg-[#171717] text-white w-full p-2 mt-2 rounded-lg border border-[#3a3a3a]'
                        placeholder='Just saying hi'
                    />
                </div>
                <div>
                    <label
                        htmlFor='message' 
                        className="text-white text-lg"
                    >
                        Message
                    </label>
                    <input
                        name="message"
                        type="text"
                        id="message"
                        required
                        className='bg-[#171717] text-white w-full p-2 mt-2 rounded-lg border border-[#3a3a3a]'
                        placeholder="Let's talk about..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-purple-700 text-white p-2 rounded-lg mt-2 hover:bg-purple-800"
                >
                    Submit
                </button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default EmailSection
