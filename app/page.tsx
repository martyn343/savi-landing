"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#111111]">
<Header />
<Hero />
<BrandIdea />
<ProductReveal />
<SlimProfile />
<ProductGallery />
<LifestyleGallery />
<MaterialCraft />
<PackagingCertificate />
<WaitlistOffer />
<OurStory />
<FAQ />
<FinalCTA />
<Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f3ed]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="text-lg font-light tracking-[0.45em] uppercase"
        >
          SAVI
        </a>

        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.28em] text-neutral-700 md:flex">
          <a href="#edition" className="transition hover:text-black">
            First Edition
          </a>
          <a href="#story" className="transition hover:text-black">
            Story
          </a>
          <a href="#details" className="transition hover:text-black">
            Details
          </a>
        </nav>

        <a
          href="#request"
          className="rounded-full border border-black px-5 py-2 text-[11px] uppercase tracking-[0.25em] transition hover:bg-black hover:!text-white"
        >
          Request access
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-black/10"
    >
      <div className="absolute inset-0">
        <Image
  src="/images/hero-campaign.webp"
  alt="SAVI cowhide wallet on black marble"
  fill
  priority
  quality={85}
  sizes="100vw"
  className="object-cover object-[62%_center]"
/>

        <div className="absolute inset-0 bg-black/5" />
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/15" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1440px] items-center justify-center px-6 py-24 text-center md:px-10">
        <div className="max-w-[1100px]">
          <p className="mb-7 text-xs uppercase tracking-[0.55em] text-white/85">
            SAVI First Edition
          </p>

          <h1 className="mx-auto max-w-[1100px] text-[clamp(4rem,8.2vw,7.8rem)] font-light leading-[0.88] tracking-[-0.07em] text-white">
            Quietly impossible to ignore
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            A handcrafted cowhide wallet with a naturally unique pattern, slim
            profile and quiet visual presence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs uppercase tracking-[0.28em] text-black transition hover:bg-white/85"
            >
              Join the waitlist
            </a>

            <a
              href="#edition"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/20 px-8 py-4 text-xs uppercase tracking-[0.28em] !text-white backdrop-blur-[2px] transition hover:bg-white/20"
            >
              Discover the edition
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}function BrandIdea() {
  return (
    <section
      id="edition"
      className="border-t border-black/10 px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-neutral-500">
            The idea
          </p>

          <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
            SAVI was born from a single idea: create an accessory that feels
            refined, carries character, and never looks like everyone else.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl border-t border-black/10 pt-8 text-center">
          <p className="text-base leading-8 text-neutral-700 md:text-lg">
            Each piece is handcrafted from natural cowhide, where every pattern
            is one of one. No two natural markings are ever alike.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Quietly impossible to ignore.
          </p>
        </div>
      </div>
    </section>
  );
}function ProductReveal() {
  return (
    <section
      id="details"
      className="border-t border-black/10 px-6 py-12 md:px-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-neutral-500">
            The wallet
          </p>

          <h2 className="max-w-2xl text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
            One wallet. No identical patterns.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-neutral-700 md:text-lg">
            Every SAVI piece carries its own natural contrast, markings and
            texture — shaped by material, not print.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative flex aspect-[4/3.3] items-center justify-center overflow-visible">
            <img
              src="/images/hero-wallet.webp"
              alt="SAVI handcrafted cowhide wallet"
              className="w-[105%] drop-shadow-[0_35px_45px_rgba(17,17,17,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}function SlimProfile() {
  return (
    <section
  id="details"
  className="border-t border-black/10 px-6 py-12 md:px-10 md:py-16"
>
  <div className="mx-auto max-w-[1180px]">
    <div className="grid gap-8 md:grid-cols-[1.05fr_1fr] md:items-start">
      <div>
        <h2 className="max-w-[620px] text-[48px] font-normal leading-[0.95] tracking-[-0.05em] text-black md:text-[72px]">
          Designed to carry what matters without adding unnecessary bulk.
        </h2>
      </div>

      <div className="md:pt-6">
        <p className="max-w-2xl text-base leading-8 text-neutral-700 md:text-lg">
          Four essential card slots, two cash compartments and a small coin
          pocket — refined into a slim silhouette.
        </p>
      </div>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10">
      <div className="flex items-end justify-center">
        <img
          src="/images/wallet-side.webp"
          alt="SAVI wallet side profile"
          width={900}
          height={1200}
          className="h-[360px] w-auto object-contain md:h-[520px]"
        />
      </div>

      <div className="flex items-end justify-center md:pt-16">
        <img
          src="/images/wallet-inside.webp"
          alt="SAVI wallet interior"
          width={1200}
          height={1200}
          className="h-[360px] w-auto object-contain md:h-[520px]"
        />
      </div>
    </div>

    <div className="mt-10 grid grid-cols-3 gap-4 border-t border-black/10 pt-8 text-center">
      <div>
        <div className="text-[42px] leading-none tracking-[-0.04em] text-black">
          4
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-neutral-500">
          Card slots
        </p>
      </div>

      <div>
        <div className="text-[42px] leading-none tracking-[-0.04em] text-black">
          2
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-neutral-500">
          Cash pockets
        </p>
      </div>

      <div>
        <div className="text-[42px] leading-none tracking-[-0.04em] text-black">
          1
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-neutral-500">
          Coin pocket
        </p>
      </div>
    </div>
  </div>
</section>
  );
}function ProductGallery() {
  const images = [
  { src: "/images/gallery-1.webp", alt: "SAVI cowhide wallet front view" },
  { src: "/images/gallery-3.webp", alt: "SAVI cowhide wallet slim profile" },
  { src: "/images/gallery-4.webp", alt: "SAVI cowhide wallet material detail" },
  { src: "/images/gallery-5.webp", alt: "SAVI First Edition packaging set" },

  { src: "/images/product-back.webp", alt: "SAVI cowhide wallet back view" },
  { src: "/images/product-back-open.webp", alt: "SAVI wallet opened back view" },
  { src: "/images/product-open-cards-cash.webp", alt: "SAVI wallet with cards and cash" },
  { src: "/images/product-open-coins.webp", alt: "SAVI wallet with coin pocket open" },
  { src: "/images/lifestyle-cafe-table.webp", alt: "SAVI wallet in use at a cafe table"},
{ src: "/images/lifestyle-getting-ready.webp", alt: "SAVI wallet styled with essentials before going out"},
];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="border-t border-black/10 bg-[#111111] px-6 py-12 text-[#f7f3ed] md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#b8afa4]">
            Product gallery
          </p>

          <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
            A closer look at the First Edition.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#d8d0c5] md:text-lg">
            From its slim profile to its natural cowhide texture, every detail is
            designed to feel refined, practical and impossible to repeat.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[820px]">
          <div className="relative flex items-center justify-center">
            <img
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              className="w-full max-w-[680px] rounded-[18px] object-contain"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() =>
                setActiveImage((activeImage - 1 + images.length) % images.length)
              }
              className="text-xs uppercase tracking-[0.28em] text-[#d8d0c5]/60 transition hover:text-[#f7f3ed]"
            >
              Prev
            </button>

            <div className="text-[11px] uppercase tracking-[0.32em] text-[#d8d0c5]/50">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>

            <button
              type="button"
              onClick={() => setActiveImage((activeImage + 1) % images.length)}
              className="text-xs uppercase tracking-[0.28em] text-[#d8d0c5]/60 transition hover:text-[#f7f3ed]"
            >
              Next
            </button>
          </div>

          <div className="mx-auto mt-8 grid max-w-[760px] grid-cols-5 gap-4">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`group overflow-hidden rounded-[12px] border transition ${
                  activeImage === index
                    ? "border-white/60 opacity-100"
                    : "border-white/10 opacity-45 hover:border-white/30 hover:opacity-80"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}function LifestyleGallery() {
  const images = [
    {
      src: "/images/lifestyle-hand.webp",
      alt: "SAVI wallet held in hand",
    },
    {
      src: "/images/lifestyle-pocket.webp",
      alt: "SAVI wallet slipped into pocket",
    },
    {
      src: "/images/lifestyle-front.webp",
      alt: "SAVI wallet held as part of quiet luxury styling",
    },
    {
      src: "/images/lifestyle-open.webp",
      alt: "SAVI wallet opened in hands",
    },
    {
      src: "/images/lifestyle-payment.webp",
      alt: "SAVI wallet used during payment",
    },
    {
      src: "/images/lifestyle-seated.webp",
      alt: "SAVI wallet in a quiet luxury lifestyle setting",
    },
    
  ];

  return (
    <section className="bg-[#f7f3ed] px-6 py-24 text-[#111111] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-black/45">
            In use
          </p>

          <h2 className="text-4xl font-light tracking-[-0.04em] md:text-6xl">
            Made to be carried.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
            SAVI is designed to live naturally in everyday moments — in hand,
            in a pocket, at a table, and as part of a quiet luxury wardrobe.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {images.map((image) => (
            <div key={image.src}>
              <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={100}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}function MaterialCraft() {
  return (
    <section className="border-t border-black/10 bg-[#111111] px-6 py-14 text-[#f7f3ed] md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#b8afa4]">
              Material & craft
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Natural cowhide. Handcrafted in limited quantities.
            </h2>
          </div>

          <div className="md:pt-24">
            <p className="max-w-2xl text-base leading-8 text-[#d8d0c5] md:text-lg">
              Each wallet is made from natural cowhide leather, selected for its
              contrast, texture and individuality. The result is never
              identical, never repeated, never mass-made in appearance.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="group">
            <div className="aspect-[4/4.7] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1a1a1a]">
              <img
                src="/images/material-detail.webp"
                alt="Natural cowhide texture detail"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 border-t border-white/15 pt-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[#b8afa4]">
                Natural
              </p>
              <p className="mt-3 text-sm leading-7 text-[#d8d0c5]">
                Organic markings shaped by material, not artificial print.
              </p>
            </div>
          </article>

          <article className="group">
            <div className="aspect-[4/4.7] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1a1a1a]">
              <img
                src="/images/material-detail-2.webp"
                alt="Handcrafted edge and stitching detail"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 border-t border-white/15 pt-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[#b8afa4]">
                Handcrafted
              </p>
              <p className="mt-3 text-sm leading-7 text-[#d8d0c5]">
                Finished by hand with attention to edgework, structure and form.
              </p>
            </div>
          </article>

          <article className="group">
            <div className="aspect-[4/4.7] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1a1a1a]">
              <img
                src="/images/material-detail-3.webp"
                alt="One-of-one natural cowhide pattern detail"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 border-t border-white/15 pt-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[#b8afa4]">
                One of one
              </p>
              <p className="mt-3 text-sm leading-7 text-[#d8d0c5]">
                No two natural markings are ever alike — every piece is visually
                unique.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}function PackagingCertificate() {
  return (
    <section className="border-t border-black/10 px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-20">
        <div>
          <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f7f3ed]">
            <img
              src="/images/packaging-certificate.webp"
              alt="SAVI packaging and certificate of uniqueness"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-neutral-500">
            Packaging & certificate
          </p>

          <h2 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
            One of one. Certified.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-neutral-700 md:text-lg">
            Every SAVI First Edition wallet arrives with a Certificate of
            Uniqueness — a quiet reminder that no two natural patterns are ever
            alike.
          </p>

          <div className="mt-10 space-y-4 border-t border-black/10 pt-8 text-sm leading-7 text-neutral-700">
            <p>Included with every First Edition piece:</p>
            <p>— Soft white rigid box</p>
<p>— Wrapped in tissue paper with SAVI seal</p>
<p>— Certificate of Uniqueness</p>
<p>— Designed for a clean, premium first impression</p>
          </div>
        </div>
      </div>
    </section>
  );
}function WaitlistOffer() {
  return (
    <section
      id="request"
      className="border-t border-black/10 bg-[#ebe3d7] px-6 py-16 md:px-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
         <p className="mb-4 text-xs uppercase tracking-[0.24em] text-black/45">
  Join for early access before public release.
</p>

<h2 className="text-4xl font-light tracking-[-0.04em] md:text-6xl">
  Join the SAVI First Edition waitlist.
</h2>

<p className="mt-6 max-w-xl text-base leading-7 text-black/60 md:text-lg">
  Be contacted before the public release. No payment required. Planned launch
  price: €149.
</p>

          <div className="mt-10 space-y-4 border-t border-black/10 pt-7 text-sm leading-7 text-neutral-700">
            <p>Included with every First Edition piece:</p>
            <p>— Handcrafted cowhide wallet</p>
            <p>— Soft white rigid box</p>
            <p>— Wrapped in tissue paper with SAVI seal</p>
            <p>— Certificate of Uniqueness</p>
            <p>— Crafted-to-order production</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-[#f7f3ed] p-7 md:p-9">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            Request access
          </p>

          <h3 className="mt-7 text-3xl font-light leading-tight tracking-[-0.04em] md:text-4xl">
            Request access to the First Edition.
          </h3>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-8 space-y-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="05d5956d-ede1-401b-b20a-bc2de10b8ea6"
            />

            <input
              type="hidden"
              name="subject"
              value="New SAVI First Edition waitlist request"
            />

            <input
              type="hidden"
              name="from_name"
              value="SAVI Waitlist"
            />
            <input
  type="hidden"
  name="redirect"
  value="https://saviofficial.com/thank-you"
/>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.28em] text-neutral-500">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-black/15 bg-transparent px-5 py-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.28em] text-neutral-500">
                Country
              </span>
              <input
                type="text"
                name="country"
                required
                placeholder="Poland"
                className="w-full rounded-full border border-black/15 bg-transparent px-5 py-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.28em] text-neutral-500">
                Would you consider reserving at €149?
              </span>
              <select
                name="reservation_intent"
                required
                className="w-full rounded-full border border-black/15 bg-transparent px-5 py-4 text-sm outline-none transition focus:border-black"
              >
                <option>Yes</option>
                <option>Maybe</option>
                <option>Not sure</option>
              </select>
            </label>

            <button
              type="submit"
              className="mt-3 w-full rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.28em] !text-white transition hover:bg-neutral-800"
            >
              Join the waitlist
            </button>
             <p className="mt-4 text-center text-xs leading-5 text-black/45">
  No payment required. We only use your email to contact you about SAVI First Edition.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}function OurStory() {
  return (
    <section
      id="story"
      className="border-t border-black/10 px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
  <p className="mb-8 text-xs uppercase tracking-[0.45em] text-neutral-500">
    Our story
  </p>

  <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
    SAVI began during a journey through Vietnam, where a single
    handcrafted wallet became the starting point for a different kind of
    accessories label.
  </h2>
</div>

        <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 text-base leading-8 text-neutral-700 md:grid-cols-3 md:text-lg">
          <p>
            The idea was simple: create a wallet that feels slim, refined and
            practical — but carries a visual identity impossible to repeat.
          </p>

          <p>
            Made from natural cowhide, every SAVI piece holds its own pattern,
            contrast and character. No two natural markings are ever alike.
          </p>

          <p>
            SAVI is made for people who choose objects with intention. For those
            who prefer quiet confidence over loud luxury. For people tired of
            looking like everyone else.
          </p>
        </div>
      </div>
    </section>
  );
}function FAQ() {
  const items = [
    {
      question: "Is every wallet exactly like the photos?",
      answer:
        "No. Each wallet is handcrafted from natural cowhide, which means every pattern is different. The photos represent the material, construction and visual direction — your piece will have its own one-of-one markings.",
    },
    {
      question: "When will SAVI First Edition be available?",
      answer:
        "First Edition production will be prepared in limited quantities after demand is confirmed through the waitlist and preorder window.",
    },
    {
      question: "What is the expected price?",
      answer: "SAVI First Edition is planned at €149.",
    },
    {
      question: "How long will delivery take after preorder?",
      answer:
        "Each piece is crafted to order. Estimated production and delivery time is 3–4 weeks after preorder confirmation.",
    },
    {
      question: "Is payment required to join the waitlist?",
      answer:
        "No. Joining the waitlist is free and gives you early access before public release.",
    },
    {
      question: "Is it real cowhide?",
      answer:
        "Yes. Each piece is made from natural cowhide leather with visible texture, hair and organic markings.",
    },
    {
  question: "What does the wallet include?",
  answer:
    "The wallet includes a slim bifold structure, 4 card slots, 2 cash compartments and a small coin pocket.",
},
{
  question: "Is every wallet unique?",
  answer:
    "Yes. Each wallet is made from natural cowhide, so the black-and-white markings vary from piece to piece. No two natural markings are ever alike.",
},
  ];

  return (
    <section className="border-t border-black/10 bg-[#111111] px-6 py-14 text-[#f7f3ed] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#b8afa4]">
            FAQ
          </p>

          <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Before you request access.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-white/15 pt-10 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.question}>
              <h3 className="text-xl font-light tracking-[-0.03em] md:text-2xl">
                {item.question}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#d8d0c5] md:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}function FinalCTA() {
  return (
    <section className="px-6 py-20 text-center md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-xs uppercase tracking-[0.45em] text-neutral-500">
          SAVI First Edition
        </p>

        <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-8xl">
          For people tired of looking like everyone else.
        </h2>

        <div className="mt-12">
          <a
            href="#request"
            className="inline-flex rounded-full bg-black px-9 py-4 text-xs uppercase tracking-[0.28em] !text-white transition hover:bg-neutral-800"
          >
            Request access
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-neutral-500">
          SAVI First Edition — planned at €149. No payment required to join.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-light uppercase tracking-[0.45em]">SAVI</p>
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-neutral-500">
            Quietly impossible to ignore.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-x-10 gap-y-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
  <a href="#edition" className="transition hover:text-black">
    First Edition
  </a>
  <a href="#story" className="transition hover:text-black">
    Story
  </a>
  <a href="#request" className="transition hover:text-black">
    Request Access
  </a>
  <a href="mailto:sawickimartyn82@gmail.com" className="transition hover:text-black">
    Contact
  </a>
  <a href="/privacy" className="transition hover:text-black">
    Privacy Policy
  </a>
</div>
      </div>
    </footer>
  );
}