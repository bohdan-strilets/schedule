import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import Loader from '@/components/UI/Loader'
import NumberField from '@/components/UI/NumberField'
import TextField from '@/components/UI/TextField'
import useModal from '@/hooks/useModal'
import { useCreateMutation } from '@/store/companies/companyApi'
import { AddedCompanyFields } from '@/types/inputs/AddedCompanyFields'
import { isApiError } from '@/utils/functions/isApiError'
import { validation } from '@/validation/AddedCompanySchema'

const AddedCompanyForm: FC = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<AddedCompanyFields>(validation)
	const [createCompany, { isLoading }] = useCreateMutation()
	const { closeModal } = useModal()

	const onSubmit: SubmitHandler<AddedCompanyFields> = async (data) => {
		try {
			await createCompany(data)
			closeModal()
			toast.success('The company has been successfully added')
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.message)
			}
		}
	}

	const handleStartDateChange = (date: Date) => {
		setValue('startWork', date.toISOString())
	}

	const handleEndDateChange = (date: Date) => {
		setValue('endWork', date.toISOString())
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField<AddedCompanyFields>
				register={register}
				label="Company name"
				name="name"
				type="text"
				height="50px"
				margin="0 0 20px 0"
				placeholder="SampleCo"
				errors={errors}
				rules={{ required: true }}
			/>
			<TextField<AddedCompanyFields>
				register={register}
				label="The position you hold"
				name="profession"
				type="text"
				height="50px"
				margin="0 0 20px 0"
				placeholder="Sample Engineer"
				errors={errors}
				rules={{ required: true }}
			/>
			<DatePicker
				onDateChange={handleStartDateChange}
				placeholder="Start"
				label="Start of work in"
				margin="0 0 20px 0"
				defaultValue={new Date()}
			/>
			<DatePicker
				onDateChange={handleEndDateChange}
				placeholder="End"
				label="End of work in"
				margin="0 0 20px 0"
				defaultValue={new Date()}
			/>
			<NumberField
				register={register}
				label="Your salary per hour"
				name="salaryPerHour"
				height="50px"
				margin="0 0 20px 0"
				placeholder="Salary"
				errors={errors}
				rules={{ required: true, min: 0, max: 500 }}
			/>
			{isLoading && <Loader margin="25px 0 25px 0" />}
			<Button type="submit" height="45px" disabled={isLoading}>
				Added
			</Button>
		</form>
	)
}

export default AddedCompanyForm