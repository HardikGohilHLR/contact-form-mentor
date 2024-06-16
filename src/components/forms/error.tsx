// Components - Error
import { getError } from '@/utils/functions';

type Props = {
  name: any;
  formik: any;
}

export const FormError = ({
  name, formik
}: Props) => {
  return (
    <>
      {
        getError(name, formik) &&
        <span className="form-error">{formik?.errors?.[name]}</span>
      }
    </>
  )
}
