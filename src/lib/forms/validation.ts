
export function notEmpty(fieldName, value) {
  if(!value) {
    return fieldName + " cannot be empty"
  }

  return "";
}

export function notLessThan(length) {
  return function(fieldName, value) {
    if(value && value.length >= length) {
      return "";
    }

    return fieldName + " cannot be less than " + length + " characters";
  }
}

export function notGreaterThan(length) {
  return function(fieldName, value) {
    if(value && value.length <= length) {
      return "";
    }

    return fieldName + " cannot be greater than " + length + " characters";
  }
}

export function doesntMatchRegex(regex, errorMessage) {
  return function(fieldName, value) {
    if(value && !regex.test(value)) {
      return "";
    }

    return errorMessage;
  }
}

export function dumpValue(fieldName, value) {
  console.log(fieldName + ": " + value);

  return "";
}

export function isChecked(fieldName, checked) {
  if(checked) {
    return "";
  }

  return fieldName + " must be checked";
}