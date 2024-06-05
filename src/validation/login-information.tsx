import * as yup from 'yup'

export const loginInformation = yup.object().shape({
  id_login: yup.string().required('お名前を入力してください'),
  password: yup
    .string()
    .required('パスワードを入力してください。')
    .min(6, 'パスワードは少なくとも6文字でなければなりません。'),
})
