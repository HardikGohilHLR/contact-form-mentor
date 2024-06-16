// App
import { useState } from 'react';

import axios from 'axios';
import { useFormik } from 'formik';

import { contactFormValidation } from '@/utils/validations';
import { Alert, Input, Radio, Textarea, FormError, CheckBox } from '@/components';

export const App = () => {
  const [formMessages, setFormMessages] = useState<{
    title: string,
    type: string,
  }>({
    type: '',
    title: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik: any = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      queryType: '',
      message: '',
      consent: false,
    },
    validationSchema: contactFormValidation,
    onSubmit: async (_values, { resetForm }: any) => {
      setIsLoading(true);
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      });

      const data = await response?.data;

      if (data?.id) {
        setFormMessages({
          type: 'success',
          title: 'Thanks for completing the form. We\'ll be in touch soon!'
        });
        resetForm();
      } else {
        setFormMessages({
          type: 'error',
          title: 'Something went wrong!'
        });
      }
      setIsLoading(false);

      setTimeout(() => {

      });
    }
  });

  const closeAlert = () => {
    setFormMessages({ title: '', type: '' });
  }

  return (
    <>

      <div className="container">

        <div className="form">
          <h3>Contact Us</h3>

          {formMessages?.title && <Alert {...formMessages} close={closeAlert} />}

          <form onSubmit={formik.handleSubmit}>

            <div className="row">
              <Input
                name="firstName"
                label="First Name"
                formik={formik}
                className="col-6"
              />

              <Input
                name="lastName"
                label="Last Name"
                formik={formik}
                className="col-6"
              />
            </div>

            <Input
              name="email"
              label="Email"
              formik={formik}
            />

            <div className="form-control radio-control">
              <label htmlFor="email">Query Type<span>*</span></label>

              <div className="row">
                <Radio
                  name="queryType"
                  label="General Enquiry"
                  className="col-6"
                  formik={formik}
                  value="generalEnquiry"
                />

                <Radio
                  name="queryType"
                  label="Support Request"
                  className="col-6"
                  formik={formik}
                  value="supportRequest"
                />
              </div>

              <FormError name="queryType" formik={formik} />
            </div>

            <Textarea
              name="message"
              label="Message"
              formik={formik}
            />

            <CheckBox
              label="I Consent to being contacted by the team"
              formik={formik}
              name="consent"
              isRequired
            />

            <div className="form-submit">
              <button className="button" type="submit">
                {isLoading ? 'Please wait...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
