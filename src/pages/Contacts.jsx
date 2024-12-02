import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';

const Contacts = () => {
  useEffect(() => scrollToTop());
  return <div>contact</div>;
};

export default Contacts;
