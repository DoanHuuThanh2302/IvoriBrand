import * as yup from 'yup'

export const shippingAddressRegistration = yup.object().shape({
  delivery_person_name: yup.string().required('お名前を入力してください'),
  delivery_zip_code: yup.string().required('郵便番号を入力してください'),
  delivery_address: yup.string().required('住所を入力してください'),
  delivery_phone_number: yup
    .string()
    .required('電話番号を入力してください。')
    .matches(/^[0-9]{10,11}$/, '電話番号が正しくありません。'),
})
