import React from 'react';
import { useForm } from 'react-hook-form';

const InputShared = ({
  placeholder,
  styleshare,
  type,
  register,
  name,
  required,
  max,
  pattern,
  value,
}) => {
  return (
    <input
      type={type}
      className={styleshare}
      placeholder={placeholder}
      value={value}
      {...register(name, {
        required: required,
        maxLength: max,
        pattern: pattern,
      })}
    />
  );
};

export default InputShared;
