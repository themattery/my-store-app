
import React from 'react';

const HelpButton = () => {
  const handleClick = () => {
    alert("Aqui você pode pedir ajuda ou ver mais informações!");
  };

  return (
    <button onClick={handleClick} className="help-button p-2 bg-blue-600 text-white rounded">
      Precisa de ajuda?
    </button>
  );
};

export default HelpButton;
