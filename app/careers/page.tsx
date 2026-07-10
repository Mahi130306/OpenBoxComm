import type { Metadata } from 'next'
import { Briefcase, Mail, Megaphone, Users, MapPin, Clock, ArrowRight, Sparkles, Share2, TrendingUp, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers — Open Box',
  description: 'Join the team building the future of Indian Discord communities. Discover active openings for Social Media and Marketing roles at Open Box.',
  alternates: { canonical: '/careers' },
}

export default function CareersPage() {
  const roles = [
    {
      id: 'social-media-specialist',
      title: 'Social Media Specialist / Manager',
      department: 'Content & Community',
      type: 'Part-time / Remote (India)',
      icon: Megaphone,
      accentColor: 'from-cyan-500 to-blue-600',
      tagline: 'Connect with our audience and bring the Open Box vibe to the world.',
      responsibilities: [
        'Plan, create, and schedule engaging post, reels, and shorts across Instagram, YouTube, X (Twitter), and Discord.',
        'Create customized graphics and edit short-form videos to promote server events, tournaments, and community blogs.',
        'Engage actively with community members by replying to comments, initiating discussions, and building brand identity.',
        'Collaborate with Discord server leads to live-tweet or promote major server events, gaming tournaments, and tech sessions.'
      ],
      requirements: [
        'Deep understanding of Discord culture, gaming trends, and Indian internet/meme culture.',
        'Proficiency with design & editing tools such as Canva, Figma, Photoshop, Premiere Pro, or CapCut.',
        'Exceptional copy-writing and creative writing skills with a witty and conversational brand voice.',
        'Prior experience managing active social media accounts or community channels with verifiable engagement.'
      ]
    },
    {
      id: 'growth-marketing-specialist',
      title: 'Growth & Marketing Specialist',
      department: 'Strategy & Growth',
      type: 'Part-time / Remote (India)',
      icon: TrendingUp,
      accentColor: 'from-teal-500 to-emerald-600',
      tagline: 'Scale the community network and form strategic community partnerships.',
      responsibilities: [
        'Design and execute growth campaigns to increase member acquisition and active participation across our servers (Junction, Dev, GG).',
        'Identify and secure strategic collaborations with other Indian tech/gaming communities, college clubs, and student creators.',
        'Track, analyze, and report key community metrics (invite conversion, member retention, event attendance, and referral programs).',
        'Contribute to on-page and off-page marketing efforts (SEO, online directories, content distribution) to increase organic web traffic.'
      ],
      requirements: [
        'Strong passion for community-led growth (CLG) and growth-hacking techniques.',
        'Data-driven mindset with basic knowledge of Discord Server Insights, Google Analytics, or similar reporting tools.',
        'Outstanding written and verbal outreach/pitching skills; highly comfortable talking to external partners.',
        'High level of self-motivation and capability to work independently in a remote environment.'
      ]
    }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-cyan-400/[0.08] p-6 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-cyan-400/[0.05] sm:p-10 lg:p-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 shrink-0 text-cyan-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300 sm:text-sm">We are Hiring</p>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground w-full break-words sm:text-5xl lg:text-6xl">
            Build the future of <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">online communities</span>.
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground/95 leading-relaxed sm:text-base lg:text-lg">
            At Open Box, we believe that great things happen when people come together. We provide high-signal, welcoming spaces for gaming, development, learning, and connection. Come help us build and grow the ultimate Discord-centric community platform in India.
          </p>
        </div>
      </div>

      <div className="grid gap-16 lg:grid-cols-12 mb-16">
        {/* Left Side: Openings */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Active Openings</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              We are currently seeking passionate contributors for the following remote roles. If you love Discord, online communities, and are eager to make an impact, we want to hear from you!
            </p>

            <div className="space-y-8">
              {roles.map((role) => (
                <div
                  key={role.id}
                  id={role.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-cyan-500/50 hover:shadow-xl scroll-mt-24"
                >
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 h-1.5 w-24 bg-gradient-to-r ${role.accentColor}`} />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${role.accentColor} text-white shadow-md`}>
                        <role.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-cyan-500 transition-colors duration-150">
                          {role.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-medium mt-0.5">{role.department}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:self-center">
                      <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-500 border border-cyan-500/20">
                        <MapPin className="h-3 w-3" /> Remote
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-500 border border-blue-500/20">
                        <Clock className="h-3 w-3" /> Part-Time
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/80 font-medium mb-6 italic border-l-2 border-blue-500/30 pl-3">
                    &ldquo;{role.tagline}&rdquo;
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-1.5">
                        <span className="h-1 w-1.5 bg-blue-500 rounded-full" /> Key Responsibilities
                      </h4>
                      <ul className="grid gap-2.5 text-sm text-muted-foreground pl-3">
                        {role.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-cyan-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-1.5">
                        <span className="h-1 w-1.5 bg-cyan-500 rounded-full" /> Qualifications & Skills
                      </h4>
                      <ul className="grid gap-2.5 text-sm text-muted-foreground pl-3">
                        {role.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
                    <span className="text-xs text-muted-foreground font-medium">To apply, email your portfolio to carrers@openboxcomm.in</span>
                    <a
                      href={`mailto:carrers@openboxcomm.in?subject=Application for ${role.title}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-500 hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-150"
                    >
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Side: How to Apply / Sidebar info */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-6">

            {/* How to Apply Card */}
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />

              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">How to Apply</h3>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  We keep our application process simple and straightforward. To submit your application, please email us with:
                </p>

                <ul className="space-y-2.5 pl-1.5 text-foreground/90 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                    <span>Your resume or professional background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                    <span>Your portfolio or links to accounts/work you have managed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                    <span>Your Discord handle (e.g. username)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                    <span>A brief message describing why you would be a great fit</span>
                  </li>
                </ul>

                <div className="my-6 h-px bg-border" />

                <p className="text-xs text-center font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Send your application to
                </p>

                <div className="group/email relative rounded-xl border border-border bg-surface/80 p-3 text-center transition-all hover:border-cyan-500/40">
                  <a
                    href="mailto:carrers@openboxcomm.in"
                    className="block text-base font-bold text-cyan-500 hover:text-cyan-400 select-all tracking-wide"
                  >
                    carrers@openboxcomm.in
                  </a>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Click to send an email directly
                  </p>
                </div>

                <p className="text-xs text-muted-foreground/80 leading-relaxed italic text-center mt-4">
                  Note: Please mention the exact role title in the subject line of your email (e.g. &ldquo;Application for Social Media Specialist&rdquo;).
                </p>
              </div>
            </div>

            {/* Why Join Us Card */}
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">Why Join Open Box?</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Impact at Scale',
                    desc: 'Your creative campaigns and social media work will directly reach thousands of active community members across India.'
                  },
                  {
                    title: '100% Remote & Flexible',
                    desc: 'Work from anywhere in India at times that suit you. We prioritize high-quality results over rigid schedules.'
                  },
                  {
                    title: 'Creative Autonomy',
                    desc: 'Have a cool idea for a meme, video format, or growth campaign? We will give you the resources and freedom to bring it to life.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-blue-500 text-lg font-bold shrink-0 mt-0.5">0{idx + 1}.</span>
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-0.5">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ card */}
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                <h4 className="font-bold text-sm text-foreground">Frequently Asked Questions</h4>
              </div>
              <div className="space-y-3.5 text-xs">
                <div>
                  <p className="font-semibold text-foreground/90 mb-1">Are these paid roles?</p>
                  <p className="text-muted-foreground">Yes, we provide competitive part-time compensation based on your experience and skill level.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground/90 mb-1">What is the selection process?</p>
                  <p className="text-muted-foreground">After reviewing your email, we will schedule a brief Discord call to chat about your experience and alignment.</p>
                </div>
              </div>
            </div>

          </div>
        </aside>
      </div>

    </div>
  )
}
