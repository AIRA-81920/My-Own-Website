'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div
            className="min-h-screen bg-black text-white relative overflow-hidden"
            data-oid="yrim--j"
        >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20" data-oid="tsoyk2i">
                <div className="grid grid-cols-12 h-full" data-oid="al_520b">
                    {Array.from({ length: 144 }).map((_, i) => (
                        <div
                            key={i}
                            className="border border-gray-700 aspect-square"
                            data-oid="t:9ee7a"
                        ></div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <nav
                className="relative z-10 py-4 px-8 flex justify-between items-center border-b border-gray-800"
                data-oid="2zl2-4n"
            >
                <div className="flex items-center space-x-6" data-oid="mpyao8v">
                    <div className="text-lg font-bold" data-oid="yjpe1fh">
                        DEV STUDIO
                    </div>
                    <div className="hidden md:flex space-x-4 text-sm" data-oid="4.a9rta">
                        <span
                            className="px-3 py-1 bg-orange-500 text-black rounded"
                            data-oid="g81i9va"
                        >
                            首页
                        </span>
                        <span className="hover:text-orange-400 cursor-pointer" data-oid="t-6d3ri">
                            项目
                        </span>
                        <span className="hover:text-orange-400 cursor-pointer" data-oid="p70516y">
                            技能
                        </span>
                        <span className="hover:text-orange-400 cursor-pointer" data-oid="08u9qug">
                            游戏
                        </span>
                        <span className="hover:text-orange-400 cursor-pointer" data-oid="3hslc:7">
                            关于我
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-4" data-oid="zq002t5">
                    <button
                        className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-orange-400"
                        data-oid="il12y9y"
                    >
                        <span className="text-xs" data-oid="sf:7uj3">
                            ☀
                        </span>
                    </button>
                    <button
                        className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-orange-400"
                        data-oid="hjh--n5"
                    >
                        <span className="text-xs" data-oid="7epxzj:">
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
                            <div className="text-sm text-gray-400 mb-4" data-oid="usudg8s">
                                欢迎来到我的世界
                            </div>
                            <h1
                                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                                data-oid="i0ngly-"
                            >
                                Code & Craft
                                <br data-oid="o7to2al" />
                                <span className="text-orange-400" data-oid="kr2o2x5">
                                    数字工匠
                                </span>
                            </h1>
                            <p
                                className="text-xl text-gray-300 mb-8 leading-relaxed"
                                data-oid="n0425x-"
                            >
                                我是一名编程爱好者，同时也是Minecraft的忠实玩家。
                                <br data-oid="40_gje:" />
                                在代码的世界里构建逻辑，在方块的世界里创造奇迹。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="jjkdnsk">
                                <button
                                    className="px-8 py-3 bg-orange-500 text-black font-semibold rounded hover:bg-orange-400 transition-colors"
                                    data-oid="-r:_7jg"
                                >
                                    查看项目
                                </button>
                                <button
                                    className="px-8 py-3 border border-orange-500 text-orange-400 rounded hover:bg-orange-500 hover:text-black transition-colors"
                                    data-oid="sk7r83x"
                                >
                                    我的世界
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Decorative Elements */}
                        <div className="relative" data-oid="zp7jd-g">
                            {/* Orange accent blocks */}
                            <div
                                className="absolute top-0 right-0 w-24 h-24 bg-orange-500 opacity-80"
                                data-oid="cd2n4lu"
                            ></div>
                            <div
                                className="absolute top-32 right-16 w-16 h-16 bg-orange-400 opacity-60"
                                data-oid="f4xb_mp"
                            ></div>
                            <div
                                className="absolute bottom-0 left-0 w-20 h-20 bg-orange-600 opacity-70"
                                data-oid="7xzhbr."
                            ></div>

                            {/* Minecraft-style blocks */}
                            <div
                                className="grid grid-cols-8 gap-1 opacity-30 mt-16"
                                data-oid="5-po.8i"
                            >
                                {Array.from({ length: 64 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`aspect-square border border-gray-600 ${
                                            Math.random() > 0.8
                                                ? 'bg-orange-500'
                                                : Math.random() > 0.9
                                                  ? 'bg-gray-700'
                                                  : 'bg-transparent'
                                        }`}
                                        data-oid="0:d045g"
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="t2_1:fm">
                        <div
                            className="p-6 border border-gray-800 hover:border-orange-500 transition-colors"
                            data-oid="p_3b4i5"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold"
                                data-oid="0i4y325"
                            >
                                &lt;/&gt;
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="8wb-v1z">
                                编程开发
                            </h3>
                            <p className="text-gray-400" data-oid="v5897x8">
                                精通多种编程语言，热爱创造数字解决方案
                            </p>
                        </div>

                        <div
                            className="p-6 border border-gray-800 hover:border-orange-500 transition-colors"
                            data-oid="z6xqqds"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold"
                                data-oid="6:0ugwb"
                            >
                                ⬛
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="u5yc.ww">
                                Minecraft建筑
                            </h3>
                            <p className="text-gray-400" data-oid="x80cky2">
                                在方块世界中构建宏伟建筑和复杂红石机械
                            </p>
                        </div>

                        <div
                            className="p-6 border border-gray-800 hover:border-orange-500 transition-colors"
                            data-oid=":-i3_:l"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold"
                                data-oid="xa2xsh2"
                            >
                                ⚡
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="1531b.2">
                                创新思维
                            </h3>
                            <p className="text-gray-400" data-oid="z:e8gi9">
                                将编程逻辑与游戏创意完美结合
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer
                className="relative z-10 border-t border-gray-800 py-8 px-8 mt-16"
                data-oid="zp6x6w1"
            >
                <div
                    className="max-w-6xl mx-auto flex justify-between items-center"
                    data-oid="3sh-:ql"
                >
                    <div className="text-gray-400" data-oid="x702zd4">
                        © 2024 数字工匠工作室
                    </div>
                    <div className="flex space-x-4" data-oid="kpomy5x">
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer"
                            data-oid="n9br1sg"
                        >
                            GitHub
                        </span>
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer"
                            data-oid="5r:dx14"
                        >
                            Discord
                        </span>
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer"
                            data-oid="ln8nrq4"
                        >
                            联系我
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
