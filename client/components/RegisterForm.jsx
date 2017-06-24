import React from 'react';
import { Field, reduxForm } from 'redux-form';

const registerForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="text"
              placeholder="password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={pristine || submitting}
          >
            {'Submit'}
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            {'Clear Values'}
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'register',
})(registerForm);
