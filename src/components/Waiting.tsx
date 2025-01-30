import React from "react";
import { useNavigate } from "react-router-dom";

function Waiting({
  photoURL,
  displayName,
}: {
  photoURL: string;
  displayName: string;
}) {
  const nav = useNavigate();
  const ud = photoURL || "";
  const user = JSON.parse(localStorage.getItem("user") || "");
  return (
    <section id="hero" className="min-h-[70vh] bg-neutral-900 text-white pt-16">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
        id="el-khl0fo14"
      >
        <div
          className="flex flex-col md:flex-row items-center justify-center h-full py-20 gap-x-10"
          id="el-vp2pklsz"
        >
          <div
            className="w-full md:w-1/3 bg-neutral-800 p-6 rounded-xl shadow-lg animate__animated animate__fadeInLeft"
            id="el-pam6tqqi"
          >
            <div className="flex flex-col items-center" id="el-4qlvgzjl">
              <div
                className="w-24 h-24 bg-neutral-700 rounded-full flex items-center justify-center mb-4"
                id="el-mzsg1k8d"
              >
                <img src={user.user.photoURL} alt="" className="rounded-full" />
              </div>
              <h3 className="text-md font-bold mb-2" id="el-0drnxdmy">
                {user.user.displayName}
              </h3>
              <p className="text-neutral-400 mb-4" id="el-hq10prjq">
                Rating: 1500
              </p>
              <div
                className="w-full bg-neutral-700 rounded-lg p-3"
                id="el-exftlwa8"
              >
                <p className="text-center text-sm" id="el-4jvwlj8k">
                  Games Won: 45
                </p>
                <p className="text-center text-sm" id="el-3h1qng6m">
                  Games Played: 78
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-1/3 flex flex-col items-center justify-center py-10 md:py-0 animate__animated animate__pulse animate__infinite"
            id="el-m40jvyk4"
          >
            <div className="text-4xl font-bold mb-8" id="el-yurnf3ld">
              VS
            </div>
            <div
              className="loading-spinner w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
              id="el-w3a0ex1r"
            ></div>
            <p className="mt-8 text-xl font-semibold" id="el-9c6g2dsm">
              Searching for Opponent...
            </p>
            <p className="text-neutral-400 mt-2" id="el-82u71ux1">
              Expected Wait Time: ~30 seconds
            </p>
            <button
              className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              id="el-hk1kokct"
              onClick={() => {
                nav("/private");
              }}
            >
              Cancel Search
            </button>
          </div>

          <div
            className="w-full md:w-1/3 bg-neutral-800 p-6 rounded-xl shadow-lg opacity-50 animate__animated animate__fadeInRight"
            id="el-2obigll5"
          >
            <div className="flex flex-col items-center" id="el-cwt228z0">
              <div
                className="w-24 h-24 bg-neutral-700 rounded-full flex items-center justify-center mb-4"
                id="el-2rxh53r5"
              >
                {ud ? <img src={ud} alt="" className="rounded-full" /> : <></>}
              </div>
              <h3 className="text-xl font-bold mb-2" id="el-3rx08toj">
                {displayName}
              </h3>
              <p className="text-neutral-400 mb-4" id="el-bs15jhq1">
                Rating: ----
              </p>
              <div
                className="w-full bg-neutral-700 rounded-lg p-3"
                id="el-dzdaf740"
              >
                <p className="text-center text-sm" id="el-s7l6b36d">
                  Connecting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Waiting;
