import { Day } from '@/types/types/Day'

export type DeyCellProps = {
	currentDate?: number
	day?: Date
	width?: string
	height?: string
	background?: string
	color?: string
	isBorderRadius?: boolean
	selectDate?: (date: Date) => void
	selectedDay?: number
	isInteractive?: boolean
	isBorder?: boolean
	textPosition?: 'center' | 'topLeft'
	callback?: () => void
	dayInformation?: Day
}

export type DayProps = Pick<
	DeyCellProps,
	| 'width'
	| 'height'
	| 'background'
	| 'color'
	| 'isBorderRadius'
	| 'isInteractive'
	| 'isBorder'
	| 'textPosition'
> & {
	currentDay?: boolean
	selectedDay?: boolean
	dayNumberMonth?: number
}
