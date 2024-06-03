import { IconsBack, IconsCrown, IconsUser } from '../../assets/icons/icons'
import Button from '../../component/button/button'
import PaginatedItems from '../../component/paginate/paging'

const MyPage = () => {
  const items = [
    { id: 1, title: '商品タイトル', highestBidder: 'あなた' },
    { id: 2, title: '商品タイトル', highestBidder: 'あなた' },
    { id: 3, title: '商品タイトル', highestBidder: 'あなた' },
    { id: 4, title: '商品タイトル', highestBidder: 'あなた' },
    { id: 5, title: '商品タイトル', highestBidder: 'あなた' },
  ]

  return (
    <div
      className='min-h-screen flex flex-col items-center p-4'
      style={{ background: 'linear-gradient(to right, #fcefe7, #ffe7d6)' }}
    >
      <div className='rounded-lg w-full max-w-md'>
        <div className='flex justify-between w-[95px] border-b border-b-2 border-black'>
          <span className='font-semibold text-[13px] flex items-center mt-[30px]'>
            <IconsUser width='25px' height='25px' />
            <p className='mt-2'>マイページ</p>
          </span>
        </div>
        <div className='flex justify-around p-4 mt-5'>
          <Button
            text='落札履歴'
            className='bg-yellow-400 text-[#000000] shadow-md py-4 px-4 rounded-xl mx-2'
          />
          <Button
            text='登録情報確認'
            className='bg-yellow-400 text-[#000000] shadow-md py-4 px-4 rounded-xl mx-2'
          />
        </div>
        <div className='p-4'>
          <div className='grid grid-cols-6 gap-2 text-center text-sm border-b border-b-2 border-black'>
            <span className='text-nowrap'>入札商品</span>
            <span className='col-span-2'>商品</span>
            <span className='text-nowrap'>残り時間</span>
            <span>最高値</span>
            <span></span>
          </div>
          {items.map((item) => (
            <div
              key={item.id}
              className='grid grid-cols-6 gap-2 items-center text-center py-2'
            >
              <div className='flex justify-center items-center bg-gray-200 rounded-md h-8 w-12 p-1'>
                <span>商品画像</span>
              </div>
              <span className='col-span-2 bg-white rounded-md h-8 content-center p-1'>
                {item.title}
              </span>
              <span className='bg-white ounded-md h-8 p-1'></span>
              <span className='bg-white rounded-md h-8 p-1'></span>
              <div className='flex flex-col items-center'>
                <IconsCrown />
                <span className='text-red-500 text-xs'>
                  {item.highestBidder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full'>
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
  )
}

export default MyPage
