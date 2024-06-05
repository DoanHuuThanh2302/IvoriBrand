import * as yup from 'yup'

export const userInformation = yup.object().shape({
  name: yup.string().required('お名前を入力してください'),
  zip_code: yup.string().required('郵便番号を入力してください'),
  address: yup.string().required('住所を入力してください'),
  phone_number: yup
    .string()
    .required('電話番号を入力してください。')
    .matches(/^[0-9]{10,11}$/, '電話番号が正しくありません。'),
  email: yup
    .string()
    .test('email-format', 'メールアドレスが無効になります。', (value) => {
      if (!value) return true
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      return regex.test(value)
    })
    .required('メールアドレスがを入力してください。'),
  birth_day: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .required('誕生日を入力する必要があります'),
  line_name: yup.string().required('LINEに表示されるお名前を入力してください'),
  line_id: yup.string().required('LINE IDを入力してください'),
})
