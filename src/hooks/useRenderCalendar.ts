import { MonthYear } from '@/types/types/MonthYear'

const useRenderCalendar = (date: Date) => {
	const getMonthYear = (): MonthYear => {
		const year = date.getFullYear()
		const month = date.getMonth()
		return { year, month }
	}

	const getNumberDaysInMonth = (): number => {
		const monthYear = getMonthYear()
		return new Date(monthYear.year, monthYear.month + 1, 0).getDate()
	}

	const getStartWeek = (): number => {
		const monthYear = getMonthYear()
		const firstDayOfMonth = new Date(monthYear.year, monthYear.month, 1)
		const dayOfWeek = firstDayOfMonth.getDay() - 1

		if (dayOfWeek === -1) return 6
		return dayOfWeek
	}

	const getCurrentDay = (): number => {
		const currentDay = new Date(date).getDay() - 1

		if (currentDay === -1) return 6
		return currentDay
	}

	const getDaysOfMonth = (): (undefined[] | Date[])[] => {
		const daysOfMonth: (undefined[] | Date[])[] = []
		const daysInWeek = 7
		const numberDaysInMonth = getNumberDaysInMonth()
		const startWeekOn = getStartWeek()
		const monthYear = getMonthYear()

		let day = 1

		const numberOfWeeks = Math.ceil(
			(numberDaysInMonth + startWeekOn) / daysInWeek
		)

		for (let i = 0; i < numberOfWeeks; i++) {
			daysOfMonth[i] = []
			const week = daysOfMonth[i]

			for (let j = 0; j < daysInWeek; j++) {
				if (day > numberDaysInMonth || (i === 0 && j < startWeekOn)) {
					week[j] = undefined
				} else {
					const newDay = new Date(monthYear.year, monthYear.month, day++)
					week[j] = newDay
				}
			}
		}

		return daysOfMonth
	}

	const getDaysOfMonthInRange = (
		startDate: Date,
		endDate: Date
	): (undefined[] | Date[])[] => {
		const daysOfMonth: (undefined[] | Date[])[] = []
		const daysInWeek = 7

		while (startDate <= endDate) {
			const week: undefined[] | Date[] = []
			for (let i = 0; i < daysInWeek; i++) {
				if (
					startDate.getDay() - 1 === i ||
					(startDate.getDay() === 0 && i === 6)
				) {
					if (startDate > endDate) {
						week[i] = undefined
					} else {
						week[i] = new Date(startDate)
						startDate.setDate(startDate.getDate() + 1)
					}
				} else {
					week[i] = undefined
				}
			}
			daysOfMonth.push(week)
		}

		return daysOfMonth
	}

	return {
		getDaysOfMonth,
		getMonthYear,
		getCurrentDay,
		getDaysOfMonthInRange,
	}
}

export default useRenderCalendar
