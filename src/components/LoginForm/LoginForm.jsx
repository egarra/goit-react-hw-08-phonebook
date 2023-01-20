import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { Form, Input, Label, Btn } from './LoginForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if( form.elements.password.value.length < 8) {
      return Notify.failure('Password should consist at least 8 letter, with 1 up letter.');
     }
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>Email
        <Input type="email" name="email" placeholder='stepanbandera@gmail.com' required/>
      </Label>
      <Label>Password
        <Input type="password" name="password" placeholder='password' /* pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,24}$" */ required/>
      </Label>
      <Btn type="submit">Log In</Btn>
    </Form>
  );
};
