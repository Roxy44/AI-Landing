import type { ButtonHTMLAttributes, ReactNode } from 'react';

type DeadLinkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

/** Visual link/button that does not navigate (test landing). */
export function DeadLink({ children, className = '', type = 'button', ...props }: DeadLinkProps) {
    return (
        <button type={type} className={`cursor-pointer ${className}`.trim()} {...props}>
            {children}
        </button>
    );
}
