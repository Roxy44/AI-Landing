import Image from 'next/image';
import type { ReactNode } from 'react';

import { DeadLink } from '@/components/DeadLink';
import { FaqAccordion } from '@/components/FaqAccordion';
import { featureIcons, IconLink } from '@/components/Icons';
import { InlineDeadLink } from '@/components/InlineDeadLink';
import { AppShell } from '@/components/AppShell';
import { SiteFooter } from '@/components/SiteFooter';
import {
    comparisons,
    heroFeatures,
    howToSteps,
    related,
    scenarioGroups,
    testimonials,
} from '@/lib/content';

const sectionTitle = ' text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl';

function CtaButton({ children }: { children: string }) {
    return (
        <DeadLink className='inline-flex items-center justify-center rounded-2xl bg-brand px-10 py-4 text-base font-semibold text-white shadow-[0_0_28px_rgba(221,18,157,0.35)] transition hover:brightness-110 active:scale-[0.99]'>
            {children}
        </DeadLink>
    );
}

function InlineLink({ children }: { children: string }) {
    return (
        <InlineDeadLink className='font-medium text-brand underline-offset-2 transition hover:underline'>
            {children}
        </InlineDeadLink>
    );
}

function Prose({ children }: { children: ReactNode }) {
    return <div className='space-y-4 text-base font-medium leading-6 text-white md:text-2xl md:leading-8'>{children}</div>;
}

const pinkSiteNames = new Set(['Candy AI', 'GirlfriendGPT', 'JuicyChat']);

function siteLinkClass(site: string, isFeatured: boolean) {
    if (isFeatured) {
        return 'text-white hover:text-pink-200';
    }
    if (pinkSiteNames.has(site)) {
        return 'text-pink-400 hover:text-pink-300';
    }
    return 'text-white hover:text-zinc-200';
}

export function LandingPage() {
    return (
        <div className='min-h-screen bg-[#0d0d0d] text-white'>
            <AppShell>
                <main className='mx-auto max-w-6xl px-4 pt-6 pb-16 sm:px-6 lg:px-12 lg:pt-8'>
                    <nav aria-label='Breadcrumb' className='mb-8 text-sm text-zinc-500'>
                        <ol className='flex flex-wrap items-center gap-2'>
                            <li>
                                <DeadLink className='hover:text-zinc-300'>Home</DeadLink>
                            </li>
                            <li aria-hidden className='text-zinc-600'>
                                &gt;
                            </li>
                            <li>
                                <DeadLink className='hover:text-zinc-300'>Generate</DeadLink>
                            </li>
                            <li aria-hidden className='text-zinc-600'>
                                &gt;
                            </li>
                            <li className='text-zinc-400'>AI Roleplay Generator</li>
                        </ol>
                    </nav>

                    <header className='flex flex-col items-center text-center'>
                        <h1 className='text-4xl font-bold tracking-tight text-brand md:text-5xl lg:text-6xl'>
                            AI Roleplay Generator
                        </h1>
                        <p className='mt-5 max-w-2xl text-base leading-relaxed text-white sm:text-lg'>
                            Your world, your rules.
                            <br />
                            Bring your own characters to life with a storyline that remembers you.
                        </p>
                        <div className='mt-7'>
                            <CtaButton>Start Roleplay For Free</CtaButton>
                        </div>
                        <div className='mt-10 w-full'>
                            <DeadLink className='block overflow-hidden rounded-2xl transition hover:opacity-95' aria-label='AI Roleplay Generator showcase'>
                                <Image
                                    src='/images/hero.webp'
                                    alt='AI Roleplay Generator showcase'
                                    width={1372}
                                    height={500}
                                    priority
                                    sizes='(max-width: 1152px) 100vw, 1152px'
                                    className='h-auto w-full'
                                />
                            </DeadLink>
                        </div>
                        <ul className='mt-10 grid w-full grid-cols-2 gap-6 lg:grid-cols-4'>
                            {heroFeatures.map((feature) => {
                                const Icon = featureIcons[feature.icon];
                                return (
                                    <li key={feature.text} className='flex flex-col items-center gap-3 text-center'>
                                        <Icon className='size-8 text-white' />
                                        <span className='text-sm font-semibold text-white'>{feature.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </header>

                    <article className='mt-16 space-y-16'>
                        <section aria-labelledby='start-free'>
                            <h2 id='start-free' className={sectionTitle}>
                                Start AI Roleplay for Free
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    Create immersive, character-driven scenarios in seconds with Ourdream&apos;s{' '}
                                    <InlineLink>NSFW AI roleplay generator</InlineLink>.
                                </p>
                                <p>
                                    This story generator is free to use. You can create characters, shape a world, and dive into
                                    interactive stories that respond to your every message. Whether you enjoy slow-burn romance,
                                    intense NSFW moments, mystery, fantasy, or complex plots, this tool gives you full creative
                                    control.
                                </p>
                                <p>
                                    Choose from over 50,000 public characters or create your own. Define their personality,
                                    backstory, and appearance. Set the scene, and let the AI bring your story to life. Ourdream&apos;s
                                    advanced technology manages dialogue, emotional depth, character growth, and world-building. It
                                    creates immersive, responsive experiences that other platforms can&apos;t match.
                                </p>
                                <p>
                                    Sign up for a free account and start playing at no cost. No payment details are needed. Your
                                    conversations are private, encrypted, and entirely yours.
                                </p>
                            </Prose>
                            <div className='mt-8 flex justify-center'>
                                <CtaButton>Start Roleplay For Free</CtaButton>
                            </div>
                        </section>

                        <section aria-labelledby='how-to'>
                            <div className='grid items-start gap-10 lg:grid-cols-2 lg:gap-12'>
                                <DeadLink
                                    className='block overflow-hidden rounded-2xl transition hover:opacity-95'
                                    aria-label='Ourdream AI roleplay generator interface'
                                >
                                    <Image
                                        src='/images/generate.webp'
                                        alt='Ourdream AI roleplay generator interface'
                                        width={968}
                                        height={1482}
                                        sizes='(max-width: 1024px) 100vw, 50vw'
                                        className='h-auto w-full rounded-2xl'
                                    />
                                </DeadLink>
                                <div>
                                    <h2 id='how-to' className={sectionTitle}>
                                        How to Start Roleplay in a Few Clicks
                                    </h2>
                                    <Prose>
                                        <p className='mt-4'>
                                            Getting started with Ourdream&apos;s roleplay generator is simple — no writing experience
                                            or technical skills needed. The platform is built for real people who want immersive,
                                            interactive storytelling without a learning curve.
                                        </p>
                                    </Prose>
                                    <ol className='mt-8 space-y-5'>
                                        {howToSteps.map((step, index) => (
                                            <li key={step} className='flex items-center gap-4'>
                                                <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white'>
                                                    {index + 1}
                                                </span>
                                                <p className='text-base font-semibold leading-6 text-white md:text-2xl md:leading-8'>
                                                    {step}
                                                </p>
                                            </li>
                                        ))}
                                    </ol>
                                    <p className='mt-6 text-base font-medium leading-6 text-white md:text-2xl md:leading-8'>
                                        Four simple steps from opening the page to being deep in a conversation. Click the button
                                        and your first sessions are free.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10 flex justify-center'>
                                <CtaButton>Start Roleplay For Free</CtaButton>
                            </div>
                        </section>

                        <section aria-labelledby='characters'>
                            <h2 id='characters' className={sectionTitle}>
                                Build Characters, Play Any Scenario
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    One of Ourdream&apos;s best features is the character development system. You can build roleplay
                                    characters from scratch and control every detail — personality, appearance, backstory, voice,
                                    memories, lore, and interactions.
                                </p>
                                <p>
                                    The AI roleplay generator brings your characters to life with emotional depth. Whether you want a
                                    tender partner, a commanding villain, a tricky trickster, or a layered character, this tool
                                    handles it all. Expect no flat responses or character breaks — just immersive roleplay that
                                    adapts to your choices.
                                </p>
                                <p>
                                    Here&apos;s what makes it unique: you set the personality and dynamic. Choose a tone, from flirty
                                    to intense. Decide how forward or reserved your characters are. Set their emotional triggers,
                                    memories, rules, and narrative arcs. The generator creates consistent, believable characters that
                                    remember context and respond to your story.
                                </p>
                                <p>
                                    The character creator works across genres — romance, fantasy, sci-fi, adventure, slice of life,
                                    and NSFW roleplay. Build a <InlineLink>roleplay AI girlfriend</InlineLink>, a brooding vampire, a
                                    sweet neighbour, a rival-to-lovers scenario, or characters on an epic quest. The AI adapts to fit
                                    your vision.
                                </p>
                                <p>
                                    Whether you&apos;re a writer crafting characters, exploring scenarios, or just seeking fun — the
                                    character tools are free to start and offer depth that keeps you engaged.
                                </p>
                            </Prose>
                        </section>

                        <section aria-labelledby='nsfw'>
                            <h2 id='nsfw' className={sectionTitle}>
                                NSFW Mode — No Filters, No Limits
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    Beyond wholesome fiction, Ourdream is built for adults who want explicit, uncensored scenarios.
                                    This isn&apos;t a chatbot that shuts down the moment things get heated — it&apos;s a full NSFW
                                    platform designed for sexual themes, kink exploration, and{' '}
                                    <InlineLink>erotic AI girlfriend</InlineLink> creative writing without content filters getting in
                                    the way.
                                </p>
                                <p>
                                    Describe the roleplay scene you want using detailed prompts. Set the intensity — teasing and
                                    slow, rough and passionate, tender and intimate, or anything in between. The AI matches your
                                    energy and builds on it, responding with explicit detail when you want it and emotional tension
                                    when the moment calls for it. Control the pacing, the roleplay dynamic, and where the plot goes
                                    next.
                                </p>
                                <p>
                                    Ourdream supports 60+ fetish options and kink categories built directly into the character
                                    creator. BDSM dynamics, dom/sub themes, voyeurism, group encounters, and layered power play — if
                                    you can define it, the AI can engage with it. Explicit content is handled with the same quality
                                    and narrative craft as any other genre on the platform.
                                </p>
                                <p>
                                    Every character carries a story. Build anticipation through dialogue. Let tension build
                                    naturally over multiple exchanges. Then let the scene unfold however you want. The story
                                    generator combines writing with sexual content in a way that feels organic, not mechanical.
                                </p>
                            </Prose>
                        </section>

                        <section aria-labelledby='identity'>
                            <h2 id='identity' className={sectionTitle}>
                                For Every Identity and Orientation
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    This is where Ourdream really opens up. Most platforms were built with straight, male users as
                                    the default audience — and it shows. The characters skew female, the scenarios default to one
                                    pattern, and queer content is an afterthought if it exists at all.
                                </p>
                                <p>
                                    Ourdream was built differently. Create roleplay scenarios featuring any combination of genders,
                                    orientations, and identities — gay, <InlineLink>lesbian AI girlfriend</InlineLink>, bisexual,{' '}
                                    <InlineLink>trans AI girlfriend</InlineLink>, nonbinary, polyamorous, or anything else. The AI
                                    doesn&apos;t make assumptions about who you are or who you&apos;re attracted to. You set the
                                    dynamic, choose the themes, and the tool follows your lead.
                                </p>
                                <p>
                                    For LGBTQ+ users especially, this matters. Roleplay is a space for exploring identity, desire,
                                    and connection. Having AI characters that understand and support queer dynamics transforms this
                                    experience. Build a slow-burn romance between two men. Create a sapphic fantasy world. Set a
                                    roleplay scenario with queer leads. Explore gender expression through characters who affirm who
                                    you are. The generator handles all of it with authenticity.
                                </p>
                                <p>
                                    Every body type is supported. Every orientation is welcome. Every idea is valid. Want a confident
                                    trans woman who takes the lead? Create her. Prefer a shy nonbinary character who opens up
                                    slowly? Build them. Looking for a group scenario with mixed dynamics and complex relationships?
                                    Describe it in your prompts and watch the AI bring your characters to life across the world
                                    you&apos;ve imagined.
                                </p>
                            </Prose>
                        </section>

                        <section aria-labelledby='media'>
                            <h2 id='media' className={sectionTitle}>
                                Generate Images and Videos Mid-Story
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    Static text is just the beginning. Ourdream integrates image and video generation directly into
                                    your conversations — so you can visualize your characters and scenes as the narrative unfolds.
                                </p>
                                <p>
                                    While chatting, click the generate button to create an image of your character. Capture their
                                    expression, outfit (or lack of one), the setting, and the mood. The image tool creates visuals
                                    that match the story you&apos;ve built through dialogue, transforming words into something you
                                    can see.
                                </p>
                                <p>
                                    Take it further by converting any generated image into a video. The video tool adds realistic
                                    animation — body movement, expression shifts, and smooth transitions. Create up to 10 scenes in
                                    a single video, all rendered in HD.
                                </p>
                                <p>
                                    This combination of interactive storytelling, image generation, and video creation is what sets
                                    Ourdream apart. Most platforms stop at text. Ourdream gives you the full experience — story,
                                    visuals, and animation in one place. Press the button and watch your world come to life.
                                </p>
                            </Prose>
                        </section>

                        <section aria-labelledby='group'>
                            <h2 id='group' className={sectionTitle}>
                                Group Roleplay and Multi-Character Stories
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    Ourdream doesn&apos;t limit you to one-on-one roleplay conversations. Set up group chats with
                                    multiple AI characters who talk to each other — and to you.
                                </p>
                                <p>
                                    Create a three-way flirtation where two characters compete for your attention. Build a
                                    found-family narrative with characters who have their own relationships and tension. Set up a
                                    detective scenario at a dinner party where one of the characters is a suspect in something
                                    darker. Play investigative games where you question multiple characters across interconnected
                                    plot threads. The AI handles multi-character interaction with distinct personalities, keeping
                                    each voice consistent and the story believable.
                                </p>
                                <p>
                                    Group roleplay opens up possibilities that single conversations can&apos;t match. Love triangles,
                                    rivalries, alliances, betrayals, group intimacy — multi-character plots add complexity and make
                                    every roleplay session unpredictable. Set the relationships between characters, build the lore
                                    of their shared world, and let the narrative unfold naturally.
                                </p>
                                <p>
                                    Each character has their own personality, voice, memories, and relationships. The generator
                                    tracks context for the whole group, so interactions feel natural. Characters reference past
                                    conversations and respond to each other, creating a living story with real consequences.
                                </p>
                            </Prose>
                        </section>

                        <section aria-labelledby='scenarios'>
                            <h2 id='scenarios' className={sectionTitle}>
                                Scenario Templates and Prompts to Get You Started
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    Not sure where to begin? Ourdream offers hundreds of scenario presets and prompt templates to
                                    jumpstart your experience. Choose a theme, press the button, and start playing.
                                </p>
                            </Prose>
                            <div className='mt-8 space-y-6'>
                                {scenarioGroups.map((group) => (
                                    <div key={group.title}>
                                        <h3 className='mb-2 text-xl font-bold text-brand md:text-2xl'>{group.title}</h3>
                                        {group.items.map((item) => (
                                            <p key={item} className='mt-2 text-base font-medium leading-6 text-white md:text-2xl md:leading-8'>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <p className='mt-6 text-base font-medium leading-6 text-white md:text-2xl md:leading-8'>
                                Each template is a starting point — you can transform everything, take the plot in any direction, and
                                make it entirely yours. Use these prompts as inspiration, then push beyond them.
                            </p>
                        </section>

                        <section aria-labelledby='privacy'>
                            <h2 id='privacy' className={sectionTitle}>
                                Everything You Create Is 100% Private and Secure
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    Privacy matters — especially with NSFW roleplay content and intimate storytelling. Ourdream uses
                                    end-to-end encryption to keep your information locked down. What you create stays between you and
                                    your screen. Nothing goes public unless you decide it does.
                                </p>
                                <p>
                                    Your conversations, characters, generated images, videos, and uploads are all private by
                                    default. No one else can see, access, or stumble upon your content. Save your sessions and come
                                    back to them whenever you want. Download anything you&apos;ve generated. It&apos;s your content,
                                    under your control.
                                </p>
                                <p>
                                    For LGBTQ+ users who aren&apos;t out, who are exploring their identity, or who simply value
                                    discretion — this is the baseline, not a premium feature. Ourdream doesn&apos;t track your
                                    conversations, doesn&apos;t share your data, and doesn&apos;t involve real people. Your stories,
                                    your world, your rules.
                                </p>
                            </Prose>
                        </section>

                        <section aria-labelledby='what-is'>
                            <h2 id='what-is' className={sectionTitle}>
                                What Is an AI Roleplay Generator?
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    An AI roleplay generator is a tool that creates interactive stories using artificial
                                    intelligence. The best platforms use <InlineLink>advanced AI models</InlineLink> to offer nuanced
                                    and emotionally aware roleplay. They provide character development, contextual memories, and
                                    full creative control.
                                </p>
                                <p>
                                    Unlike basic chatbots, a roleplay generator maintains characters&apos; personalities and voices
                                    throughout long conversations. It can develop storylines based on your input and handle
                                    explicit NSFW content without filters. It also generates images and videos during chats,
                                    supports multiple characters at once, and tracks lore and character interactions across
                                    sessions. It&apos;s a mix of creative writing, storytelling, and gaming.
                                </p>
                            </Prose>
                        </section>

                        <section aria-labelledby='compare'>
                            <h2 id='compare' className={sectionTitle}>
                                Compare ourdream to the Best Platforms of 2026
                            </h2>
                            <Prose>
                                <p className='mt-4'>
                                    Curious how Ourdream stacks up? Here&apos;s how it compares against the top options on the
                                    market. Whether you care most about uncensored NSFW content, LGBTQ+ representation, image and
                                    video generation mid-story, detective mystery games, or a platform that supports every genre and
                                    identity — Ourdream leads the field. Choose what matters to you and try it free.
                                </p>
                            </Prose>
                            <div className='table-scroll mt-8 max-h-[600px] overflow-auto rounded-2xl border border-white/10'>
                                <table className='w-max min-w-full border-collapse text-left text-sm md:text-base'>
                                    <thead className='sticky top-0 z-20 bg-[#1a1a1a] text-zinc-200'>
                                        <tr>
                                            <th scope='col' className='whitespace-nowrap px-4 py-3 font-semibold'>
                                                #
                                            </th>
                                            <th scope='col' className='whitespace-nowrap px-4 py-3 font-semibold'>
                                                Site
                                            </th>
                                            <th scope='col' className='whitespace-nowrap px-4 py-3 font-semibold'>
                                                It Might Be For You If…
                                            </th>
                                            <th scope='col' className='whitespace-nowrap px-4 py-3 font-semibold'>
                                                Pros
                                            </th>
                                            <th scope='col' className='whitespace-nowrap px-4 py-3 font-semibold'>
                                                Cons
                                            </th>
                                            <th scope='col' className='whitespace-nowrap px-4 py-3 font-semibold'>
                                                Pricing
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisons.map((row) => (
                                            <tr
                                                key={row.rank}
                                                className={
                                                    row.rank === 1
                                                        ? 'sticky top-11 z-10 border-b border-white/10 bg-brand text-white'
                                                        : 'border-t border-white/10'
                                                }
                                            >
                                                <td
                                                    className={`whitespace-nowrap px-4 py-3 ${row.rank === 1 ? 'text-white' : 'text-zinc-400'}`}
                                                >
                                                    {row.rank}
                                                </td>
                                                <td className='whitespace-nowrap px-4 py-3 font-bold'>
                                                    <DeadLink className={siteLinkClass(row.site, row.rank === 1)}>
                                                        {row.site}
                                                    </DeadLink>
                                                </td>
                                                <td className='whitespace-nowrap px-4 py-3 text-white'>{row.forYou}</td>
                                                <td className='whitespace-nowrap px-4 py-3 text-white'>
                                                    <ul className='space-y-1'>
                                                        {row.pros.map((p) => (
                                                            <li key={p} className='whitespace-nowrap'>
                                                                • {p}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td className='whitespace-nowrap px-4 py-3 text-white'>
                                                    <ul className='space-y-1'>
                                                        {row.cons.map((c) => (
                                                            <li key={c} className='whitespace-nowrap'>
                                                                • {c}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td className='whitespace-nowrap px-4 py-3 text-white'>{row.pricing}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section aria-labelledby='reviews'>
                            <h2 id='reviews' className={`text-center ${sectionTitle}`}>
                                Why users choose ourdream ai
                            </h2>
                            <ul className='scrollbar-hide mt-8 flex gap-6 overflow-x-auto pb-4'>
                                {testimonials.map((item) => (
                                    <li
                                        key={item.alt}
                                        className='flex w-[280px] shrink-0 flex-col gap-3 rounded-2xl border-2 border-white bg-[#cb65ab] p-4 md:w-[400px]'
                                    >
                                        <div className='flex items-center gap-3'>
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                width={40}
                                                height={40}
                                                className='size-10 rounded-full border border-white object-cover'
                                            />
                                            <span className='text-sm font-medium text-white'>{item.label}</span>
                                        </div>
                                        <blockquote className='text-[15px] leading-7 text-white'>
                                            <p>&ldquo;{item.quote}&rdquo;</p>
                                        </blockquote>
                                    </li>
                                ))}
                            </ul>
                            <div className='mt-10 flex justify-center'>
                                <CtaButton>Start Creating Now</CtaButton>
                            </div>
                        </section>

                        <section aria-labelledby='faq'>
                            <h2 id='faq' className={`mb-6 text-center ${sectionTitle}`}>
                                Frequently Asked Questions
                            </h2>
                            <FaqAccordion />
                        </section>

                        <section aria-labelledby='related'>
                            <h2 id='related' className={`text-center ${sectionTitle} text-[30px] lg:text-[30px] md:text-[24px]`}>
                                Related Content You May Enjoy
                            </h2>
                            <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                                {related.map((item) => (
                                    <li key={item.title}>
                                        <DeadLink className='flex h-full flex-col rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 text-left transition-colors hover:border-pink-500/30 hover:bg-gray-700/50'>
                                            <span className='mb-3 text-xl font-bold text-pink-400'>{item.title}</span>
                                            <span className='mb-4 flex-1 text-base leading-relaxed text-zinc-300'>
                                                {item.description}
                                            </span>
                                            <span className='flex items-center text-sm font-medium text-pink-400'>
                                                Learn more
                                                <IconLink className='ml-1 size-4' />
                                            </span>
                                        </DeadLink>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-10 text-sm text-zinc-500'>Last updated: February 19, 2026</p>
                        </section>
                    </article>
                </main>
            </AppShell>
            <SiteFooter />
        </div>
    );
}
