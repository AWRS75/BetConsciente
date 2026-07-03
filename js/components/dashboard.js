// Dashboard Screen
const { useNavigate } = ReactRouterDOM;
const { useEffect, useRef } = React;
const { Header, BottomNav } = window;

// Usage Chart Component
const UsageChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new window.Chart(ctx, {
      type: "line",
      data: {
        labels: ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "HOJE"],
        datasets: [
          {
            data: [52, 36, 61, 24, 36, 18, 12],
            borderColor: "#00685f",
            backgroundColor: "rgba(0, 104, 95, 0.10)",
            fill: true,
            tension: 0.4,
            pointRadius: [0, 0, 0, 0, 0, 0, 5],
            pointHoverRadius: 6,
            pointBackgroundColor: "#00685f",
            pointBorderColor: "#ffffff",
            pointBorderWidth: 2,
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            displayColors: false,
            backgroundColor: "#0b1c30",
            titleColor: "#fff",
            bodyColor: "#fff",
            callbacks: {
              label: (context) => `${context.raw} min`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              color: (ctx) => (ctx.index === 6 ? "#00685f" : "#7A7A7A"),
              font: (ctx) => ({
                weight: ctx.index === 6 ? "700" : "500",
              }),
            },
          },
          y: {
            display: false,
            grid: { display: false },
            border: { display: false },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} style={{ maxHeight: "180px" }}></canvas>;
};

window.DashboardScreen = () => {
  const navigate = useNavigate();
  return (
    <div class="bg-background text-on-surface min-h-screen">
      <Header showProfile={true} />
      <main class="px-6 py-8 max-w-2xl mx-auto space-y-8 pb-32">
        <section class="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h2 class="text-xs text-outline uppercase tracking-wider font-bold">
                Status de Bem-estar
              </h2>
              <p class="text-2xl font-bold text-on-surface mt-1">
                Você está no controle hoje
              </p>
            </div>
            <div class="bg-primary-container text-on-primary-container rounded-full px-4 py-2 flex flex-col items-center">
              <span class="text-lg font-bold">2/27</span>
              <span class="text-[10px] uppercase font-bold opacity-90">
                Risco Baixo
              </span>
            </div>
          </div>
          <div class="w-full bg-surface-container rounded-full h-3 mt-4 overflow-hidden">
            <div
              class="bg-primary h-full rounded-full"
              style={{ width: "7%" }}
            ></div>
          </div>
          <p class="text-sm text-outline mt-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px]">verified</span>
            Seu escore PGSI permanece estável. Continue assim!
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-lg font-bold text-on-surface">
            Resumo de Comportamento
          </h2>
          <div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
            <div class="h-[180px] mb-4">
              <UsageChart />
            </div>
            <div class="pt-5 border-t border-outline-variant flex justify-between items-center">
              <div>
                <p class="text-[10px] text-outline uppercase font-bold">
                  Tempo de Uso Total
                </p>
                <p class="text-lg font-bold text-on-surface">
                  12min{" "}
                  <span class="text-primary text-sm font-normal">(-12%)</span>
                </p>
              </div>
              <span class="material-symbols-outlined text-outline">
                trending_down
              </span>
            </div>
          </div>
        </section>

        <section class="bg-surface-container-low border border-outline-variant rounded-xl p-5">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-white rounded-lg shadow-sm">
              <span class="material-symbols-outlined text-primary">
                edit_calendar
              </span>
            </div>
            <div>
              <h3 class="font-bold text-on-surface">Diário de Humor</h3>
              <p class="text-sm text-outline">
                Como você está se sentindo agora?
              </p>
            </div>
          </div>

          <div class="grid grid-cols-5 gap-2">
            {["😔", "😟", "😐", "🙂", "🤩"].map((emoji, i) => (
              <button
                onClick={() => navigate("/diario")}
                key={i}
                class={`flex flex-col items-center p-2 bg-white rounded-lg hover:bg-surface-container-high transition-colors border ${i === 2 ? "border-primary bg-primary-container/10" : "border-transparent"}`}
              >
                <span class="text-2xl">{emoji}</span>
                <span
                  class={`text-[10px] mt-1 font-bold ${i === 2 ? "text-primary" : "text-outline"}`}
                >
                  {["Triste", "Ansioso", "Neutro", "Bem", "Ótimo"][i]}
                </span>
              </button>
            ))}
          </div>
        </section>

        <button
          onClick={() => navigate("/avaliacao")}
          class="w-full bg-primary text-on-primary font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-sm active:scale-[0.98] transition-transform"
        >
          <span class="material-symbols-outlined">clinical_notes</span>
          Fazer Avaliação PGSI
        </button>
      </main>
      <BottomNav active="dashboard" />
    </div>
  );
};
