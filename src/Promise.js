import React, { useEffect, useState } from 'react';

function PromiseDemo() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    let p = new Promise((resolve, reject) => {
      let a = 2 + 1;
      if (a === 3) {
        resolve("success");
      } else {
        reject("failed");
      }
    });

    p.then((message) => {
      setMessage("The process is to be " + message);
    }).catch((error) => {

      setMessage(error);
    });
  }, []);
  return (
    <div>
      {message}
    </div>
  );
}
export default PromiseDemo;