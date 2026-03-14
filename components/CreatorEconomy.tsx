import { ArrowRight, Coins, Gem, Landmark } from "lucide-react";

export default function CreatorEconomy() {
    return (
        <section className="py-0 mb-20 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--color-accent-orange)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 relative z-10">
                    <h2 className="heading-epic mb-6 text-left leading-tight text-white">
                        Influence <span className="italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#E6C9A8", textTransform: "lowercase", fontWeight: 300 }}>into</span>{" "}
                        <span className="text-gradient-live">Income</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Our transparent reward system ensures that your effort pays off. Receive virtual gifts, convert them to Flora, and withdraw directly to your bank account.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--color-accent-purple)]/20 flex items-center justify-center glow-effect">
                                <img src="/diamond-icon.png" alt="Diamond" className="w-15 h-15 object-contain" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">1. Receive Diamonds</h4>
                                <p className="text-white/60">Fans send you spectacular animated gifts purchased with Diamonds.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--color-accent-orange)]/20 flex items-center justify-center glow-effect">
                                <img src="/flora-icon.png" alt="Flora" className="w-15 h-15 object-contain" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">2. Convert to Flora</h4>
                                <p className="text-white/60">Gifts automatically convert to Flora, your creator balance currency.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-green-500/20 text-green-400 border border-green-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(72,187,120,0.5)]">
                                <Landmark strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">3. Withdraw to Bank</h4>
                                <p className="text-white/60">Cash out your Flora directly to your linked bank account worldwide.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative">

                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-accent-orange)]/20 to-pink-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(96,165,250,0.3)] group-hover:scale-110 transition-transform">
                                <img src="/diamond-icon.png" alt="Diamonds" className="w-22 h-22 object-contain" />
                            </div>
                            <span className="font-bold text-xl">Diamonds</span>
                        </div>

                        <ArrowRight className="text-white/30 hidden md:block" size={32} />

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-accent-orange)]/20 to-pink-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,85,0,0.3)] group-hover:scale-110 transition-transform">
                                <img src="/flora-icon.png" alt="Flora" className="w-22 h-22 object-contain" />
                            </div>
                            <span className="font-bold text-xl">Flora</span>
                        </div>

                        <ArrowRight className="text-white/30 hidden md:block" size={32} />

                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.5)] group-hover:scale-110 transition-transform">
                                <Landmark size={40} className="text-white" />
                            </div>
                            <span className="font-bold text-xl">Real Cash</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
