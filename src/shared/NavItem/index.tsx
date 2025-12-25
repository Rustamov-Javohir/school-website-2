"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
    name: string;
    href: string;
    icon?: ReactNode;
};

const NavItem = ({ name = "", href = "/", icon }: NavItemProps) => {
    const currentPath = usePathname();

    return (
        <li className='site-header__item mb-1'>
            <Link
                className={`${
                    href === currentPath ? "bg-slate-300" : "hover:bg-slate-200"
                } site-header__link flex items-center gap-3 px-4 py-3 rounded-lg transition-colors leading-0`}
                href={href}>
                {icon && icon}
                {name}
            </Link>
        </li>
    );
};

export default NavItem;
