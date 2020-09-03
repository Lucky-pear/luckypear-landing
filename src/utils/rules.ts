export type RuleType = {
  valid: boolean;
  message: string;
}

export const validChecker = (rules: RuleType[]):boolean => {
  return rules.filter(each => !each.valid).length === 0;
}

export const emailRule = (value: string):RuleType => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return { valid: regex.test(value), message: 'Invalid Email address' }
}

export const fillInputRule = (value: string):RuleType => {
  return { valid: value.length !== 0, message: 'Please fill the input' }
}