// Screen Components
const { useState, useEffect } = React;
const { useNavigate } = ReactRouterDOM;
const { Header, BottomNav } = window;

// Splash Screen
window.SplashScreen = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => navigate('/login'), 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <main class="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-surface to-surface-container">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] logo-glow pointer-events-none"></div>
            <div class="h-16"></div>
            <div class="flex flex-col items-center justify-center z-10">
                <div class="relative w-32 h-32 mb-lg animate-fade-in-scale flex items-center justify-center bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30">
                     <img alt="Logo" class="h-24 opacity-80" src={window.SITE_DATA.logo.icon} />
                </div>
                <div class="text-center animate-fade-in-up">
                    <h1 class="text-3xl font-bold text-primary tracking-tight">BetConsciente</h1>
                    <p class="text-md text-on-surface-variant mt-2">Equilíbrio e Bem-estar</p>
                </div>
            </div>
            <div class="flex flex-col items-center gap-6 pb-12 animate-fade-in-delayed z-10">
                <div class="custom-spinner text-primary opacity-80"></div>
                <div class="text-center">
                    <p class="text-xs text-on-surface-variant/70 tracking-wide uppercase">Protegendo sua jornada digital</p>
                    <div class="mt-2 flex items-center justify-center gap-1">
                        <span class="material-symbols-outlined text-sm text-outline fill-icon">verified_user</span>
                        <span class="text-xs text-outline">Conectado com segurança</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

// Login Screen
window.LoginScreen = () => {
    const navigate = useNavigate();
    return (
        <div class="bg-surface text-on-background min-h-screen flex flex-col">
            <Header />
            <main class="flex-grow flex items-center justify-center px-6 pt-12 pb-32">
                <div class="w-full max-w-[480px] space-y-8">
                    <div class="text-center space-y-4">
                        <div class="inline-flex items-center justify-center p-5 rounded-full">
                          <img alt="Logo" class="h-24 opacity-80" src={window.SITE_DATA.logo.icon} />
                        </div>
                        <h1 class="text-2xl md:text-3xl font-bold text-primary">Bem-vindo ao BetConsciente</h1>
                        <p class="text-on-surface-variant max-w-[320px] mx-auto">Sua jornada para um comportamento digital saudável começa aqui.</p>
                    </div>
                    <div class="glass-card rounded-xl border border-outline-variant p-8 shadow-sm">
                        <form class="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/onboarding'); }}>
                            <div class="space-y-1">
                                <label class="text-xs font-bold text-on-surface-variant px-1">E-mail</label>
                                <div class="relative">
                                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">mail</span>
                                    <input class="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="nome@exemplo.com" type="email" />
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label class="text-xs font-bold text-on-surface-variant px-1">Senha</label>
                                <div class="relative">
                                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">lock</span>
                                    <input class="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="••••••••" type="password" />
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <button class="text-secondary text-sm font-medium hover:underline" type="button">Esqueceu a senha?</button>
                            </div>
                            <button class="w-full py-4 bg-primary text-on-primary font-bold rounded-full hover:opacity-90 active:scale-[0.98] transition-all" type="submit">Entrar</button>
                        </form>
                    </div>
                    <div class="space-y-4 text-center">
                        <button onClick={() => navigate('/onboarding')} class="w-full py-3 px-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined">person_off</span>
                            Entrar como Anônimo
                        </button>
                        <p class="text-sm text-on-surface-variant">Não tem uma conta? <a class="text-primary font-bold hover:underline" href="#">Cadastre-se</a></p>
                    </div>
                </div>
            </main>
            <div class="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-30 pointer-events-none">
                <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-container blur-[100px]"></div>
                <div class="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-surface-container-highest blur-[100px]"></div>
            </div>
        </div>
    );
};

// Onboarding Screen
window.OnboardingScreen = () => {
    const navigate = useNavigate();
    return (
        <div class="bg-surface text-on-surface flex flex-col min-h-screen">
            <Header />
            <main class="flex-grow container mx-auto px-6 py-8 flex flex-col items-center">
                <div class="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
                    <div class="order-2 md:order-1">
                        <h2 class="text-2xl md:text-3xl font-bold text-on-surface mb-4">Sua privacidade e cuidado em primeiro lugar</h2>
                        <p class="text-lg text-on-surface-variant mb-6">O BetConsciente utiliza tecnologia de análise preditiva para monitorar padrões de comportamento em apostas digitais, ajudando você a manter o controle e identificar riscos.</p>
                    </div>
                    <div class="order-1 md:order-2 flex justify-center">
                        <div class="relative w-full aspect-square max-w-[320px] bg-surface-container-low rounded-full flex items-center justify-center overflow-hidden">
                            <img alt="Care Graphic" class="w-4/5 h-4/5 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3Y8sz729zVAfqD8ZcMQ4XM_L2Z4KepAVCq9Y5mABs2XZhtajxNyWlICUaOiNNVE9mdrwR3Zku5HAGkbtsWcRRZocJFvClvYPUPuq9otvxB2B3zI4KGGl6AZkiIarPoNfr5n0CUI8Ww6GHXMuJBgUH7Kd09p1vCvl8oq3u0qK9zd_vi89DgKLZJHoMGFv5VEBX1OF75bz5VWMhhy2zyitkGbsZd7Z5zC_4jwQarQbqALSkuUpAsn2zxwv30VCsZfbKMbAVw29t8A" />
                        </div>
                    </div>
                </div>
                <section class="w-full max-w-4xl mt-12">
                    <h3 class="text-lg font-bold text-on-surface mb-4">Transparência de Dados</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: 'schedule', title: 'Frequência de Uso', desc: 'Monitoramos quantas vezes você abre aplicativos de apostas diariamente.' },
                            { icon: 'timer', title: 'Duração da Sessão', desc: 'Analisamos o tempo contínuo gasto em ambientes de jogo digital.' },
                            { icon: 'web', title: 'Acesso a Sites', desc: 'Identificamos o acesso a domínios categorizados como sites de apostas.' }
                        ].map((item, i) => (
                            <div key={i} class="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:shadow-sm transition-all">
                                <span class="material-symbols-outlined text-primary mb-3">{item.icon}</span>
                                <h4 class="font-bold text-sm mb-1">{item.title}</h4>
                                <p class="text-sm text-on-surface-variant">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section class="w-full max-w-2xl mt-12 bg-surface-container-low p-8 rounded-xl border border-primary-container/20">
                    <div class="flex items-start gap-3 mb-8">
                        <input class="w-6 h-6 rounded border-outline text-primary focus:ring-primary cursor-pointer" id="consent-check" type="checkbox" />
                        <label class="text-sm text-on-surface cursor-pointer" for="consent-check">
                            Eu autorizo o monitoramento para fins de prevenção e saúde. Entendo que meus dados são criptografados e nunca serão compartilhados.
                        </label>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => navigate('/dashboard')} class="flex-grow bg-primary text-on-primary font-bold py-4 px-8 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md">Aceitar e Continuar</button>
                        <button class="flex-grow border border-primary text-primary font-bold py-4 px-8 rounded-full hover:bg-surface-container-high transition-all">Saiba mais</button>
                    </div>
                </section>
                <footer class="mt-12 text-center max-w-xl pb-12">
                    <div class="flex items-center justify-center gap-2 text-outline mb-2">
                        <span class="material-symbols-outlined fill-icon">lock</span>
                        <span class="text-xs font-medium">Criptografia de ponta a ponta</span>
                    </div>
                    <p class="text-sm text-outline">O BetConsciente é uma ferramenta de suporte clínico, não punitiva.</p>
                </footer>
            </main>
        </div>
    );
};
