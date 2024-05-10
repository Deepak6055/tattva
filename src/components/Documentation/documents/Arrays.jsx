import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardBody, Button } from '@material-tailwind/react';

function Arrays() {
  const [isCopiedLeft, setIsCopiedLeft] = useState(false); // Define state variable for left block
  const [isCopiedRight, setIsCopiedRight] = useState(false); // Define state variable for right block

  const code = `# List initialization
  x = [1, 2, 3, 4]
  
  # Function to pop elements from list
  def alisu(lst, index):
      if index < len(lst):
          lst.pop(index)
  
  # Function to print the list
  def bari(lst):
      print(lst)
  
  # Function to add elements to the list
  def serisu(lst, element):
      lst.append(element)
  
  # Pop element at index 3 from the list
  alisu(x, 3)
  bari(x)
  
  # Add element 5 to the list
  serisu(x, 5)
  bari(x)
  
  # Join with another list and update 'x'
  x = x + [6, 7, 8, 9]
  bari(x)
  
  # Remove an element by value
  x.remove(0)  # Assuming 0 is the value to remove
  bari(x)
  
  # Print the middle element based on an index
  mid = 2
  bari([x[mid]])
  
  # Some arithmetic and list operations
  z = 0
  k = [1, 2, 3, 4]
  index = int(z + 1)  # Ensuring a valid index by converting to integer
  bari([k[index]])  # Index-based print
  `;


  const output = `
  [1, 2, 3]
  [1, 2, 3, 5]
  [3]
  [2]`;

  const code2 = `# Array 

  akshara x = [1,2,3,4]
  
  # TO POP ELEMENTS IN ARRAY
  alisu(x,3)
  bari(x)
  
  # TO ADD ELEMENTS IN ARRAY
  serisu(x,5)
  bari(x)
  
  # TO JOIN TWO ARRAY
  x * [6,7,8,9]
  bari(x)
  
  # TO REMOVE ELEMENTS IN ARRAY
  x - 0
  bari(x)
  
  akshara mid = 2
  bari(x/mid)
  
  akshara z = 0
  akshara k = [1,2,3,4]
  bari(k/z+1)
  `
  const output2 = `tattva > odisu("example/rachane.myopl")
  1, 2, 3
  1, 2, 3, 5
  1, 2, 3, 5, 6, 7, 8, 9
  2, 3, 5, 6, 7, 8, 9
  5
  2`

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
            Arrays are fundamental elements in programming used to store and manipulate data. Think of them as containers that hold values such as numbers, text, or more complex data structures like arrays or objects. In programming, Arrays serve several crucial purposes.
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

export default Arrays;

