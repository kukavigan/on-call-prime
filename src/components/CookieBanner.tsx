import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CookieView = "banner" | "preferences";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [view, setView] = useState<CookieView>("banner");
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("ocp-cookie-choice");
    if (!choice) setShowBanner(true);
  }, []);

  const saveChoice = (choice: string) => {
    localStorage.setItem("ocp-cookie-choice", choice);
    localStorage.setItem("ocp-analytics-cookies", String(analytics));
    localStorage.setItem("ocp-marketing-cookies", String(marketing));
    setShowBanner(false);
  };

  const acceptAll = () => {
    localStorage.setItem("ocp-cookie-choice", "accepted-all");
    localStorage.setItem("ocp-analytics-cookies", "true");
    localStorage.setItem("ocp-marketing-cookies", "true");
    setShowBanner(false);
  };

  const rejectAll = () => {
    localStorage.setItem("ocp-cookie-choice", "rejected-all");
    localStorage.setItem("ocp-analytics-cookies", "false");
    localStorage.setItem("ocp-marketing-cookies", "false");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-5 left-4 right-4 z-[90] mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060A14]/90 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />

            {view === "banner" ? (
              <div className="relative grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Your privacy matters
                  </p>
                  <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/55">
                    We use essential cookies to keep this website running, and optional cookies to understand traffic and improve the experience.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    onClick={() => setView("preferences")}
                    className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    Preferences
                  </button>

                  <button
                    onClick={rejectAll}
                    className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    Reject All
                  </button>

                  <button
                    onClick={acceptAll}
                    className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_24px_rgba(40,171,230,0.3)] transition hover:bg-primary/90"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="mb-5">
                  <p className="text-sm font-semibold text-white">
                    Cookie preferences
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">
                    Choose which optional cookies On Call Prime can use.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Essential cookies
                        </p>
                        <p className="mt-1 text-xs text-white/45">
                          Required for the website to work. Always active.
                        </p>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                        Always on
                      </span>
                    </div>
                  </div>

                  <CookieToggle
                    title="Analytics cookies"
                    description="Help us understand visits, pages viewed, and website performance."
                    checked={analytics}
                    onChange={() => setAnalytics(!analytics)}
                  />

                  <CookieToggle
                    title="Marketing cookies"
                    description="Help us measure campaigns and improve advertising performance."
                    checked={marketing}
                    onChange={() => setMarketing(!marketing)}
                  />
                </div>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <button
                    onClick={() => setView("banner")}
                    className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    Back
                  </button>

                  <button
                    onClick={() => saveChoice("custom")}
                    className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_24px_rgba(40,171,230,0.3)] transition hover:bg-primary/90"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CookieToggle({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-xs text-white/45">{description}</p>
        </div>

        <button
          onClick={onChange}
          className={`relative h-6 w-11 rounded-full transition ${
            checked ? "bg-primary" : "bg-white/15"
          }`}
        >
          <span
            className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
              checked ? "left-6" : "left-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}