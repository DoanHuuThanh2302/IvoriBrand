import http from '../http-common/axios'

class AuthenticaService {
  login(data: any) {
    const formData = new FormData()

    formData.append('user[email]', data.email)
    formData.append('user[password]', data.password)
    return http.post(`/api/v1/user/login`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  register(data: any) {
    return http.post(
      `/api/v1/user`,
      { user: data },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  }

  logout() {
    return http.delete(`/api/v1/user/logout`)
  }
}

export default AuthenticaService
