import { IconsBack, IconsUser } from '../../assets/icons/icons'
import Button from '../../component/button/button'
import Input from '../../component/input/input'

const ChangeShippingAddressRegistration = () => {
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

      <div className='mt-[50px] mb-[50px] w-full'>
        <div>
          <div className='text-[25px] mt-[20px] text-center'>▼配送先情報</div>
          <div className='border py-4 px-[20px] border-black mt-[20px]'>
            <div className='text-[15px] mt-[20px] mb-[20px] border-b border-b-2 border-black w-[130px]'>
              配送先住所登録
            </div>
            <div className='mb-[30px]'>
              <p>配送伝票に記載する情報です。</p>
              <p>
                都道府県名、建物名まで全て省略せず正確に記載してください。
                ユーザー登録住所と同じ場合も、記載してください。
              </p>
            </div>
            <form className='space-y-4 mt-[10px]'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  宛名（氏名）
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
              <div className='mt-[30px]'>
                <Button
                  type='submit'
                  className='bg-yellow-400 text-white py-2 px-4 rounded-md'
                  text='登録'
                />
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

export default ChangeShippingAddressRegistration
