import { FC } from 'react'

import useResponsive from '@/hooks/useResponsive'

import vacationPng from '@/assets/vacation/vacation.png'

import CalendarSegment from '../Calendars/CalendarSegment'

import {
	AccentText,
	DataWrapper,
	Image,
	ImageWrapper,
	Text,
	TimerCell,
	TimerLabel,
	TimerValue,
	TimerWrapper,
	Wrapper,
} from './Vacation.styled'

const Vacation: FC = () => {
	const { isTablet, isLaptop } = useResponsive()

	return (
		<Wrapper>
			<ImageWrapper>
				<Image src={vacationPng} alt="Vacation image - vector" />
			</ImageWrapper>
			<DataWrapper>
				<CalendarSegment
					startRange={new Date(2024, 7, 26)}
					endRange={new Date(2024, 8, 1)}
					cellWidth={isTablet ? '80px' : '100%'}
					cellHeight={isLaptop ? '50px' : '40px'}
					background="rgba(0, 0, 0, 0.5)"
					color="var(--white-color)"
					borderRadius={false}
					margin="0 0 20px 0"
				/>
				<Text>
					You have planned a vacation from <AccentText>26.08.2024</AccentText>{' '}
					to <AccentText>01.09.2024</AccentText>
				</Text>
				<TimerWrapper>
					<TimerCell>
						<TimerValue>21</TimerValue>
						<TimerLabel>Days</TimerLabel>
					</TimerCell>
					<TimerCell>
						<TimerValue>07</TimerValue>
						<TimerLabel>Hours</TimerLabel>
					</TimerCell>
					<TimerCell>
						<TimerValue>10</TimerValue>
						<TimerLabel>Minutes</TimerLabel>
					</TimerCell>
					<TimerCell>
						<TimerValue>35</TimerValue>
						<TimerLabel>Seconds</TimerLabel>
					</TimerCell>
				</TimerWrapper>
			</DataWrapper>
		</Wrapper>
	)
}

export default Vacation
