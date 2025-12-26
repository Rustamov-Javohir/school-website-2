"use client";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../NavItem";
import { navLinks } from "@/constants/navigation";
import { socialMedia } from "@/constants/socialMedia";
import Container from "../Container";
import { X, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <header className='site-header max-[]:'>
            <Container>
                <div className='site-header__wrapper flex items-center justify-between'>
                    <Link href='/'>
                        <Image
                            width={72}
                            height={45}
                            src='/images/29-maktab.webp'
                            alt='29-maktab Logo'
                        />
                    </Link>

                    <nav className='site-header__nav leading-0 hidden lg:block'>
                        <ul className='site-header__list flex items-center'>
                            {navLinks.length > 0 &&
                                navLinks.map((item) => (
                                    <NavItem
                                        key={item.id}
                                        name={item.name}
                                        href={item.href}
                                        icon={item.icon}
                                    />
                                ))}
                        </ul>
                    </nav>

                    {/* TOGGLE MENU */}
                    <aside
                        className={`${
                            isChecked ? "translate-x-0" : "translate-x-full"
                        } sidebar fixed flex flex-col bg-(--color-surface) top-0 right-0 w-auto transform transition-transform duration-300 h-full overflow-hidden border-l border-slate-200 lg:hidden`}>
                        <div className='sidebar__top p-6 border-b border-slate-200 flex items-center justify-between'>
                            <h2 className='sidebar__title text-xl font-medium'>
                                Menu
                            </h2>
                            <button onClick={() => setIsChecked(false)}>
                                <X className='hover:bg-slate-200 active:bg-slate-300 rounded-md cursor-pointer' />
                            </button>
                        </div>
                        <nav className='sidebar__nav space-y-1 flex-1 overflow-y-auto'>
                            <ul className='sidebar__list p-4'>
                                {navLinks.length > 0 &&
                                    navLinks.map((item) => (
                                        <NavItem
                                            key={item.id}
                                            name={item.name}
                                            href={item.href}
                                            icon={item.icon}
                                        />
                                    ))}
                            </ul>
                        </nav>

                        <div className='sidebar-social__wrapper'>
                            {socialMedia.length > 0 &&
                                socialMedia.map((item) => (
                                    <Link
                                        className={`${
                                            item.href === ""
                                                ? "hidden"
                                                : "block"
                                        }`}
                                        key={item.id}
                                        href={item.href}>
                                        <span className='flex'>
                                            <span className={`block`}>
                                                {item.icon}
                                            </span>
                                        </span>
                                    </Link>
                                ))}
                        </div>
                    </aside>

                    <button
                        className='site-header__toggle lg:hidden'
                        onClick={() => setIsChecked(true)}>
                        <Menu className='hover:bg-slate-200 active:bg-slate-300 rounded-xs cursor-pointer' />
                    </button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
