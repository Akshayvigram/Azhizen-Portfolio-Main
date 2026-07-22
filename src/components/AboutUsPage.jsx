import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUsPage = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-12 w-full flex flex-col overflow-hidden" style={{ fontFamily: "Poppins, sans-serif" }}>
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between items-center mt-12 gap-12 lg:gap-8">

                {/* Left Text & Stats */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 max-w-2xl"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-3xl lg:text-4xl font-semibold capitalize text-black leading-tight mb-6"
                    >
                        Where innovation meets excellence and{" "}
                        <span className="text-blue-500" style={{ color: "#1877F2" }}>ideas evolve into impactful solutions.</span>
                    </motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className="text-neutral-600 text-lg leading-relaxed mb-12 capitalize"
                    >
                        Azhizen drives innovation through advanced R&amp;D, precision manufacturing, and smart product development across biomedical, AI/ML, edutech, and green tech—transforming ideas into scalable, real-world solutions.
                    </motion.p>

                    {/* Stats */}
                    <motion.div 
                        variants={containerVariants}
                        className="flex flex-wrap gap-12"
                    >
                        <motion.div variants={itemVariants}>
                            <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>15+</div>
                            <div className="text-neutral-400 text-xl font-semibold capitalize">Team Members</div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>10+</div>
                            <div className="text-neutral-400 text-xl font-semibold capitalize">Happy Clients</div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>99%</div>
                            <div className="text-neutral-400 text-xl font-semibold capitalize">Client Satisfaction</div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full lg:max-w-[500px] xl:max-w-[600px] flex justify-end"
                >
                    <img
                        src="/image 698.webp"
                        alt="Team collaboration"
                        className="w-full h-[300px] sm:h-[340px] lg:h-[380px] xl:h-[410px] object-cover rounded-xl shadow-lg"
                    />
                </motion.div>
            </div>

            <div className="h-px bg-neutral-200 max-w-7xl mx-auto w-full mt-24 mb-24"></div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">

                {/* Left Image with overlay */}
                <div className="flex-1 relative w-full lg:max-w-lg xl:max-w-xl">
                    <motion.img
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        src="/image.webp"
                        alt="CEO working"
                        className="w-full h-[400px] lg:h-[480px] object-cover rounded-2xl shadow-lg"
                    />
                    {/* Overlay Box */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
                        className="absolute -right-6 sm:-right-10 lg:-right-16 top-[25%] lg:top-[30%] bg-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 z-10 w-max"
                    >
                        <div className="text-[15px] font-bold text-gray-800">Mr. Bharath R</div>
                        <div className="text-blue-500 text-[13px] font-semibold mt-1" style={{ color: "#1877F2" }}>CEO - Azhizen</div>
                    </motion.div>
                </div>

                {/* Right Text */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex-1 mt-12 lg:mt-0 pl-0 lg:pl-12"
                >
                    <motion.h3 variants={itemVariants} className="text-blue-500 text-base font-bold uppercase tracking-wider mb-3" style={{ color: "#1877F2" }}>Our Mission</motion.h3>
                    <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                        Solutions that stick with you <span className="text-blue-500" style={{ color: "#1877F2" }}>always</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-8">
                        At Azhizen, we transform bold ideas into groundbreaking realities with creativity, integrity, and a passion for quality. We exceed expectations, delivering innovative biomedical, engineering, and tech solutions that shape a smarter, sustainable future—one project at a time.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Link
                            to="/career"
                            className="inline-block text-white font-semibold py-3 px-8 rounded-full transition-all hover:brightness-110"
                            style={{ background: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)" }}
                        >
                            Join Our Team
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUsPage;