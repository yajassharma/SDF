import { Smartphone, Download } from "lucide-react";

export default function DownloadSection() {
    return (
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="w-full md:w-1/2 relative flex justify-center perspective-[1000px]">
                    <div className="relative w-64 h-[500px] z-20 group">
                        {/* Phone Mockup Placeholder */}
                        <div className="absolute inset-0 bg-[#0a0a0a] border-[8px] border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(128,0,0,0.5)] overflow-hidden transform rotate-y-[-15deg] group-hover:rotate-y-[0deg] transition-transform duration-700">
                            {/* Screen Content */}
                            <div className="w-full h-full relative p-4 flex flex-col bg-gradient-to-b from-[#1a0505] to-black">
                                <div className="h-6 mx-auto w-1/3 bg-black rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-30" />

                                {/* Fake App header */}
                                <div className="flex justify-between items-center mt-6 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-blue)]" />
                                    <div className="flex gap-2">
                                        <div className="w-4 h-4 rounded-full bg-white/20" />
                                        <div className="w-4 h-4 rounded-full bg-white/20" />
                                    </div>
                                </div>

                                {/* Fake App Content Streams */}
                                <div className="flex-1 rounded-2xl bg-[#1a0505] border border-white/10 mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-purple)]/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                                        <div className="w-24 h-3 bg-white/80 rounded-full" />
                                        <div className="w-16 h-2 bg-white/50 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-4">
                                    <div className="w-1/2 h-24 rounded-2xl bg-[#2a0808] border border-white/10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>
                                    <div className="w-1/2 h-24 rounded-2xl bg-[#2a0808] border border-white/10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>
                                </div>

                                {/* Fake App footer */}
                                <div className="flex justify-between items-center px-2 mt-auto pb-2">
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                    <div className="w-12 h-12 -mt-6 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-orange)] shadow-[0_0_15px_rgba(255,51,51,0.6)] border-2 border-white flex items-center justify-center">
                                        <div className="w-4 h-4 bg-white rounded-sm" />
                                    </div>
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Glow Effects */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-accent-blue)]/20 blur-[100px] rounded-full z-10" />
                </div>
                <div className="w-full md:w-1/2 relative">
                    <h2 className="heading-epic mb-6 text-left leading-tight text-white">
                        READY <span className="italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#E6C9A8", textTransform: "lowercase", fontWeight: 300 }}>to</span>{" "}
                        <span className="text-gradient-live">GO LIVE?</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-10 max-w-lg">
                        Join millions of users worldwide. Experience the next generation of social streaming, gifting, and community building all in one app.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-6 rounded-2xl hover:bg-gray-200 transition-colors">
                            <div className="flex-1 text-left">
                                <div className="text-[10px] font-bold opacity-60">GET IT ON</div>
                                <div className="text-lg leading-none">Google Play</div>
                            </div>
                            <Download size={24} />
                        </button>

                        <button className="flex items-center justify-center gap-3 bg-[var(--color-primary)] border border-white/20 text-white font-bold py-4 px-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="flex-1 text-left">
                                <div className="text-[10px] font-bold opacity-60">Download on the</div>
                                <div className="text-lg leading-none">App Store</div>
                            </div>
                            <Smartphone size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
