export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#111111]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f3ed]/85 backdrop-blur-md">
        <div className="mx-auto flex h-[85px] max-w-7xl items-center justify-between px-6 md:px-10">
          <a
            href="/"
            className="text-xl uppercase tracking-[0.45em] text-black"
          >
            SAVI
          </a>

          <a
            href="/"
            className="rounded-full border border-black px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-black transition hover:bg-black hover:!text-white"
          >
            Back home
          </a>
        </div>
      </header>

      <section className="px-6 pb-20 pt-[140px] md:px-10 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-neutral-500">
            SAVI
          </p>

          <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-700 md:text-lg">
            This Privacy Policy explains how SAVI collects and uses personal
            information submitted through this website.
          </p>

          <div className="mt-14 space-y-12 border-t border-black/10 pt-10 text-sm leading-7 text-neutral-700 md:text-base md:leading-8">
            <section>
              <h2 className="mb-4 text-2xl font-light tracking-[-0.03em] text-black">
                1. Who we are
              </h2>
              <p>
                This website is operated by SAVI, a pre-launch brand created to
                validate interest in the SAVI First Edition cowhide wallet.
              </p>
              <p className="mt-4">
                Contact email:{" "}
                <a
                  href="mailto:sawickimartyn82@gmail.com"
                  className="underline underline-offset-4"
                >
                  sawickimartyn82@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light tracking-[-0.03em] text-black">
                2. What data we collect
              </h2>
              <p>
                When you request access to the SAVI First Edition, we may collect
                the following information:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>your email address,</li>
                <li>your country,</li>
                <li>
                  your response to whether you would consider reserving the
                  product at €149.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light tracking-[-0.03em] text-black">
                3. Why we collect this data
              </h2>
              <p>
                We use this information to manage the SAVI First Edition
                waitlist, measure interest in the product, contact selected
                users before public release and improve our launch strategy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light tracking-[-0.03em] text-black">
                4. Legal basis
              </h2>
              <p>
                We process your data because you voluntarily submit it through
                the waitlist form and request to be contacted about SAVI First
                Edition.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light tracking-[-0.03em] text-black">
                5. Tools we use
              </h2>
              <p>
                We use Web3Forms to collect and store form submissions and send
                email notifications. We use Vercel to host the website and
                Vercel Analytics to understand basic website traffic and page
                views.
              </p>
              <p className="mt-4">
                These providers may process technical data necessary to operate
                the website and form system.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light tracking-[-0.03em] text-black">
                6. How long we keep your data
              </h2>
              <p>
                We keep waitlist data only for as long as necessary to manage
                the SAVI First Edition launch and related communication, unless
                a longer retention period is required by law or needed to handle
                legitimate business records.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light tracking-[-0.03em] text-black">
                7. Your rights
              </h2>
              <p>
                Depending on applicable law, you may have the right to access,
                correct or delete your personal data, object to certain
                processing, restrict processing, withdraw consent where consent
                is the basis for processing, and lodge a complaint with a data
                protection authority.
              </p>
              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:sawickimartyn82@gmail.com"
                  className="underline underline-offset-4"
                >
                  sawickimartyn82@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light tracking-[-0.03em] text-black">
                8. Updates
              </h2>
              <p>
                We may update this Privacy Policy as SAVI develops. The current
                version applies from the date it is published on this website.
              </p>
            </section>

            <p className="border-t border-black/10 pt-8 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}