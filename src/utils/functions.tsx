// Utilities
export const getError = (name: any, formik: any) => {
  return formik?.errors?.[name] && formik?.touched?.[name] ? 'form-input-error' : '';
}