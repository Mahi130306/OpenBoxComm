import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, Mail, Megaphone, Users, MapPin, Clock, ArrowRight, Sparkles, TrendingUp, HelpCircle, Layers, Heart, Sparkle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Careers - Open Box',
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
            a: 'After you email your resume/portfolio to careers@openboxcomm.in, our team will review your application. If there is a potential fit, we will schedule a brief 15-20 minute chat on Discord to get to know you, followed by a final interview.'
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
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
            {/* Hero Section */}
            <div className="mb-12 rounded-3xl border border-black/10 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/50 sm:p-10 lg:p-16 overflow-hidden relative">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="h-5 w-5 shrink-0 text-cyan-500" />
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400 sm:text-sm">Careers at Open Box</p>
                    </div>
                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground w-full break-words sm:text-5xl lg:text-6xl">
                        Build the future of <span className="text-cyan-500">online communities</span>.
                    </h1>
                    <p className="max-w-3xl text-sm text-muted-foreground/95 leading-relaxed sm:text-base lg:text-lg">
                        At Open Box, we build high-signal, high-vibe spaces for gaming, development, learning, and connection. Our mission is to make community-building accessible, highly interactive, and incredibly fun. Come help us build and scale India's ultimate Discord-centric community platform.
                    </p>
                </div>
            </div>

            <div className="grid gap-16 lg:grid-cols-12 mb-16">
                {/* Left Side: Openings by Department */}
                <div className="lg:col-span-8 space-y-16">

                    {departments.map((dept) => (
                        <section key={dept.name} id={dept.name.toLowerCase()}>
                            <div className="flex items-center gap-3 mb-8">
                                <dept.icon className={`h-7 w-7 ${dept.accentText}`} />
                                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{dept.name}</h2>
                            </div>

                            <div className="space-y-6">
                                {dept.roles.map((role) => (
                                    <Link
                                        key={role.id}
                                        href={`/careers/${role.id}`}
                                    >
                                        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:bg-surface/60 cursor-pointer">
                                            {/* Accent top border */}
                                            <div className={`absolute top-0 right-0 left-0 h-1 ${dept.accentBg}`} />

                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 pt-2">
                                                <div>
                                                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-cyan-500 transition-colors duration-150">
                                                        {role.title}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground font-medium mt-1">{dept.name} Department</p>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-500 border border-cyan-500/20">
                                                        <MapPin className="h-3 w-3" /> Remote
                                                    </span>
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-500 border border-blue-500/20">
                                                        <Clock className="h-3 w-3" /> Part-Time
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-foreground/80 font-medium italic border-l-2 border-cyan-500/30 pl-3">
                                                &ldquo;{role.tagline}&rdquo;
                                            </p>

                                            <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                                                <span className="text-xs text-muted-foreground font-medium">Click to view full details</span>
                                                <ArrowRight className="h-4 w-4 text-cyan-500 group-hover:translate-x-1 transition-transform duration-150" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Team Culture */}
                    <section className="rounded-3xl border border-border bg-slate-50 p-6 dark:bg-zinc-900/40">
                        <div className="flex items-center gap-3 mb-4">
                            <Heart className="h-6 w-6 text-red-500" />
                            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Why Join Open Box</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                            We are a close-knit group of community builders, gamers, and tech enthusiasts. We operate on high trust, high autonomy, and absolute transparency.
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="p-4 rounded-2xl bg-surface border border-border">
                                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                                    <Sparkle className="h-4 w-4 text-cyan-500" /> Creative Freedom
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Have an idea? We trust your instincts and support execution.
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-surface border border-border">
                                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                                    <Sparkle className="h-4 w-4 text-cyan-500" /> High-vibe Collaboration
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Work directly with leads and devs in a flat hierarchy.
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-surface border border-border">
                                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                                    <Sparkle className="h-4 w-4 text-cyan-500" /> Real Impact
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Shape how thousands of builders and creators interact daily.
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-surface border border-border">
                                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                                    <Sparkle className="h-4 w-4 text-cyan-500" /> Fully Remote & Async
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Work flexibly from anywhere, asynchronous by design.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <HelpCircle className="h-6 w-6 text-cyan-500" />
                            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">FAQs</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="rounded-2xl border border-border bg-surface p-5">
                                    <h4 className="font-bold text-base text-foreground mb-2 flex items-start gap-2">
                                        <span className="text-cyan-500 font-extrabold">Q:</span>
                                        <span>{faq.q}</span>
                                    </h4>
                                    <p className="text-sm text-muted-foreground pl-5 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Right Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="sticky top-24 space-y-6">

                        {/* How to Apply */}
                        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />

                            <div className="flex items-center gap-2.5 mb-5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-foreground">How to Apply</h3>
                            </div>

                            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                <p>Email us with:</p>

                                <ul className="space-y-2.5 pl-1.5 text-foreground/90 font-medium">
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                                        <span>Your resume or professional background</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                                        <span>Portfolio or links to accounts/work</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                                        <span>Your Discord handle</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                                        <span>Why you'd be a great fit</span>
                                    </li>
                                </ul>

                                <div className="my-6 h-px bg-border" />

                                <p className="text-xs text-center font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                    Send to
                                </p>

                                <div className="group/email relative rounded-xl border border-border bg-surface/80 p-3 text-center transition-all hover:border-cyan-500/40">
                                    <a
                                        href="mailto:careers@openboxcomm.in"
                                        className="block text-base font-bold text-cyan-500 hover:text-cyan-400 select-all tracking-wide"
                                    >
                                        careers@openboxcomm.in
                                    </a>
                                    <p className="text-[10px] text-muted-foreground mt-1">
                                        Click to send
                                    </p>
                                </div>

                                <p className="text-xs text-muted-foreground/80 leading-relaxed italic text-center mt-4">
                                    Mention the exact role title in your subject line.
                                </p>
                            </div>
                        </div>

                        {/* Contact Support */}
                        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm text-xs text-muted-foreground leading-relaxed">
                            <h4 className="font-bold text-sm text-foreground mb-2">Questions?</h4>
                            <p className="mb-3">Drop us a line if you need any clarification before applying.</p>
                            <a href="mailto:careers@openboxcomm.in" className="text-cyan-500 font-bold hover:underline">
                                Ask us
                            </a>
                        </div>

                    </div>
                </aside>
            </div>

        </div>
    )
}