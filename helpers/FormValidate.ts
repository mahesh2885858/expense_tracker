interface InputTypes {
  [key: string]: string | number;
  name: string;
  email: string;
  password: string;
  cpassword: string;
}

const FormValidate = (
  inputs: InputTypes,
  stringLength: number,
  passwordLength: number
): {
  errorField: string | null;
  errorMessage: string;
} => {
  const { cpassword, email, name, password } = inputs;

  const emailExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (name.trim().length < stringLength) {
    return {
      errorField: "name",
      errorMessage: `Name should be more than ${stringLength} characters`,
    };
  } else if (email.trim().length < stringLength) {
    return {
      errorField: "email",
      errorMessage: `Email should be more than ${stringLength} characters`,
    };
  } else if (!email.match(emailExp)) {
    return {
      errorField: "email",
      errorMessage: `Please Enter a Valid Email`,
    };
  } else if (password.trim().length < passwordLength) {
    return {
      errorField: "password",
      errorMessage: `Password should be more than ${passwordLength} characters`,
    };
  } else if (!(password === cpassword)) {
    return {
      errorField: "password",
      errorMessage: `Both password should Match`,
    };
  } else {
    return {
      errorField: null,
      errorMessage: `Form Validated Successfully`,
    };
  }
};
export default FormValidate;
