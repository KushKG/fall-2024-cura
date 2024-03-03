/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUser } from '../models/CreateUser';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * get all users
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllUsersUsersGet(
        limit: number = 10,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/',
            query: {
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * get a user by id
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserByIdUsersUserIdGet(
        userId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * change a user's first name
     * @param userId
     * @param newName
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeUserFirstNameUsersUserChangeFirstNameUserIdNewNameGet(
        userId: number,
        newName: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/user/change_first_name/{user_id}/{new_name}',
            path: {
                'user_id': userId,
                'new_name': newName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * change a user's last name
     * @param userId
     * @param newName
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeUserLastNameUsersUserChangeLastNameUserIdNewNameGet(
        userId: number,
        newName: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/user/change_last_name/{user_id}/{new_name}',
            path: {
                'user_id': userId,
                'new_name': newName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * change a user's birthdate
     * @param userId
     * @param newDate
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeUserBirthdateUsersUserChangeBirthdateUserIdNewDateGet(
        userId: number,
        newDate: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/user/change_birthdate/{user_id}/{new_date}',
            path: {
                'user_id': userId,
                'new_date': newDate,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * change a user's gender
     * @param userId
     * @param newGender
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeUserGenderUsersUserChangeGenderUserIdNewGenderGet(
        userId: number,
        newGender: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/user/change_gender/{user_id}/{new_gender}',
            path: {
                'user_id': userId,
                'new_gender': newGender,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * change a user's email
     * @param userId
     * @param newEmail
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeUserEmailUsersUserChangeEmailUserIdNewEmailGet(
        userId: number,
        newEmail: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/user/change_email/{user_id}/{new_email}',
            path: {
                'user_id': userId,
                'new_email': newEmail,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * change a user's phone number
     * @param userId
     * @param newPhoneNumber
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeUserPhoneNumberUsersUserChangePhoneNumberUserIdNewPhoneNumberGet(
        userId: number,
        newPhoneNumber: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/user/change_phone_number/{user_id}/{new_phone_number}',
            path: {
                'user_id': userId,
                'new_phone_number': newPhoneNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * change a user's address
     * @param userId
     * @param newAddress
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeUserAddressUsersUserChangeAddressUserIdNewAddressGet(
        userId: number,
        newAddress: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/user/change_address/{user_id}/{new_address}',
            path: {
                'user_id': userId,
                'new_address': newAddress,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * create a user
     * @param requestBody
     * @returns User Successful Response
     * @throws ApiError
     */
    public static createUserUsersCreatePost(
        requestBody: CreateUser,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
