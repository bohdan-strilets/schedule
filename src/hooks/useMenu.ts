import { useState } from 'react'

const useMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const open = () => setIsOpen(true)

	const close = () => setIsOpen(false)

	return { isOpen, open, close }
}

export default useMenu
