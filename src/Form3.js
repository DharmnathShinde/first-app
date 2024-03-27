import React from 'react';
import { Formik, Field, Form } from 'formik';

function Form3() {
  return (
    <div>
      <Formik
        initialValues={{ text: '', number: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form>
            <label>
              Enter text
              <Field name="text" type="text" />
            </label>
            <label>
              Enter number
              <Field name="number" type="number" />
            </label>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Form3;
