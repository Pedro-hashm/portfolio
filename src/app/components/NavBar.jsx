"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-6 border border-[#2b2b2b] p-2">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                    LOGO
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button 
                        className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white" 
                        onClick={() => setNavbarOpen(true)}
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button 
                        className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
                        onClick={() => setNavbarOpen(false)}
                        >
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 180 }}
                                transition={{ duration: 0.5 }}
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </motion.div>
                        </button>
                    )}
                </div>
                <div className="hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={navbarOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            >
                {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
            </motion.div>
        </nav>
    );
}

export default NavBar;