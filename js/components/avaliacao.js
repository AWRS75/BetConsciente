// Avaliação e Resultados - PGSI (Problem Gambling Severity Index) - Protótipo com 5 Perguntas
const { useState } = React;
const { useNavigate } = ReactRouterDOM;
const { Header, BottomNav } = window;

// Definindo as 9 perguntas e respostas com base no arquivo questions.md que está no diretório raiz do projeto. Cada pergunta tem 4 opções de resposta com valores de 0 a 3, totalizando um escore máximo de 15 pontos.
const QUESTIONS = [
    {
        id: 1,
        text: "Você jogou mais do que podia perder?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    },
    {
        id: 2,
        text: "Precisou jogar com quantias maiores para sentir a mesma emoção?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    },
    {
        id: 3,
        text: "Voltou em outro dia para tentar recuperar perdas?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    },
    {
        id: 4,
        text: "Pediu dinheiro emprestado para jogar?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    },
    {
        id: 5,
        text: "Sentiu que poderia ter um problema com jogos?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    },
    {
        id: 6,
        text: "O jogo causou problemas de saúde emocional?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    },
    {
        id: 7,
        text: "Pessoas próximas criticaram seu comportamento?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    },
    {
        id: 8,
        text: "O jogo causou problemas financeiros?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    },
    {
        id: 9,
        text: "Tentou esconder a extensão do seu jogo?",
        options: [
            { label: 'Nunca', value: 0 },
            { label: 'Às vezes', value: 1 },
            { label: 'Frequentemente', value: 2 },
            { label: 'Sempre', value: 3 }
        ]
    }
    
];

window.AssessmentScreen = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState(Array(9).fill(null));

    const currentQuestion = QUESTIONS[step - 1];
    const selectedValue = answers[step - 1];
    const isAnswered = selectedValue !== null;

    const handleSelectOption = (val) => {
        const newAnswers = [...answers];
        newAnswers[step - 1] = val;
        setAnswers(newAnswers);
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleNext = () => {
        if (!isAnswered) return;
        
        if (step < 9) {
            setStep(step + 1);
        } else {
            // Calcular score total e salvar
            const score = answers.reduce((acc, curr) => acc + (curr || 0), 0);
            localStorage.setItem('betradar_pgsi_score', score.toString());
            
            const dateStr = new Date().toLocaleDateString('pt-BR', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            });
            localStorage.setItem('betradar_pgsi_date', dateStr);
            localStorage.setItem('betradar_pgsi_answers', JSON.stringify(answers));
            
            navigate('/results');
        }
    };

    const progressPercentage = Math.round(((step - 1) / 9) * 100);

    return (
        <div class="bg-surface text-on-surface min-h-screen flex flex-col">
            <Header showHelp={true} />
            <main class="flex-grow flex flex-col items-center px-6 py-12">
                <div class="max-w-2xl w-full">
                    <div class="mb-8 space-y-4">
                        <h1 class="text-2xl font-bold text-on-surface">Avaliação de Risco (PGSI)</h1>
                        <p class="text-on-surface-variant text-sm">Esta avaliação ajuda a identificar padrões de comportamento relacionados a jogos de azar nos últimos 12 meses.</p>
                        <div class="pt-2">
                            <div class="flex justify-between items-end mb-1">
                                <span class="text-xs font-bold text-primary">Pergunta {step} de 9</span>
                                <span class="text-xs text-outline">{progressPercentage}% concluído</span>
                            </div>
                            <div class="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                                <div class="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${(step / 6) * 100}%` }}></div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
                        <div class="mb-8">
                            <h2 class="text-xl font-bold text-on-surface leading-snug">
                                {currentQuestion.text}
                            </h2>
                        </div>
                        <div class="space-y-3">
                            {currentQuestion.options.map((opt) => {
                                const isSelected = selectedValue === opt.value;
                                return (
                                    <label 
                                        key={opt.value} 
                                        class={`flex items-center p-4 border rounded-lg cursor-pointer transition-all active:scale-95 ${
                                            isSelected 
                                                ? 'border-primary bg-surface-container-low shadow-sm font-semibold' 
                                                : 'border-outline-variant hover:bg-surface-container-low'
                                        }`}
                                    >
                                        <input 
                                            checked={isSelected} 
                                            class="w-5 h-5 text-primary border-outline focus:ring-primary cursor-pointer" 
                                            name={`pgsi-${currentQuestion.id}`} 
                                            type="radio" 
                                            onChange={() => handleSelectOption(opt.value)} 
                                        />
                                        <span class={`ml-4 text-sm ${isSelected ? 'font-bold text-primary' : ''}`}>{opt.label}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div class="mt-8 flex justify-between gap-4">
                        <button 
                            onClick={handleBack} 
                            disabled={step === 1}
                            class={`flex-1 py-4 px-6 border font-bold rounded-full transition-colors flex items-center justify-center gap-2 ${
                                step === 1 
                                    ? 'border-outline-variant text-outline opacity-50 cursor-not-allowed' 
                                    : 'border-primary text-primary hover:bg-surface-container-low'
                            }`}
                        >
                            <span class="material-symbols-outlined">arrow_back</span> Anterior
                        </button>
                        <button 
                            onClick={handleNext} 
                            disabled={!isAnswered}
                            class={`flex-1 py-4 px-6 font-bold rounded-full transition-all flex items-center justify-center gap-2 ${
                                isAnswered 
                                    ? 'bg-primary text-on-primary hover:bg-primary-container active:scale-95' 
                                    : 'bg-outline-variant text-outline cursor-not-allowed'
                            }`}
                        >
                            {step < 9 ? 'Próxima' : 'Finalizar'} <span class="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>

                    <div class="mt-12 p-4 bg-surface-container-high rounded-xl flex items-start gap-3 border-l-4 border-tertiary">
                        <span class="material-symbols-outlined text-tertiary mt-1">info</span>
                        <div>
                            <h4 class="text-sm font-bold text-on-surface">Privacidade e Apoio</h4>
                            <p class="text-xs text-on-surface-variant">Suas respostas são anônimas e usadas apenas para fornecer orientações personalizadas.</p>
                        </div>
                    </div>
                </div>
            </main>
            <BottomNav active="evaluation" />
        </div>
    );
};

window.ResultsScreen = () => {
    const navigate = useNavigate();
    
    // Obter resultados dinamicamente
    const score = parseInt(localStorage.getItem('betradar_pgsi_score')) || 0;
    const assessmentDate = localStorage.getItem('betradar_pgsi_date') || '24 de Outubro, 2023';

    // Determinar categoria, descrição e estilo baseados no score (máximo 15)
    let resultTitle = "";
    let resultCategory = "";
    let resultColorClass = "";
    let resultIcon = "";
    let resultDesc = "";
    let selfReportStatus = "";
    let selfReportIcon = "";
    let recommendations = [];

    if (score === 0) {
        resultTitle = "Risco Inexistente";
        resultCategory = "Sem problemas aparentes";
        resultColorClass = "bg-primary-container/20 border-primary text-on-surface";
        resultIcon = "check_circle";
        resultDesc = "Seu perfil não apresenta comportamentos associados a riscos em relação ao jogo. Parabéns! Continue jogando apenas de forma recreativa, consciente e dentro dos seus limites.";
        selfReportStatus = "Controle Total";
        selfReportIcon = "check_circle";
        recommendations = [
            { icon: 'verified', title: 'Manter Hábitos Saudáveis', desc: 'Siga sempre estipulando um limite máximo de gastos antes de começar.' },
            { icon: 'visibility', title: 'Mantenha a Consciência', desc: 'Evite jogar sob efeito de estresse, ansiedade ou álcool para manter o controle total.' }
        ];
    } else if (score >= 1 && score <= 3) {
        resultTitle = "Risco Baixo";
        resultCategory = "Risco Mínimo";
        resultColorClass = "bg-surface-container border-outline-variant text-on-surface";
        resultIcon = "info";
        resultDesc = "Você apresenta poucos sinais de alerta ou riscos. É recomendável manter um monitoramento ocasional e definir limites saudáveis para garantir que o jogo continue sendo puro entretenimento.";
        selfReportStatus = "Preocupação Mínima";
        selfReportIcon = "info";
        recommendations = [
            { icon: 'event_repeat', title: 'Definir Limites de Depósito', desc: 'Aproveite a calmaria para definir um limite semanal ou mensal nas plataformas.' },
            { icon: 'schedule', title: 'Limite de Tempo', desc: 'Tente monitorar seu tempo em apps de apostas para que não ultrapasse 1h por dia.' }
        ];
    } else if (score >= 4 && score <= 8) {
        resultTitle = "Risco Moderado";
        resultCategory = "Sinais de Atenção";
        resultColorClass = "bg-tertiary-fixed border-tertiary-fixed-dim text-on-tertiary-fixed";
        resultIcon = "warning";
        resultDesc = "Seu perfil indica alguns comportamentos que podem levar a dificuldades futuras com apostas se não forem observados. É um momento valioso para refletir tranquilamente e criar salvaguardas.";
        selfReportStatus = "Sinais de Atenção";
        selfReportIcon = "warning";
        recommendations = [
            { icon: 'timer_off', title: 'Pausa de 24 horas', desc: 'Considere um intervalo completo hoje para descompressão neurológica.' },
            { icon: 'lock_reset', title: 'Bloqueio Temporário', desc: 'Ative o limite de depósitos por 7 dias em sua plataforma favorita.' }
        ];
    } else {
        resultTitle = "Alto Risco / Jogo Problemático";
        resultCategory = "Alerta Importante";
        resultColorClass = "bg-red-50 dark:bg-red-950/20 border-error/50 text-on-surface";
        resultIcon = "gavel";
        resultDesc = "Atenção: Suas respostas sugerem que o hábito de apostas pode estar impactando negativamente sua vida, bem-estar emocional ou finanças. Recomendamos fortemente pausar o jogo e procurar nossa rede de apoio.";
        selfReportStatus = "Risco Elevado";
        selfReportIcon = "gavel";
        recommendations = [
            { icon: 'block', title: 'Autoexclusão Temporária', desc: 'Considere fazer uma pausa completa de 30 dias em todas as plataformas de jogos.' },
            { icon: 'volunteer_activism', title: 'Apoio Especializado', desc: 'Conecte-se com nossa rede de apoio integrada na seção de suporte do BetConsciente.' }
        ];
    }

    return (
        <div class="bg-surface text-on-surface min-h-screen">
            <Header />
            <main class="px-6 mt-6 max-w-2xl mx-auto pb-32">
                <section class="mb-8">
                    <h1 class="text-2xl font-bold text-on-surface">Seu Resultado</h1>
                    <p class="text-on-surface-variant text-sm mt-1">Última avaliação realizada em: {assessmentDate}</p>
                </section>

                <section class="mb-8">
                    <div class={`rounded-xl p-5 shadow-sm border ${resultColorClass}`}>
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h2 class="text-lg font-bold">{resultTitle}</h2>
                                <p class="text-xs uppercase font-bold tracking-wider mt-1">Escore PGSI: {score}/15 ({resultCategory})</p>
                            </div>
                            <span class="material-symbols-outlined text-[32px] fill-icon">{resultIcon}</span>
                        </div>
                        <div class="bg-white/50 dark:bg-black/20 rounded-lg p-4 mt-2">
                            <p class="text-sm leading-relaxed">
                                {resultDesc}
                            </p>
                        </div>
                    </div>
                </section>

                <section class="mb-8">
                    <h3 class="text-xs font-bold text-on-surface-variant uppercase mb-4">Resumo Comportamental</h3>
                    <div class="space-y-3">
                        <div class="bg-white dark:bg-surface-container-lowest rounded-xl p-4 border border-outline-variant flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                                    <span class="material-symbols-outlined">person_search</span>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-on-surface">Autorrelato</p>
                                    <p class="text-xs text-on-surface-variant">"{selfReportStatus}"</p>
                                </div>
                            </div>
                            <span class={`material-symbols-outlined fill-icon ${score >= 9 ? 'text-error' : score >= 4 ? 'text-tertiary' : 'text-primary'}`}>{selfReportIcon}</span>
                        </div>
                        <div class="bg-white dark:bg-surface-container-lowest rounded-xl p-4 border border-outline-variant flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                                    <span class="material-symbols-outlined">phone_iphone</span>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-on-surface">Monitoramento Passivo</p>
                                    <p class="text-xs text-on-surface-variant">1h 45min/dia em apps</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-end">
                                <span class="text-tertiary text-[10px] font-bold">+15% vs média</span>
                                <span class="material-symbols-outlined text-tertiary text-[20px]">trending_up</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-8">
                    <h3 class="text-xs font-bold text-on-surface-variant uppercase mb-4">Ações Recomendadas</h3>
                    <div class="space-y-3">
                        {recommendations.map((item, i) => (
                            <div key={i} class="flex gap-4 items-start p-4 bg-surface-container-low rounded-lg transition-colors hover:bg-surface-container">
                                <span class="material-symbols-outlined text-primary mt-1">{item.icon}</span>
                                <div>
                                    <p class="text-sm font-bold text-on-surface">{item.title}</p>
                                    <p class="text-xs text-on-surface-variant">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div class="mt-8 flex flex-col sm:flex-row gap-4">
                    <button onClick={() => navigate('/avaliacao')} class="flex-1 border border-primary text-primary py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform hover:bg-surface-container-low">
                        <span class="material-symbols-outlined">restart_alt</span> Refazer Avaliação
                    </button>
                    <button onClick={() => navigate('/support')} class="flex-1 bg-primary text-on-primary py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform hover:bg-primary-container">
                        <span class="material-symbols-outlined">volunteer_activism</span> Ver Rede de Apoio
                    </button>
                </div>
            </main>
            <BottomNav active="evaluation" />
        </div>
    );
};