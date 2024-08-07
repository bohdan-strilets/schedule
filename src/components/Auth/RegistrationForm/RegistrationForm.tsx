import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import TextField from '@/components/UI/TextField'
import useResponsive from '@/hooks/useResponsive'
import { RegistrationFormInputs } from '@/types/inputs/RegistrationFormInputs'
import { validation } from '@/validation/RegistrationFormSchema'

import { FormTitle } from './RegistrationForm.styled'

const RegistrationForm: FC = () => {
	const { isMaxMobile, isMaxTablet, isMaxLaptop } = useResponsive()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationFormInputs>(validation)

	const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) => {
		console.log(data)
	}

	const getFieldWidth = () => {
		if (isMaxMobile) {
			return '290px'
		}
		if (!isMaxMobile && isMaxTablet) {
			return '550px'
		}
		if (!isMaxMobile && !isMaxTablet && isMaxLaptop) {
			return '430px'
		}
		return '550px'
	}

	return (
		<div>
			<FormTitle>registration</FormTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField<RegistrationFormInputs>
					register={register}
					label="First name"
					name="firstName"
					type="text"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					placeholder="User"
					errors={errors}
					rules={{ required: true, minLength: 2, maxLength: 70 }}
				/>
				<TextField<RegistrationFormInputs>
					register={register}
					label="Last name"
					name="lastName"
					type="text"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					placeholder="Test"
					errors={errors}
					rules={{ required: true, minLength: 2, maxLength: 70 }}
				/>
				<TextField<RegistrationFormInputs>
					register={register}
					label="Email"
					name="email"
					type="text"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					placeholder="user.name@gmail.com"
					errors={errors}
					rules={{ required: true }}
				/>
				<TextField<RegistrationFormInputs>
					register={register}
					label="Password"
					name="password"
					type="password"
					width={getFieldWidth()}
					height="50px"
					margin="0 0 20px 0"
					errors={errors}
					rules={{ required: true, minLength: 6, maxLength: 12 }}
				/>
				<Button type="submit" height="45px" margin="0 0 40px 0">
					registration
				</Button>
			</form>
		</div>
	)
}

export default RegistrationForm
