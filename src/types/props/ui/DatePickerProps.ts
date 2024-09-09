export type DatePickerProps = {
	onDateChange: (date: Date) => void
	label?: string
	margin?: string
}

export type WrapperProps = Pick<DatePickerProps, 'margin'>
