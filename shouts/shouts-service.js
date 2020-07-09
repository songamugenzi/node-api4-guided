module.exports = {
  isValid,
};

function isValid(shout) {
  // validate data *** BEFORE *** sending it to the database
  // the body should have a message property

  const validationResult = {
    successful: true,
    message: "",
  };

  if (!shout.message) {
    validationResult.message = "please provide the message";
  }

  // the message property should be a string
  if (shout.message && typeof shout.message !== "string") {
    validationResult.message = "the message should be a string of text";
  }

  // the message property should have at least 3 characters
  if (shout.message && isString(shout.message) && shout.message.length < 3) {
    validationResult.message = "the message should have at least 3 characters";
  }

  validationResult.successful = Boolean(validationResult.message === "");

  return validationResult;
}

function isString(message) {
  return Boolean(typeof message === "string");
}
