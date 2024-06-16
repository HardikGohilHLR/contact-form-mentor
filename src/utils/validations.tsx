// Validation Schemas
import * as Yup from 'yup';

export const contactFormValidation = Yup.object({
  firstName: Yup.string()
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name must be 50 characters or less')
    .required('First Name is required')
  ,
  lastName: Yup.string()
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name must be 50 characters or less')
    .required('First Name is required')
  ,
  email: Yup.string().required('Please enter your email.').email('Please enter a valid email.'),
  message: Yup.string().required('Please Enter message.'),
  queryType: Yup.string().required('Please Select Query type.'),
  consent: Yup.boolean()
    .required('To submit this form, please consent to being contacted')
    .oneOf([true], 'To submit this form, please consent to being contacted')
});
