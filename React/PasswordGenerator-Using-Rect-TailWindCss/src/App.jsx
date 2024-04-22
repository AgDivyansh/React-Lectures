import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // use ref hooks
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    console.log("password generator is called : ");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      // console.log(`NNumber is now allowed`) ;
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }
    for (let i = 1; i <= length; i++) {
      // const element = array[ilet];
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    // password.current?.select() ;
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
    {/* <h1 className="bg-orange-500 felx justify-left" >sample</h1> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-4 flex flex-col gap-10">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        {/* test */}
        <div className="flex sadow rounded-lg overflow-hidden mb-4">
          <input
            type="text "
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy{" "}
          </button>
        </div>
        <div className="flex text-sm gap-x-2 justify-between">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
                passwordGenerator();
              }}
            />
            <label> Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed(
                  (prev) => !prev
                    // setNumberAllowed();
                  // }
                  // passwordGenerator() ;
                );
              }}
            />
            <label htmlFor="numberInput" className="cursor-pointer">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev
                  // setCharAllowed();
                );
              }}
            />
            <label htmlFor="characterInput" className="cursor-pointer">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
