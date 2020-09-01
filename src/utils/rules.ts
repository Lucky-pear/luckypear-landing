export type RuleType = {
  valid: boolean;
  message: string;
}

export const validChecker = (rules: RuleType[]) => {
  return rules.filter(each => !each.valid).length === 0;
}

export const emailRules = (value: string):RuleType => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return { valid: regex.test(value), message: 'Invalid Email address' }
}