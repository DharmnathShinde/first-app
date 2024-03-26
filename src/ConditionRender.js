import React from 'react';

function NotEligible() {
  return (
    <h1>You are not eligible for voting</h1>
  );
}

function Eligible() {
  return (
    <h1>You are eligible for voting</h1>
  );
}

function ConditionRender(props) {
  let age = props.age;
  return age < 18 ? <NotEligible /> : <Eligible />;
}

export default ConditionRender;
