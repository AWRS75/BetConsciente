// Support Screen
const { useNavigate } = ReactRouterDOM;
const { Header, BottomNav } = window;

window.SupportScreen = () => {
    const navigate = useNavigate();
    return (
        <div class="bg-background text-on-surface min-h-screen">
            <Header showProfile={true} />
            <main class="px-6 pt-6 pb-32">
                <section class="mb-8">
                    <div class="bg-tertiary-fixed text-on-tertiary-fixed p-5 rounded-xl shadow-sm flex items-center justify-between">
                        <div class="flex flex-col">
                            <span class="text-[10px] uppercase font-bold opacity-80">Apoio Emocional 24h</span>
                            <h2 class="text-lg font-bold">Precisa de ajuda agora?</h2>
                        </div>
                        <button class="bg-tertiary-container text-on-tertiary-container flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold active:scale-95 transition-transform">
                            <span class="material-symbols-outlined text-sm">emergency</span> Ligar 188
                        </button>
                    </div>
                </section>

                <section class="mb-8 max-w-2xl mx-auto">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-bold">Rede de Apoio</h3>
                        <button class="text-primary text-sm font-bold flex items-center gap-1">
                            <span class="material-symbols-outlined text-[18px]">add_circle</span> Adicionar
                        </button>
                    </div>
                    <div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center justify-between shadow-sm">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-primary-container/10 text-primary rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined">person</span>
                            </div>
                            <div>
                                <p class="font-bold">Maria Oliveira</p>
                                <p class="text-xs text-outline">Esposa • Contato de Emergência</p>
                            </div>
                        </div>
                        <button class="bg-primary text-on-primary px-4 py-2 rounded-lg flex items-center gap-1 text-xs font-bold active:scale-95 transition-transform">
                            <span class="material-symbols-outlined text-[20px]">call</span> Ligar
                        </button>
                    </div>
                </section>

                <section class="mb-8 max-w-2xl mx-auto">
                    <div class="mb-4">
                        <h3 class="text-lg font-bold">Serviços do SUS (RAPS)</h3>
                        <p class="text-xs text-outline font-medium">Rede de Atenção Psicossocial próxima a você</p>
                    </div>
                    <div class="relative mb-6">
                        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                        <input class="w-full pl-12 pr-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary text-sm" placeholder="Buscar CAPS ou UBS..." type="text" />
                    </div>
                    <div class="w-full h-48 rounded-xl overflow-hidden mb-6 border border-outline-variant relative">
                        <img class="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXu-VwAEwyIOecbnunohVNTuT8YNyQ2gaFMGeyWFQDZhaYjmmFg6tAKAOWrgjpuuJFGVdQChuXChqwxCQDp7Dz8MN5Rr7zYAF6ntso8iF3XIZLCMgIFRYXrPdncgZXi2c-opnWmqNysA4PMt6DQ62ga2nC6EGd6T2T8pdef5VQymqW9v1UlS5eAxwbB1p_yVJjZBmhazD2aeiHDnRcBg_cpp0oMMYW2klJLWYLxalWOHxVRX4Q2k2scXgTjE7yrUBZm2qcYNESH70" />
                        <div class="absolute inset-0 bg-black/5 flex items-center justify-center">
                            <div class="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm flex items-center gap-1">
                                <span class="material-symbols-outlined text-primary fill-icon">location_on</span>
                                <span class="text-xs font-bold">3 Unidades Encontradas</span>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4">
                        {[
                            { tag: 'CAPS III', name: 'CAPS AD II - Dr. José Glauco Bezerra', addr: 'R. Giselda Cysne, s/n - Cidade 2000, Fortaleza/CE, 60190-450', status: 'Aberto agora', time: 'Até as 17:00' },
                            { tag: 'DECON CE', name: 'DECON CE Fortaleza (Sede)', addr: 'Rua Maria Alice Ferraz, 120 - Luciano Cavalcante, Fortaleza/CE, 60170-130', status: 'Aberto 24h', time: '' }
                        ].map((caps, i) => (
                            <div key={i} class="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <span class="text-[10px] font-bold bg-secondary-container/10 text-secondary px-2 py-0.5 rounded uppercase">{caps.tag}</span>
                                        <h4 class="font-bold text-sm mt-1">{caps.name}</h4>
                                        <p class="text-xs text-outline flex items-center gap-1 mt-1">
                                            <span class="material-symbols-outlined text-[16px]">location_on</span> {caps.addr}
                                        </p>
                                    </div>
                                    <div class="text-right">
                                        <span class="text-primary text-xs font-bold block">{caps.status}</span>
                                        <span class="text-outline text-[10px] block">{caps.time}</span>
                                    </div>
                                                                    <div class="mt-3 flex gap-2">
                                    <a href={`https://www.google.com/maps/search/${encodeURIComponent(caps.addr.split(' •')[0] + ', ' + caps.name)}`} target="_blank" rel="noopener noreferrer" class="flex-1 bg-primary text-on-primary text-center text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 active:scale-95 transition-transform">
                                        <span class="material-symbols-outlined text-[18px]">near_me</span> Como Chegar
                                    </a>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <BottomNav active="support" />
        </div>
    );
};
