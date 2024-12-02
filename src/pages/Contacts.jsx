import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';

const Contacts = () => {
  useEffect(() => scrollToTop());
  return <div>Contact</div>;
};

export default Contacts;
