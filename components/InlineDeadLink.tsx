'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

type InlineDeadLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    children: ReactNode;
};

/** Text link that stays in-flow (valid inside paragraphs) and does not navigate. */
export function InlineDeadLink({ children, className = '', onClick, ...props }: InlineDeadLinkProps) {
    return (
        <a
            href='#'
            className={`cursor-pointer ${className}`.trim()}
            onClick={(event) => {
                event.preventDefault();
                onClick?.(event);
            }}
            {...props}
        >
            {children}
        </a>
    );
}
