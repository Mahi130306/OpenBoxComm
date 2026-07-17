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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const role = getRole(params.slug)
    if (!role) return { title: 'Role Not Found' }

    return {
        title: `${role.title} - Open Box Careers`,
        description: role.tagline,
        alternates: { canonical: `/careers/${role.id}` },
    }
}

export function generateStaticParams() {
    return allRoles.map(role => ({ slug: role.id }))
}

export default function RoleDetailPage({ params }: { params: { slug: string } }) {
    const role = getRole(params.slug)

    if (!role) {
        notFound()
    }

    const relatedRoles = getRelatedRoles(role.id, role.department)
    const DepartmentIcon = role.departmentIcon

    return (
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
            {/* Back Button */}
            <Link href="/careers" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8 font-medium transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to all roles
            </Link>

            {/* Header */}
            <div className="mb-12 rounded-3xl border border-border bg-surface/40 p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <DepartmentIcon className="h-5 w-5 text-cyan-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">{role.department}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                        {role.title}
                    </h1>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {role.tagline}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-500 border border-cyan-500/20">
                            <MapPin className="h-4 w-4" /> Remote
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-500 border border-blue-500/20">
                            <Clock className="h-4 w-4" /> Part-Time (10-15 hrs/week)
                        </span>
                    </div>
                </div>
            </div>

            {/* Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Role</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                    {role.overview}
                </p>
            </section>

            {/* Responsibilities */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-cyan-500" /> Key Responsibilities
                </h2>
                <div className="grid gap-4">
                    {role.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex gap-3 p-4 rounded-xl border border-border bg-surface/50">
                            <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                            <p className="text-foreground leading-relaxed">{resp}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Requirements */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-500" /> What We're Looking For
                </h2>
                <div className="grid gap-4 mb-8">
                    {role.requirements.map((req, idx) => (
                        <div key={idx} className="flex gap-3 p-4 rounded-xl border border-border bg-surface/50">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                            <p className="text-foreground leading-relaxed">{req}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                    <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Nice to Have</h3>
                    <ul className="space-y-2">
                        {role.nice_to_have.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-cyan-500 font-bold mt-0.5">+</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Apply CTA */}
            <section className="mb-12 rounded-3xl border border-border bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Ready to apply?</h3>
                        <p className="text-muted-foreground">Send us your resume, portfolio, and a brief message about why you'd be a great fit.</p>
                    </div>
                    <a
                        href={`mailto:careers@openboxcomm.in?subject=Application for ${role.title}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition-colors whitespace-nowrap"
                    >
                        <Mail className="h-5 w-5" />
                        Apply Now
                    </a>
                </div>
            </section>

            {/* Related Roles */}
            {relatedRoles.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Other {role.department} Roles</h2>
                    <div className="grid gap-6">
                        {relatedRoles.map((relRole) => (
                            <Link key={relRole.id} href={`/careers/${relRole.id}`}>
                                <div className="group rounded-2xl border border-border bg-surface/40 p-6 hover:border-cyan-500/30 hover:shadow-lg hover:bg-surface/60 transition-all cursor-pointer">
                                    <h3 className="font-bold text-lg text-foreground group-hover:text-cyan-500 transition-colors mb-2">
                                        {relRole.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {relRole.tagline}
                                    </p>
                                    <div className="mt-4 flex items-center text-cyan-500 group-hover:translate-x-1 transition-transform">
                                        <span className="text-sm font-semibold">View details</span>
                                        <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ for this role */}
            <section className="rounded-3xl border border-border bg-surface/40 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Questions about this role?</h3>
                <p className="text-muted-foreground mb-4">
                    Feel free to reach out with any questions before applying. We're happy to clarify details about responsibilities, schedule, or the application process.
                </p>
                <a
                    href="mailto:careers@openboxcomm.in"
                    className="inline-flex items-center gap-2 px-4 py-2 text-cyan-500 font-bold hover:text-cyan-400 transition-colors"
                >
                    <Mail className="h-4 w-4" />
                    Ask us anything
                </a>
            </section>
        </div>
    )
}