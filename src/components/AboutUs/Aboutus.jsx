import React, { useState } from 'react';

// Translations for English and Kannada
const translations = {
  en: {
    title: "About Us",
    intro: "The Tattva Project is a pioneering initiative with a mission to empower students by creating a programming education system that transcends language barriers. We focus on building a user-friendly environment based on Python, specifically designed for learners who speak and write in Kannada. Our aim is to democratize coding education, ensuring that language is not a barrier to acquiring essential programming skills.",
    transliteration: "At the heart of the Tattva Project is an innovative system that allows students to write and execute Python code in Kannada, using English alphabets for transliteration. This approach makes programming more accessible, inviting a broader range of students to explore the world of coding without the additional challenge of mastering English.",
    resources: "We provide a comprehensive set of educational resources to support this system, including tutorials and documentation in Kannada, designed to guide learners through the fundamentals of programming. Our resources are crafted to be intuitive, user-friendly, and tailored to the unique needs of Kannada-speaking students.",
    future: "Looking ahead, we have ambitious plans to expand the Tattva Project. One of our key future goals is the development of a compiler that can translate human-readable code into machine-executable instructions. This advancement will solidify our commitment to providing a complete programming solution in Kannada, opening new doors for learners and educators alike.",
  },
  kn: {
    title: "ನಮ್ಮ ಬಗ್ಗೆ",
    intro: "ತತ್ವ ಯೋಜನೆ ಒಂದು ಪಯಾನಕಾರ್ಯ ಚಟುವಟಿಕೆ ಆಗಿದ್ದು, ಭಾಷಾ ಅಡೆತಡೆಗಳನ್ನು ಮೀರಿ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಸಬಲೀಕರಿಸಲು ಉದ್ದೇಶಿತವಾಗಿದೆ. ನಾವು ಕನ್ನಡದಲ್ಲಿ ಬರೆಯಲು ಮತ್ತು ಮಾತನಾಡಲು ಹಿತವಾಗಿರುವವರಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಪೈಥಾನ್ ಆಧಾರಿತ ಬಳಕೆದಾರ-ಸ್ನೇಹಿತ ಪರಿಸರವನ್ನು ನಿರ್ಮಿಸಲು ಒತ್ತು ನೀಡುತ್ತೇವೆ. ಶಿಕ್ಷಣವನ್ನು ಪ್ರಜಾಪರವಾಗಿ ಮಾಡಲು, ಆಂಗ್ಲ ಭಾಷೆಯನ್ನು ಕಲಿಯುವಲ್ಲಿ ಭಾಷೆ ಅಡೆತಡೆಯಾಗದಂತೆ ಭರವಸೆ ನೀಡುವುದು.",
    transliteration: "ತತ್ವ ಯೋಜನೆಯ ಕೇಂದ್ರದಲ್ಲಿ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕನ್ನಡದಲ್ಲಿ ಪೈಥಾನ್ ಕೋಡ್ ಅನ್ನು ಬರೆಯಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಅನುವು ಮಾಡಿಕೊಡಲು ಅನುಮತಿಸುವ ಒಂದು ಹೊಸ ವ್ಯವಸ್ಥೆ ಇದೆ, ಅಳಫಾಬೆಟ್-ವನ್ನರ್ಥಿಸಲು ಎನಗ್ಲಿಷ್ ಅಕ್ಷರಗಳನ್ನು ಬಳಸಲು. ಈ ಪ್ರಯತ್ನದಿಂದ, ಅಡದ ಅನುಮಿತವನ್ನು ಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರಗ್ರಾಮಿಂಗ್ ವಿಶ್ವವನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಹೆಚ್ಚಿನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆಹ್ವಾನ ನೀಡುತ್ತದೆ.",
    resources: "ನಾವು ಈ ವ್ಯವಸ್ಥೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಸಂಪೂರ್ಣವಾದ ಶೈಕ್ಷಣಿಕ ಸಂಪನ್ಮೂಲಗಳ ಒಂದು ಸಂಯೋಜನೆಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ, ಅವರ ಅಗತ್ಯಗಳನ್ನು ಸಹಾಯ ಮಾಡಲು ಕನ್ನಡದಲ್ಲಿ ಟ್ಯುಟೋರಿಯಲ್ ಮತ್ತು ಡಾಕ್ಯುಮೆಂಟೇಶನ್. ನಮ್ಮ ಸಂಪನ್ಮೂಲಗಳು ಬCoding ತರಬೇತಿಯ ಮೂಲಭೂತಗಳನ್ನು ಕರೆದೊಯ್ಯಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
    future: "ಮುಂದೆ ನೋಡಿದರೆ, ತತ್ವ ಯೋಜನೆಯನ್ನು ವಿಸ್ತರಿಸಲು ಬಹಳ ಉತ್ಸಾಹಯುತ ಯೋಜನೆಗಳನ್ನು ಹೊಂದಿದ್ದೇವೆ. ನಮ್ಮ ಪ್ರಮುಖ ಗುರಿ ವುಕೊಂಡೆಯೊಂದಕ್ಕೆಂದು ವ್ಯಾಖ್ಯಾನನಮಾಯಿಸುವ ಮಾನವ-ನಿರ್ವಾಣದ ಕೋಡ್ ಮತ್ತು ಯಂತ್ರ-ನಿರ್ವಾಣದ ಸೂಚನಗಳನ್ನು ಬಳಸಲು. ಈ ಆದಾಯವು ನಮ್ಮ ಪ್ರತಿಜ್ಞೆಯನ್ನು ಕನ್ನಡದಲ್ಲಿ ಪೂರ್ಣ ಮಾರಾಟವನ್ನೀಡುವ ಯೋಜನೆಗಳನ್ನು ನೀಡಲು ಒದಗಿಸುತ್ತದೆ.",
  },
};

function AboutUs() {
  // State to toggle between English and Kannada
  const [language, setLanguage] = useState("en");

  return (
    <div className="text-center bg-[#ffff41] min-h-screen flex flex-col items-center justify-center">
      {/* Translation Button */}
      <button
        className="absolute top-4 right-4 bg-[#FF8C00] hover:bg-[#ffff41] text-black p-2 rounded"
        onClick={() => setLanguage(language === "en" ? "kn" : "en")}
      >
        {language === "en" ? "Switch to Kannada" : "Switch to English"}
      </button>

      <h1 className="text-8xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {translations[language].title}
      </h1>
      
      <div className='p-16 text-justify'>
        <p className="mt-12 text-lg leading-8 text-gray-600">
          {translations[language].intro}
        </p>
        <p className="mt-12 text-lg leading-8 text-gray-600">
          {translations[language].transliteration}
        </p>
        <p className="mt-12 text-lg leading-8 text-gray-600">
          {translations[language].resources}
        </p>
        <p className="mt-12 text-lg leading-8 text-gray-600">
          {translations[language].future}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
