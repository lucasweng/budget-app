const handleAuthError = (e) => {
  const errMessage = `An account already exists with the same email address: ${e.email}, please choose another service provider`;
  console.warn(errMessage);
};

export default handleAuthError;
