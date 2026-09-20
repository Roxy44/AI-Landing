'use client';

import Image from 'next/image';
import { useState, type ReactNode } from 'react';

import { DeadLink } from '@/components/DeadLink';
import { IconClose, IconDiamond, IconMenu, IconMore, navIcons } from '@/components/Icons';
import { assetPath } from '@/lib/assetPath';
import { footerLinks, moreLinks, navItems, navPrimary, navSecondary } from '@/lib/content';

const accentBtn =
    'bg-[linear-gradient(0deg,#ff1cac,#fd5fc2_50%,#ff79d1)] text-white font-bold shadow-none transition hover:brightness-110';

function NavList({
    items,
    onNavigate,
}: {
    items: readonly { label: string; icon: keyof typeof navIcons; active?: boolean }[];
    onNavigate?: () => void;
}) {
    return (
        <ul className='flex flex-col gap-0.5'>
            {items.map((item) => {
                const Icon = navIcons[item.icon];
                return (
                    <li key={item.label}>
                        <DeadLink
                            onClick={onNavigate}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                                item.active
                                    ? 'bg-white/10 font-semibold text-white'
                                    : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                            }`}
                            aria-current={item.active ? 'page' : undefined}
                        >
                            <Icon className='size-5 shrink-0 opacity-90' />
                            <span>{item.label}</span>
                        </DeadLink>
                    </li>
                );
            })}
        </ul>
    );
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
    const [moreOpen, setMoreOpen] = useState(false);

    return (
        <div className='flex h-full flex-col'>
            <nav className='flex min-h-0 flex-1 flex-col px-2 pt-3' aria-label='Primary'>
                <div className='min-h-0 flex-1 overflow-y-auto'>
                    <NavList items={navItems} onNavigate={onNavigate} />
                    <div className='my-2 h-px w-full bg-white/10' />
                    <NavList items={navPrimary} onNavigate={onNavigate} />
                    <div className='my-3 h-px w-full bg-white/10' />
                    <NavList items={navSecondary} onNavigate={onNavigate} />
                    <div className='mt-1'>
                        <DeadLink
                            onClick={() => setMoreOpen((v) => !v)}
                            className='flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white'
                            aria-expanded={moreOpen}
                        >
                            <IconMore className='size-5 shrink-0 opacity-90' />
                            <span>More</span>
                        </DeadLink>
                        {moreOpen ? (
                            <ul className='mt-1 mb-2 ml-8 flex flex-col gap-1'>
                                {moreLinks.map((label) => (
                                    <li key={label}>
                                        <DeadLink
                                            onClick={onNavigate}
                                            className='block py-1 text-xs text-zinc-400 transition-colors hover:text-white'
                                        >
                                            {label}
                                        </DeadLink>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </div>

                <div className='mt-auto shrink-0 border-t border-white/10 pt-3 pb-3'>
                    <ul className='flex flex-wrap items-center gap-x-1 gap-y-1 px-3 text-[11px] text-zinc-500'>
                        {footerLinks.map((label, index) => (
                            <li key={label} className='flex items-center gap-1'>
                                {index > 0 ? <span aria-hidden>·</span> : null}
                                <DeadLink onClick={onNavigate} className='transition-colors hover:text-zinc-300'>
                                    {label}
                                </DeadLink>
                            </li>
                        ))}
                    </ul>
                    <p className='mt-2 px-3 text-[10px] leading-relaxed text-zinc-600'>
                        2026 OURDREAM.AI Dream Studio USA, Inc.
                    </p>
                    <div className='mt-3 px-1'>
                        <DeadLink
                            onClick={onNavigate}
                            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs ${accentBtn}`}
                        >
                            <IconDiamond className='size-4' />
                            Upgrade
                        </DeadLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

function SiteHeader({
    mobileOpen,
    onToggleMenu,
}: {
    mobileOpen: boolean;
    onToggleMenu: () => void;
}) {
    return (
        <header className='sticky top-0 z-40 h-14 w-full'>
            <nav className='flex h-14 items-center justify-between gap-2 bg-[#0d0d0d]/60 px-3 backdrop-blur-[24px] md:px-4'>
                <div className='flex min-w-0 items-center gap-1 md:gap-2'>
                    <DeadLink
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                        className='inline-flex size-9 items-center justify-center rounded-full text-brand transition-colors hover:bg-white/10 lg:hidden'
                        onClick={onToggleMenu}
                    >
                        {mobileOpen ? <IconClose className='size-5' /> : <IconMenu className='size-5' />}
                    </DeadLink>
                    <DeadLink aria-label='ourdream.ai home' className='flex shrink-0 items-center'>
                        <Image
                            src={assetPath('/logos/logo.svg')}
                            alt='ourdream.ai'
                            width={130}
                            height={15}
                            className='h-3.5 w-auto'
                            style={{ width: 'auto', height: 'auto' }}
                            priority
                        />
                    </DeadLink>
                </div>
                <div className='flex items-center gap-2'>
                    <DeadLink className='inline-flex h-9 items-center rounded-full px-3 text-sm font-medium text-white transition-colors hover:bg-white/10'>
                        Login
                    </DeadLink>
                    <DeadLink className={`inline-flex h-9 items-center rounded-full px-4 text-xs ${accentBtn}`}>
                        Join Free
                    </DeadLink>
                </div>
            </nav>
        </header>
    );
}

export function AppShell({ children }: { children: ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <SiteHeader mobileOpen={mobileOpen} onToggleMenu={() => setMobileOpen((v) => !v)} />

            <div className='lg:flex lg:items-start'>
                <aside className='sticky top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-[240px] shrink-0 flex-col border-r border-white/10 bg-[#0d0d0d] lg:flex'>
                    <SidebarBody />
                </aside>

                <div className='relative min-w-0 flex-1'>{children}</div>
            </div>

            <div
                className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                aria-hidden={!mobileOpen}
            >
                <button
                    type='button'
                    className={`absolute inset-0 cursor-pointer bg-black/70 transition-opacity duration-300 ease-out ${
                        mobileOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-label='Close menu overlay'
                    tabIndex={mobileOpen ? 0 : -1}
                    onClick={() => setMobileOpen(false)}
                />
                <aside
                    className={`absolute top-14 bottom-0 left-0 flex w-[min(100%,280px)] flex-col border-r border-white/10 bg-[#0d0d0d] shadow-2xl transition-transform duration-300 ease-out ${
                        mobileOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <SidebarBody onNavigate={() => setMobileOpen(false)} />
                </aside>
            </div>
        </>
    );
}
