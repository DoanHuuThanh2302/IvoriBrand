import { IconsBack, IconsCrown, IconsUser } from '../../assets/icons/icons'

const ChangeInformation = () => {
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

      <div className='mt-[200px] mb-[50px]'>
        <div className='text-[25px] mt-[20px]'>▼ユーザー情報</div>
        <div className='text-[25px] mt-[20px]'>▼配送先情報</div>
        <div className='text-[25px] mt-[20px]'>▼ログイン情報</div>
      </div>
      <div className='flex justify-between w-full fixed bottom-[20px] px-3'>
        <button className='mt-4 bg-yellow-400 py-2 pl-1 pr-5 rounded-full flex text-[13px] items-center mr-1 w-1/2'>
          <div className='bg-white rounded-full px-1 py-1'>
            <IconsBack />
          </div>
          <p className='ml-4'>マイページに戻る</p>
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

export default ChangeInformation
