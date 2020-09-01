
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Colors } from '../../styles/colors';
import { RuleType } from '../../utils/rules';

interface FormType extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean,
  rule?: (value: string) => RuleType
}

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: ${Colors.lightGrey};
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  height: 20rem;
  background-color: ${Colors.lightGrey};
`;
const ErrorMessage = styled.div`
  margin-top: 4px;
  margin-left: 6px;
  font-size: 12px;
  color: ${Colors.alert};
`;


export const FormInput: React.FC<FormType> = (props) => {
  const {
    multiline,
    rule,
    onChange
  } = props;

  const [value, setValue] = useState("");
  const [ruleResult, setRuleResult] = useState<RuleType>({ valid: true, message: '' })

  useEffect(() => {
    if (rule && value) {
      setRuleResult(rule(value));
    }
  }, [rule, value]);

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
          onChange={_onChange}
        />
        :
        <Input
          {...props}
          onChange={_onChange}
        />
      }
      {!ruleResult.valid && <ErrorMessage>{ruleResult.message}</ErrorMessage>}
    </Wrapper>
  )
}