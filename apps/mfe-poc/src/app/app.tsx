// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { lazy } from 'react';

import NxWelcome from './nx-welcome';

const Button = lazy(() => import('remote_app/Button'));
const HeaderFromHost2 = lazy(() => import('remote_app-2/Header'));

console.log(HeaderFromHost2);

export function App() {
  return (
    <div>
      <h1>Hello, I am the Host :)</h1>
      <HeaderFromHost2 />

      <Button />
    </div>
  );
}

export default App;
