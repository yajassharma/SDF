"use client";

import { Mic, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function PartyRoom() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-8xl mx-auto relative z-20">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent-blue)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

                <div className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]">
                    <motion.div
                        initial={{ y: 0, rotateY: -10, rotateX: 5 }}
                        animate={{
                            y: [0, -20, 0],
                            rotateY: [-10, -5, -10],
                            rotateX: [5, 8, 5]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full max-w-[340px] aspect-[9/19.5] z-20"
                    >
                        {/* Realistic Phone Frame */}
                        <div className="absolute inset-0 rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#050505] shadow-[20px_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                            {/* Bezel Detail */}
                            <div className="absolute inset-0 border-[2px] border-white/5 rounded-[2.5rem]" />

                            {/* Screen Content */}
                            <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden">
                                <video
                                    src="/party-room.mov"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Glass Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />

                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                        </div>

                        {/* Side Buttons */}
                        <div className="absolute top-24 -left-2 w-1.5 h-12 bg-[#222] rounded-l-md" />
                        <div className="absolute top-40 -left-2 w-1.5 h-16 bg-[#222] rounded-l-md" />
                        <div className="absolute top-64 -left-2 w-1.5 h-16 bg-[#222] rounded-l-md" />
                        <div className="absolute top-32 -right-2 w-1.5 h-20 bg-[#222] rounded-r-md" />
                    </motion.div>

                    {/* Shadow underneath */}
                    <motion.div
                        animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.2, 0.3] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-48 h-8 bg-black/80 blur-xl rounded-full z-10"
                    />
                </div>
                <div className="w-full lg:w-1/2 relative z-10">
                    <h2 className="heading-epic mb-6 text-left">
                        <span className="italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#ff0e0eff", fontWeight: 500 }}>Voice</span> Parties
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Build your community with multi-speaker voice rooms. Invite up to 8 guests on stage to chat, debate, sing, or just hang out with your most loyal fans in real-time.
                    </p>
                    <ul className="space-y-4 text-lg text-white/80">
                        <li className="flex items-center gap-3"><span className="text-[var(--color-accent-blue)]">✓</span> Real-time low-latency audio</li>
                        <li className="flex items-center gap-3"><span className="text-[var(--color-accent-blue)]">✓</span> Seat management and moderation</li>
                        <li className="flex items-center gap-3"><span className="text-[var(--color-accent-blue)]">✓</span> Virtual gifting available while broadcasting</li>
                        <li className="flex items-center gap-3"><span className="text-[var(--color-accent-blue)]">✓</span> Public or private VIP room settings</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
