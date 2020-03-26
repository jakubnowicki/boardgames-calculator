import React from "react";
import Popup from "reactjs-popup";

const NameLabel = props => {
  const { name, id, updateName, className } = props;
  return (
    <Popup trigger={<button className={className}>{name}</button>} modal closeOnDocumentClick>
        {close => (
          <input
            type="text"
            value={name}
            onChange={e => updateName({ id }, e.target.value)}
            onKeyPress={e => {
              if (e.key === "Enter") {
                close();
              }
            }}
          />
        )}
      </Popup>
  )
}

export default NameLabel;
