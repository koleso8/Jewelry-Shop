import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';

const AboutMe = () => {
  useEffect(() => scrollToTop());
  return <div>About Mee</div>;
};

export default AboutMe;
