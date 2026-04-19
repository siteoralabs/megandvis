const { Nav, Hero, HowItWorks, MenuPreview, Vibe, Location, Footer } = window;

const App = () => (
  <>
    <Nav />
    <Hero />
    <HowItWorks />
    <MenuPreview />
    <Vibe />
    <Location />
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
