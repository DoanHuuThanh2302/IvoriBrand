import image from '../../assets/image/4.png'
import { IconsAuction, IconsUser, IconsWarning } from '../../assets/icons/icons'
import AuthenticaService from '../../services/authenticate.service'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const authenticate = new AuthenticaService()
  const [, , removeUser] = useCookies(['user'])
  const [, , removeToken] = useCookies(['token'])
  const navigate = useNavigate()
  const handleLogut = () => {
    authenticate
      .logout()
      .then((res) => {
        if (res.status === 200) {
          removeUser('user')
          removeToken('token')
        }
      })
      .catch((error) => {
        console.error('Error logging out:', error)
      })
  }
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
          <p className='text-sm mt-10'>ブランドオークションサイト</p>
          <div className='mt-1 p-2 rounded-2xl opacity-50 bg-gray-500 border border-2 border-amber-700 pb-[80px] pt-[10px]'>
            <h1 className='text-lg font-semibold text-white'>アイボリー</h1>
            <h1 className='text-lg font-semibold text-white'>BRAND LOUNGE</h1>
          </div>
        </div>
        <div className='border bg-white rounded-xl border-2 border-orange-800 pb-[40px] pt-[10px] pl-2'>
          <p className='text-[12px]'>お知らせ</p>
          <div className='flex mt-2'>
            <p className='text-[12px]'>次回開催日 :</p>
            <p className='text-[12px]'>〇月〇日（△）</p>
          </div>
        </div>

        <div className='flex justify-between mt-[50px] mb-[50px]'>
          <div className='border px-4 border-amber-700 rounded-lg pt-[3px] pb-2 text-center bg-[#ddc8c3]'>
            <IconsAuction />
            <p className='text-[12px] mt-3'>開催中</p>
          </div>
          <div
            onClick={() => navigate('/my-page')}
            className='border px-4 border-amber-700 rounded-lg pt-[3px] pb-2 text-center bg-[#ddc8c3]'
          >
            <IconsUser />
            <p className='text-[12px] mt-3'>マイページ</p>
          </div>
          <div className='border px-2.5 border-amber-700 rounded-lg pt-[3px] pb-2 text-center bg-[#ddc8c3]'>
            <div onClick={() => handleLogut()} className='flex justify-center'>
              <IconsWarning />
            </div>
            <p className='text-[12px] mt-3'>ルール・会則</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
