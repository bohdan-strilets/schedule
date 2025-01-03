import { FC } from 'react'

import { DaysWeek } from '@/utils/data/daysWeek'

import { WeekDaysProps } from '@/types/props/calendars/WeekDaysProps'

import { DayName, Wrapper } from './WeekDays.styled'

const WeekDays: FC<WeekDaysProps> = ({ currentDay, cellWidth, cellHeight }) => {
	return (
		<Wrapper>
			{DaysWeek.map(({ id, shortName }) => (
				<DayName
					key={id}
					currentDay={currentDay === id}
					cellWidth={cellWidth}
					cellHeight={cellHeight}
				>
					<p>{shortName}</p>
				</DayName>
			))}
		</Wrapper>
	)
}

export default WeekDays
