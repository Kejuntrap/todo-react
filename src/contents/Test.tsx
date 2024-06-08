import reactLogo from './../assets/react.svg';
import viteLogo from './../../public/vite.svg';
import '../App.css';
import { Box, Link } from '@mui/material';
import { ReactElement } from 'react';

function Test(): ReactElement {
  return (
    <>
      <Box>
        <Link href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </Link>
        <Link href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </Link>
      </Box>
    </>
  );
}
export default Test;
