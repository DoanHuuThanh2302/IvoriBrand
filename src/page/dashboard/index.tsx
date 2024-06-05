import image from '../../assets/image/1.png'
import { IconsEditUser, IconsWarning } from '../../assets/icons/icons'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div
        className='w-full max-w-md h-[930px] p-10 shadow-lg'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='flex justify-between items-center mb-4'>
          <p className='text-black text-[12px] font-bold border-b border-b-1 border-black w-[30px]'>
            TOP
          </p>
          <div></div>
        </div>
        <div className='text-center mb-[50px] mt-[60px]'>
          <h2 className='text-xl font-bold'>WELCOME</h2>
          <p className='text-sm mt-1 mb-20'>ブランドオークションサイト</p>
          <div className='mt-1 p-2 rounded-2xl opacity-50 bg-gray-500 border border-2 border-amber-700 pb-[80px] pt-[10px]'>
            <h1 className='text-lg font-semibold text-white'>アイボリー</h1>
            <h1 className='text-lg font-semibold text-white'>BRAND LOUNGE</h1>
          </div>
        </div>

        <div className='flex justify-center mt-[50px] mb-[50px]'>
          <div
            onClick={() => navigate('/register')}
            className='border px-4 border-amber-700 rounded-lg pt-[3px] pb-2 text-center mx-2 bg-[#ddc8c3]'
          >
            <IconsEditUser width='80px' height='80px' />
            <p className='text-[12px] mt-3'>ユーザー登録</p>
          </div>
          <div className='border px-2.5 border-amber-700 rounded-lg pt-[3px] pb-2 text-center mx-2 bg-[#ddc8c3]'>
            <div className='flex justify-center'>
              <IconsWarning width='90px' height='80px' />
            </div>
            <p className='text-[12px] mt-3'>ご案内</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
