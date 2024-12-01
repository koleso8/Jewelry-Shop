import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';

const AboutMe = () => {
  useEffect(() => scrollToTop());
  return <div>About me page</div>;
};

export default AboutMe;
