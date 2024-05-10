import React, {useState} from "react";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";



function Dashboard() {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'kn' for Kannada

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'kn' : 'en'));
  };

  const translations = {
    en: {
      text: "Transforming programming education by breaking language barriers, empowering learners from diverse backgrounds to grasp coding concepts intuitively.",
      translateButton: "ಅನುವಾದಿಸಿ",
    },
    kn: {
      text: "ಭಾಷಾ ಅಡೆತಡೆಗಳನ್ನು ಮುರಿದುಗೊತ್ತುವ ಮೂಲಕ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಶಿಕ್ಷಣವನ್ನು ರೂಪಾಂತರಿಸಲಾಗುತ್ತಿದೆ, ವಿವಿಧ ಹಿನ್ನೆಲೆಗಳ ತಲೆಗೆ ಸಿದ್ಧತೆ ಹೊಂದಿಸಲು ಸಹಾಯ ಮಾಡುವ ಮೂಲಕ.",
      translateButton: "Translate",
    },
  };

  const currentTranslation = translations[language];
  return (
      <>
               <div className="bg bg-[#ffff41] mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
          <div className="text-center bg  ">
            <h1 className="text-8xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
                  ತತ್ವ
            </h1>
            <div>
      <p className="mt-12 text-lg leading-8 text-gray-600">
        {currentTranslation.text}
      </p>
      <button
        onClick={toggleLanguage}
        className="mt-4 px-4 py-2 bg-[#fc3d3d] hover:bg-[#fff42d] text-black rounded"
      >
        {currentTranslation.translateButton}
      </button>
    </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">

              <Link to="/installation">
              <a
                href="#"
                className="rounded-md bg-[#fc3d3d] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#fff42d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              </Link>

              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </>
  );
}

export default Dashboard;
