import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardBody, Button } from '@material-tailwind/react';

function CusLoops() {
  const [isCopiedLeft, setIsCopiedLeft] = useState(false); // Define state variable for left block
  const [isCopiedRight, setIsCopiedRight] = useState(false); // Define state variable for right block

  const code = `# Loop from 0 to 10, printing each value
  for i in range(11):  # Include 10 in the loop
      print(i)
  
  # Iterate over a list and print each element
  patti = [1, 2, 3, 4, 5]
  len_patti = len(patti)  # Get the length of the list
  for i in range(len_patti):
      print(patti[i])
  
  # Create a new list and loop with various conditions
  a = []
  for i in range(11):  # Loop from 0 to 10
      if i == 4:  # If 'i' is 4, skip this iteration
          continue
      elif i == 8:  # If 'i' is 8, exit the loop early
          break
      a.append(i)  # Add 'i' to list 'a'
  
  # Print the final list 'a'
  print(a)
   
  `;


  const output = `python>>
  0
1
2
3
4
5
6
7
8
9
10

  `;

  const code2 = `aguva_varigu i = 0 inda 10 aadamele
  bari(i)
mugisu

akshara patti = [1,2,3,4,5]
akshara len = udda(patti)
aguva_varigu i = 0 inda len aadamele
  bari(patti/i)
mugisu

akshara a = []
aguva_varigu i = 0 inda 10 aadamele; aadare i == 4 aadamele mundu_varisu illadiddare i == 8 aadamele murisu; akshara a = a + i;mugisu
  `
  const output2 = `tattva > odisu("example/suttu_hakuva_helikegalu/forLoop.myopl")
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
  1
  2
  3
  4
  5`

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
            CusLoops are fundamental elements in programming used to store and manipulate data. Think of them as containers that hold values such as numbers, text, or more complex data structures like CusLoops or objects. In programming, CusLoops serve several crucial purposes.
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

export default CusLoops;

