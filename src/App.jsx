import { FaTwitter, FaRocket, FaCar, FaBolt, FaBrain } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-bold">Elon Musk</h1>
          <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline text-4xl">
            <FaTwitter />
          </a>
        </header>

        <main>
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl mb-4">I'm just a guy who likes to dream big and make things happen. From electric cars and solar energy to reusable rockets and brain-computer interfaces, I'm always pushing the boundaries of what's possible.</p>
            <p className="text-xl">When I'm not working on world-changing technologies, you can find me meme-ing on Twitter, hosting Saturday Night Live, or hanging out with my ever-growing family. Life's too short to take things too seriously!</p>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-8">What I'm Working On</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-gradient-to-br from-red-500 to-red-700 text-primary-content">
                <div className="card-body">
                  <h3 className="card-title text-3xl">
                    Tesla <FaCar className="inline-block" />
                  </h3>
                  <p>Accelerating the world's transition to sustainable energy with electric cars, solar, and batteries.</p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-blue-500 to-blue-700 text-primary-content">
                <div className="card-body">
                  <h3 className="card-title text-3xl">
                    SpaceX <FaRocket className="inline-block" />
                  </h3>
                  <p>Making humanity multiplanetary by developing fully reusable rockets to colonize Mars.</p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-purple-500 to-purple-700 text-primary-content">
                <div className="card-body">
                  <h3 className="card-title text-3xl">
                    Neuralink <FaBrain className="inline-block" />
                  </h3>
                  <p>Developing ultra high bandwidth brain-machine interfaces to connect humans and artificial intelligence.</p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-yellow-500 to-yellow-700 text-primary-content">
                <div className="card-body">
                  <h3 className="card-title text-3xl">
                    The Boring Company <FaBolt className="inline-block" />
                  </h3>
                  <p>Solving traffic with underground tunnels and hyperloop transportation.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center mt-12">
          <p>Not affiliated with the real Elon Musk. Built by an AI for fun!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
