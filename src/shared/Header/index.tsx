import Image from "next/image";
import Link from "next/link";
import NavItem from "../NavItem";
import { navLinks } from "@/constants/navigation";
import Container from "../Container";
import { X } from "lucide-react";

const Header = () => {
    return (
        <header className='site-header'>
            <Container>
                <Link href='/'>
                    <Image
                        width={72}
                        height={45}
                        src='/images/29-maktab.webp'
                        alt='29-maktab Logo'
                    />
                </Link>

                <nav className='site-header__nav'>
                    <ul className='site-header__list'></ul>
                </nav>

                {/* TOGGLE MENU */}
                <aside className='sidebar fixed bg-(--color-surface) top-0 right-0 w-auto transform transition-transform duration-300 h-full overflow-hidden border-l border-slate-200'>
                    <div className='sidebar__top p-6 border-b border-slate-200 flex items-center justify-between'>
                        <h2 className='sidebar__title text-xl font-medium'>
                            Menu
                        </h2>
                        <X className='hover:bg-slate-200 active:bg-slate-300 rounded-md w-6 h-6 cursor-pointer' />
                    </div>
                    <nav className='sidebar__nav p-4 space-y-1'>
                        <ul className='sidebar__list'>
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
                </aside>
            </Container>
        </header>
    );
};

export default Header;
