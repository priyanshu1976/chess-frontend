import React from "react";
import { useNavigate } from "react-router-dom";
function generateRandomString(): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function PrivateGames() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const navigate = useNavigate();

  const [gameid, setGameid] = React.useState(generateRandomString());

  function createRoome() {
    navigate(`/private/play/${gameid}`);
  }

  return (
    <div className="w-screen h-screen bg-[#262626]">
      <section id="friendsList" className="py-20 bg-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold animate__animated animate__fadeIn">
              Friends
            </h2>
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-sm font-medium transition duration-300">
              Add Friend
            </button>
          </div>

          <div className="lg:col-span-2 bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInLeft mb-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition duration-300">
                <div className="flex items-center space-x-4 w-[50%]">
                  <input
                    type="text"
                    className="h-[30px] rounded-md w-[70%] text-black  p-6"
                    placeholder="enter room id"
                    onChange={(e) =>
                      setGameid(e.target.value || generateRandomString())
                    }
                  />
                </div>

                <div className="flex gap-x-3">
                  <button
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition duration-300"
                    onClick={createRoome}
                  >
                    Join Room
                  </button>
                  <button
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition duration-300"
                    onClick={createRoome}
                  >
                    Create Room
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInLeft">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Online Friends (3)
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition duration-300">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/48x48/DEDEDE/555555?text=Image+Unavailable"
                      alt="Image unavailable"
                      className="w-12 h-12 rounded-full transition-opacity duration-300 opacity-100 error-image"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold">ChessMaster42</p>
                      <p className="text-sm text-green-500">Playing Blitz</p>
                    </div>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition duration-300">
                    Challenge
                  </button>
                </div>

                <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition duration-300">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/48x48/DEDEDE/555555?text=Image+Unavailable"
                      alt="Image unavailable"
                      className="w-12 h-12 rounded-full transition-opacity duration-300 opacity-100 error-image"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold">KnightRider</p>
                      <p className="text-sm text-green-500">Online</p>
                    </div>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition duration-300">
                    Challenge
                  </button>
                </div>

                <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition duration-300">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/48x48/DEDEDE/555555?text=Image+Unavailable"
                      alt="Image unavailable"
                      className="w-12 h-12 rounded-full transition-opacity duration-300 opacity-100 error-image"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold">QueenGambit</p>
                      <p className="text-sm text-green-500">Analyzing</p>
                    </div>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition duration-300">
                    Challenge
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInRight">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                Offline Friends (4)
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/48x48/DEDEDE/555555?text=Image+Unavailable"
                      alt="Image unavailable"
                      className="w-12 h-12 rounded-full grayscale transition-opacity duration-300 opacity-100 error-image"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold">PawnMaster</p>
                      <p className="text-sm text-gray-400">Last seen 2h ago</p>
                    </div>
                  </div>
                  <button className="bg-neutral-700 px-4 py-2 rounded-lg text-sm cursor-not-allowed opacity-50">
                    Offline
                  </button>
                </div>

                <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/48x48/DEDEDE/555555?text=Image+Unavailable"
                      alt="Image unavailable"
                      className="w-12 h-12 rounded-full grayscale transition-opacity duration-300 opacity-100 error-image"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold">BishopPro</p>
                      <p className="text-sm text-gray-400">Last seen 5h ago</p>
                    </div>
                  </div>
                  <button className="bg-neutral-700 px-4 py-2 rounded-lg text-sm cursor-not-allowed opacity-50">
                    Offline
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-neutral-900 rounded-xl p-6 mt-8 animate__animated animate__fadeInUp">
              <h3 className="text-xl font-bold mb-6">Friend Requests (2)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/48x48/DEDEDE/555555?text=Image+Unavailable"
                      alt="Image unavailable"
                      className="w-12 h-12 rounded-full transition-opacity duration-300 opacity-100 error-image"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold">RookiePlayer</p>
                      <p className="text-sm text-gray-400">Rating: 1450</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition duration-300">
                      Accept
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition duration-300">
                      Decline
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-neutral-800 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/48x48/DEDEDE/555555?text=Image+Unavailable"
                      alt="Image unavailable"
                      className="w-12 h-12 rounded-full transition-opacity duration-300 opacity-100 error-image"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold">ChessStudent</p>
                      <p className="text-sm text-gray-400">Rating: 1680</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition duration-300">
                      Accept
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition duration-300">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivateGames;
