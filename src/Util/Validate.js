export const validateEmail = (email) => {
  const isEmalValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmalValid) return "Please enter valid Email ID";

  return null;
};

export const validatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isPasswordValid) return "Please enter valid Password";

  return null;
};
