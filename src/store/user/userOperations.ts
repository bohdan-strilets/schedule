import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '@/api/api'
import { ResponseApi } from '@/types/types/ResponseApi'
import { User } from '@/types/types/User'
import { handleApiError } from '@/utils/functions/handleApiError'

import { endpoints, operationNames } from './config'

const getCurrentUser = createAsyncThunk<ResponseApi<User>>(
	operationNames.CURRENT_USER,
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await api.get(endpoints.CURRENT_USER)
			return data
		} catch (error: unknown) {
			return handleApiError(error, rejectWithValue)
		}
	}
)

const operations = { getCurrentUser }

export default operations
