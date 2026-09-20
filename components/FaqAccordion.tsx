'use client';

import { useState } from 'react';

import { faqs } from '@/lib/content';

export function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className='divide-y divide-white/10 rounded-2xl border border-white/10'>
            {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={item.question}>
                        <h3>
                            <button
                                type='button'
                                aria-expanded={isOpen}
                                className='flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white transition-colors hover:bg-white/5'
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <span>{item.question}</span>
                                <span className='text-xl text-white/60' aria-hidden>
                                    {isOpen ? '−' : '+'}
                                </span>
                            </button>
                        </h3>
                        <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            }`}
                        >
                            <div className='overflow-hidden'>
                                <p className='px-5 pb-5 text-base leading-relaxed text-zinc-200'>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
