import { motion } from "framer-motion";
import { Play, Pause, Volume2, User, Bot } from "lucide-react";
import { useState } from "react";

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 px-6 bg-jet-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Don't Believe It? <span className="text-primary italic">Listen</span> to Discret AI in Action.
                    </h2>
                    <p className="text-creamy-white/60 text-lg">
                        A Real Estate inquiry in Roman Urdu.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-[3rem] border border-white/10 relative">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Volume2 size={120} />
                    </div>

                    <div className="space-y-8 relative">
                        {/* User Inquiry */}
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0">
                                <User size={20} />
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                                <p className="text-sm font-medium text-white/40 mb-1 uppercase tracking-wider">Customer (Audio)</p>
                                <p className="text-lg">"Salam, Bahria Town walay project ki payment plan send karden."</p>
                            </div>
                        </div>

                        {/* Audio Player UI */}
                        <div className="bg-jet-black/50 border border-white/5 p-6 rounded-3xl flex items-center gap-6">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-primary/40"
                            >
                                {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
                            </button>
                            <div className="flex-1 space-y-2">
                                <div className="flex justify-between text-xs text-white/40">
                                    <span>{isPlaying ? "0:04" : "0:00"}</span>
                                    <span>0:15</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: isPlaying ? "30%" : "0%" }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                                <div className="flex gap-1 h-6 items-center">
                                    {[...Array(30)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: isPlaying ? [4, Math.random() * 16 + 4, 4] : 4 }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                                            className="w-1 bg-primary/40 rounded-full"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* AI Reply */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-4 items-start justify-end"
                        >
                            <div className="bg-primary/20 border border-primary/20 p-4 rounded-2xl rounded-tr-none text-right">
                                <p className="text-sm font-medium text-primary mb-1 uppercase tracking-wider">Discret AI (Reply)</p>
                                <p className="text-lg">"Walaikum Assalam! Ji zaroor. Bahria Town Phase 8 ke liye 3 saal ka plan attach kar raha hoon. Kya aap site visit karna chahengay?"</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <Bot size={20} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudioDemo;
