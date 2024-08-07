import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/calendars/CalendarSegmentProps'

export const Wrapper = styled.div<WrapperProps>`
	margin: ${({ margin }) => (margin ? margin : '')};
`
