'use client'

import { useFormState } from 'react-dom';
import { auth, SignUp } from '@/actions/auth-action';


import Link from 'next/link';

export default function AuthForm({ mode }) {
  const [formState, formAction] = useFormState(auth.bind(null, mode), []); // auth -> helper function die die richte FormAction auf basis
                                                                    // des modes aufruft
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      <p>
        {formState.errors?.length > 0 &&
          <ul id="form-errors">
            {formState.errors.map(err => <li key={err} id="form-errors"> {err} </li>)}
          </ul>
        }
        <button type="submit">
          {mode === 'login' ? 'login' : 'create Signup'}
        </button>
      </p>
      <p>
        {mode === 'login' && <Link href="/?mode=signup">Sign Up new Account.</Link>}
        {mode === 'signup' && <Link href="/?mode=login">Login with existing account.</Link>}
      </p>
    </form>
  );
}
