import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Installation() {
  const [isCopied, setIsCopied] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'kn' for Kannada

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'kn' : 'en'));
  };

  // Translation data
  const translations = {
    en: {
      heading: "Installation",
      install: {
        title: "Install the package using pip",
        description: "In your terminal, type the following code:",
        copyButton: "Copy",
        copiedButton: "Copied!",
        code: "pip install tattva",
      },
      sections: {
        github: {
          title: "Locate Your GitHub Repository:",
          description:
            "Navigate to your GitHub repository where your project is hosted.",
          linkText: "Tattva Repository",
        },
        zip: {
          title: "Download the ZIP Archive:",
          description:
            'Look for the "Code" button (usually green) on the repository\'s main page. Click on it and select "Download ZIP."',
        },
        extract: {
          title: "Extract the ZIP Archive:",
          description:
            'Right-click on the ZIP file and choose "Extract All" or "Extract Here."',
        },
        environment: {
          title: "Set Up the Environment:",
          description:
            'Ensure you have Python installed and install dependencies with "pip install -r requirements.txt".',
        },
        shell: {
          title: "Run shell.py Script:",
          description: "To run the shell.py script, use the following command:",
          code: "python shell.py",
        },
        examples: {
          title: "Explore the Examples:",
          description:
            'If there is an "examples" folder, navigate to it with "cd examples" and run specific examples.',
        },
      },
    },
    kn: {
      heading: "ಸ್ಥಾಪನೆ",
      install: {
        title: "pip ಬಳಸಿ ಪ್ಯಾಕೇಜ್ ಅನ್ನು ಸ್ಥಾಪಿಸಿ",
        description: "ನಿಮ್ಮ ಟರ್ಮಿನಲ್‌ನಲ್ಲಿ ಈ ಕೆಳಗಿನ ಕೋಡ್ ಅನ್ನು ಟೈಪ್ ಮಾಡಿ:",
        copyButton: "ನಕಲು ಮಾಡಿ",
        copiedButton: "ನಕಲು ಮಾಡಲಾಗಿದೆ!",
        code: "pip install tattva",
      },
      sections: {
        github: {
          title: "ನಿಮ್ಮ GitHub ರಿಪೊಸಿಟರಿಯನ್ನು ಹೂಡಿಕೆ ಮಾಡಿ:",
          description: "ನಿಮ್ಮ GitHub ರಿಪೊಸಿಟರಿ ನೀವು ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ಹೊಂದಿದ್ದು ಸ್ಥಳಾಂತರಿಸಿ.",
          linkText: "ತತ್ತ್ವ ರಿಪೊಸಿಟರಿ",
        },
        zip: {
          title: "ZIP ಆರ್ಕೈವ್ ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ:",
          description: 'ರಿಪೊಸಿಟರಿ ಮುಖ್ಯ ಪುಟದ "ಕೋಡ್" ಬಟನ್ ನೋಡಿ. ಅದನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು "ಡೌನ್‌ಲೋಡ್ ZIP" ಆಯ್ಕೆಮಾಡಿ.',
        },
        extract: {
          title: "ZIP ಆರ್ಕೈವ್ ಅನ್ನು ಹಾಣಿಹಾಕಿ:",
          description: 'ZIP ಫೈಲ್ ಅನ್ನು ಒಂದು ಕಡೆಯಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು "ಎಕ್ಸ್‌ಟ್ರಾಕ್ಟ್ ಆಲ್" ಅಥವಾ "ಇಲ್ಲಿ ಎಕ್ಸ್‌ಟ್ರಾಕ್ಟ್" ಆಯ್ಕೆ ಮಾಡಿ.',
        },
        environment: {
          title: "ಪರಿಸರವನ್ನು ಸ್ಥಾಪಿಸಿ:",
          description: 'ನೀವು Python ಸ್ಥಾಪಿಸಿರುತ್ತೀರಿ ಎಂದು ಖಚಿತಗೊಳಿಸಿ ಮತ್ತು "pip install -r requirements.txt" ಮೂಲಕ ಅವಶ್ಯಕತೆಯಿರುವುದನ್ನು ಸ್ಥಾಪಿಸಿ.',
        },
        shell: {
          title: "shell.py ಸ್ಕ್ರಿಪ್ಟ್ ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಿ:",
          description: "shell.py ಸ್ಕ್ರಿಪ್ಟ್ ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು ಈ ಕಮಾಂಡ್ ಅನ್ನು ಬಳಸಿರಿ:",
          code: "python shell.py",
        },
        examples: {
          title: "ಉದಾಹರಣೆಗಳನ್ನು ಅನುಸಾರಿಸಿ:",
          description: 'ನೀವು "ಉದಾಹರಣೆಗಳು" ಫೋಲ್ಡರ್ ಅನ್ನು ಹೊಂದಿದ್ದರೆ, "cd examples" ಮೂಲಕ ತೆರಳಿ ಮತ್ತು ನಿರ್ದಿಷ್ಟ ಉದಾಹರಣೆಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಿ.',
        },
      },
    },
  };

  const currentTranslation = translations[language]; // Get current translations

  return (
    <>
      <div className="p-6 bg-light-grey min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-dark-blue">
            {currentTranslation.heading}
          </h1>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {language === 'en' ? 'Translate to Kannada' : 'Translate to English'}
          </button>
        </div>

        {/* Install Section */}
        <div className="p-4 bg-[#FF8C00] rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-2 text-dark-blue">
            {currentTranslation.install.title}
          </h2>
          <p>{currentTranslation.install.description}</p>
          <div className="flex items-center bg-light-grey rounded p-2">
            <pre className="mb-0 mr-2">{currentTranslation.install.code}</pre>
            <CopyToClipboard
              text={currentTranslation.install.code}
              onCopy={handleCopy}
            >
              <button
                className="px-2 py-1 bg-dark-blue text-[#e6e6e6] rounded"
              >
                {isCopied ? currentTranslation.install.copiedButton : currentTranslation.install.copyButton}
              </button>
            </CopyToClipboard>
          </div>
        </div>

        {/* GitHub Repository Section */}
        <div className="p-4 bg-[#FF8C00] rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {currentTranslation.sections.github.title}
          </h2>
          <p>
            {currentTranslation.sections.github.description} <br />
            <a
              href="https://github.com/Bhaskar-N-Prasad/Tattva"
              className="text-[#4f85fa] hover:text-[#566adf] font font-bold"
            >
              {currentTranslation.sections.github.linkText}
            </a>
          </p>
        </div>

        {/* Remaining Sections */}
        <div className="p-4 bg-[#FF8C00] rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {currentTranslation.sections.zip.title}
          </h2>
          <p>
            {currentTranslation.sections.zip.description}
          </p>
        </div>

        <div className="p-4 bg-[#FF8C00] rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {currentTranslation.sections.extract.title}
          </h2>
          <p>
            {currentTranslation.sections.extract.description}
          </p>
        </div>

        <div className="p-4 bg-[#FF8C00] rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {currentTranslation.sections.environment.title}
          </h2>
          <p>
            {currentTranslation.sections.environment.description}
          </p>
        </div>

        <div className="p-4 bg-[#FF8C00] rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {currentTranslation.sections.shell.title}
          </h2>
          <p>
            {currentTranslation.sections.shell.description} <br />
            <code>{currentTranslation.sections.shell.code}</code>
          </p>
        </div>

        <div className="p-4 bg-[#FF8C00] rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {currentTranslation.sections.examples.title}
          </h2>
          <p>
            {currentTranslation.sections.examples.description} <br />
            <code>{currentTranslation.sections.examples.code}</code>
          </p>
        </div>

        <div className="p-4 bg-blue-100 rounded-lg shadow-md mt-4">
          <p>
            These steps should guide you through the process of downloading, extracting, and running a Python script from your GitHub repository.
          </p>
        </div>
      </div>
    </>
  );
}

export default Installation;
