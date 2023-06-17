import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
	reducerPath: 'userSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:6000/user',
	}),
	tagTypes: ['User'],
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => '/all',
			transformResponse: (res) => res.reverse(),
			providesTags: ['User'],
		}),
		// addUser: builder.mutation({
		// 	query: (users) => ({
		// 		url: '/data/add',
		// 		method: 'POST',
		// 		body: users,
		// 	}),
		// 	invalidatesTags: ['User'],
		// }),
		// updateUser: builder.mutation({
		// 	query: ({ _id, ...users }) => ({
		// 		url: `/data/update/${_id}`,
		// 		method: 'PUT',
		// 		body: users,
		// 	}),
		// 	invalidatesTags: ['User'],
		// }),
		// deleteUser: builder.mutation({
		// 	query: (_id) => ({
		// 		url: `/data/delete/${_id}`,
		// 		method: 'DELETE',
		// 	}),
		// 	invalidatesTags: ['User'],
		// }),
		// getUserById: builder.query({
		// 	query: (_id) => `/data/getOne/${_id}`,
		// 	invalidatesTags: ['User'],
		// }),
	}),
});

export const { useGetUsersQuery } = userSlice;
