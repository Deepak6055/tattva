import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardBody, Button } from '@material-tailwind/react';

function Conditionals() {
  const [isCopiedLeft, setIsCopiedLeft] = useState(false); // Define state variable for left block
  const [isCopiedRight, setIsCopiedRight] = useState(false); // Define state variable for right block

  const code = `i = 3

  if i == 2:
      print(i)
  elif i == 4:
      print("Bhaskar")
  else:
      print("no")  
  `;


  const output = `python>>
  no
  `;

  const code2 = `akshara i = 3
  aadare i == 2 aadamele
      bari(i)
  illadiddare i == 4 aadamele
      bari("Bhaskar")
  illa bari("no")
  `
  const output2 = `tattva > odisu("example/sharattu_helikegalu.myopl")
  no`

  const handleCopyLeft = () => {
    setIsCopiedLeft(true);
    setTimeout(() => {
      setIsCopiedLeft(false);
    }, 2000);
  };

  const handleCopyRight = () => {
    setIsCopiedRight(true);
    setTimeout(() => {
      setIsCopiedRight(false);
    }, 2000);
  };

  return (
    <div className="p-6 bg-light-grey min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-dark-blue">Variable</h1>
      <div>
        {/* explination of what is a varaiable */}
        <div>
          <div className="text-dark-blue bg-[#FF8C00] p-4 rounded-md mb-4">
            Conditionals are fundamental elements in programming used to store and manipulate data. Think of them as containers that hold values such as numbers, text, or more complex data structures like Conditionals or objects. In programming, Conditionals serve several crucial purposes.
          </div>
        </div>

        {/* this is code and stuff  */}
        <div className='flex flex-row gap-4'>
          <div className="w-1/2">
            <Card className="mt-6 border-solid rounded-md bg-[#FF8C00] shadow-lg">
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Code</h2>
                <div className="flex items-center bg-[#FF8C00] rounded p-2">
                  <pre className="mb-0 mr-2 language-python overflow-x-auto">
                    <code className="language-python ">{code}</code>
                  </pre>
                  <CopyToClipboard text={code} onCopy={handleCopyLeft}>
                    <Button className="ml-2 bg-[#244f65]">
                      {isCopiedLeft ? 'Copied!' : 'Copy'}
                    </Button>
                  </CopyToClipboard>
                </div>
              </CardBody>
            </Card>

            <Card className='mt-4 bg-[#FF8C00] rounded-md'>
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Output</h2>
                <div className="flex items-center bg-[#FF8C00] rounded p-2">
                  <pre className="mb-0 mr-2 language-python">
                    <code className="language-python">{output}</code>
                  </pre>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className='w-1/2'>
            <Card className="mt-6 border-solid rounded-md bg-[#FF8C00] shadow-lg">
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Code</h2>
                <div className="flex items-center bg-[#FF8C00] rounded p-2">
                  <pre className="mb-0 mr-2 language-python overflow-x-auto">
                    <code className="language-python ">{code2}</code>
                  </pre>
                  <CopyToClipboard text={code2} onCopy={handleCopyRight}>
                    <Button className="ml-2 bg-[#244f65]">
                      {isCopiedRight ? 'Copied!' : 'Copy'}
                    </Button>
                  </CopyToClipboard>
                </div>
              </CardBody>
            </Card>

            <Card className='mt-4 bg-[#FF8C00] rounded-md'>
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Output</h2>
                <div className="flex items-center bg-light-grey rounded p-2">
                  <pre className="mb-0 mr-2 language-python">
                    <code className="language-python">{output2}</code>
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

export default Conditionals;

