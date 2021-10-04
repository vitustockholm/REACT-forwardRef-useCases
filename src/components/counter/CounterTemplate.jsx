import React, { useRef } from 'react';
import Button from './Button';
import Counter from './Counter';

const CounterTemplate = () => {
  //refs
  const buttonOneRef = useRef();
  const buttonTwoRef = useRef();
  const buttonThreeRef = useRef();

  const disabledButton = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <Counter
        render={(
          count,
          increment //apsirasoma funcija
        ) => (
          <>
            <h2>Count :{count}</h2>
            <div>
              <Button
                text='+1'
                action={(e) => {
                  increment();
                  buttonOneRef.current.disabled = true;
                }}
                ref={buttonOneRef}
              />
              <Button
                text='+2'
                action={(e) => {
                  increment(e, 2);
                  buttonTwoRef.current.disabled = true;
                }}
                ref={buttonTwoRef}
              />
              <Button
                text='+3'
                action={(e) => {
                  increment(e, 3);
                  buttonThreeRef.current.disabled = true;
                }}
                ref={buttonThreeRef}
              />
            </div>
          </>
        )}
      />
      <Counter
        render={(count, increment) => (
          <>
            <h4>Forever alone</h4>
            <Button text={`+${count}`} action={increment} />
          </>
        )}
      />
    </>
  );
};

export default CounterTemplate;
