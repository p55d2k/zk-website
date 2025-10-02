'use client';

import { TypeAnimation } from 'react-type-animation';

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle = ({ text }: AnimatedTitleProps) => {
  return (
    <TypeAnimation
      sequence={[500, text]}
      speed={50}
      repeat={1}
    />
  );
};

export default AnimatedTitle;