import Input from '../../../component/input/input'

export default function RegistrationInformationForm() {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center w-full'>
        <div
          className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'
          style={{ background: 'linear-gradient(to right, #fcefe7, #ffe7d6)' }}
        >
          <div className='border rounded-3xl px-5 py-2 mb-4 border bg-fuchsia-200'>
            <h4 className='text-center text-xl font-bold text-nowrap'>
              アイボリーラウンジ会員登録
            </h4>
          </div>
          <p className='mb-8'>
            古物営業法に基づき、オークションへの参加には古物商許可証が必須となります。
            また参加者の本人確認が必要ですので以下内容のご提出をお願い致します。
          </p>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                お名前（本名フルネーム）
              </label>
              <Input
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                郵便番号
              </label>
              <Input
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                住所
              </label>
              <Input
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                電話番号
              </label>
              <Input
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                メールアドレス
              </label>
              <Input
                type='email'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                生年月日
              </label>
              <Input
                type='date'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                LINE名
              </label>
              <Input
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div className='text-sm text-gray-600 !mt-1'>
              <p>LINEに登録表示されているお名前</p>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                LINE ID
              </label>
              <Input
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div className='text-sm text-gray-600 !mt-1'>
              <p>確認手順</p>
              <p>
                ①LINE画面右上の歯車アイコン「設定」[プロフィール]を順にタップ
              </p>
              <p> ②【ID】部分に設定したLINE IDが表示されます</p>
            </div>
            <div className='mt-4'>
              <div className='mt-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                <p>
                  古物商許可証の見開きページの写真をアップロードしてください。
                  住所に変更がある方は2枚目の写真もご提出ください。
                </p>
                <div className='flex justify-between mx-[50px]'>
                  <div className='space-y-1 text-center'>
                    <div className='flex text-sm text-gray-600'>
                      <label htmlFor='file-upload' className=''>
                        <svg
                          className='mx-auto h-12 w-12 text-gray-400'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'
                        >
                          <path
                            d='M28 8H12c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V20l-8-8z'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                          />
                          <path
                            d='M28 8v8h8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                          />
                        </svg>
                        <Input
                          id='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                    </div>
                  </div>

                  <div className='space-y-1 text-center'>
                    <div className='flex text-sm text-gray-600'>
                      <label htmlFor='file-upload' className=''>
                        <svg
                          className='mx-auto h-12 w-12 text-gray-400'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'
                        >
                          <path
                            d='M28 8H12c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V20l-8-8z'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                          />
                          <path
                            d='M28 8v8h8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                          />
                        </svg>
                        <Input
                          id='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <div className='mt-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                <p>
                  顔写真付き身分証明証（運転免許証、パスポート、マイナンバーカード）
                  の写真をアップロードしてください。住所に変更がある方は裏面の写真も
                  ご提出ください。※マイナンバーカードの場合は個人番号は隠した状態で
                  撮影してください。
                </p>
                <div className='space-y-1 text-center flex justify-center'>
                  <div className='flex text-sm text-gray-600'>
                    <label htmlFor='file-upload' className=''>
                      <svg
                        className='mx-auto h-12 w-12 text-gray-400'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 48 48'
                        aria-hidden='true'
                      >
                        <path
                          d='M28 8H12c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V20l-8-8z'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                        />
                        <path
                          d='M28 8v8h8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                        />
                      </svg>
                      <Input id='file-upload' type='file' className='sr-only' />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400'
              >
                登録
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
