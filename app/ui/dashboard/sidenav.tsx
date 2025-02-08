import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/ui/logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
    return (
        //Base container for the side nav
        <div className="flex h-full flex-col px-2 py-4 md:px-1 bg-[#4A4D59] text-white md:w-12 hover:md:w-48 min-h-screen transition-all duration-300"> 
            {/* Container for logo*/}
            <div className="mb-2 flex h-10 items-center justify-center rounded-md p-4">
                <Link href="/" className="inline-block">
                    <Logo />
                </Link>
            </div>
            <div className="flex flex-col justify-between space-y-2">
                <NavLinks />
            </div>

            <div className="mt-auto"></div>

            <form className="mt-2">
                <button className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-[#868C9A] p-3 text-sm font-medium text-[#4A4D59] hover:bg-[#6B7280] md:flex-none md:justify-start md:p-2 md:px-3 w-12 group hover:w-auto">
                    <PowerIcon className="w-6" />
                    <div className="hidden group-hover:block">Sign Out</div>
                </button>
            </form>
        </div>
    );
}
