import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Dynamic Questionnaire System
          </h1>
          <p className="text-xl text-purple-200">
            Демонстрация современных подходов к веб-разработке
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Available Tasks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <TaskCard
              to="/questionnaire"
              title="1. Dynamic Questionnaire"
              description="Интерактивный опросник с условной логикой"
            />

            <TaskCard
              to="/distance-converter"
              title="2. Distance Converter"
              description="Конвертер единиц измерения расстояний"
            />

            <TaskCard
              to="/data-processor"
              title="3. Data Filter & Sort"
              description="Система фильтрации и сортировки данных"
            />

            <TaskCard
              to="/asteroid-finder"
              title="4. 3D Asteroid Finder"
              description="Поиск астероида в трёхмерном пространстве"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function TaskCard({ to, title, description }: { to: string; title: string; description: string }) {
  return (
    <Link
      to={to}
      className="block bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20"
    >
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-purple-200">{description}</p>
    </Link>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-purple-200 mb-8">Страница не найдена</p>
        <Link
          to="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
