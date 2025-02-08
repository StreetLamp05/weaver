'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
        name: 'Profile',
        href: '/dashboard/profile',
        icon: DocumentDuplicateIcon,
    },
    {
        name: 'About Me',
        href: '/dashboard/about-me',
        icon: InformationCircleIcon,
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] items-center justify-center gap-2 rounded-md bg-[#868C9A] p-3 text-sm font-medium text-[#4A4D59] hover:bg-[#6B7280] md:flex-none md:justify-start md:p-2 md:px-3 w-12 group hover:w-auto",
                            {
                                'bg-[#fff]': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden group-hover:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
