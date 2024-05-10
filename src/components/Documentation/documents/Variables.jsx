import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardContent, Button, CardBody } from '@material-tailwind/react';

function Variables() {
  const [isCopied, setIsCopied] = useState(false); // Define isCopied state variable

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

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="p-6 bg-light-grey min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-dark-blue">Variable example</h1>
      {/* this is both our code and python code division */}
      <div className='flex flex-row gap-4'>
        {/* block right */}
        <div className="w-1/2">
          <Card className="mt-6 border-solid rounded-md bg-[#e1d0d0] shadow-lg">
            <CardBody>
              <h2 className="text-2xl font-bold mb-2 text-dark-blue">Code</h2>
              <div className="flex items-center bg-[#a89292] rounded p-2">
                <pre className="mb-0 mr-2 language-python overflow-x-auto">
                  <code className="language-python ">{code}</code>
                </pre>
                <CopyToClipboard text={code} onCopy={handleCopy}>
                  <Button ripple="light" className="ml-2 bg-[#726262]">
                    {isCopied ? 'Copied!' : 'Copy'}
                  </Button>
                </CopyToClipboard>
              </div>
            </CardBody>
          </Card>

          <Card className='bg-[#e1d0d0]'>
            <CardBody>
              <h2 className="text-2xl font-bold mb-2 text-dark-blue ">Output</h2>
              <div className="flex items-center bg-light-grey rounded p-2">
                <pre className="mb-0 mr-2 language-python">
                  <code className="language-python">{output}</code>
                </pre>
              </div>
            </CardBody>
          </Card>
        </div>
        {/* block left */}
        <div className='w-1/2'>
          <Card className="mt-6 w w-fit border-solid rounded-md bg-[#e1d0d0] shadow-lg">
            <CardBody>
              <h2 className="text-2xl font-bold mb-2 text-dark-blue">Code</h2>
              <div className="flex items-center bg-[#a89292] rounded p-2">
                <pre className="mb-0 mr-2 language-python overflow-x-auto">
                  <code className="language-python ">{code}</code>
                </pre>
                <CopyToClipboard text={code} onCopy={handleCopy}>
                  <Button ripple="light" className="ml-2 bg-[#726262]">
                    {isCopied ? 'Copied!' : 'Copy'}
                  </Button>
                </CopyToClipboard>
              </div>
            </CardBody>
          </Card>

          <Card className='bg-[#e1d0d0]'>
            <CardBody>
              <h2 className="text-2xl font-bold mb-2 text-dark-blue ">Output</h2>
              <div className="flex items-center bg-light-grey rounded p-2">
                <pre className="mb-0 mr-2 language-python">
                  <code className="language-python">{output}</code>
                </pre>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* ends here ++++++++++++++++++++++++++++++++++++ */}
    </div>
  );
}

export default Variables;
