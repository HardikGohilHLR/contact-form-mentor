// Component - Input
import clsx from 'clsx';
import { getError } from '@/utils/functions';
import { FormError } from '@/components';

type Props = {
  className?: string;

  label: string;
  name: string;
  type?: string;
  isRequired?: boolean;

  formik: any;
}

export const Input = ({
  className,
  label,
  isRequired,
  name,
  type = "text",
  formik
}: Props) => {
  return (
    <>
      <div className={clsx('form-control', className)}>
        {
          label &&
          <label htmlFor={name}>
            {label}

            {isRequired && <span>*</span>}
          </label>
        }

        <input
          type={type}
          name={name}
          id={name}
          value={formik?.values?.[name]}
          onChange={formik?.handleChange}
          className={clsx('form-input', getError(name, formik))}
        />

        <FormError name={name} formik={formik} />
      </div>
    </>
  )
}
