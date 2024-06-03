import Buttom from '../../../component/button/button'
import Input from '../../../component/input/input'
import image from '../../../assets/image/4.png'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div
        className='w-full max-w-md h-[900px] p-10 shadow-lg'
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
        <div className='text-center mb-8 mt-[60px]'>
          <h2 className='text-xl font-bold'>WELCOME</h2>
          <p className='text-sm mt-10'>ブランドオークションサイト</p>
          <div className='mt-1 p-2 rounded-2xl opacity-50 bg-gray-500 border border-2 border-amber-700 pb-[40px] pt-[10px]'>
            <h1 className='text-lg font-semibold text-white'>アイボリー</h1>
            <h1 className='text-lg font-semibold text-white'>BRAND LOUNGE</h1>
          </div>
        </div>
        <div className='text-center mb-4'>
          <p className='text-sm'>ログインしてください</p>
        </div>
        <form>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              ログインID
            </label>
            <Input
              type='text'
              className='mt-1 px-3 py-2 border border-gray-300 rounded-md w-full'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700'>
              パスワード
            </label>
            <Input
              type='password'
              className='mt-1 px-3 py-2 border border-gray-300 rounded-md w-full'
            />
          </div>
          <div className='flex justify-center'>
            <Buttom
              type='submit'
              className='bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full'
              text='ログイン'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
