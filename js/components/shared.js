// Shared.js é o responsável por componentes comuns 
const { Link } = ReactRouterDOM;

window.BottomNav = ({ active }) => {
    const navItems = [
        { id: 'dashboard', icon: 'dashboard', label: 'Painel', path: '/dashboard' },
        { id: 'evaluation', icon: 'clinical_notes', label: 'Avaliação', path: '/avaliacao' },
        { id: 'diary', icon: 'edit_calendar', label: 'Diário', path: '/diario' },
        { id: 'support', icon: 'emergency', label: 'Suporte', path: '/support' }
    ];

    return (
        <nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-surface-container-lowest dark:bg-inverse-surface shadow-[0_-4px_12px_0_rgba(0,0,0,0.05)] rounded-t-xl md:hidden">
            {navItems.map(item => (
                <Link
                    key={item.id}
                    to={item.path}
                    class={`flex flex-col items-center justify-center px-4 py-1 transition-all ${active === item.id ? 'bg-primary-container text-on-primary-container rounded-full' : 'text-outline dark:text-outline-variant'}`}
                >
                    <span class={`material-symbols-outlined ${active === item.id ? 'fill-icon' : ''}`}>{item.icon}</span>
                    <span class="text-[12px] font-medium mt-0.5">{item.label}</span>
                </Link>
            ))}
        </nav>
    );
};

window.DesktopNav = () => (
    <div class="hidden md:flex gap-lg items-center">
        <Link to="/login" class="text-primary dark:text-inverse-primary font-bold text-sm hover:opacity-80 transition-opacity">ACESSO</Link>
        <Link to="/support" class="text-outline dark:text-outline-variant font-bold text-sm hover:opacity-80 transition-opacity">AJUDA</Link>
        <a href="#" class="text-outline dark:text-outline-variant font-bold text-sm hover:opacity-80 transition-opacity">PRIVACIDADE</a>
    </div>
);

window.Header = ({ title = "BetConsciente", showProfile = false, showHelp = true }) => (
    <header class="bg-surface dark:bg-on-background shadow-sm sticky top-0 z-50 flex justify-between items-center w-full px-gutter h-16">
        <div class="flex items-center gap-3">
           {/* {showProfile && (
                <div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant">
                    <img alt="Perfil" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGcoSu6JkHZr5iXtPAx9sbhm-k-Fw1HN8esnwPxFvbt57H-eg4cyAZdHUlaM-gfK-zI3-CZpxGGQ38GCcxsJ_i9sIbgVufBwp4UnlpUBirObuCz3xCdrmiTRcCy6yWMlXvDYbM8c3EQXQ7_jAr6GMPbeEOPUxNchBqzeMo-tJcSuir52RodLHeb3V2u_VJoqdz_am6kH6d75YO6LZ_M_6WM_y3-L6OelYmvTADR0kvOQ-EUKoBGU-7xcuprlRBgkNfSR_dblZqR9s" />
                </div>
            )} */}
            <img alt="Logo" class="h-6 opacity-80" src={window.SITE_DATA.logo.logotype} />
        </div>
        <div class="flex items-center gap-2">
            <DesktopNav />
            {showHelp && (
                <button class="md:hidden font-bold text-sm text-primary dark:text-primary-fixed hover:bg-surface-container-low transition-colors px-3 py-2 rounded-lg">
                    AJUDA
                </button>
            )}
        </div>
    </header>
);
