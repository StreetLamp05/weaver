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
        name: 'About Us',
        href: '/dashboard/about',
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
                            "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-[#4A4D59] hover:text-[#6B7280] md:flex-none md:justify-start md:p-2 md:px-3 mb-2",
                            {
                                'text-[#fff]': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
