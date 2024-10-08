import { FC } from 'react'

import { AvatarProps } from '@/types/props/ui/AvatarProps'

import { Image } from './Avatar.styled'

const Avatar: FC<AvatarProps> = ({
	imageUrl,
	width,
	height,
	margin,
	border,
	backgroundSize,
}) => {
	return (
		<Image
			imageUrl={imageUrl}
			width={width}
			height={height}
			margin={margin}
			border={border}
			backgroundSize={backgroundSize}
		/>
	)
}

export default Avatar
