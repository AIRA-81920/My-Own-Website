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
            data-oid="1e45t7:"
        >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20" data-oid="mtxq0rf">
                <div className="grid grid-cols-12 h-full" data-oid="k_94ui8">
                    {Array.from({ length: 144 }).map((_, i) => (
                        <div
                            key={i}
                            className="border border-gray-700 aspect-square"
                            data-oid="j.miw54"
                        ></div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <nav
                className="relative z-10 py-4 px-8 flex justify-between items-center border-b border-gray-800"
                data-oid="xhfq1_b"
            >
                <div className="flex items-center space-x-6" data-oid="52iu6w4">
                    <div className="text-lg font-bold" data-oid="kjuo1-6">
                        AIRA_81920
                    </div>
                    <div className="hidden md:flex space-x-4 text-sm" data-oid="wniqgk-">
                        <span
                            className="px-3 py-1 bg-orange-500 text-black rounded"
                            data-oid="8-h3r5z"
                        >
                            首页
                        </span>
                        <a
                            href="https://github.com/AIRA-81920?tab=repositories"
                            target="_blank"
                            className="hover:text-orange-400 cursor-pointer"
                            data-oid="px.c5rr"
                        >
                            项目
                        </a>
                        <a
                            href="/skills"
                            target="_blank"
                            className="hover:text-orange-400 cursor-pointer"
                            data-oid="hd5krrg"
                        >
                            技能
                        </a>
                        <a
                            href="/games"
                            target="_blank"
                            className="hover:text-orange-400 cursor-pointer"
                            data-oid="tjnp0-b"
                        >
                            游戏
                        </a>
                        <a
                            href="https://github.com/AIRA-81920"
                            target="_blank"
                            className="hover:text-orange-400 cursor-pointer"
                            data-oid="y93pb7n"
                        >
                            关于我
                        </a>
                    </div>
                </div>
                <div className="flex items-center space-x-4" data-oid="js7tpqb">
                    <button
                        className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-orange-400"
                        data-oid="i.ahs-v"
                    >
                        <span className="text-xs" data-oid="i16thqw">
                            ☀
                        </span>
                    </button>
                    <button
                        className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-orange-400"
                        data-oid="w7pn8hp"
                    >
                        <span className="text-xs" data-oid="9wwzm.a">
                            ≡
                        </span>
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 px-8 py-16" data-oid="k:52ih:">
                <div className="max-w-6xl mx-auto" data-oid="q55b8sm">
                    {/* Skills Section */}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        data-oid="zl9a09e"
                    >
                        {/* Left Content */}
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="slunglx"
                        >
                            <div className="text-sm text-gray-400 mb-4" data-oid="x59nuz.">
                                欢迎来到我的世界
                            </div>
                            <h1
                                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                                data-oid="uemxixq"
                            >
                                Code & Craft
                                <br data-oid="da9kh9a" />
                                <span className="text-orange-400" data-oid="4yc:i4l">
                                    数字工匠
                                </span>
                            </h1>
                            <p
                                className="text-xl text-gray-300 mb-8 leading-relaxed"
                                data-oid="rgmz:cz"
                            >
                                我是一名编程爱好者，同时也是Minecraft的忠实玩家。
                                <br data-oid="xuuv-f7" />
                                在代码的世界里构建逻辑，在方块的世界里创造奇迹。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="f1to9wb">
                                <button
                                    className="px-8 py-3 bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-colors rounded-[4px]"
                                    data-oid="p8aczuq"
                                    onClick={() =>
                                        window.open(
                                            'https://github.com/AIRA-81920?tab=projects',
                                            '_blank',
                                            'noopener,noreferrer',
                                        )
                                    }
                                >
                                    查看项目
                                </button>
                                <button
                                    className="px-8 py-3 border border-orange-500 text-orange-400 rounded hover:bg-orange-500 hover:text-black transition-colors"
                                    data-oid=".nnehwr"
                                    onClick={() =>
                                        (window.location.href = 'https://www.minecraft.net/')
                                    }
                                >
                                    我的世界
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Decorative Elements */}
                        <div className="relative" data-oid="_38p-e4">
                            {/* Orange accent blocks */}
                            <div
                                className="absolute right-0 w-24 h-24 bg-orange-500 opacity-80 -left-[146px] top-[31px]"
                                data-oid="0nwlmc8"
                            ></div>
                            <div
                                className="absolute top-32 right-16 w-16 h-16 bg-orange-400 opacity-60"
                                data-oid=":pa08bl"
                            ></div>
                            <div
                                className="absolute bottom-0 left-0 w-20 h-20 bg-orange-600 opacity-70"
                                data-oid="ve64_gp"
                            ></div>

                            {/* Minecraft-style blocks */}
                            <div
                                className="grid grid-cols-8 gap-1 opacity-30 mt-16"
                                data-oid="5-oolhj"
                            >
                                {Array.from({ length: 64 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`aspect-square border border-gray-600 ${Math.random() > 0.8 ? 'bg-orange-500' : Math.random() > 0.9 ? 'bg-gray-700' : 'bg-transparent'}`}
                                        data-oid="pqov1_5"
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="6hy2vwc">
                        <div
                            className="p-6 border border-gray-800 hover:border-orange-500 transition-colors"
                            data-oid="q3a2h0c"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold"
                                data-oid="v2:b586"
                            >
                                &lt;/&gt;
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="1..jp8w">
                                编程开发
                            </h3>
                            <p className="text-gray-400" data-oid="lk4eiu3">
                                精通多种编程语言，热爱创造数字解决方案
                            </p>
                        </div>

                        <div
                            className="p-6 border border-gray-800 hover:border-orange-500 transition-colors"
                            data-oid="2:qzegw"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold"
                                data-oid="j7p4_k8"
                            >
                                ⬛
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="3__scjf">
                                Minecraft建筑
                            </h3>
                            <p className="text-gray-400" data-oid="4q3v5rj">
                                在方块世界中构建宏伟建筑和复杂红石机械
                            </p>
                        </div>

                        <div
                            className="p-6 border border-gray-800 hover:border-orange-500 transition-colors"
                            data-oid="5:3-6ui"
                        >
                            <div
                                className="w-12 h-12 bg-orange-500 mb-4 flex items-center justify-center text-black font-bold"
                                data-oid="nshfbc9"
                            >
                                ⚡
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="hl7n:ok">
                                创新思维
                            </h3>
                            <p className="text-gray-400" data-oid="9eu9xt:">
                                将编程逻辑与游戏创意完美结合
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer
                className="relative z-10 border-t border-gray-800 py-8 px-8 mt-16"
                data-oid="l0_d9g:"
            >
                <div
                    className="max-w-6xl mx-auto flex justify-between items-center"
                    data-oid="t_d-tc8"
                >
                    <div className="text-gray-400" data-oid="il0x8kf">
                        © 2024 数字工匠工作室
                    </div>
                    <div className="flex space-x-4" data-oid="2fcvcgz">
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer"
                            data-oid="n5:7lkn"
                        >
                            GitHub
                        </span>
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer"
                            data-oid="ji6ko4b"
                        >
                            Discord
                        </span>
                        <span
                            className="text-gray-400 hover:text-orange-400 cursor-pointer"
                            data-oid="vx8:y6l"
                        >
                            联系我
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
