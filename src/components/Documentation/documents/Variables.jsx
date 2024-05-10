import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardBody, Button } from '@material-tailwind/react';

const translations = {
  en: {
    heading: 'Variables',
    variableExplanation:
      'Variables are fundamental elements in programming used to store and manipulate data. Think of them as containers that hold values such as numbers, text, or more complex data structures like arrays or objects. In programming, variables serve several crucial purposes.',
    code: `def swap_numbers(a, b):
  # Swapping logic using a temporary variable
  temp = a
  a = b
  b = temp
  return a, b

# Taking input from the user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Calling the function to swap the numbers
num1, num2 = swap_numbers(num1, num2)

print("After swapping:")
print("First number:", num1)
print("Second number:", num2)`,
    output: `Enter first number: 10
Enter second number: 20
After swapping:
First number: 20.0
Second number: 10.0`,
    code2: `bari("ondu anke bareyiri")
akshara a = odu()
bari("innondu anke bareyiri")
akshara b = odu()
bari("badalisuva munna")
bari("a = " + a)
bari("b = " + b)
akshara c = a
akshara a = b
akshara b = c
bari("badalisida nantara")
bari("a = " + a)
bari("b = " + b)`,
    output2: `tattva > odisu("example/badalisu.myopl")
ondu anke bareyiri
1
innondu anke bareyiri
2
badalisuva munna
a = 1
b = 2
badalisida nantara
a = 2
b = 1`,
  },
  kn: {
    heading: 'ಚಲಾಂಶಗಳು',
    variableExplanation:
      'ಚಲಾಂಶಗಳು ಪ್ರೋಗ್ರಾಮಿಂಗ್‌ನಲ್ಲಿ ಮೂಲಭೂತ ಅಂಶಗಳಾಗಿದ್ದು, ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ. ಇವುಗಳನ್ನು ಸಂಖ್ಯೆಗಳು, ಪಠ್ಯ, ಅಥವಾ ಅರೆಗಳು ಅಥವಾ ವಸ್ತುಗಳಂತಹ ಸಂಕೀರ್ಣ ಡೇಟಾ ರಚನೆಗಳನ್ನು ಹೊಂದಿರುವ ಕಾಂಟೇನರ್‌ಗಳಂತೆ ಕಲ್ಪಿಸಿ. ಪ್ರೋಗ್ರಾಮಿಂಗ್‌ನಲ್ಲಿ, ಚಲಾಂಶಗಳು ಹಲವಾರು ಪ್ರಮುಖ ಉದ್ದೇಶಗಳನ್ನು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.',
    code: `def swap_numbers(a, b):
  # ತಾತ್ಕಾಲಿಕ ವ್ಯತ್ಯಾಸದಿಂದ ಚಲಾಂಶಗಳನ್ನು ವಿನಿಮಯ ಮಾಡುವುದು
  temp = a
  a = b
  b = temp
  return a, b

# ಬಳಕೆದಾರರಿಂದ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸುತ್ತಿದೆ
num1 = float(input("ಮೊದಲ ಸಂಖ್ಯೆ ಬರೆಯಿರಿ: "))
num2 = float(input("ಇನ್ನೊಂದು ಸಂಖ್ಯೆ ಬರೆಯಿರಿ: "))

# ಪ್ರಕ್ರಿಯೆಯನ್ನು ಚಲಾಯಿಸಿ
num1, num2 = swap_numbers(num1, num2)

print("ವಿನಿಮಯದ ನಂತರ:")
print("ಮೊದಲ ಸಂಖ್ಯೆ:", num1)
print("ಇನ್ನೊಂದು ಸಂಖ್ಯೆ:", num2)`,
    output: `ಮೊದಲ ಸಂಖ್ಯೆ ಬರೆಯಿರಿ: 10
ಇನ್ನೊಂದು ಸಂಖ್ಯೆ ಬರೆಯಿರಿ: 20
ವಿನಿಮಯದ ನಂತರ:
ಮೊದಲ ಸಂಖ್ಯೆ: 20.0
ಇನ್ನೊಂದು ಸಂಖ್ಯೆ: 10.0`,
    code2: `bari("ondu anke bareyiri")
akshara a = odu()
bari("innondu anke bareyiri")
akshara b = odu()
bari("badalisuva munna")
bari("a = " + a)
bari("b = " + b)
akshara c = a
akshara a = b
akshara b = c
bari("badalisida nantara")
bari("a = " + a)
bari("b = " + b)`,
    output2: `tattva > odisu("example/badalisu.myopl")
ondu anke bareyiri
1
innondu anke bareyiri
2
badalisuva munna
a = 1
b = 2
badalisida nantara
a = 2
b = 1`,
  },
};

function Variables() {
  const [isCopiedLeft, setIsCopiedLeft] = useState(false);
  const [isCopiedRight, setIsCopiedRight] = useState(false);
  const [language, setLanguage] = useState('en'); // State to toggle languages

  const handleCopyLeft = () => {
    setIsCopiedLeft(true);
    setTimeout(() => setIsCopiedLeft(false), 2000);
  };

  const handleCopyRight = () => {
    setIsCopiedRight(true);
    setTimeout(() => setIsCopiedRight(false), 2000);
  };

  const translation = translations[language]; // Fetch correct translations based on language state

  return (
    <div className="relative p-6 bg-light-grey min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-dark-blue">{translation.heading}</h1>
      
      <button
        className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded"
        onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
      >
        {language === 'en' ? 'Switch to Kannada' : 'Switch to English'}
      </button>

      <div>
        <div>
          <div className="text-dark-blue bg-[#FF8C00] p-4 rounded-md mb-4">
            {translation.variableExplanation}
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div className="w-1/2">
            <Card className="mt-6 border-solid rounded-md bg-[#FF8C00] shadow-lg">
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Code</h2>
                <div className="flex items-center bg-[#FF8C00] rounded p-2">
                  <pre className="mb-0 mr-2 language-python overflow-x-auto">
                    <code className="language-python">{translation.code}</code>
                  </pre>
                  <CopyToClipboard text={translation.code} onCopy={handleCopyLeft}>
                    <Button className="ml-2 bg-[#244f65]">{isCopiedLeft ? 'Copied!' : 'Copy'}</Button>
                  </CopyToClipboard>
                </div>
              </CardBody>
            </Card>

            <Card className="mt-4 bg-[#68e7f0] rounded-md">
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Output</h2>
                <div className="flex items-center bg-[#68e7f0] rounded p-2">
                  <pre className="mb-0 mr-2 language-python">
                    <code className="language-python">{translation.output}</code>
                  </pre>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="w-1/2">
            <Card className="mt-6 border-solid rounded-md bg-[#FF8C00] shadow-lg">
              <CardBody>
                <h2 class="text-2xl font-bold mb-2 text-dark-blue">Code</h2>
                <div className="flex items-center bg-[#FF8C00] rounded p-2">
                  <pre className="mb-0 mr-2 language-python overflow-x-auto">
                    <code className="language-python">{translation.code2}</code>
                  </pre>
                  <CopyToClipboard text={translation.code2} onCopy={handleCopyRight}>
                    <Button className="ml-2 bg-[#244f65]">{isCopiedRight ? 'Copied!' : 'Copy'}</Button>
                  </CopyToClipboard>
                </div>
              </CardBody>
            </Card>

            <Card className="mt-4 bg-[#68e7f0] rounded-md">
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Output</h2>
                <div className="flex items-center bg-[#68e7f0] rounded p-2">
                  <pre className="mb-0 mr-2 language-python">
                    <code className="language-python">{translation.output2}</code>
                  </pre>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Variables;
