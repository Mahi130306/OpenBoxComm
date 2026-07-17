import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Megaphone, MapPin, Clock, ArrowRight, Sparkles, TrendingUp, HelpCircle, Heart, Sparkle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Join the team building the future of Indian Discord communities. Discover active openings for Social Media and Marketing roles at Open Box.',
    alternates: { canonical: '/careers' },
}

export default function CareersPage() {
    const departments = [
        {
            name: 'Social Media',
            icon: Megaphone,
            accentBg: 'bg-cyan-500',
            accentText: 'text-cyan-500',
            borderBg: 'border-cyan-500/20',
            badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
            roles: [
                {
                    id: 'content-creator',
                    title: 'Content Creator / Reels Producer',
                    type: 'Part-time / Remote (India)',
                    tagline: 'Create engaging short-form content that captures the Open Box vibe for Instagram and TikTok.',
                },
                {
                    id: 'community-manager',
                    title: 'Community Manager',
                    type: 'Part-time / Remote (India)',
                    tagline: 'Lead community engagement on Discord, nurture relationships, and ensure members feel valued.',
                },
                {
                    id: 'social-strategist',
                    title: 'Social Strategist',
                    type: 'Part-time / Remote (India)',
                    tagline: 'Own the social media strategy, planning, and analytics to drive growth across all platforms.',
                }
            ]
        },
        {
            name: 'Marketing',
            icon: TrendingUp,
            accentBg: 'bg-blue-500',
            accentText: 'text-blue-500',
            borderBg: 'border-blue-500/20',
            badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
            roles: [
                {
                    id: 'growth-marketer',
                    title: 'Growth & Performance Marketer',
                    type: 'Part-time / Remote (India)',
                    tagline: 'Execute data-driven campaigns to acquire users, drive conversions, and optimize marketing funnels.',
                },
                {
                    id: 'brand-marketer',
                    title: 'Brand Marketer',
                    type: 'Part-time / Remote (India)',
                    tagline: 'Shape Open Box\'s brand narrative, positioning, and storytelling across all touchpoints.',
                },
                {
                    id: 'partnerships-manager',
                    title: 'Partnerships Manager',
                    type: 'Part-time / Remote (India)',
                    tagline: 'Identify, negotiate, and manage strategic partnerships with sponsors, colleges, and creators.',
                }
            ]
        }
    ]

    const faqs = [
        {
            q: 'How does the application process look like?',
            a: 'After you email your resume/portfolio to carrers@openboxcomm.in, our team will review your application. If there is a potential fit, we will schedule a brief 15-20 minute chat on Discord to get to know you, followed by a final interview.'
        },
        {
            q: 'Are these paid roles or volunteer roles?',
            a: 'These are paid, part-time contract positions. Compensation is competitive and based on experience, skill level, and weekly commitment.'
        },
        {
            q: 'What is the expected weekly hourly commitment?',
            a: 'Typically, we expect about 10-15 hours per week. Since these roles are remote and asynchronous, you can manage your hours flexibly around your studies or other work.'
        },
        {
            q: 'Can I apply for multiple roles?',
            a: 'Absolutely! If your skillset spans across different roles, feel free to highlight your interest in multiple positions in your application email.'
        }
    ]

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

            {/* Centered Minimal Hero Section - Flat background, NO Gradients */}
            <div className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-10 lg:p-16">
                <div className="mx-auto max-w-3xl flex flex-col items-center">
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        <Sparkles className="h-3.5 w-3.5 shrink-0" />
                        Careers at Open Box
                    </div>

                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Build the future of <span className="text-cyan-500 dark:text-cyan-400">online communities</span>.
                    </h1>

                    <p className="text-sm text-muted-foreground leading-relaxed sm:text-base lg:text-lg">
                        At Open Box, we build high-signal, high-vibe spaces for gaming, development, learning, and connection. Come help us build and scale India's ultimate Discord-centric community platform.
                    </p>
                </div>
            </div>

            {/* Active Openings Grid Header */}
            <div className="mb-8 flex flex-col items-start justify-between border-b border-zinc-200 dark:border-zinc-800 pb-5 md:flex-row md:items-center">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Active Openings</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Find your next role. All positions are part-time and fully remote within India.</p>
                </div>
            </div>

            {/* Grid of Roles: Mobile first grid layout */}
            <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {departments.flatMap((dept) =>
                    dept.roles.map((role) => (
                        <Link
                            key={role.id}
                            href={`/carrers/${role.id}`}
                            className="group relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-cyan-500/40 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-cyan-500/40"
                        >
                            <div>
                                {/* Top Badges */}
                                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${dept.badgeBg} border border-transparent`}>
                                        <dept.icon className="h-3 w-3" /> {dept.name}
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                                        Remote
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-cyan-500 transition-colors duration-150">
                                    {role.title}
                                </h3>

                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    {role.tagline}
                                </p>
                            </div>

                            <div className="mt-6 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4">
                                <span className="text-xs font-semibold text-cyan-500 dark:text-cyan-400">View Details</span>
                                <ArrowRight className="h-4 w-4 text-cyan-500 group-hover:translate-x-1 transition-transform duration-150" />
                            </div>
                        </Link>
                    ))
                )}
            </div>

            {/* Side-by-Side Content / Mobile-Stacked Section */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                {/* Left Side: Why Join us + FAQs */}
                <div className="space-y-12 lg:col-span-7">

                    {/* Team Culture / Why Join */}
                    <section className="rounded-2xl border border-zinc-200 bg-zinc-50/30 p-6 dark:border-zinc-800 dark:bg-zinc-900/20">
                        <div className="flex items-center gap-3 mb-6">
                            <Heart className="h-6 w-6 text-cyan-500" />
                            <h2 className="text-2xl font-bold tracking-tight text-foreground">Why Join Open Box</h2>
                        </div>

                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                            We are a close-knit group of community builders, gamers, and tech enthusiasts. We operate on high trust, high autonomy, and absolute transparency.
                        </p>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80">
                                <h3 className="text-sm font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                                    <Sparkle className="h-4 w-4 text-cyan-500" /> Creative Freedom
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Have an idea? We trust your instincts and support execution.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80">
                                <h3 className="text-sm font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                                    <Sparkle className="h-4 w-4 text-cyan-500" /> High-vibe Collaboration
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Work directly with leads and devs in a flat hierarchy.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80">
                                <h3 className="text-sm font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                                    <Sparkle className="h-4 w-4 text-cyan-500" /> Real Impact
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Shape how thousands of builders and creators interact daily.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80">
                                <h3 className="text-sm font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                                    <Sparkle className="h-4 w-4 text-cyan-500" /> Fully Remote & Async
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Work flexibly from anywhere, asynchronous by design.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section className="scroll-mt-20" id="faqs">
                        <div className="flex items-center gap-3 mb-6">
                            <HelpCircle className="h-6 w-6 text-cyan-500" />
                            <h2 className="text-2xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
                                    <h4 className="font-bold text-base text-foreground mb-2 flex items-start gap-2">
                                        <span className="text-cyan-500 font-extrabold shrink-0">Q:</span>
                                        <span>{faq.q}</span>
                                    </h4>
                                    <p className="text-sm text-muted-foreground pl-5 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Right Side: How to Apply Sidebar */}
                <div className="lg:col-span-5">
                    <div className="sticky top-24 space-y-6">

                        {/* How to Apply Container (Flat, elegant card) */}
                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-foreground">How to Apply</h3>
                            </div>

                            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                <p>We prefer direct, high-signal applications. Email us with:</p>

                                <ul className="space-y-3 text-foreground/90 font-medium">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                                        <span>Your resume or professional background</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                                        <span>Portfolio or links to accounts/work</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                                        <span>Your Discord handle</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                                        <span>Why you'd be a great fit for Open Box</span>
                                    </li>
                                </ul>

                                <div className="my-6 h-px bg-zinc-200 dark:bg-zinc-800" />

                                <p className="text-xs text-center font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                    Send Application To
                                </p>

                                <div className="group relative rounded-xl border border-zinc-200 bg-white p-4 text-center transition-all hover:border-cyan-500/40 dark:border-zinc-800 dark:bg-zinc-950">
                                    <a
                                        href="mailto:carrers@openboxcomm.in"
                                        className="block text-base font-bold text-cyan-500 hover:text-cyan-400 select-all tracking-wide"
                                    >
                                        carrers@openboxcomm.in
                                    </a>
                                    <p className="text-[10px] text-muted-foreground mt-1">
                                        Click to copy or compose
                                    </p>
                                </div>

                                <p className="text-xs text-muted-foreground/80 leading-relaxed italic text-center mt-4">
                                    Make sure to mention the exact role title in your subject line.
                                </p>
                            </div>
                        </div>

                        {/* Quick Questions Banner */}
                        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/30">
                            <h4 className="font-bold text-sm text-foreground mb-1">Questions about the process?</h4>
                            <p className="text-xs text-muted-foreground mb-3">Reach out to our recruitment lead directly before sending a formal application.</p>
                            <a href="mailto:carrers@openboxcomm.in" className="text-xs text-cyan-500 font-bold hover:underline">
                                Ask a question &rarr;
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}