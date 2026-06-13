import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4">Ready to find your people?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join a community that actually gets what you are into. No gatekeeping, just good vibes and great collabs.
        </p>
        <Button asChild size="lg">
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN} target="_blank" rel="noopener noreferrer">
            Join Open Box
          </a>
        </Button>
      </div>
    </section>
  )
}