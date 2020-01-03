import React from 'react';
import PropTypes from 'prop-types';

const getIdFromText = text => {
  return text.replace(/ /g, '-');
};

const LabelInput = ({ text, value, setter }) => {
  const id = getIdFromText(text);

  const setValue = (eventValue) => {
    if (eventValue) {
      setter(parseFloat(eventValue));
    } else {
      setter(undefined);
    }
  }

  return (
    <div className="my-3">
      <label className="block" htmlFor={id}>
        <span className="text-gray-700 font-semibold">{text}</span>
        <div className="">
          <input
            className="bg-gray-200 border-2 border-gray-200 appearance-none rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400"
            id={id}
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
      </label>
    </div>
  );
};

LabelInput.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setter: PropTypes.func.isRequired
};

export default LabelInput;
