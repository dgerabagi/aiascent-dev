'use client';

import { usePathname } from 'next/navigation';
import SplashCursor from './SplashCursor';

export default function ConditionalSplash() {
    const pathname = usePathname();

    // Disable the splash effect on the /showcase page
    if (pathname === '/showcase') {
        return null;
    }

    // Render the splash cursor with faster dissipation
    return <SplashCursor DENSITY_DISSIPATION={4.375} />;
}