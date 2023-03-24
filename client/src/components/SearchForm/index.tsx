// modules
import {
  ChangeEvent,
  useState
} from 'react';

import {
  useNavigate,
  useSearchParams
} from 'react-router-dom';

import {
  SyntheticEvent
} from 'react';

// import styles
import './_SearchForm.scss';

// assets
import IconSearch from './search.png';

// main component definition
const SearchForm = () => {
  // hooks
  const [ q ] = useSearchParams();

  // state
  const [ query, setQuery ] = useState<string>(q.get('search') || '');

  // hooks
  const navigate = useNavigate();

  // methods
  const _handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!!query) {
      navigate(`/items?search=${ query }`);
    }
  };

  const _onChange = (event: ChangeEvent<HTMLFormElement>) => {
    setQuery(event.target.value);
  };

  // render
  return (
    <form
      className="search-form"
      onSubmit={ _handleSubmit }
      onChange={ _onChange }
    >
      <input
        name="search"
        type="text"
        placeholder="Nunca dejes de buscar"
        className="search-form-input"
        defaultValue={ query }
      />

      <button
        type="submit"
        className="search-form-button"
      >
        <img
          alt="Search"
          src={ IconSearch }
          width={ 18 }
          height={ 18 }
        />
      </button>
    </form>
  );
};

export default SearchForm;