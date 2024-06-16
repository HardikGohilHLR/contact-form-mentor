// Component - CheckBox
import clsx from 'clsx';
import { FormError } from '@/components';

type Props = {
  label: string;
  name: string;

  className?: string;
  isRequired?: boolean;
  formik: any;
}

export const CheckBox = ({
  className,
  label,
  name,
  isRequired,
  formik
}: Props) => {
  return (
    <>
      <div className={clsx('form-control checkbox-control', className)}>
        <input
          type="checkbox"
          name={name}
          checked={formik?.values?.[name]}
          value={formik?.values?.[name]}
          onChange={(e) => formik.setFieldValue(name, e?.target?.checked)}
        />

        {
          label &&
          <label htmlFor={name}>
            {label}

            {isRequired && <span>*</span>}
          </label>
        }

        <FormError name={name} formik={formik} />
      </div>
    </>
  )
}
