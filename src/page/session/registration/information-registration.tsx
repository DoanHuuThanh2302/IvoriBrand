import { useEffect, useState } from 'react'
import Button from '../../../component/button/button'
import Input from '../../../component/input/input'
import { IconsFile } from '../../../assets/icons/icons'
import InputForm from '../../../component/input/input-form'
import { userInformation } from '../../../validation/user-information'
import { shippingAddressRegistration } from '../../../validation/shipping-address-registration'
import { loginInformation } from '../../../validation/login-information'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthenticaService from '../../../services/authenticate.service'
import { useNavigate } from 'react-router-dom'

export default function RegistrationInformationForm() {
  const [showUserInformation, setShowUserInformation] = useState(true)
  const [fileUploads, setFileUploads] = useState<{ [key: string]: File }>({})
  const [dataUser, setDataUser] = useState<any>()
  const authenticate = new AuthenticaService()
  const navigate = useNavigate()
  console.log(dataUser)

  const [showShippingAddressRegistration, setShowShippingAddressRegistration] =
    useState(false)
  const [showLoginInformation, setShowLoginInformation] = useState(false)

  const handleShowShippingAddressRegistration = () => {
    setShowShippingAddressRegistration(true)
    setShowUserInformation(false)
    setShowLoginInformation(false)
  }

  const handleShowLoginInformation = () => {
    setShowUserInformation(false)
    setShowShippingAddressRegistration(false)
    setShowLoginInformation(true)
  }

  const {
    register: registerUserInformation,
    handleSubmit: handleUserInformation,
    formState: { errors: ErrorUserInformation },
  } = useForm({
    resolver: yupResolver(userInformation),
  })

  const [uploads, setUploads] = useState({
    upload1: false,
    upload2: false,
    upload3: false,
    upload4: false,
  })

  const onSubmit = (data: any) => {
    if (
      uploads.upload1 &&
      uploads.upload2 &&
      uploads.upload3 &&
      uploads.upload4
    ) {
      handleShowShippingAddressRegistration()
      setDataUser(data)
    }
  }

  const {
    register: registerShippingAddressRegistration,
    handleSubmit: handleShippingAddressRegistration,
    formState: { errors: ErrorShippingAddressRegistration },
  } = useForm({
    resolver: yupResolver(shippingAddressRegistration),
  })

  const onSubmitFormShippingAddressRegistration = (data: any) => {
    setDataUser({ ...dataUser, ...data, ...fileUploads })
    handleShowLoginInformation()
  }

  const {
    register: registerLoginInformation,
    handleSubmit: handleLoginInformation,
    formState: { errors: ErrorLoginInformation },
  } = useForm({
    resolver: yupResolver(loginInformation),
  })

  const onSubmitLoginInformation = async (data: any) => {
    setDataUser({ ...dataUser, ...data })
    try {
      authenticate.register(dataUser).then((res: any) => {
        if (res.data.status === 200) {
          navigate('/login')
        } else if (res.data.status === 404) {
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleFileInputChange = (
    e: any,
    inputId: string,
    svgIcons: string,
    uploadKey: string
  ) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      if (event.target && event.target.result) {
        const newUploads = { ...uploads, [uploadKey]: true }
        setUploads(newUploads)
        const newFileUploads = { ...fileUploads, [uploadKey]: file! }
        setFileUploads(newFileUploads)
        const imageData = event.target.result as string
        const imgPreview = document.getElementById(inputId)
        const svg = document.getElementById(svgIcons)
        if (svg) {
          svg.style.display = 'none'
        }

        if (imgPreview instanceof HTMLImageElement) {
          imgPreview.src = imageData
          imgPreview.style.display = 'block'
        }
      }
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <div className=' max-w-md min-h-screen p-4 bg-gradient-to-b from-[#EDEDEB] to-[#FBD9E6]'>
        <div className='border rounded-3xl px-5 py-2 mb-4 border bg-fuchsia-200'>
          <h4 className='text-center text-xl font-bold text-nowrap'>
            アイボリーラウンジ会員登録
          </h4>
        </div>
        <div className={`${showUserInformation ? '' : 'hidden'}`}>
          <p className='mb-8'>
            古物営業法に基づき、オークションへの参加には古物商許可証が必須となります。
            また参加者の本人確認が必要ですので以下内容のご提出をお願い致します。
          </p>
          <form
            className='space-y-4'
            onSubmit={handleUserInformation(onSubmit)}
          >
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                お名前（本名フルネーム）
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerUserInformation('name')}
                error={ErrorUserInformation.name?.message}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                郵便番号
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerUserInformation('zip_code')}
                error={ErrorUserInformation.zip_code?.message}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                住所
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerUserInformation('address')}
                error={ErrorUserInformation.address?.message}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                電話番号
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerUserInformation('phone_number')}
                error={ErrorUserInformation.phone_number?.message}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                メールアドレス
              </label>
              <InputForm
                type='email'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerUserInformation('email')}
                error={ErrorUserInformation.email?.message}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                生年月日
              </label>
              <InputForm
                type='date'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerUserInformation('birth_day')}
                error={ErrorUserInformation.birth_day?.message}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                LINE名
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerUserInformation('line_name')}
                error={ErrorUserInformation.line_name?.message}
              />
            </div>
            <div className='text-sm text-gray-600 mt-2'>
              <p className='text-[8px]'>LINEに登録表示されているお名前</p>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                LINE ID
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerUserInformation('line_id')}
                error={ErrorUserInformation.line_id?.message}
              />
            </div>
            <div className='text-sm text-gray-600 mt-2'>
              <p className='text-[8px]'>確認手順</p>
              <p className='text-[8px]'>
                ①LINE画面右上の歯車アイコン「設定」[プロフィール]を順にタップ
              </p>
              <p className='text-[8px]'>
                {' '}
                ②【ID】部分に設定したLINE IDが表示されます
              </p>
            </div>
            <div className='mt-4 w-full'>
              <div className='mt-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md w-full'>
                <p>
                  古物商許可証の見開きページの写真をアップロードしてください。
                  住所に変更がある方は2枚目の写真もご提出ください。
                </p>
                <div className='flex justify-between mx-[50px]'>
                  <div className='space-y-1 text-center'>
                    <div className='flex text-sm text-gray-600'>
                      <label htmlFor='file-upload1' className=''>
                        <div id='svg1'>
                          <IconsFile />
                        </div>
                        <img
                          id='img-preview1'
                          alt='Preview'
                          style={{
                            maxWidth: '100px',
                            maxHeight: '100px',
                            display: 'none',
                            marginTop: '8px',
                          }}
                        />
                      </label>
                      <Input
                        id='file-upload1'
                        type='file'
                        className='hidden'
                        onChange={(e: any) =>
                          handleFileInputChange(
                            e,
                            'img-preview1',
                            'svg1',
                            'upload1'
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className='space-y-1 text-center'>
                    <div className='flex text-sm text-gray-600'>
                      <label htmlFor='file-upload2' className=''>
                        <div id='svg2'>
                          <IconsFile />
                        </div>
                        <img
                          id='img-preview2'
                          alt='Preview'
                          style={{
                            maxWidth: '100px',
                            maxHeight: '100px',
                            display: 'none',
                            marginTop: '8px',
                          }}
                        />
                      </label>
                      <Input
                        id='file-upload2'
                        type='file'
                        className='hidden'
                        onChange={(e: any) =>
                          handleFileInputChange(
                            e,
                            'img-preview2',
                            'svg2',
                            'upload2'
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 w-full'>
              <div className='mt-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md w-full'>
                <p>
                  顔写真付き身分証明証（運転免許証、パスポート、マイナンバーカード）
                  の写真をアップロードしてください。住所に変更がある方は裏面の写真も
                  ご提出ください。※マイナンバーカードの場合は個人番号は隠した状態で
                  撮影してください。
                </p>
                <div className='flex justify-between mx-[50px]'>
                  <div className='space-y-1 text-center'>
                    <div className='flex text-sm text-gray-600'>
                      <label htmlFor='file-upload3' className=''>
                        <div id='svg3'>
                          <IconsFile />
                        </div>
                        <img
                          id='img-preview3'
                          alt='Preview'
                          style={{
                            maxWidth: '100px',
                            maxHeight: '100px',
                            display: 'none',
                            marginTop: '8px',
                          }}
                        />
                      </label>
                      <Input
                        id='file-upload3'
                        type='file'
                        className='hidden'
                        onChange={(e: any) =>
                          handleFileInputChange(
                            e,
                            'img-preview3',
                            'svg3',
                            'upload3'
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className='space-y-1 text-center'>
                    <div className='flex text-sm text-gray-600'>
                      <label htmlFor='file-upload4' className=''>
                        <div id='svg4'>
                          <IconsFile />
                        </div>
                        <img
                          id='img-preview4'
                          alt='Preview'
                          style={{
                            maxWidth: '100px',
                            maxHeight: '100px',
                            display: 'none',
                            marginTop: '8px',
                          }}
                        />
                      </label>
                      <Input
                        id='file-upload4'
                        type='file'
                        className='hidden'
                        onChange={(e: any) =>
                          handleFileInputChange(
                            e,
                            'img-preview4',
                            'svg4',
                            'upload4'
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <Button type='submit' className='' text='登録' />
            </div>
          </form>
        </div>

        <div className={`${showShippingAddressRegistration ? '' : 'hidden'}`}>
          <p className='border-b border-b-2 border-black text-[15px] mt-[50px] text-nowrap w-[135px]'>
            配送先住所登録
          </p>
          <div className='mt-5 ml-[50px]'>
            <p className='text-[11.5px]'>配送伝票に記載する情報です。</p>
            <p className='text-[11.5px]'>
              都道府県名、建物名まで全て省略せず正確に記載してください。
            </p>
            <p className='text-[11.5px]'>
              ユーザー登録住所と同じ場合も、記載してください。
            </p>
          </div>
          <form
            className='space-y-4 mt-[30px]'
            onSubmit={handleShippingAddressRegistration(
              onSubmitFormShippingAddressRegistration
            )}
          >
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                宛名（氏名）
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerShippingAddressRegistration(
                  'delivery_person_name'
                )}
                error={
                  ErrorShippingAddressRegistration.delivery_person_name?.message
                }
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                郵便番号
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerShippingAddressRegistration(
                  'delivery_zip_code'
                )}
                error={
                  ErrorShippingAddressRegistration.delivery_zip_code?.message
                }
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                住所
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerShippingAddressRegistration(
                  'delivery_address'
                )}
                error={
                  ErrorShippingAddressRegistration.delivery_address?.message
                }
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                電話番号
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerShippingAddressRegistration(
                  'delivery_phone_number'
                )}
                error={
                  ErrorShippingAddressRegistration.delivery_phone_number
                    ?.message
                }
              />
            </div>
            <div className='!mt-[30px]'>
              <Button type='submit' className='' text='登録' />
            </div>
          </form>
        </div>

        <div className={`${showLoginInformation ? '' : 'hidden'}`}>
          <p className='border-b border-b-2 border-black text-[15px] mt-[50px] w-[135px] text-nowrap'>
            ログイン情報登録
          </p>
          <div className='mt-5 ml-[50px]'>
            <p className='text-[11.5px]'>
              オークションページやマイページへ入る為に必要となりますので
            </p>
            <p className='text-[11.5px]'>
              ログイン情報の登録をお願い致します。
            </p>
          </div>
          <form
            className='space-y-4 mt-[30px]'
            onSubmit={handleLoginInformation(onSubmitLoginInformation)}
          >
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                ログインID
              </label>
              <InputForm
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerLoginInformation('id_login')}
                error={ErrorLoginInformation.id_login?.message}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                パスワード
              </label>
              <InputForm
                type='password'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                register={registerLoginInformation('password')}
                error={ErrorLoginInformation.password?.message}
              />
            </div>
            <div className='!mt-[30px]'>
              <Button type='submit' className='' text='登録' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
