import {
  IconsCamera,
  IconsClose,
  IconsLeft,
  IconsRight,
  IconsSuperCamera,
  IconsVideo,
} from '../../../assets/icons/icons'
import Button from '../../../component/button/button'
import Input from '../../../component/input/input'
import Select from '../../../component/select/select'

const ProductRegister = () => {
  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-full max-w-md p-4 bg-white rounded'>
        <div className='flex justify-between w-[120px] border-b border-b-2 border-black mb-[50px]'>
          <span className='font-semibold text-[18px] flex items-center mt-[30px]'>
            <p className='mt-2'>商品編集画面</p>
          </span>
        </div>

        <div className='mb-4'>
          <p className='text-[15px] mb-2'>商品動画</p>
          <div className='w-32 h-32 mx-auto flex items-center justify-center text-xl border border-1 border-black rounded-xl'>
            <IconsVideo />
          </div>
        </div>

        <div className='mb-4'>
          <p className='text-[15px] mb-2'>商品写真</p>
          <div className='w-32 h-32 mx-auto flex items-center justify-center text-xl border border-1 border-black rounded-xl'>
            <IconsSuperCamera />
          </div>
        </div>

        <div className='flex justify-center items-center mb-4'>
          <button className='text-2xl mr-2'>
            <IconsLeft />
          </button>
          <div className='flex space-x-2'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className='relative w-16 h-16 border flex items-center justify-center text-lg'
              >
                <IconsCamera />
                <span className='absolute top-0 left-0 bg-white text-xs'>
                  {index + 1}
                </span>
                <button className='absolute top-0 right-0 text-xs'>
                  <IconsClose width='15px' height='15px' />
                </button>
              </div>
            ))}
          </div>
          <button className='text-2xl ml-2'>
            <IconsRight />
          </button>
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-[12px]'>ブランド</label>
          <Select options={[]} className='w-full border rounded p-2' />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-[12px]'>カテゴリー</label>
          <Select options={[]} className='w-full border rounded p-2' />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-[12px]'>商品ランク</label>
          <Select options={[]} className='w-full border rounded p-2' />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-[12px]'>商品名</label>
          <Input
            type='text'
            className='w-full border !border-gray-200 !rounded p-2'
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-[12px]'>詳細説明</label>
          <Select options={[]} className='w-full border rounded p-2' />
          <textarea className='w-full border rounded p-2 h-24 mt-2'></textarea>
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-[12px]'>開始価格</label>
          <Select options={[]} className='w-full border rounded p-2' />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-[12px]'>開始日時</label>
          <Select options={[]} className='w-full border rounded p-2' />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-[12px]'>終了日時</label>
          <Select options={[]} className='w-full border rounded p-2' />
        </div>

        <div className='flex justify-center mt-4'>
          <Button
            text='修正完了'
            className='px-4 py-2 bg-yellow-400 rounded text-white mt-5'
          />
        </div>
      </div>
    </div>
  )
}

export default ProductRegister
