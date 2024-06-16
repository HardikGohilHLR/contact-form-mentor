// Component - Radio
import clsx from 'clsx';

type Props = {
  label: string;
  name: string;

  className?: string;
  value?: any;
  formik: any;
}

export const Radio = ({
  className,
  label,
  value,
  name,
  formik
}: Props) => {
  return (
    <>
      <div className={clsx('form-input radio-input', className)}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={formik?.values?.[name] === value}
          onChange={formik.handleChange} 
        />

        {label && <label htmlFor={name}>{label}</label>}
      </div>
    </>
  )
}
