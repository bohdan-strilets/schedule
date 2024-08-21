import { FC } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/hooks/useAppSelector'
import { getIsLoggedIn } from '@/store/auth/authSelectors'
import { getUser } from '@/store/user/userSelectors'
import { MenuProps } from '@/types/props/menu/MenuProps'
import { navigationPaths } from '@/utils/data/navigationPaths'

import Button from '../UI/Button'
import CloseButton from '../UI/CloseButton'
import Copyright from '../UI/Copyright'
import Logo from '../UI/Logo'
import { Backdrop, Wrapper } from './Menu.styled'
import Navigation from './Navigation'
import UserBar from './UserBar'

const menuPortal = document.getElementById('menu') as HTMLDivElement

const Menu: FC<MenuProps> = ({ onClose, onBackdropClick }) => {
	const navigate = useNavigate()
	const isLoggedIn = useAppSelector(getIsLoggedIn)
	const user = useAppSelector(getUser)

	const name = `${user?.firstName} ${user?.lastName}`
	const avatar = user?.avatarUrls?.at(-1)

	return createPortal(
		<Backdrop onClick={onBackdropClick}>
			<Wrapper
				initial={{ x: '-100%' }}
				animate={{ x: ['0%', '1%', '0%'] }}
				exit={{ x: '-100%' }}
				transition={{ duration: 0.3 }}
			>
				<CloseButton close={onClose} position={true} top="35px" right="35px" />
				<div>
					<Logo variant="light" />
					<Navigation onClose={onClose} margin="30px 0 0 0" />
				</div>
				<div>
					{isLoggedIn && user ? (
						<UserBar
							avatar={avatar ?? ''}
							name={name}
							email={user?.email}
							variant="light"
						/>
					) : (
						<Button
							type="button"
							height="45px"
							onClick={() => navigate(navigationPaths.AUTH)}
							margin="0 0 30px"
						>
							start
						</Button>
					)}
					<Copyright />
				</div>
			</Wrapper>
		</Backdrop>,
		menuPortal
	)
}

export default Menu
