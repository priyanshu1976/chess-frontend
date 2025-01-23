function Page() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  console.log(user);
  return (
    <div>
      <section
        id="userProfile"
        className="pt-10 bg-neutral-800 text-white  animate__animated animate__pulse"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate__animated animate__fadeIn">
            <div className="bg-neutral-900 rounded-lg shadow-xl p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={user.user.photoURL}
                    alt="Profile Picture"
                    className="w-32 h-32 rounded-full border-4 border-green-600 transition-opacity duration-300 opacity-100"
                    loading="lazy"
                  />
                  <div className="text-center">
                    <h1 className="text-2xl font-bold">
                      {user.user.displayName}
                    </h1>
                    <p className="text-gray-400">Member since 2023</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-sm font-medium transition duration-300">
                      Play Online
                    </button>
                    <button className="bg-neutral-700 hover:bg-neutral-600 px-6 py-2 rounded-full text-sm font-medium transition duration-300">
                      Edit Profile
                    </button>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-800 p-4 rounded-lg text-center animate__animated animate__pulse">
                    <h3 className="text-lg font-semibold">Rating</h3>
                    <p className="text-3xl font-bold text-green-500">1850</p>
                    <p className="text-sm text-gray-400">Rapid</p>
                  </div>

                  <div className="bg-neutral-800 p-4 rounded-lg text-center animate__animated animate__pulse">
                    <h3 className="text-lg font-semibold">Wins</h3>
                    <p className="text-3xl font-bold text-green-500">324</p>
                    <p className="text-sm text-gray-400">Total Games: 589</p>
                  </div>

                  <div className="bg-neutral-800 p-4 rounded-lg text-center animate__animated animate__pulse">
                    <h3 className="text-lg font-semibold">Tournaments</h3>
                    <p className="text-3xl font-bold text-green-500">12</p>
                    <p className="text-sm text-gray-400">Participated</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-neutral-700 pt-8">
                <h2 className="text-xl font-semibold mb-4">
                  Recent Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-neutral-800 p-4 rounded-lg flex items-center space-x-3">
                    <div className="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="{2}"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Tournament Winner</p>
                      <p className="text-sm text-gray-400">December 2023</p>
                    </div>
                  </div>

                  <div className="bg-neutral-800 p-4 rounded-lg flex items-center space-x-3">
                    <div className="text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="{2}"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Rapid Master</p>
                      <p className="text-sm text-gray-400">1800+ Rating</p>
                    </div>
                  </div>

                  <div className="bg-neutral-800 p-4 rounded-lg flex items-center space-x-3">
                    <div className="text-purple-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="{2}"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Puzzle Master</p>
                      <p className="text-sm text-gray-400">500+ Solved</p>
                    </div>
                  </div>

                  <div className="bg-neutral-800 p-4 rounded-lg flex items-center space-x-3">
                    <div className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="{2}"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Time Master</p>
                      <p className="text-sm text-gray-400">100+ Blitz Wins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="playOptions" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn">
            Choose Your Game Mode
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp animate__pulse">
              <img
                src="https://chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png"
                alt="Online Chess"
                className="w-full h-48 object-cover rounded-lg mb-6 transition-opacity duration-300 opacity-100"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-4">Play Online</h3>
              <p className="text-gray-400 mb-6">
                Challenge players from around the world in real-time matches.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition duration-300">
                  Rapid
                </button>
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition duration-300">
                  Blitz
                </button>
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition duration-300">
                  Bullet
                </button>
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition duration-300">
                  ClassicalName
                </button>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp animate__pulse">
              <img
                src="https://chess.com/bundles/web/images/web/board-puzzles.4a54c49f.png"
                alt="Friend Chess"
                className="w-full h-48 object-cover rounded-lg mb-6 transition-opacity duration-300 opacity-100"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-4">Play with Friends</h3>
              <p className="text-gray-400 mb-6">
                Create private games and invite your friends for a match.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300">
                  Create Private Game
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300">
                  Join Friend's Game
                </button>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp animate__pulse">
              <img
                src="https://chess.com/bundles/web/images/web/board-lessons.825946d3.png"
                alt="Computer Chess"
                className="w-full h-48 object-cover rounded-lg mb-6 transition-opacity duration-300 opacity-100"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-4">Play vs Computer</h3>
              <p className="text-gray-400 mb-6">
                Practice against AI opponents of various difficulty levels.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center px-4 py-2 bg-neutral-700 rounded-lg">
                  <span>Difficulty</span>
                  <select className="bg-neutral-600 rounded px-2 py-1">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                  </select>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition duration-300">
                  Start Game
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-neutral-800 rounded-full px-8 py-4 animate__animated animate__fadeIn animate__pulse">
              <p className="text-lg mb-4">
                Quick Match - Start Playing Instantly!
              </p>
              <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-bold transition duration-300 transform hover:scale-105">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
