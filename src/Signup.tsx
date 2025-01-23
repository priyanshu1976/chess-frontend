import React, { useState } from "react";
import { Lock } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login" : "Signup", { email, password, username });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 chess-background">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
          <div className="bg-gray-800 text-white p-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">Chess Login</h2>
            </div>
            <div className="flex space-x-2">
              <Lock className="w-6 h-6 text-gray-300" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {!isLogin && (
              <div>
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Choose your username"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-300 flex items-center justify-center"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="px-6 pb-6 text-center">
            <p className="text-gray-600">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:underline focus:outline-none"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>

        <style jsx>{`
          .chess-background {
            background-image: linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.1) 25%,
                transparent 25%
              ),
              linear-gradient(
                -45deg,
                rgba(255, 255, 255, 0.1) 25%,
                transparent 25%
              ),
              linear-gradient(
                45deg,
                transparent 75%,
                rgba(255, 255, 255, 0.1) 75%
              ),
              linear-gradient(
                -45deg,
                transparent 75%,
                rgba(255, 255, 255, 0.1) 75%
              );
            background-size: 40px 40px;
            background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AuthPage;
