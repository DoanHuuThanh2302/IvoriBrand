import http from '../http-common/axios'

class AuthenticaService {
  login(data: any) {
    const formData = new FormData()

    formData.append('user[id_login]', data.id_login)
    formData.append('user[password]', data.password)
    return http.post(`/users/sign_in`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  register(data: any) {
    return http.post(
      `/users`,
      { user: data },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  }

  logout() {
    return http.delete(`/users/sign_out`)
  }
}

export default AuthenticaService
