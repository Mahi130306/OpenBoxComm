import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Clock, CheckCircle2, Zap, Users, TrendingUp, Megaphone } from 'lucide-react'
import { notFound } from 'next/navigation'

// Role data structure
const allRoles = [
    {
        id: 'content-creator',
        title: 'Content Creator / Reels Producer',
        department: 'Social Media',
        departmentIcon: Megaphone,
        type: 'Part-time / Remote (India)',
        accentColor: 'cyan',
        accentBg: 'bg-cyan-500',
        badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20',
        tagline: 'Create engaging short-form content that captures the Open Box vibe for Instagram and TikTok.',
        overview: 'As a Content Creator/Reels Producer at Open Box, you\'ll be the creative force behind our short-form video content. You\'ll produce high-quality, engaging reels that resonate with our gaming, developer, and creator communities across Instagram and TikTok. This role is perfect for someone passionate about video storytelling and trending audio/visual formats.',
        responsibilities: [
            'Produce 2-3 high-quality reels/shorts per week using trending audio, effects, and storytelling.',
            'Edit videos in CapCut, Premiere Pro, or similar tools with professional quality.',
            'Brainstorm viral content ideas aligned with Discord culture, gaming trends, and Indian memes.',
            'Collaborate with community members to feature their content and stories.',
            'Track video performance metrics and optimize based on engagement data.',
            'Stay updated on platform trends and algorithm changes on TikTok and Instagram.'
        ],
        requirements: [
            'Strong video editing skills with portfolio of short-form content.',
            'Deep understanding of TikTok/Instagram Reels trends and algorithm.',
            'Proficiency in CapCut, Adobe Premiere, or equivalent software.',
            'Witty copywriting and ability to create hooks that grab attention.',
            'Familiarity with Discord and gaming culture.',
            'Ability to work independently and meet weekly content deadlines.'
        ],
        nice_to_have: [
            'Experience with graphic design tools (Figma, Canva)',
            'Knowledge of audio editing (sound effects, music selection)',
            'Prior experience managing social media accounts with 10k+ followers'
        ]
    },
    {
        id: 'community-manager',
        title: 'Community Manager',
        department: 'Social Media',
        departmentIcon: Megaphone,
        type: 'Part-time / Remote (India)',
        accentColor: 'cyan',
        accentBg: 'bg-cyan-500',
        badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20',
        tagline: 'Lead community engagement on Discord, nurture relationships, and ensure members feel valued.',
        overview: 'As our Community Manager, you\'ll be the heart of Open Box\'s online spaces. You\'ll foster a welcoming, inclusive, and active Discord community where thousands of developers, gamers, and creators feel supported and connected. Your role involves moderation, member support, event coordination, and building a thriving culture.',
        responsibilities: [
            'Moderate Discord channels, enforce community guidelines, and maintain a healthy environment.',
            'Respond to member DMs, support questions, and feedback promptly and professionally.',
            'Organize server activities, events, and discussion threads to keep the community active.',
            'Onboard new members with clear guides and help them find their role in the community.',
            'Report on community health metrics including member growth, engagement, and sentiment.',
            'Identify and elevate member concerns or conflicts to leadership when needed.',
            'Celebrate member achievements and foster a sense of belonging.'
        ],
        requirements: [
            'Prior experience moderating or managing online communities (Discord preferred).',
            'Excellent communication skills with empathy and patience.',
            'Understanding of Discord bots, roles, permissions, and server architecture.',
            'Ability to handle conflicts calmly and maintain community standards.',
            'Strong interpersonal skills and ability to build relationships.',
            'Proactive mindset to identify issues and suggest solutions.'
        ],
        nice_to_have: [
            'Experience with Discord bot management (MEE6, Dyno, etc.)',
            'Background in community building or customer support',
            'Familiarity with gaming and developer communities'
        ]
    },
    {
        id: 'social-strategist',
        title: 'Social Strategist',
        department: 'Social Media',
        departmentIcon: Megaphone,
        type: 'Part-time / Remote (India)',
        accentColor: 'cyan',
        accentBg: 'bg-cyan-500',
        badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20',
        tagline: 'Own the social media strategy, planning, and analytics to drive growth across all platforms.',
        overview: 'As our Social Strategist, you\'ll be the strategic mind behind Open Box\'s social media presence. You\'ll develop comprehensive strategies, manage content calendars, analyze performance data, and identify growth opportunities across Instagram, X (Twitter), and Discord. This is a data-driven role perfect for someone who loves analytics and growth.',
        responsibilities: [
            'Create and manage monthly content calendars across Instagram, X, and Discord.',
            'Analyze audience demographics, engagement patterns, and trending topics.',
            'Plan thematic campaigns and coordinated posting schedules across platforms.',
            'Track KPIs (followers, engagement rate, reach, conversions) and report monthly.',
            'Identify partnership and collaboration opportunities to amplify reach.',
            'Conduct competitive analysis on other community platforms.',
            'Provide recommendations for content improvements based on data insights.'
        ],
        requirements: [
            'Experience with social media analytics tools (Meta Business Suite, Twitter Analytics, Discord Insights).',
            'Strong data analysis and strategic thinking capabilities.',
            'Understanding of platform algorithms and best practices for each channel.',
            'Proven track record of growing an audience or managing social presence.',
            'Excellent written and verbal communication skills.',
            'Ability to turn data into actionable insights.'
        ],
        nice_to_have: [
            'Experience with tools like Hootsuite or Buffer for scheduling',
            'Knowledge of Google Analytics and UTM tracking',
            'Background in marketing or growth strategy'
        ]
    },
    {
        id: 'growth-marketer',
        title: 'Growth & Performance Marketer',
        department: 'Marketing',
        departmentIcon: TrendingUp,
        type: 'Part-time / Remote (India)',
        accentColor: 'blue',
        accentBg: 'bg-blue-500',
        badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
        tagline: 'Execute data-driven campaigns to acquire users, drive conversions, and optimize marketing funnels.',
        overview: 'As a Growth & Performance Marketer, you\'ll drive user acquisition and optimize conversions across multiple channels. You\'ll execute campaigns, analyze performance data, test hypotheses, and iterate quickly to scale Open Box\'s reach. This role is ideal for someone obsessed with metrics, experimentation, and results.',
        responsibilities: [
            'Plan and execute multi-channel acquisition campaigns (email, social, paid ads).',
            'Set up tracking, UTM parameters, and analytics to measure campaign performance.',
            'Optimize landing pages and funnels to improve conversion rates.',
            'Manage paid advertising budgets on platforms like Facebook, Instagram, and Google.',
            'Run A/B tests on messaging, visuals, and offers to improve ROI.',
            'Analyze campaign performance and provide weekly/monthly performance reports.',
            'Collaborate with social and content teams to amplify campaign reach.'
        ],
        requirements: [
            'Hands-on experience with Google Analytics, Facebook Ads Manager, or similar tools.',
            'Understanding of marketing funnels, conversion tracking, and attribution.',
            'Strong analytical mindset with ability to interpret data and make recommendations.',
            'Experience running successful digital marketing campaigns.',
            'Proficiency in spreadsheets (Google Sheets, Excel) for data analysis.',
            'Ability to set up tracking and understand UTM parameters.'
        ],
        nice_to_have: [
            'Experience with Zapier or other automation tools',
            'Knowledge of CRM platforms (HubSpot, Pipedrive)',
            'Background in e-commerce or SaaS marketing',
            'Familiarity with A/B testing tools'
        ]
    },
    {
        id: 'brand-marketer',
        title: 'Brand Marketer',
        department: 'Marketing',
        departmentIcon: TrendingUp,
        type: 'Part-time / Remote (India)',
        accentColor: 'blue',
        accentBg: 'bg-blue-500',
        badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
        tagline: 'Shape Open Box\'s brand narrative, positioning, and storytelling across all touchpoints.',
        overview: 'As our Brand Marketer, you\'ll be the storyteller and brand architect. You\'ll define how Open Box is perceived, craft compelling narratives, and ensure consistent brand experience across all channels. This role is perfect for creative strategists who love connecting emotionally with audiences.',
        responsibilities: [
            'Develop and refine Open Box brand messaging, tone, and visual identity.',
            'Create content that tells the Open Box story and connects emotionally with audiences.',
            'Manage brand presence and reputation across web, social, and community channels.',
            'Collaborate on press releases, blog posts, and thought leadership content.',
            'Ensure brand consistency across all marketing materials and campaigns.',
            'Research competitor positioning and identify brand differentiation opportunities.',
            'Create brand guidelines and ensure team adherence.'
        ],
        requirements: [
            'Experience with brand development, positioning, and storytelling.',
            'Strong copywriting and content creation abilities.',
            'Portfolio of branded content, blogs, or campaigns you\'ve created.',
            'Understanding of community-led growth and grassroots marketing strategies.',
            'Excellent written communication and storytelling skills.',
            'Ability to work across teams to ensure brand alignment.'
        ],
        nice_to_have: [
            'Experience with design tools (Figma, Canva)',
            'Knowledge of PR and media relations',
            'Background in tech or startup communities',
            'Understanding of visual branding and design principles'
        ]
    },
    {
        id: 'partnerships-manager',
        title: 'Partnerships Manager',
        department: 'Marketing',
        departmentIcon: TrendingUp,
        type: 'Part-time / Remote (India)',
        accentColor: 'blue',
        accentBg: 'bg-blue-500',
        badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
        tagline: 'Identify, negotiate, and manage strategic partnerships with sponsors, colleges, and creators.',
        overview: 'As our Partnerships Manager, you\'ll be the relationship builder and deal maker. You\'ll identify high-value partnership opportunities, pitch Open Box to potential sponsors and collaborators, negotiate agreements, and manage ongoing relationships. This role is perfect for strategic, charismatic individuals with strong sales and negotiation skills.',
        responsibilities: [
            'Identify and research potential sponsorship and partnership opportunities.',
            'Reach out to prospects with personalized pitches and partnership proposals.',
            'Negotiate terms, deliverables, and pricing for partnership agreements.',
            'Manage ongoing sponsor relationships and ensure successful execution of collaborations.',
            'Track partnership ROI and report on impact to business objectives.',
            'Develop partnership packages and sponsorship tiers.',
            'Coordinate cross-team execution on partnership deliverables.'
        ],
        requirements: [
            'Prior experience with sponsorship sales, business development, or partnerships.',
            'Excellent written and verbal communication skills.',
            'Confidence pitching to decision-makers and senior stakeholders.',
            'Strong organizational skills and ability to manage multiple partnerships simultaneously.',
            'Ability to identify win-win opportunities for both parties.',
            'Negotiation and persuasion skills.'
        ],
        nice_to_have: [
            'Experience with sponsorship management tools or CRMs',
            'Background in tech, gaming, or community-driven industries',
            'Track record of closing high-value deals',
            'Network within Indian tech and gaming communities'
        ]
    }
]

// Get role by slug
function getRole(slug: string) {
    return allRoles.find(role => role.id === slug)
}

// Get other roles in same department
function getRelatedRoles(slug: string, department: string) {
    return allRoles.filter(role => role.department === department && role.id !== slug).slice(0, 2)
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const role = getRole(slug)
    if (!role) return { title: 'Role Not Found' }

    return {
        title: `${role.title} — Open Box Careers`,
        description: role.tagline,
        alternates: { canonical: `/careers/${role.id}` },
    }
}

export function generateStaticParams() {
    return allRoles.map(role => ({ slug: role.id }))
}

export default async function RoleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const role = getRole(slug)

    if (!role) {
        notFound()
    }

    const relatedRoles = getRelatedRoles(role.id, role.department)
    const DepartmentIcon = role.departmentIcon

    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

            {/* Back Button */}
            <Link
                href="/carrers"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8 font-semibold transition-colors text-sm"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to all roles
            </Link>

            {/* Header: Centered layout with Flat solid background, NO Gradients */}
            <div className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-10">
                <div className="mx-auto max-w-2xl flex flex-col items-center">
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                        <DepartmentIcon className="h-3.5 w-3.5 shrink-0" />
                        {role.department} Department
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
                        {role.title}
                    </h1>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                        {role.tagline}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-transparent">
                            <MapPin className="h-3.5 w-3.5" /> Remote
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                            <Clock className="h-3.5 w-3.5" /> Part-Time (10-15 hrs/week)
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid: Mobile-First Single Column */}
            <div className="space-y-12">

                {/* Overview */}
                <section className="border-b border-zinc-100 dark:border-zinc-800 pb-10">
                    <h2 className="text-xl font-extrabold text-foreground mb-4 sm:text-2xl">About This Role</h2>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                        {role.overview}
                    </p>
                </section>

                {/* Responsibilities */}
                <section className="border-b border-zinc-100 dark:border-zinc-800 pb-10">
                    <h2 className="text-xl font-extrabold text-foreground mb-6 sm:text-2xl flex items-center gap-2">
                        <Zap className="h-5 w-5 text-cyan-500 shrink-0" /> Key Responsibilities
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {role.responsibilities.map((resp, idx) => (
                            <div key={idx} className="flex gap-3 p-4 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/40">
                                <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{resp}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Requirements */}
                <section className="border-b border-zinc-100 dark:border-zinc-800 pb-10">
                    <h2 className="text-xl font-extrabold text-foreground mb-6 sm:text-2xl flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-500 shrink-0" /> What We're Looking For
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
                        {role.requirements.map((req, idx) => (
                            <div key={idx} className="flex gap-3 p-4 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/40">
                                <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{req}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/30">
                        <h3 className="font-extrabold text-foreground mb-3 text-xs uppercase tracking-wider">Nice to Have</h3>
                        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {role.nice_to_have.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
                                    <span className="text-cyan-500 font-extrabold mt-0.5">+</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Apply CTA - Flat background, NO Gradients */}
                <section className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="space-y-1">
                            <h3 className="text-xl font-extrabold text-foreground sm:text-2xl">Ready to apply?</h3>
                            <p className="text-sm text-muted-foreground max-w-xl">Send us your resume, portfolio, and a brief message explaining why you'd be a perfect fit.</p>
                        </div>
                        <a
                            href={`mailto:carrers@openboxcomm.in?subject=Application for ${role.title}`}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition-colors whitespace-nowrap text-sm"
                        >
                            <Mail className="h-4 w-4" />
                            Apply Now
                        </a>
                    </div>
                </section>

                {/* Related Roles */}
                {relatedRoles.length > 0 && (
                    <section className="border-t border-zinc-100 dark:border-zinc-800 pt-10">
                        <h2 className="text-xl font-extrabold text-foreground mb-6 sm:text-2xl">Other {role.department} Roles</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {relatedRoles.map((relRole) => (
                                <Link key={relRole.id} href={`/carrers/${relRole.id}`}>
                                    <div className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-cyan-500/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-cyan-500/40 cursor-pointer">
                                        <div>
                                            <h3 className="font-bold text-base text-foreground group-hover:text-cyan-500 transition-colors mb-2">
                                                {relRole.title}
                                            </h3>
                                            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                                {relRole.tagline}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-cyan-500 group-hover:translate-x-1 transition-transform text-xs font-semibold mt-2">
                                            <span>View details</span>
                                            <ArrowLeft className="h-3.5 w-3.5 ml-1.5 rotate-180" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* FAQ / Role footer */}
                <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/20 sm:p-8">
                    <h3 className="text-lg font-bold text-foreground mb-3 sm:text-xl">Questions about this role?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Feel free to reach out to us directly with any questions before applying. We're happy to clarify details about responsibilities, schedule, or the application process.
                    </p>
                    <a
                        href="mailto:carrers@openboxcomm.in"
                        className="inline-flex items-center gap-1.5 text-cyan-500 font-bold hover:text-cyan-400 transition-colors text-sm"
                    >
                        <Mail className="h-4 w-4" />
                        Ask us anything &rarr;
                    </a>
                </section>
            </div>
        </div>
    )
}