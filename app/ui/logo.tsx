import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { dotGothic16 } from '@/app/ui/fonts';

export default function Logo() {
    return (
        <div
            className={`${dotGothic16.className} flex flex-row items-center leading-none text-white hover:text-gray-400 transition-colors duration-300`}
        >
            <p className="text-[16px] font-thin">Weaver.ai</p>
        </div>
    );
}