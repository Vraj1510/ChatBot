import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
  username: Yup.string().min(2).max(25).required('Please enter your username.'),
  email: Yup.string().email().required('Please enter your email.'),
  password: Yup.string().min(6).required('Password must be atleast 6 characters.'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Password must match'),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email.'),
  password: Yup.string().min(6).required('Password must be atleast 6 characters.'),
});

export const UpdateProfileSchema = Yup.object({
  username: Yup.string().min(2).max(25).required('Please enter your username.'),
  email: Yup.string().email().required('Please enter your email.'),
});

export const UpdatePasswordSchema = Yup.object({
  oldpassword: Yup.string().min(6).required('Password must be atleast 6 characters.'),
  newpassword: Yup.string().min(6).required('Password must be atleast 6 characters.'),
});

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email.'),
});

export const ResetPasswordSchema = Yup.object({
  password: Yup.string().min(6).required('Password must be atleast 6 characters.'),
});
