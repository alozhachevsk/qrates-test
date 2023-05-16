import React, { FC, ChangeEvent } from 'react';
import classNames from 'classnames';
import './index.scss';

interface InputProps {
  className?: string;
  placeholder: string;
  name: string;
  type?: string;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({
  className,
  placeholder,
  name,
  type = 'text',
  onChange,
}) => {
  const [searchVal, setSearchVal] = React.useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    onChange(e.target.value);
  }

  return (
    <input
      className={classNames('input', className)}
      onChange={handleInput}
      value={searchVal}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}

export default Input;
