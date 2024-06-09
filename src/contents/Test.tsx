import reactLogo from './../assets/react.svg';
import viteLogo from './../../public/vite.svg';
import '../App.css';
import { Box, Button, Link, Typography } from '@mui/material';
import { ReactElement, useState } from 'react';

function Test(): ReactElement {
  const [count, setCount] = useState(0);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          maxWidth: '100%',
          mt: '56px', mb: '56px', ml: '0px', mr: '0px'
        }}
      >
        <Box>
          <Link href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </Link>
          <Link href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </Link>
        </Box>
        <Typography variant='h1'>Vite + React</Typography>
        <Box sx={{ className: 'card' }}>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Typography>
            Edit
            <Typography component='code' style={{ fontFamily: 'monospace' }}>
              src/App.tsx
            </Typography>
            and save to test HMR
          </Typography>
        </Box>
        <Typography className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </Typography>
      </Box>
    </>
  );
}
export default Test;
