import React, { useRef, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  // Hooks

  // --side effects
  useEffect(() => {
    nameInputRef.current.focus();
    surnameInputRef.current.placeholder = 'Your surname';
  }, []);

  // refs
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const selectInputRef = useRef();
  const buttonOneRef = useRef();
  const buttonTwoRef = useRef();
  //
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleOnChange = (num) => {
    //
    // const newStr = selectInputRef.current.value
    //   .split('')
    //   .map((letter, index) => {
    //     if (index < num) {
    //       return letter.toUpperCase();
    //     } else {
    //       return letter;
    //     }
    //   })
    //   .join('');
    // console.log(newStr);
  };
  const getClickedButton = (e) => {
    if (e.target === buttonOneRef.current) {
      buttonOneRef.current.innerText = 'Wohoo';
      buttonTwoRef.current.innerText = 'Damn';
    } else {
      buttonOneRef.current.innerText = 'Damn';
      buttonTwoRef.current.innerText = 'Wohho';
    }
  };
  //
  return (
    <>
      <form>
        <div>
          <label htmlFor='name'>Name: </label>
          {arr.map((item) => {
            if (item === 7) {
              return <Input ref={nameInputRef} />;
            } else {
              return <Input key={item} />;
            }
          })}

          <label htmlFor='surname'>Surname: </label>
          <Input ref={surnameInputRef} />
        </div>
        <select
          ref={selectInputRef}
          name='city'
          id='city'
          onChange={() => handleOnChange(5)}
        >
          <option value='kaunas'>Kaunas</option>
          <option value='vilnius'>Vilnius</option>
          <option value='alytus'>Alytus</option>
        </select>
      </form>
      <div>
        <Button text='Click Me' action={getClickedButton} ref={buttonOneRef} />
        <Button
          text='Don click him'
          action={getClickedButton}
          ref={buttonTwoRef}
        />
        <Button text='Sup!' action={() => alert('Sup!')} />
      </div>
    </>
  );
};

export default Form;
