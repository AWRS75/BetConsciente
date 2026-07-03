// App Router
const { MemoryRouter, Routes, Route } = ReactRouterDOM;

window.App = () => {
    const {
        SplashScreen,
        LoginScreen,
        OnboardingScreen,
        DashboardScreen,
        AssessmentScreen,
        ResultsScreen,
        DiaryScreen,
        SupportScreen
    } = window;

    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/onboarding" element={<OnboardingScreen />} />
                <Route path="/dashboard" element={<DashboardScreen />} />
                <Route path="/avaliacao" element={<AssessmentScreen />} />
                <Route path="/results" element={<ResultsScreen />} />
                <Route path="/diario" element={<DiaryScreen />} />
                <Route path="/support" element={<SupportScreen />} />
            </Routes>
        </MemoryRouter>
    );
};
