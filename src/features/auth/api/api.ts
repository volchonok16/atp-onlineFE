import { instance } from '../../../app/api/instance'

export type LoginDataType = {
  username: string
  password: string
}

export type LoginResponseDataType = {
  accessToken: string
}

export const authApi = {
  async login(formData: LoginDataType) {
    return await instance.post<LoginResponseDataType>('auth/login', formData)
  },
  async logout() {
    return await instance.post('auth/logout')
  },
  async changePassword(newPassword: string) {
    return await instance.post('auth/new-password', { newPassword })
  },
}
