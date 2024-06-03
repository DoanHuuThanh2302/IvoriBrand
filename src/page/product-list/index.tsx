import { IconsAuction, IconsBack, IconsUser } from '../../assets/icons/icons'
import Button from '../../component/button/button'
import PaginatedItems from '../../component/paginate/paging'
import Select from '../../component/select/select'

const ProductList = () => {
  return (
    <div className='bg-pink-50'>
      <div
        className='min-h-screen flex flex-col items-center p-4'
        style={{ background: 'linear-gradient(to right, #fcefe7, #ffe7d6)' }}
      >
        <div className='w-full !text-start mb-[50px]'>
          <span className='font-semibold text-[13px] flex items-center mt-[30px] w-[130px] border-b border-b-2 border-black'>
            <IconsAuction width='25px' height='25px' />
            <p className='mt-2'>開催中商品一覧</p>
          </span>
        </div>
        <div className='flex justify-end mb-4 w-full border-b border-b-2 border-black pb-1'>
          <p className='text-nowrap content-center text-[10px] mr-2'>
            絞り込み
          </p>
          <Select
            options={[]}
            className='w-full'
            parentClass='!w-3/12 text-end !mr-2'
          />
          <Select
            options={[]}
            className='w-full'
            parentClass='!w-3/12 text-end !mr-2'
          />
          <Select
            options={[]}
            className='w-full'
            parentClass='!w-3/12 text-end'
          />
        </div>
        <div className='grid grid-cols-1 gap-4 w-full'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='items-center py-2 flex'>
              <div className='w-20 h-20 bg-gray-200 rounded w-1/4'></div>
              <div className='flex flex-col justify-between w-3/4 h-20 pl-4'>
                <div className='flex w-full'>
                  <p className='border rounded py-1 px-[10px] text-center !w-1/3 text-nowrap bg-white mr-1'>
                    ブランド名
                  </p>
                  <p className='border rounded py-1 px-[10px] text-center !w-1/3 text-nowrap bg-white'>
                    中カテゴリー名
                  </p>
                  <p className='border rounded py-1 px-[10px] text-center !w-1/3 text-nowrap bg-white ml-1'>
                    ランク表示
                  </p>
                </div>
                <div className='w-full'>
                  <Button
                    text='商品タイトル'
                    className='w-full !bg-white !text-[#000000] !p-0 !text-[10px]'
                  />
                </div>
                <div className='flex justify-between'>
                  <Button
                    text='商品タイトル'
                    className='w-1/2 !bg-white !text-red-500 !p-0 mr-1 !text-[10px]'
                  />
                  <Button
                    text='商品タイトル'
                    className='w-1/2 !bg-white !text-[#000000] !p-0 ml-1 !text-[10px]'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full mb-[80px]'>
          <PaginatedItems totalPages={4} />
        </div>
        <div className='fixed bottom-[20px]'>
          <button className='mt-4 bg-yellow-400 py-2 pl-1 pr-5 rounded-full flex justify-center text-[13px] items-center'>
            <div className='bg-white rounded-full px-1 py-1'>
              <IconsBack />
            </div>
            <p className='ml-4'>TOPページに戻る</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductList
