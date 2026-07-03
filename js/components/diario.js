// Diary Screen
const { useNavigate } = ReactRouterDOM;
const { Header, BottomNav } = window;

window.DiaryScreen = () => {
    const navigate = useNavigate();
    return (
        <div class="bg-background text-on-background min-h-screen">
            <Header showProfile={true} />
            <main class="px-6 py-8 max-w-4xl mx-auto space-y-8 pb-32">
                <section class="space-y-2">
                    <h2 class="text-2xl font-bold text-on-background">Meu Diário</h2>
                    <p class="text-sm text-outline">Como você está se sentindo hoje? Registrar é o primeiro passo.</p>
                </section>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="md:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-4">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-on-surface">Agosto 2024</h3>
                            <span class="material-symbols-outlined text-primary">calendar_month</span>
                        </div>
                        <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-outline font-bold">
                            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(d => <div key={d}>{d}</div>)}
                        </div>
                        <div class="grid grid-cols-7 gap-1">
                            {[...Array(31)].map((_, i) => (
                                <div key={i} class={`aspect-square flex items-center justify-center text-xs rounded-full ${i === 0 ? 'bg-primary-container text-on-primary-container font-bold' : i === 1 ? 'border border-primary text-primary' : ''}`}>
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                        <div class="pt-4 border-t border-outline-variant">
                            <p class="text-xs text-outline font-medium">Sequência: <span class="text-tertiary font-bold">12 dias</span></p>
                        </div>
                    </div>

                    <div class="md:col-span-2 bg-white border border-outline-variant rounded-xl p-6 shadow-sm space-y-6">
                        <div class="space-y-3">
                            <label class="text-xs font-bold text-on-surface uppercase">Humor predominante</label>
                            <div class="flex justify-between gap-2 overflow-x-auto scroll-hide pb-2">
                                {['😞', '😟', '😐', '🙂', '🤩'].map((emoji, i) => (
                                    <button key={i} class={`flex-1 min-w-[60px] flex flex-col items-center p-3 rounded-xl transition-all active:scale-95 ${i === 2 ? 'bg-primary-container text-on-primary-container border border-primary' : 'bg-surface-container hover:bg-surface-container-high border border-transparent'}`}>
                                        <span class="text-2xl">{emoji}</span>
                                        <span class="text-[10px] font-bold mt-1">{['Triste', 'Tenso', 'Neutro', 'Bem', 'Ótimo'][i]}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <label class="text-xs font-bold text-on-surface uppercase">Ansiedade</label>
                                    <span class="text-xs text-primary font-bold">4/10</span>
                                </div>
                                <input class="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="1" type="range" value="4" onChange={() => { }} />
                            </div>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <label class="text-xs font-bold text-on-surface uppercase">Impulsividade</label>
                                    <span class="text-xs text-primary font-bold">2/10</span>
                                </div>
                                <input class="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="1" type="range" value="2" onChange={() => { }} />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-on-surface uppercase">Notas do dia</label>
                            <textarea class="w-full min-h-[100px] p-4 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="O que aconteceu hoje?"></textarea>
                        </div>
                        <button onClick={() => navigate('/dashboard')} class="w-full bg-primary text-on-primary py-4 rounded-full font-bold uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all">Salvar Registro</button>
                    </div>
                </div>
            </main>
            <BottomNav active="diary" />
        </div>
    );
};
