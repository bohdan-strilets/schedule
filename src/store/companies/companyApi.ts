import { createApi } from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from '@/api/axiosBaseQuery'

import { CreateCompanyDto } from '@/types/dto/CreateCompanyDto'
import { EditCompanyDto } from '@/types/dto/EditCompanyDto'
import { UploadCompanyLogoDto } from '@/types/dto/UploadCompanyLogoDto'
import { Company } from '@/types/types/Company'
import { ResponseApi } from '@/types/types/ResponseApi'

export const companyApi = createApi({
	reducerPath: 'companyApi',
	tagTypes: ['company'],
	baseQuery: axiosBaseQuery('company'),
	endpoints(build) {
		return {
			getAll: build.query<ResponseApi<Company[]>, void>({
				query: () => ({ url: 'all', method: 'GET' }),
				providesTags: ['company'],
			}),

			getById: build.query<ResponseApi<Company>, string>({
				query: (companyId) => ({ url: `by-id/${companyId}`, method: 'GET' }),
				providesTags: ['company'],
			}),

			create: build.mutation<ResponseApi<Company>, CreateCompanyDto>({
				query: (dto) => ({
					url: 'create',
					method: 'POST',
					data: dto,
				}),
				invalidatesTags: ['company'],
			}),

			update: build.mutation<ResponseApi<Company>, EditCompanyDto>({
				query: ({ companyId, dto }) => ({
					url: `update/${companyId}`,
					method: 'PATCH',
					data: dto,
				}),
				invalidatesTags: ['company'],
			}),

			delete: build.mutation<ResponseApi, string>({
				query: (companyId) => ({
					url: `delete/${companyId}`,
					method: 'DELETE',
				}),
				invalidatesTags: ['company'],
			}),

			deleteAll: build.mutation<ResponseApi, void>({
				query: () => ({
					url: 'delete-all',
					method: 'DELETE',
				}),
				invalidatesTags: ['company'],
			}),

			uploadLogo: build.mutation<ResponseApi, UploadCompanyLogoDto>({
				query: (dto) => ({
					url: `upload-logo?companyId=${dto.companyId}`,
					method: 'POST',
					data: dto.logo,
				}),
				invalidatesTags: ['company'],
			}),
		}
	},
})

export const {
	useGetAllQuery,
	useGetByIdQuery,
	useCreateMutation,
	useUpdateMutation,
	useDeleteMutation,
	useDeleteAllMutation,
	useUploadLogoMutation,
} = companyApi
