
import { render, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

/** @jsx h */

/* const App = () => {
	const [input, setInput] = useState('');

  useEffect(() => {
    console.log(input);
    
  }, [input])
	return (
		<div>
			<p>Do you agree to the statement: "Preact is awesome"?</p>
			<input value={input} onInput={e => setInput(e.target.value)} className="border h-14 w-2/6" />
		</div>
	)
}

render(<App />, document.body); */
import register from 'preact-custom-element';


function TextSection({ heading, content }) {
  return (
      <div>
          <h1 className="text-5xl">{heading}</h1>
          <p className="text-2xl">{content}</p>
          
      </div>
  );
}

register(TextSection, 'text-section', [], { shadow: false });

