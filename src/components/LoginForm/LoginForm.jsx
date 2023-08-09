import css from './LoginForm.module.css';
import { nanoid } from 'nanoid';

export const LoginForm = () => {
    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    const handleSubmit = (e) => {
      e.preventDefault();
      // const form = e.currentTarget;
      // const email = form.elements.email.value;
      // const password = form.elements.password.value;

      // const finalUserData = {
      //   email,
      //   password,
      // }
    }

    return (
    <div className={css.registerFormContainer}>

    <form onSubmit={handleSubmit} className={css.formstyle}>

      <label htmlFor={emailInputId} className={css.inputname}>
        Email
      </label>
      <input
        type="email"
        name="email"
        className={css.inputstyle}
        title="Valid email should be provided"
        id={emailInputId}
        required
      />

<label htmlFor={passwordInputId} className={css.inputname}>
        Password
      </label>
      <input
        type="text"
        name="password"
        className={css.inputstyle}
        title="Valid email should be provided"
        id={passwordInputId}
        required
      />

      <button type="submit" className={css.button}>
        Log In!
      </button>
    </form>
        
    </div>
)}

export default LoginForm;