import React from 'react';

const chores = (props) => {
  const chores = Object.keys(props.chores);
  let choreOutput = chores.map((choreName, index) => {
    return (
      <button key={choreName} onClick={() => props.clicked(choreName)}>
        {props.chores[choreName].name}
      </button>
    )
  });
  return (
    <div className="chores">
      {choreOutput}
    </div>
  );
}

export default chores;
