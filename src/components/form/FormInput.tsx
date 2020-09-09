
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { RuleType } from '../../utils/rules';

interface FormInputProps extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value?: string,
  multiline?: boolean,
  rule?: (value: string) => RuleType,
}

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.lightGrey};
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  height: 20rem;
  background-color: ${({ theme }) => theme.color.lightGrey};
`;
const ErrorMessage = styled.div`
  margin-top: 4px;
  margin-left: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.alert};
`;


export const FormInput: React.FC<FormInputProps> = (props) => {
  const {
    multiline,
    rule,
    onChange,
  } = props;

  const [value, setValue] = useState(props.value);
  const ruleResult = useMemo<RuleType>(() => {
    if(rule && value)
      return rule(value)
    return { valid: true, message: '' }
  }, [rule, value])

  useEffect(() => {
    setValue(props.value);
  }, [props.value])

  const _onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
    if (onChange)
      onChange(e);
  };

  return (
    <Wrapper>
      {multiline ?
        <TextArea
          {...props}
          value={value}
          onChange={_onChange}
        />
        :
        <Input
          {...props}
          value={value}
          onChange={_onChange}
        />
      }
      {!ruleResult.valid && <ErrorMessage>{ruleResult.message}</ErrorMessage>}
    </Wrapper>
  )
}