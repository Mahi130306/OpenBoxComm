import type { Metadata } from 'next'
import { Briefcase, Mail, Megaphone, Users, MapPin, Clock, ArrowRight, Sparkles, TrendingUp, HelpCircle, Layers, Heart, Sparkle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers — Open Box',
  description: 'Join the team building the future of Indian Discord communities. Discover active openings for Social Media and Marketing roles at Open Box.',
  alternates: { canonical: '/careers' },
}

export default function CareersPage() {
  const roles = [
    {
      id: 'social-media',
      title: 'Social Media Specialist / Manager',
      department: 'Content & Community',
      type: 'Part-time / Remote (India)',
      icon: Megaphone,
      accentBg: 'bg-cyan-500',
      accentText: 'text-cyan-500',
      tagline: 'Connect with our audience and bring the Open Box vibe to the world across Instagram, X, and Discord.',
      subRoles: [
        'Content Creator/Reels Producer (Instagram/TikTok short-form)',
        'Community Manager (Discord engagement, member support)',
        'Social Strategist (content calendar, analytics, growth)'
      ],
      responsibilities: [
        'Manage 2-3 platforms (Instagram, X, Discord) to maintain an active and vibrant online brand presence.',
        'Create 2-3 reels/posts weekly, producing engaging and high-quality short-form visual and text content.',
        'Engage with our active community, reply to comments, start discussions, and respond to DMs promptly.',
        'Track key metrics, analyze audience behavior, and report on performance monthly.',
        'Collaborate with marketing on campaigns to cross-promote community events, blogs, and launches.'
      ],
      requirements: [
        'Deep understanding of Discord culture, gaming trends, and Indian internet/meme culture.',
        'Strong skills in video editing (CapCut, Premiere, etc.) and graphic creation (Figma, Canva).',
        'Excellent copywriting ability with a witty, conversational, and welcoming tone of voice.',
        'Prior experience running active social channels or managing online communities.'
      ]
    },
    {
      id: 'marketing',
      title: 'Growth & Marketing Specialist',
      department: 'Strategy & Growth',
      type: 'Part-time / Remote (India)',
      icon: TrendingUp,
      accentBg: 'bg-blue-500',
      accentText: 'text-blue-500',
      tagline: 'Scale the community network, execute high-impact acquisition campaigns, and manage sponsor partnerships.',
      subRoles: [
        'Growth/Performance Marketer (campaigns, funnels, paid ads)',
        'Brand Marketer (positioning, partnerships, storytelling)',
        'Partnerships Manager (sponsor outreach, collabs)'
      ],
      responsibilities: [
        'Develop and execute data-driven strategies for user acquisition to grow our Discord servers and platform reach.',
        'Lead multi-channel campaign execution across email, social, and paid advertising to drive event registrations.',
        'Manage end-to-end partnerships with sponsors, colleges, tech organizations, and student creators.',
        'Perform thorough analytics and reporting on marketing channels to optimize conversion rates and ROI.',
        'Provide comprehensive event marketing support to maximize turnout for gaming tournaments and workshops.'
      ],
      requirements: [
        'Strong passion for community-led growth (CLG) and scaling interactive online platforms.',
        'Analytical mindset with hands-on experience using Google Analytics, Discord Insights, or CRM tools.',
        'Exceptional written and spoken outreach skills, with confidence pitching to prospective sponsors.',
        'Proactive self-starter attitude, capable of running campaigns independently.'
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
      q: 'Can I apply for multiple roles or sub-roles?',
      a: 'Absolutely! If your skillset spans across content creation and growth marketing, feel free to highlight both in your application email.'
    }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Hero Section - Clean solid colored background */}
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
            At Open Box, we build high-signal, high-vibe spaces for gaming, development, learning, and connection. Our mission is to make community-building accessible, highly interactive, and incredibly fun. Come help us build and scale India&apos;s ultimate Discord-centric community platform.
          </p>
        </div>
      </div>

      <div className="grid gap-16 lg:grid-cols-12 mb-16">
        {/* Left Side: Active Openings and Details */}
        <div className="lg:col-span-8 space-y-12">

          {/* Active Openings Grid */}
          <section id="openings">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Active Openings</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              Explore our current open positions. Each role carries several focus areas (sub-roles) inside — choose the one that aligns best with your core strengths!
            </p>

            <div className="space-y-8">
              {roles.map((role) => (
                <div
                  key={role.id}
                  id={role.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg scroll-mt-24"
                >
                  {/* Solid accent top border bar */}
                  <div className={`absolute top-0 right-0 left-0 h-1 ${role.accentBg}`} />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 pt-2">
                    <div className="flex items-center gap-3.5">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${role.accentBg} text-white shadow-sm`}>
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

                  <p className="text-sm text-foreground/80 font-medium mb-6 italic border-l-2 border-cyan-500/30 pl-3">
                    &ldquo;{role.tagline}&rdquo;
                  </p>

                  {/* Sub-Roles / Specializations section */}
                  <div className="mb-6 rounded-xl bg-slate-50 p-4 dark:bg-zinc-900/40 border border-border">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-cyan-500" /> Included Sub-Roles / Specializations:
                    </h4>
                    <ul className="space-y-1.5 text-sm text-foreground/90 font-medium pl-1">
                      {role.subRoles.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
                        <span className="h-1 w-1.5 bg-cyan-500 rounded-full" /> Requirements & Qualifications
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

                  <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <span className="text-xs text-muted-foreground font-medium">To apply, email your portfolio to carrers@openboxcomm.in</span>
                    <a
                      href={`mailto:carrers@openboxcomm.in?subject=Application for ${role.title}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-500 hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-150"
                    >
                      Apply for this role <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Culture Snippet (Why Join Us) */}
          <section className="rounded-3xl border border-border bg-slate-50 p-6 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Our Culture & Why Join Us</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              We are a close-knit group of community builders, gamers, and tech enthusiasts. We operate on high trust, high autonomy, and absolute transparency. Here is what you can expect when you join:
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                  <Sparkle className="h-4 w-4 text-cyan-500" /> Complete Creative Freedom
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Have a wild idea for a video format, partnership, or community campaign? We trust your creative instinct and will give you the full support to execute it.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                  <Sparkle className="h-4 w-4 text-cyan-500" /> High-vibe Collaboration
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Work directly with server leads, content creators, and the core development team in a flat hierarchy where everyone is accessible.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                  <Sparkle className="h-4 w-4 text-cyan-500" /> Real Impact
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your work will shape how thousands of active developers, gamers, and community members in India interact, learn, and grow every day.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border">
                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                  <Sparkle className="h-4 w-4 text-cyan-500" /> Fully Remote & Async
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We care about the quality of output, not hours spent sitting at a desk. Work asynchronously from anywhere in India with flexible scheduling.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="h-6 w-6 text-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Frequently Asked Questions</h2>
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

            {/* Quick Contact Support info */}
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm text-xs text-muted-foreground leading-relaxed">
              <h4 className="font-bold text-sm text-foreground mb-2">Have questions about openings?</h4>
              <p className="mb-3">Feel free to drop us a line at the same email address if you need any clarification about the roles or the process before applying.</p>
              <a href="mailto:carrers@openboxcomm.in" className="text-cyan-500 font-bold hover:underline">
                Ask a question
              </a>
            </div>

          </div>
        </aside>
      </div>

    </div>
  )
}
