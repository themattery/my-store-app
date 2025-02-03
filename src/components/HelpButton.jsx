
import React from 'react';

const HelpButton = () => {
  const handleClick = () => {
    alert("Aqui você pode pedir ajuda ou ver mais informações!");
  };

  return (
    <div className="help-button">
        <button onClick={handleClick}>
        Precisa de ajuda?
        </button>
    </div>
  );
};

export default HelpButton;
