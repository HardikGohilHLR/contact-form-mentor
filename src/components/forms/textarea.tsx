// Component - Textarea
import clsx from 'clsx';

import { FormError } from '@/components';
import { getError } from '@/utils/functions';

type Props = {
  label: string;
  name: string;

  className?: string;
  isRequired?: boolean;
  formik: any;
}

export const Textarea = ({
  className,
  label,
  name,
  isRequired,
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

        <textarea name={name}
          id={name}
          rows={4}
          value={formik?.values?.[name]}
          onChange={formik.handleChange}
          className={clsx('form-input', getError(name, formik))}
        >
        </textarea>

        <FormError name={name} formik={formik} />
      </div>
    </>
  )
}
