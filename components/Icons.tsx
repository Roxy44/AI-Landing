type IconProps = {
    className?: string;
};

export function IconCreate({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <path d='M12 5v14M5 12h14' strokeLinecap='round' />
        </svg>
    );
}

export function IconExplore({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <circle cx='12' cy='12' r='9' />
            <path d='m8 14 2.5-6 6 2.5L14 16z' strokeLinejoin='round' />
        </svg>
    );
}

export function IconChat({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <path
                d='M7 18.5 4 21V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H7z'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export function IconGenerate({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <rect x='3' y='5' width='18' height='14' rx='2' />
            <circle cx='9' cy='11' r='2' />
            <path d='m21 16-4.5-4.5L9 19' strokeLinejoin='round' />
        </svg>
    );
}

export function IconMyAi({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <circle cx='12' cy='8' r='3.5' />
            <path d='M5 19.5c1.5-3.5 4-5 7-5s5.5 1.5 7 5' strokeLinecap='round' />
        </svg>
    );
}

export function IconFeed({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <path d='M4 6h16M4 12h16M4 18h10' strokeLinecap='round' />
        </svg>
    );
}

export function IconCommunity({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <circle cx='9' cy='9' r='3' />
            <circle cx='16' cy='10' r='2.5' />
            <path d='M3.5 18.5c1-3 3-4.5 5.5-4.5s4.5 1.5 5.5 4.5' strokeLinecap='round' />
            <path d='M14 18.5c.7-2 2-3 4-3 1.2 0 2.2.4 3 1.2' strokeLinecap='round' />
        </svg>
    );
}

export function IconProfile({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <circle cx='12' cy='8' r='3.5' />
            <path d='M5 19.5c1.5-3.5 4-5 7-5s5.5 1.5 7 5' strokeLinecap='round' />
        </svg>
    );
}

export function IconHelp({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' aria-hidden>
            <circle cx='12' cy='12' r='9' />
            <path d='M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1.5 1-1.5 2.2' strokeLinecap='round' />
            <circle cx='12' cy='17' r='0.8' fill='currentColor' stroke='none' />
        </svg>
    );
}

export function IconDiscord({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='currentColor' aria-hidden>
            <path d='M19.3 5.4A16.5 16.5 0 0 0 15.2 4l-.3.6a13.3 13.3 0 0 1 3.4 1.4 12.5 12.5 0 0 0-10.6 0A13 13 0 0 1 9.1 4.6L8.8 4a16.5 16.5 0 0 0-4.1 1.4C2.3 9.1 1.6 12.7 2 16.2a16 16 0 0 0 4.9 2.5l1-1.3a10.2 10.2 0 0 1-1.6-.8l.4-.3c3.2 1.5 6.7 1.5 9.8 0l.4.3c-.5.3-1 .6-1.6.8l1 1.3a16 16 0 0 0 4.9-2.5c.5-4-.2-7.6-2.7-10.8ZM9.2 14.3c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm5.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z' />
        </svg>
    );
}

export function IconMore({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='currentColor' aria-hidden>
            <circle cx='6' cy='12' r='1.6' />
            <circle cx='12' cy='12' r='1.6' />
            <circle cx='18' cy='12' r='1.6' />
        </svg>
    );
}

export function IconUsers({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden>
            <circle cx='9' cy='8' r='3' />
            <circle cx='17' cy='9' r='2.5' />
            <path d='M3.5 18.5C5 15 7 13.5 9 13.5s4 1.5 5.5 5' strokeLinecap='round' />
            <path d='M14 18.5c.8-2.2 2.2-3.3 4-3.3 1.2 0 2.2.4 3 1.2' strokeLinecap='round' />
        </svg>
    );
}

export function IconSend({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden>
            <path d='m4 12 15-7-4 16-4-6-7-3z' strokeLinejoin='round' />
        </svg>
    );
}

export function IconFree({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden>
            <circle cx='12' cy='12' r='9' />
            <path d='M12 7v10M8.5 9.5c0-1.4 1.5-2.5 3.5-2.5s3.5 1 3.5 2.5-1.5 2.2-3.5 2.5c-2 .3-3.5 1.1-3.5 2.7 0 1.5 1.6 2.5 3.5 2.5s3.5-1 3.5-2.5' strokeLinecap='round' />
        </svg>
    );
}

export function IconFilm({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden>
            <rect x='3' y='5' width='18' height='14' rx='2' />
            <path d='M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4' />
        </svg>
    );
}

export function IconMenu({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden>
            <path d='M4 7h16M4 12h16M4 17h16' strokeLinecap='round' />
        </svg>
    );
}

export function IconClose({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden>
            <path d='M6 6l12 12M18 6 6 18' strokeLinecap='round' />
        </svg>
    );
}

export function IconLink({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 16 16' fill='currentColor' aria-hidden>
            <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z' />
            <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.192.408.274.854.254 1.285l1.372-1.372a3 3 0 1 0-4.243-4.243z' />
        </svg>
    );
}

export function IconDiamond({ className }: IconProps) {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='currentColor' aria-hidden>
            <path d='M4.873 3h14.254a1 1 0 0 1 .809.412l3.074 4.216a1 1 0 0 1-.093 1.302L12.82 20.402a1 1 0 0 1-1.64 0L.983 8.93a1 1 0 0 1-.093-1.302L3.964 3.412A1 1 0 0 1 4.873 3zm.177 2-1.61 2.209L12 18.382l8.56-11.173L18.95 5H5.05z' />
        </svg>
    );
}

export const navIcons = {
    create: IconCreate,
    explore: IconExplore,
    chat: IconChat,
    generate: IconGenerate,
    myai: IconMyAi,
    feed: IconFeed,
    community: IconCommunity,
    profile: IconProfile,
    help: IconHelp,
    discord: IconDiscord,
} as const;

export const featureIcons = {
    users: IconUsers,
    send: IconSend,
    free: IconFree,
    film: IconFilm,
} as const;
