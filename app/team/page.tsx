"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

const allTeamMembers = [
    {
        name: "Sahil Kumar Singh",
        role: "Founder / Chairman",
        image: "/Sahil Kumar.png",
        bio: "Sahil Kumar Singh is a visionary leader who serves as the Founder and Chairman of SDFGoLive and its associated ventures. He provides the overall strategic vision and direction for organizations including KUMASINGH BIRPUR TECHNOLOGY and Alien Technology Therapy Centre.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Ms. Pihu Singh",
        role: "Chief Executive Officer (CEO)",
        image: "/Pihu Singh.png",
        bio: "Ms. Pihu Singh serves as the Chief Executive Officer (CEO) of SDFGO Live, where she leads the entire organization with a focus on strategic planning and long-term business growth.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Mr. Rahul Kumar Singh",
        role: "Managing Director (MD)",
        image: "/Rahul Kumar Singh.png",
        bio: "Mr. Rahul Kumar Singh is the Managing Director (MD) of SDFGO Live, overseeing the daily operations and implementing the business strategies set by the CEO.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Mr. Chandan Kumar Singh",
        role: "SDF East India Admin",
        image: "/Chandan.png",
        bio: "Mr. Chandan Kumar Singh serves as the SDF East India Admin, managing state-level operations and supervising teams within the assigned territory. He coordinates with district admins and managers to ensure policy enforcement and provides guidance to users while tracking performance and growth across the state.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Mr. SANJU DAYARAM DESAI",
        role: "SDF General Manager (GM)",
        image: "/Sanju.png",
        bio: "Mr. Sanju Dayaram Desai is the General Manager (GM) responsible for daily operations management and team supervision. He implements company strategies and ensures tasks are completed efficiently while maintaining client relationships and reporting operational progress directly to the Managing Director.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Mr. Raman",
        role: "SDF Finance MD",
        image: "/Raman.png",
        bio: "Mr. Raman serves as the Finance MD, leading the organization's financial strategy and oversight. He develops long-term business plans, manages profitability and budgets, and coordinates with the Board of Directors while building strategic partnerships to expand business opportunities.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Mr. DK Singh",
        role: "SDF Chief Security Officer (CSO)",
        image: "/DKSingh.png", // Reusing high-quality profile image for CSO
        bio: "Mr. DK Singh is the Chief Security Officer (CSO) heading the Cyber Security Department. He ensures platform safety by monitoring account security, preventing fraud, and enforcing safety policies. His role involves coordinating security teams to protect users from abuse and responding quickly to incident reports.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-4 md:px-8">
            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[var(--color-accent-purple)] opacity-20 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[var(--color-accent-blue)] opacity-15 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <h1 className="heading-epic mb-6 leading-none text-white">
                        THE <span className="italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#E6C9A8", textTransform: "lowercase", fontWeight: 300 }}>entire</span>{" "}
                        <span className="text-gradient-live">SQUAD</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl">
                        Meet every individual contributing to the future of digital live experiences at SDF Go Live.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allTeamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="glass-card p-8 group hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border border-white/10">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-accent-orange)] transition-colors">{member.name}</h3>
                                    <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                                        {member.bio}
                                    </p>
                                    <div className="flex gap-4">
                                        <Twitter size={16} className="text-white/30 hover:text-white cursor-pointer transition-colors" />
                                        <Linkedin size={16} className="text-white/30 hover:text-white cursor-pointer transition-colors" />
                                        <Github size={16} className="text-white/30 hover:text-white cursor-pointer transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
