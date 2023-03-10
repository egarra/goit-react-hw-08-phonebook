import { useState } from 'react';
import { FormInput, Input, Text, Btn, Title } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addFetchedContact } from 'redux/operations'; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { SectionTag } from 'components/Section/Section.styled';

export const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const inputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    } else {
      setNumber(event.target.value)
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault()
    const isAtList = contacts.find(contact => contact.name === name);
    if (isAtList) {
      Notify.failure('Contact with such name is already exist');
      return;
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    
    dispatch(addFetchedContact(contact));
    e.target.reset();
  }

    return (
      <SectionTag>
        <Title>Add your contact in form below</Title>
        <FormInput onSubmit={onFormSubmit}>
        <Text>Name</Text>
        <Input
          placeholder="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
        <Text>Number</Text>
        <Input
          placeholder="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
        <Btn type="submit">Add contact</Btn>
      </FormInput>
      </SectionTag>
    );
  }
