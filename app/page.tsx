'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrolled, setIsScrolled] = useState(false);
    const skillsRef = useRef<HTMLDivElement>(null);
    const [skillsVisible, setSkillsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        
        // Mouse tracking for parallax effects
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        // Scroll tracking
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Check if skills section is visible
            if (skillsRef.current) {
                const rect = skillsRef.current.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                setSkillsVisible(isInView);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
=======

    return (
        <div
            className="min-h-screen bg-black text-white relative overflow-hidden"
            data-oid="yrim--j"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20" data-oid="tsoyk2i">
                <div className="grid grid-cols-12 h-full" data-oid="al_520b">
                    {Array.from({ length: 144 }).map((_, i) => (
                        <div
                            key={i}
                            className="border border-gray-700 aspect-square transition-all duration-1000 hover:bg-orange-500/10 hover:border-orange-500/50"
                            style={{
                                animationDelay: `${i * 0.01}s`,
                                transform: `translate(${mousePosition.x * (i % 2 === 0 ? 2 : -2)}px, ${mousePosition.y * (i % 3 === 0 ? 1 : -1)}px)`,
                                transition: 'transform 0.3s ease-out, background-color 0.3s ease, border-color 0.3s ease'
                            }}
                            data-oid="t:9ee7a"
                        ></div>
                    ))}
                </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                            transition: 'transform 0.5s ease-out'
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav
                className={`relative z-10 py-4 px-8 flex justify-between items-center border-b border-gray-800 transition-all duration-500 ${
                    isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
                }`}
                data-oid="2zl2-4n"
            >
                <div className="flex items-center space-x-6" data-oid="mpyao8v">
                    <div 
                        className="text-lg font-bold transform hover:scale-110 transition-all duration-300 cursor-pointer hover:text-orange-400" 
                        data-oid="yjpe1fh"
                    >
                        DEV STUDIO
                    </div>
                    <div className="hidden md:flex space-x-4 text-sm" data-oid="4.a9rta">
                        <span
                            className="px-3 py-1 bg-orange-500 text-black rounded transform hover:scale-105 hover:bg-orange-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-orange-500/25"
                            data-oid="g81i9va"
                        >
                            首页
                        </span>
                        <span className="hover:text-orange-400 cursor-pointer transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group" data-oid="t-6d3ri">
                            项目
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <span className="hover:text-orange-400 cursor-pointer transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group" data-oid="p70516y">
                            技能
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <span className="hover:text-orange-400 cursor-pointer transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group" data-oid="08u9qug">
                            游戏
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <span className="hover:text-orange-400 cursor-pointer transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group" data-oid="3hslc:7">
                            关于我
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-4" data-oid="zq002t5">
                    <button
                        className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-orange-400 transform hover:scale-110 hover:rotate-180 transition-all duration-500 hover:bg-orange-400/10"
                        data-oid="il12y9y"
                    >
                        <span className="text-xs transition-all duration-300" data-oid="sf:7uj3">
                            ☀
                        </span>
                    </button>
                    <button
                        className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-orange-400 transform hover:scale-110 transition-all duration-300 hover:bg-orange-400/10 group"
                        data-oid="hjh--n5"
                    >
                        <span className="text-xs group-hover:rotate-90 transition-transform duration-300" data-oid="7epxzj:">
                            ≡
                        </span>
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 px-8 py-16" data-oid="_v3mfak">
                <div className="max-w-6xl mx-auto" data-oid="erk6x2o">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        data-oid="e6ys4t9"
                    >
                        {/* Left Content */}
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="mm3sa8p"
                        >
                            <div 
                                className={`text-sm text-gray-400 mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} 
                                data-oid="usudg8s"
                            >
                                欢迎来到我的世界
                            </div>
                            <h1
                                className={`text-5xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                data-oid="i0ngly-"
                            >
                                <span className="inline-block hover:scale-105 transition-transform duration-300">Code</span>{' '}
                                <span className="inline-block hover:scale-105 transition-transform duration-300">&</span>{' '}
                                <span className="inline-block hover:scale-105 transition-transform duration-300">Craft</span>
                                <br data-oid="o7to2al" />
                                <span 
                                    className="text-orange-400 inline-block hover:scale-110 transition-all duration-300 hover:text-orange-300 animate-pulse" 
                                    data-oid="kr2o2x5"
                                >
                                    数字工匠
                                </span>
                            </h1>
                            <p
                                className={`text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                data-oid="n0425x-"
                            >
                                我是一名编程爱好者，同时也是Minecraft的忠实玩家。
                                <br data-oid="40_gje:" />
                                在代码的世界里构建逻辑，在方块的世界里创造奇迹。
                            </p>
                            <div 
                                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                                data-oid="jjkdnsk"
                            >
                                <button
                                    className="px-8 py-3 bg-orange-500 text-black font-semibold rounded hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
                                    data-oid="-r:_7jg"
                                >
                                    查看项目
                                </button>
                                <button
                                    className="px-8 py-3 border border-orange-500 text-orange-400 rounded hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 group"
                                    data-oid="sk7r83x"
                                >
                                    <span className="group-hover:animate-bounce inline-block">我的世界</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Decorative Elements */}
                        <div className="relative" data-oid="zp7jd-g">
                            {/* Animated Orange accent blocks */}
                            <div
                                className={`absolute top-0 right-0 w-24 h-24 bg-orange-500 opacity-80 transition-all duration-1000 delay-300 transform hover:scale-110 hover:rotate-12 hover:opacity-100 ${isVisible ? 'translate-x-0 rotate-0' : 'translate-x-10 rotate-45'}`}
                                style={{
                                    transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px) rotate(${mousePosition.x * 10}deg)`,
                                    transition: 'transform 0.3s ease-out'
                                }}
                                data-oid="cd2n4lu"
                            ></div>
                            <div
                                className={`absolute top-32 right-16 w-16 h-16 bg-orange-400 opacity-60 transition-all duration-1000 delay-500 transform hover:scale-110 hover:rotate-45 hover:opacity-100 ${isVisible ? 'translate-x-0 rotate-0' : 'translate-x-20 -rotate-45'}`}
                                style={{
                                    transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * 3}px) rotate(${mousePosition.y * -15}deg)`,
                                    transition: 'transform 0.3s ease-out'
                                }}
                                data-oid="f4xb_mp"
                            ></div>
                            <div
                                className={`absolute bottom-0 left-0 w-20 h-20 bg-orange-600 opacity-70 transition-all duration-1000 delay-700 transform hover:scale-110 hover:-rotate-12 hover:opacity-100 ${isVisible ? 'translate-x-0 rotate-0' : '-translate-x-10 rotate-90'}`}
                                style={{
                                    transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * -4}px) rotate(${mousePosition.x * -8}deg)`,
                                    transition: 'transform 0.3s ease-out'
                                }}
                                data-oid="7xzhbr."
                            ></div>

                            {/* Animated Minecraft-style blocks */}
                            <div
                                className={`grid grid-cols-8 gap-1 opacity-30 mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-30' : 'translate-y-10 opacity-0'}`}
                                data-oid="5-po.8i"
                            >
                                {Array.from({ length: 64 }).map((_, i) => {
                                    const isOrange = Math.random() > 0.8;
                                    const isGray = Math.random() > 0.9;
                                    return (
                                        <div
                                            key={i}
                                            className={`aspect-square border border-gray-600 transition-all duration-500 hover:scale-110 hover:border-orange-400 cursor-pointer ${
                                                isOrange
                                                    ? 'bg-orange-500 hover:bg-orange-400'
                                                    : isGray
                                                      ? 'bg-gray-700 hover:bg-gray-600'
                                                      : 'bg-transparent hover:bg-orange-500/20'
                                            }`}
                                            style={{
                                                animationDelay: `${i * 0.05}s`,
                                                transform: `translate(${mousePosition.x * (i % 2 === 0 ? 1 : -1)}px, ${mousePosition.y * (i % 3 === 0 ? 1 : -1)}px)`,
                                                transition: 'transform 0.2s ease-out, background-color 0.3s ease, border-color 0.3s ease, scale 0.3s ease'
                                            }}
                                            data-oid="0:d045g"
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div 
                        ref={skillsRef}
                        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8" 
                        data-oid="t2_1:fm"
                    >
                        <div
                            className={`p-6 border border-gray-800 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 group ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: '0ms' }}
                            data-oid="p_3b4i5"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                                data-oid="0i4y325"
                            >
                                <span className="group-hover:animate-pulse">&lt;/&gt;</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300" data-oid="8wb-v1z">
                                编程开发
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300" data-oid="v5897x8">
                                精通多种编程语言，热爱创造数字解决方案
                            </p>
                        </div>

                        <div
                            className={`p-6 border border-gray-800 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 group ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: '200ms' }}
                            data-oid="z6xqqds"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                                data-oid="6:0ugwb"
                            >
                                <span className="group-hover:animate-bounce">⬛</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300" data-oid="u5yc.ww">
                                Minecraft建筑
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300" data-oid="x80cky2">
                                在方块世界中构建宏伟建筑和复杂红石机械
                            </p>
                        </div>

                        <div
                            className={`p-6 border border-gray-800 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 group ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: '400ms' }}
                            data-oid=":-i3_:l"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                                data-oid="xa2xsh2"
                            >
                                <span className="group-hover:animate-spin">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300" data-oid="1531b.2">
                                创新思维
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300" data-oid="z:e8gi9">
                                将编程逻辑与游戏创意完美结合
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer
                className="relative z-10 border-t border-gray-800 py-8 px-8 mt-16 hover:border-orange-500/50 transition-colors duration-500"
                data-oid="zp6x6w1"
            >
                <div
                    className="max-w-6xl mx-auto flex justify-between items-center"
                    data-oid="3sh-:ql"
                >
                    <div className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer" data-oid="x702zd4">
                        © 2024 数字工匠工作室
                    </div>
                    <div className="flex space-x-4" data-oid="kpomy5x">
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group"
                            data-oid="n9br1sg"
                        >
                            GitHub
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group"
                            data-oid="5r:dx14"
                        >
                            Discord
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group"
                            data-oid="ln8nrq4"
                        >
                            联系我
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
