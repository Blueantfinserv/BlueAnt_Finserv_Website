import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7fbff] px-4 pt-28 pb-12 text-center">
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00afef]/15 blur-3xl" />
      <div className="absolute bottom-8 right-8 hidden h-44 w-44 rounded-full bg-[#0f172a]/10 blur-3xl md:block" />

      <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl flex-col items-center justify-center animate-fadeIn">
        

        <h1 className="max-w-full text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl md:text-8xl">
          Coming <span className="text-[#00afef]">Soon</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg">
          We are preparing this page with a better experience for you.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex max-w-full items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#00afef] px-6 py-4 text-base font-extrabold text-white shadow-2xl shadow-[#00afef]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#00afef]/35 focus:outline-none focus:ring-4 focus:ring-[#00afef]/25 sm:px-8 sm:text-lg"
        >
          <ArrowLeft className="h-5 w-5 flex-shrink-0" />
          <span>Back to Home</span>
        </Link>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoon;
