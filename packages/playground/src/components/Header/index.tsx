import { ReactElement } from 'react';
import { Settings } from './Settings';
const Logo = require('~/assets/ink-logo-on-dark.svg').default;

export const Header = (): ReactElement => {
  return (
    <div className="dark:text-primary dark:bg-primary text-light flex">
      <Logo style={{ height: '4rem' }} />
      <Settings />
    </div>
  );
};
