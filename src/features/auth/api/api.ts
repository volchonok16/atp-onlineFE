import { instance } from '../../../app/api/instance'

export type LoginDataType = {
  username: string
  password: string
}

export const authApi = {
  async login(formData: LoginDataType) {
    const res = await instance.post('auth/login', formData)
    return res
  },
  async logout() {
    const res = await instance.post('auth/logout')
    return res
  },
  async changePassword(newPassword: string) {
    const res = await instance.post('auth/new-password', { newPassword })
    return res
  },
}
