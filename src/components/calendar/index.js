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
	StaticDatePicker
} from '@mui/x-date-pickers/StaticDatePicker'
import dayjs from 'dayjs'
import {
	useState
} from 'react'
import {
	TbCalendar, TbCalendarOff
} from 'react-icons/tb'
import {
	ButtonSC,
	DivBoxButtonsSC,
	DivBoxCalendarAndButtonsSC,
	DivBoxIconSC,
	DivBoxTextSC,
	DivBoxTitleCalendarSC
} from './style'

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
	}
})

const Calendar = (props) => {
	const {
		setValue,
		value,
		onChange
	} = props

	const [isShowCalendar, setIsShowCalendar] = useState(false)

	const onClickCalendarInput = () => {
		setIsShowCalendar(!isShowCalendar)
	}

	const onClickButton = () => () => {
		setIsShowCalendar(false)
	}

	return (
		<div>
			<DivBoxTitleCalendarSC
				onClick={ onClickCalendarInput }
			>
				<DivBoxTextSC>
					{
						dayjs(value).format('MM/DD/YYYY')
					}
				</DivBoxTextSC>
				<DivBoxIconSC>
					{
						isShowCalendar ?
							<TbCalendarOff
								size={ 20 }
							/>
							:
							<TbCalendar
								size={ 20 }
							/>
					}
				</DivBoxIconSC>
			</DivBoxTitleCalendarSC>
			{
				isShowCalendar ?
					<DivBoxCalendarAndButtonsSC>
						<ThemeProvider theme={ darkTheme }>
							<LocalizationProvider dateAdapter={ AdapterDayjs }>
								<StaticDatePicker
									displayStaticWrapperAs="desktop"
									views={ ['year', 'month', 'day'] }
									openTo="day"
									value={ value }
									onChange={ (newValue) => {
										onChange(newValue)
										setValue(newValue)
									} }
									renderInput={ (params) => <TextField { ...params } /> }
								/>
							</LocalizationProvider>
						</ThemeProvider>
						<DivBoxButtonsSC>
							<div></div>
							<ButtonSC
								onClick={ onClickButton('remove') }
							>
								Cancel
							</ButtonSC>
							<ButtonSC
								onClick={ onClickButton('save') }
							>
								OK
							</ButtonSC>
						</DivBoxButtonsSC>
					</DivBoxCalendarAndButtonsSC> : null
			}

		</div>
	)
}

export default Calendar
