import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { Btn, Form, Input, Label, Text } from './RegisterForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if( form.elements.password.value.length < 8) {
     return Notify.failure('Password should consist at least 8 letter, with 1 up letter.');
    }
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" placeholder='Stepan Bandera' required/>
      </Label>
      <Label>
        Email
        <Input type="email" name="email" placeholder='stepanbandera@gmail.com' required/>
      </Label>
      <Label>
        Password
        <Text>Password should consist of at least 8 letters, with 1 up letter</Text>
        <Input type="password" name="password" placeholder='password' /* pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,24}$" */ required/>
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
