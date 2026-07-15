"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const META_PIXEL_ID = "1020453880576198";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

function loadMetaPixel() {
  if (typeof window === "undefined") return;

  if (window.fbq) {
    window.fbq("track", "PageView");
    return;
  }

 type MetaPixelFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
};

const fbq = function (...args: unknown[]) {
  if (fbq.callMethod) {
    fbq.callMethod(...args);
  } else {
    fbq.queue.push(args);
  }
} as MetaPixelFunction;

fbq.queue = [];
fbq.loaded = true;
fbq.version = "2.0";
  window.fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode?.insertBefore(script, firstScript);

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

export default function MetaPixelConsent() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("savi_cookie_consent");

    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
    }
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;

    loadMetaPixel();

   if (pathname === "/thank-you") {
  setTimeout(() => {
    window.fbq?.("track", "Lead");
  }, 800);
}
  }, [consent, pathname]);

  function acceptCookies() {
    localStorage.setItem("savi_cookie_consent", "accepted");
    setConsent("accepted");
  }

  function rejectCookies() {
    localStorage.setItem("savi_cookie_consent", "rejected");
    setConsent("rejected");
  }

  if (consent !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-[1.5rem] border border-white/10 bg-[#111111] p-5 text-[#f7f3ed] shadow-2xl md:p-6">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/50">
            Privacy
          </p>

          <p className="mt-3 text-sm leading-6 text-white/80">
            We use cookies and similar technologies to measure website traffic
            and improve future marketing. You can accept or reject non-essential
            tracking.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <button
            type="button"
            onClick={rejectCookies}
            className="rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white/70 transition hover:border-white hover:text-white"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-full bg-[#f7f3ed] px-6 py-3 text-xs uppercase tracking-[0.24em] text-black transition hover:bg-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}