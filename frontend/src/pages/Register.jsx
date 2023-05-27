import * as React from 'react';
import { theme, logo } from '../styles/theme';
import { ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/Register.css';

export const Register = () => {
	const navigate = useNavigate();

	const returnHome = () => {
		navigate('/');
	}

	return (
		<ThemeProvider theme={theme}>
			<div className='home'>
				<img src={logo} alt='totoro logo' className='logo'/>
				<Typography variant='h1' sx={{ m: 3 }}>
					Join the Slackr community!
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
								<Typography sx={{ mr: 2 }}>Full Name</Typography>
								<td>
									<TextField
										variant='outlined'
										placeholder='John Smith'
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
							<tr className='row-style'>
								<Typography sx={{ mr: 2 }}>Confirm Password</Typography>
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
				<div className='btns-bottom'>
					<Button variant='contained' color='primary'>Register</Button>
					<Button variant='outlined' onClick={returnHome}>Return</Button>
				</div>
			</div>
		</ThemeProvider>
	);
}