import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardBody, Button } from '@material-tailwind/react';

function Variables() {
  const [isCopiedLeft, setIsCopiedLeft] = useState(false); // Define state variable for left block
  const [isCopiedRight, setIsCopiedRight] = useState(false); // Define state variable for right block

  const code = `def swap_numbers(a, b):
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
print("Second number:", num2)`;


  const output = `Enter first number: 10
Enter second number: 20
After swapping:
First number: 20.0
Second number: 10.0`;

  const code2 = `bari("ondu anke bareyiri")
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
bari("b = " + b)`
  const output2 = `tattva > odisu("example/badalisu.myopl")
ondu anke bareyiri
1
innondu anke bareyiri
2
badalisuva munna
a = 1
b = 2
badalisida nantara
a = 2
b = 1`

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
          <div className="text-dark-blue bg-[#e1d0d0] p-4 rounded-md mb-4">
            Variables are fundamental elements in programming used to store and manipulate data. Think of them as containers that hold values such as numbers, text, or more complex data structures like arrays or objects. In programming, variables serve several crucial purposes.
          </div>
        </div>

        {/* this is code and stuff  */}
        <div className='flex flex-row gap-4'>
          <div className="w-1/2">
            <Card className="mt-6 border-solid rounded-md bg-[#e1d0d0] shadow-lg">
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Code</h2>
                <div className="flex items-center bg-[#a89292] rounded p-2">
                  <pre className="mb-0 mr-2 language-python overflow-x-auto">
                    <code className="language-python ">{code}</code>
                  </pre>
                  <CopyToClipboard text={code} onCopy={handleCopyLeft}>
                    <Button className="ml-2 bg-[#726262]">
                      {isCopiedLeft ? 'Copied!' : 'Copy'}
                    </Button>
                  </CopyToClipboard>
                </div>
              </CardBody>
            </Card>

            <Card className='mt-4 bg-[#e1d0d0] rounded-md'>
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Output</h2>
                <div className="flex items-center bg-light-grey rounded p-2">
                  <pre className="mb-0 mr-2 language-python">
                    <code className="language-python">{output}</code>
                  </pre>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className='w-1/2'>
            <Card className="mt-6 border-solid rounded-md bg-[#e1d0d0] shadow-lg">
              <CardBody>
                <h2 className="text-2xl font-bold mb-2 text-dark-blue">Code</h2>
                <div className="flex items-center bg-[#a89292] rounded p-2">
                  <pre className="mb-0 mr-2 language-python overflow-x-auto">
                    <code className="language-python ">{code2}</code>
                  </pre>
                  <CopyToClipboard text={code2} onCopy={handleCopyRight}>
                    <Button className="ml-2 bg-[#726262]">
                      {isCopiedRight ? 'Copied!' : 'Copy'}
                    </Button>
                  </CopyToClipboard>
                </div>
              </CardBody>
            </Card>

            <Card className='mt-4 bg-[#e1d0d0] rounded-md'>
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

export default Variables;
