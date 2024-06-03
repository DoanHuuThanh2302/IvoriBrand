import { IconsBack, IconsCrown, IconsUser } from '../../assets/icons/icons'
import Button from '../../component/button/button'
import Input from '../../component/input/input'

const ChangeUserInformation = () => {
  return (
    <div
      className='min-h-screen flex flex-col items-center p-4'
      style={{ background: 'linear-gradient(to right, #fcefe7, #ffe7d6)' }}
    >
      <div className='rounded-lg w-full max-w-md'>
        <div className='flex justify-between w-[155px] border-b border-b-2 border-black'>
          <span className='font-semibold text-[13px] flex items-center mt-[30px]'>
            <IconsUser width='25px' height='25px' />
            <p className='mt-2'>登録情報確認・変更</p>
          </span>
        </div>
      </div>

      <div className='mt-[50px] mb-[50px]'>
        <div>
          <div className='text-[25px] mt-[20px] text-center'>▼ユーザー情報</div>
          <div className='border py-4 px-[20px] border-black mt-[20px]'>
            <div className='text-[15px] mt-[20px] mb-[30px] border-b border-b-2 border-black w-[110px]'>
              ユーザー情報
            </div>
            <form className='space-y-4 mt-[10px]'>
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
                <p className='text-[11px]'>LINEに登録表示されているお名前</p>
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
                <p className='text-[11px]'>確認手順</p>
                <p className='text-[11px]'>
                  ①LINE画面右上の歯車アイコン「設定」[プロフィール]を順にタップ
                </p>
                <p className='text-[11px]'>
                  {' '}
                  ②【ID】部分に設定したLINE IDが表示されます
                </p>
              </div>
              <div className='mt-6'>
                <Button type='submit' className='' text='登録' />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-between w-full fixed bottom-[20px] px-3'>
        <button className='mt-4 bg-yellow-400 py-2 pl-1 pr-5 rounded-full flex text-[13px] items-center mr-1 w-1/2'>
          <div className='bg-white rounded-full px-1 py-1'>
            <IconsBack />
          </div>
          <p className='ml-4'>一つ前に戻る</p>
        </button>
        <button className='mt-4 bg-yellow-400 py-2 pl-1 pr-5 rounded-full flex text-[13px] items-center ml-1 w-1/2'>
          <div className='bg-white rounded-full px-1 py-1'>
            <IconsBack />
          </div>
          <p className='ml-4 text-nowrap'>TOPページに戻る</p>
        </button>
      </div>
    </div>
  )
}

export default ChangeUserInformation
