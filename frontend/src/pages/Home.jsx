import * as React from 'react';
import { theme, logo } from '../styles/theme';
import '../styles/Home.css';
import { ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='home'>
        <img src={logo} alt='totoro logo' className='logo'/>
        <Typography variant='h1' sx={{ m: 3 }}>
          Welcome to Slackr!
        </Typography>
        <form>
          <table>
            <tbody>
              <tr className='row-style'>
                <Typography sx={{ mr: 2 }}>Email</Typography>
                <td>
                  <TextField
                    variant='outlined'
                    placeholder='youremail@email.com'
                    type='text'
                    required
                    size='small'
                  />
                </td>
              </tr>
              <tr className='row-style'>
                <Typography sx={{ mr: 2 }}>Password</Typography>
                <td>
                  <TextField
                    variant='outlined'
                    placeholder='********'
                    type='password'
                    required
                    size='small'
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className='bottom'>
          <Button variant='contained' color='primary'>Login</Button>
          <Typography sx={{ mt: 3 }}>New to Slackr? Register <Link href='/register'>here</Link>!</Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}
