import {
	createTheme, ThemeProvider
} from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import {
	AdapterDayjs
} from '@mui/x-date-pickers/AdapterDayjs'
import {
	LocalizationProvider
} from '@mui/x-date-pickers/LocalizationProvider'
import {
	StaticTimePicker
} from '@mui/x-date-pickers/StaticTimePicker'
import dayjs from 'dayjs'
import React, {
	useState
} from 'react'
import {
	IoIosTimer
} from 'react-icons/io'
import {
	DivBoxTimeSC, DivBoxTimeTitleSC
} from '../style.js'

const darkTheme = createTheme({
	palette: {

		...{
			background: {
				default: 'rgba(0,0,0,0)',
				paper: 'rgba(0,0,0,0)'
			}
		},
		text: {
			...{
				primary: '#fff',
				secondary: '#fff'
			}
		}
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					width: 250
				}
			}

		},
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					color: '#EDB935'
				}
			}
		}
	}
})

const TimeComponent = (props) => {
	const {
		title,
		setValue,
		value,
		onChange
	} = props
	const [isShowTimePicker, setIsShowTimePicker] = useState(false)

	const onClick = (status) => (e) => {
		setIsShowTimePicker(status)
	}

	const onAccept = (e) => {
		setIsShowTimePicker(false)
	}

	return (
		<DivBoxTimeSC>
			<DivBoxTimeTitleSC
				onClick={ onClick(!isShowTimePicker) }
			>
				{ `${ title } - ${ dayjs(value).format('LT') }` }
				<IoIosTimer
					size={ 20 }
				/>
			</DivBoxTimeTitleSC>

			{ isShowTimePicker ? <ThemeProvider theme={ darkTheme }>
				<LocalizationProvider dateAdapter={ AdapterDayjs }>
					<StaticTimePicker
						displayStaticWrapperAs="mobile"
						value={ value }
						onChange={ (newValue) => {
							onChange(newValue)
							setValue(newValue)
						} }
						onAccept={ onAccept }

						renderInput={ (params) => <TextField { ...params } /> }
					/>
				</LocalizationProvider>
			</ThemeProvider> : null }

		</DivBoxTimeSC>
	)
}

export default TimeComponent
