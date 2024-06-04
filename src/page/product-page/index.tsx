import { useState } from 'react'
import {
  IconsBack,
  IconsClose,
  IconsLeft,
  IconsRight,
} from '../../assets/icons/icons'
import Button from '../../component/button/button'
import Input from '../../component/input/input'

const ProductPage = () => {
  const [showProductPage, setShowProductPage] = useState(true)
  const [showProductInformation, setShowProductInformation] = useState(false)
  const [showProductBidding, setShowProductBidding] = useState(false)

  const handleShowProductInformation = () => {
    setShowProductInformation(true)
    setShowProductPage(false)
    setShowProductBidding(false)
  }

  const handleShowProductBidding = () => {
    setShowProductPage(false)
    setShowProductInformation(false)
    setShowProductBidding(true)
  }

  return (
    <div className='min-h-screen flex flex-col items-center bg-gradient-to-b from-[#EDEDEB] to-[#FBD9E6]'>
      <div className='w-full max-w-md min-h-screen p-4 bg-gradient-to-b from-[#EDEDEB] to-[#FBD9E6] rounded'>
        <div className='w-full !text-start mb-[50px]'>
          {showProductPage ? (
            <span className='font-semibold text-[13px] flex items-center mt-[30px] w-[80px] border-b border-b-2 border-black'>
              <p className='mt-2'>商品ページ</p>
            </span>
          ) : null}
          {showProductInformation ? (
            <span className='font-semibold text-[13px] flex items-center mt-[30px] w-[60px] border-b border-b-2 border-black'>
              <p className='mt-2'>商品詳細</p>
            </span>
          ) : null}
          {showProductBidding ? (
            <span className='font-semibold text-[13px] flex items-center mt-[30px] w-[60px] border-b border-b-2 border-black'>
              <p className='mt-2'>商品入札</p>
            </span>
          ) : null}
        </div>
        <div className='relative flex justify-center items-center'>
          <button className='absolute left-0 text-2xl'>
            <IconsLeft />
          </button>
          <div className='w-64 h-64 bg-gray-200 flex items-center justify-center text-xl'>
            商品画像
          </div>
          <button className='absolute right-0 text-2xl'>
            <IconsRight />
          </button>
        </div>
        <div className='grid grid-cols-8 gap-1 my-4'>
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className='w-full h-10 bg-white border border-black'
            ></div>
          ))}
        </div>
        <div className='flex justify-center space-x-4 mb-4'>
          <Button
            text='詳細'
            onClick={handleShowProductInformation}
            className='px-4 py-2 bg-yellow-400 rounded-[30px] text-white !w-1/4 shadow-2xl border !border-black !text-black'
          />
          <Button
            text='入札'
            onClick={handleShowProductBidding}
            className='px-4 py-2 bg-yellow-400 rounded-[30px] text-white !w-1/4 shadow-2xl border !border-black !text-black'
          />
        </div>
        <div className={`${showProductPage ? '' : 'hidden'} mb-[100px]`}>
          <div className='flex justify-between'>
            <div className='mb-2 w-2/12'>
              <label className='text-[10px]'>入札数</label>
              <Button
                text='3'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1'
              />
            </div>
            <div className='mb-2 w-10/12 ml-2'>
              <label className='text-[10px]'>現在価格</label>
              <Button
                text='55000円'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1'
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='mb-2 w-2/12'>
              <label className='text-[10px]'>商品ランク</label>
              <Button
                text='A'
                className='!w-full !rounded-[3px] !text-red-500 !bg-white text-nowrap !p-2 !px-0 !py-1'
              />
            </div>
            <div className='mb-2 w-10/12 ml-2'>
              <label className='text-[10px]'>商品タイトル</label>
              <Button
                text='55000円'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1'
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='mb-2 w-1/2 mr-1'>
              <label className='text-[10px]'>掲載終了時間</label>
              <Button
                text='〇月〇日22:00'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1'
              />
            </div>
            <div className='mb-2 w-1/2 ml-1'>
              <label className='text-[10px]'>終了まであと</label>
              <Button
                text='6時間45分'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1'
              />
            </div>
          </div>
        </div>

        <div
          className={`border border-4 border-yellow-600 h-[200px] w-full bg-white rounded-3xl p-1 !mb-[100px] ${
            showProductInformation ? ' ' : 'hidden'
          }`}
        >
          <div className='border border-dashed border-yellow-600 border-2 h-full rounded-3xl'>
            <div className='flex justify-end mt-1 mr-1'>
              {' '}
              <IconsClose />
            </div>
            <div className='text-[25px] text-center'>商品の詳細文表示</div>
          </div>
        </div>

        <div className={`mb-[100px] ${showProductBidding ? '' : 'hidden'}`}>
          <div className='border border-1 border-red-700 border-black flex px-3 py-4 bg-white text-[20px] justify-center items-center'>
            <p>入札価格：</p>
            <Input type='number' className='!w-1/4 border-none text-[20px]' />
            <p className='ml-2'>円</p>
          </div>
          <div className='flex mt-2'>
            <Button
              text='+1,000'
              className='rounded-[30px] !px-0 bg-blue-500 mx-1 border !border-black !text-[20px]'
            />
            <Button
              text='+5,000'
              className='rounded-[30px] !px-0 bg-blue-500 !border-black !text-[20px]'
            />
            <Button
              text='+10,000'
              className='rounded-[30px] !px-0 bg-blue-500 mx-1 !border-black !text-[20px]'
            />
          </div>
          <div className='flex justify-center mt-4'>
            <Button
              text='この価格で入札する'
              className='!w-1/2 rounded-[30px] !text-black !px-0 !py-[15px] !border-black !shadow-3xl'
            />
          </div>
        </div>

        <div className='flex justify-between w-full fixed bottom-[20px] right-0 px-3'>
          <button className='mt-4 bg-yellow-400 py-2 pl-1 pr-5 rounded-full flex text-[13px] items-center mr-1 w-1/2'>
            <div className='bg-white rounded-full px-1 py-1'>
              <IconsBack />
            </div>
            <p className='ml-4'>商品一覧に戻る</p>
          </button>
          <button className='mt-4 bg-yellow-400 py-2 pl-1 pr-5 rounded-full flex text-[13px] items-center ml-1 w-1/2'>
            <div className='bg-white rounded-full px-1 py-1'>
              <IconsBack />
            </div>
            <p className='ml-4 text-nowrap'>TOPページに戻る</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
