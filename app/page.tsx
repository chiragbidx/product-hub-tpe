import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { getContent } from "@/content/content";

export default function Home() {
  const content = getContent();

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        {/* Features Section */}
        <section className="w-full bg-muted py-16 mt-8">
          <div className="mx-auto w-full max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">{content.features.title}</h2>
            <div className="flex flex-col gap-10 sm:flex-row sm:justify-center">
              {content.features.items.map((feature) => (
                <div
                  className="flex flex-1 flex-col items-center rounded-xl bg-background p-6 shadow-sm"
                  key={feature.title}
                >
                  <div className="mb-3 h-8 w-8 rounded-full bg-primary text-background flex items-center justify-center font-bold">
                    {feature.title.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="w-full py-16">
          <div className="mx-auto w-full max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">{content.testimonials.title}</h2>
            <div className="flex flex-col gap-8">
              {content.testimonials.items.map((item) => (
                <div key={item.author} className="bg-muted rounded-md px-6 py-5 mx-auto max-w-xl">
                  <blockquote className="italic text-muted-foreground">"{item.quote}"</blockquote>
                  <div className="mt-2 font-semibold text-foreground">{item.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="mb-12">
          <div className="mx-auto w-full max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold mb-2">{content.cta.title}</h2>
            <p className="text-md text-muted-foreground mb-6">{content.cta.subtitle}</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/auth/signup">
                <button className="h-11 gap-2 rounded-lg bg-primary px-6 font-semibold text-background transition hover:bg-primary/90">
                  {content.cta.ctaPrimary}
                </button>
              </a>
              <a href="mailto:chirag@bidx.ai">
                <button className="h-11 gap-2 rounded-lg border bg-background px-6 font-semibold text-foreground transition hover:bg-muted border-border">
                  {content.cta.ctaSecondary}
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between px-10 pb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
          <span className="text-sm font-bold">A</span>
        </div>
        <a
          href="https://panda.new"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2 shadow-sm transition-colors hover:bg-muted"
        >
          <span className="text-lg">🐼</span>
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] text-muted-foreground">Built with</span>
            <span className="text-sm font-semibold text-foreground">Panda</span>
          </span>
        </a>
      </footer>
    </div>
  );
}