import { motion } from "framer-motion";
import { User, Bot, TrendingDown, TrendingUp } from "lucide-react";

const EconomicsSection = () => {
    return (
        <section id="economics" className="py-24 px-6 bg-jet-black-light relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        The Cost of a <span className="text-red-500">Human</span> vs. The Cost of <span className="text-primary italic">Discret AI</span>.
                    </h2>
                    <p className="text-creamy-white/60 text-lg">
                        Scale your revenue while slashing overhead costs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Human Employee */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-[3rem] border border-white/5 bg-white/[0.02]"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                                <User size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Human Employee</h3>
                                <p className="text-red-500/60 font-medium">Expensive & Limited</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <span className="text-creamy-white/60">Salary</span>
                                <span className="text-xl font-bold">50,000+ PKR</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500/40 w-[80%]" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="glass p-4 rounded-2xl border border-white/5">
                                    <p className="text-xs text-white/40 uppercase mb-1">Training Time</p>
                                    <p className="font-bold">2 Months</p>
                                </div>
                                <div className="glass p-4 rounded-2xl border border-white/5">
                                    <p className="text-xs text-white/40 uppercase mb-1">Availability</p>
                                    <p className="font-bold">8 Hours/Day</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-red-400 mt-4">
                                <TrendingDown size={16} />
                                <span className="text-sm">High Management Overhead</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Discret AI */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-[3rem] border border-primary/30 bg-primary/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Bot size={160} />
                        </div>

                        <div className="relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Discret AI Agent</h3>
                                    <p className="text-primary font-medium">Unlimited Scale</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <span className="text-creamy-white/60">Subscription</span>
                                    <span className="text-3xl font-black text-primary italic">20,000 PKR</span>
                                </div>
                                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "30%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="glass p-4 rounded-2xl border border-white/10 bg-white/5">
                                        <p className="text-xs text-white/40 uppercase mb-1 font-bold">Training Time</p>
                                        <p className="font-bold text-primary">Instant</p>
                                    </div>
                                    <div className="glass p-4 rounded-2xl border border-white/10 bg-white/5">
                                        <p className="text-xs text-white/40 uppercase mb-1 font-bold">Availability</p>
                                        <p className="font-bold text-primary italic">24/7/365</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-emerald-400 mt-4">
                                    <TrendingUp size={16} />
                                    <span className="text-sm">0% Commission | No Sick Days</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EconomicsSection;
