import React from 'react'
import Docucards from '../cards/Docucards'
import documen from '../../data/documen.json'

function Documentation() {
  return (
    <div className="p-6 bg-light-grey min-h-screen">
    <h1 className="text-4xl font-bold mb-4 text-dark-blue">Tattva Language Documentation</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Layout for the cards */}
        {documen.map((item) => (
          <Docucards
            key={item.id} // Unique key for each item
            title={item.title} // Passing the title to Docucards
            intro={item.intro} // Passing the intro to Docucards
            path={item.pathforlinking} // Passing the path for linking (assuming it’s used in Docucards)
          />
        ))}
      </div>
    {/* <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-dark-blue">Keywords</h2>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">1. akshara</h3>
        <p>The <code>akshara</code> keyword is used to define a variable or function.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>akshara hesru = 10</code><br/>
          <code>akshara vayassu = 25</code><br/>
          <code>akshara hesru_na_oo = 'Hello, World!'</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">2. matte</h3>
        <p>The <code>matte</code> keyword is used for logical AND operation.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>matte 5 &gt; 3 ; True</code><br/>
          <code>matte 10 &lt; 5 ; False</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">3. athava</h3>
        <p>The <code>athava</code> keyword is used for logical OR operation.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>athava 5 &gt; 3 ; True</code><br/>
          <code>athava 10 &lt; 5 ; False</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">4. aadare</h3>
        <p>The <code>aadare</code> keyword is used for conditional statements (equivalent to 'if' in many programming languages).</p>
        <div className="bg-light-grey p-2 rounded">
          <code>aadare 5 &gt; 3 TO odu('5 is greater than 3')</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">5. illadiddare</h3>
        <p>The <code>illadiddare</code> keyword is used in conditional statements as 'else'.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>aadare 5 &gt;; 10 TO odu('5 is greater than 10')</code><br/>
          <code>illadiddare odu('5 is not greater than 10')</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">6. illa_andre</h3>
        <p>The <code>illa_andre</code> keyword is used in conditional statements as 'else if'.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>aadare 5 '&gt;' 10 TO odu('5 is greater than 10')</code><br/>
          <code>illa_andre 5 &lt; 10 TO odu('5 is less than 10')</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">7. aguva_varigu</h3>
        <p>The <code>aguva_varigu</code> keyword is used in loops for iterating over a range.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>aguva_varigu i mundu_varisu 1 satya_iruva_varigu 10 TO odu(i)</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">8. odu</h3>
        <p>The <code>odu</code> keyword is used to take input.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>akshara hesaru = odu()</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">9. bari</h3>
        <p>The <code>bari</code> keyword is used to print output.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>bari("Hello World")</code>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-xl font-bold text-blue-500">10. kaarya</h3>
        <p>The <code>kaarya</code> keyword is used to define a function.</p>
        <div className="bg-light-grey p-2 rounded">
          <code>kaarya add(x, y) bari(x + y)</code>
        </div>
      </div>
    </div> */}
  </div>

  )
}

export default Documentation
