import { DeadLink } from '@/components/DeadLink';
import { siteFooterColumns } from '@/lib/content';

export function SiteFooter() {
    return (
        <footer className='w-full border-t border-white/10 bg-[#0d0d0d]'>
            <div className='mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 text-left sm:grid-cols-3 sm:px-6 md:grid-cols-4 lg:grid-cols-7 lg:px-12 lg:py-14'>
                {siteFooterColumns.map((column) => (
                    <div key={column.title} className='text-left'>
                        <p className='mb-4 text-left text-sm font-semibold text-white'>{column.title}</p>
                        <ul className='space-y-2 text-left'>
                            {column.links.map((label) => (
                                <li key={label} className='text-left'>
                                    <DeadLink className='block w-full text-left text-sm text-zinc-400 transition-colors hover:text-white'>
                                        {label}
                                    </DeadLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className='border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500 sm:px-6 lg:px-12'>
                2026 OURDREAM.AI Dream Studio USA, Inc.
            </p>
        </footer>
    );
}
