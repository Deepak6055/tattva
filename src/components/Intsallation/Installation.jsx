import { useState } from 'react';
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Installation() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <>  
    <div className="p-6 bg-light-grey min-h-screen">
    <h1 className="text-4xl font-bold mb-4 text-dark-blue">Installation</h1>

    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-dark-blue">Install the package using pip</h2>
      <p className="mb-4">In your terminal type the following code:</p>
      <div className="flex items-center bg-light-grey rounded p-2">
        <pre className="mb-0 mr-2">pip install tattva</pre>
        <CopyToClipboard text="pip install tattva" onCopy={handleCopy}>
          <button className="px-2 py-1 bg-dark-blue text-[#3B83F6] rounded">
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>

    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-blue-500">Locate Your GitHub Repository:</h2>
      <p className="mb-4">Navigate to your GitHub repository where your project is hosted.
      <br/>
      <a href="https://github.com/Bhaskar-N-Prasad/Tattva" className='text text-[#3B83F6]'> Tattva Repository</a>
      </p>
    </div>

    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-blue-500">Download the ZIP Archive:</h2>
      <p className="mb-4">Look for the "Code" button (usually green) on the repository's main page. Click on it and select "Download ZIP." This will download a compressed ZIP archive of your repository to your local machine.</p>
    </div>

    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-blue-500">Extract the ZIP Archive:</h2>
      <p className="mb-4">Once the ZIP file is downloaded, navigate to its location on your computer. Right-click on the ZIP file and choose "Extract All" or "Extract Here," depending on your file compression utility. Select a folder where you want to extract the contents and click "Extract." This will create a new folder with your repository's content.</p>
    </div>

    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-blue-500">Set Up the Environment:</h2>
      <p className="mb-4">Open a terminal or command prompt in the folder where you extracted the ZIP archive. Ensure you have Python installed. You can check by running python --version or python3 --version in the terminal. If you have a requirements.txt file in your repository, you can install the necessary dependencies by running pip install -r requirements.txt.</p>
    </div>

    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-blue-500">Run shell.py Script:</h2>
      <p className="mb-4">Navigate to the correct directory if needed: <br /><code>cd path/to/your/extracted/repository</code> <br />To run the shell.py script, you can use the following command: <br /><code>python shell.py</code></p>
    </div>

    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-blue-500">Explore the Examples:</h2>
      <p className="mb-4">If there is an examples folder in your repository, navigate to it using the terminal: <br /><code>cd examples</code> <br />To run a specific example, use a command like: <br /><code>python example_script.py</code></p>
    </div>

    <div className="p-4 bg-blue-100 rounded-lg shadow-md mt-4">
      <p className="my-4">These steps should guide you through the process of downloading, extracting, and running a Python script from your GitHub repository. If there are specific requirements or additional setup instructions in your repository, be sure to follow those as well.</p>
    </div>
  </div>
    </>

  )
}

export default Installation
