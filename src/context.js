import { useEffect, useReducer } from 'react';
import React, { useContext } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();
const url = 'https://randomuser.me/api/';

const initialState = {
  loading: false,
  person: null,
  title: 'random person',
  value: 'name',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleHover = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;
      dispatch({ type: 'CHANGE_VALUES', payload: newValue });
    }
  };

  const fetchPerson = async () => {
    dispatch({ type: 'LOADING' });
    const resp = await fetch(url);
    const data = await resp.json();
    const person = data.results[0];

    // destructure and create new object
    const { email, phone } = person;
    const { large: image } = person.picture;
    const { first, last } = person.name;
    const { password } = person.login;
    const {
      street: { number, name },
    } = person.location;
    const { age } = person.dob;
    const newPerson = {
      email,
      phone,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
      image,
    };

    dispatch({ type: 'FETCH_PERSON', payload: newPerson });
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, handleHover, fetchPerson }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
