const { Nav, Hero, HowItWorks, Menu, Vibe, Location, Footer } = window;

const App = () => (
  <>
    <Nav />
    <Hero />
    <HowItWorks />
    <Menu />
    <Vibe />
    <Location />
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
