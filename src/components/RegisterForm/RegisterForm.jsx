import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { Btn, Form, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
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
        <Input type="password" name="password" placeholder='password' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$" required/>
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
