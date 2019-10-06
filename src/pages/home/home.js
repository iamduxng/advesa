import React, { useRef, useState } from 'react';
import rootStore from 'stores';
import { Provider } from 'mobx-react';
import { debounce } from 'utils/helpers';

import { ListPosts, SearchField } from 'components';

const HomePage = () => {
  const [keyword, setKeyword] = useState('');
  const searchRef = useRef();

  const handleSubmit = debounce(() => {
    setKeyword(searchRef.current.value);
  },250);

  return <Provider store={rootStore}>
    <div className="home">
      <SearchField ref={searchRef} handleSubmit={handleSubmit}/>
      <ListPosts keyword={keyword}/>
    </div>
  </Provider>
};

export default HomePage;