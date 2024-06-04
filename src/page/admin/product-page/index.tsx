import { useState } from 'react'
import {
  IconsBack,
  IconsClose,
  IconsLeft,
  IconsRight,
} from '../../../assets/icons/icons'
import Button from '../../../component/button/button'
import Input from '../../../component/input/input'

const AdminProductPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center '>
      <div className='w-full max-w-md min-h-screen p-4 rounded'>
        <div className='w-full !text-start mb-[50px]'>
          <span className='font-semibold text-[13px] flex items-center mt-[30px] w-[80px] border-b border-b-2 border-black'>
            <p className='mt-2'>商品ページ</p>
          </span>
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
            className='px-4 py-2 bg-yellow-400 rounded-[30px] text-white !w-1/4 shadow-2xl border !border-black !text-black opacity-50'
          />
          <Button
            text='入札'
            className='px-4 py-2 bg-yellow-400 rounded-[30px] text-white !w-1/4 shadow-2xl border !border-black !text-black opacity-50'
          />
        </div>
        <div className={`mb-[100px]`}>
          <div className='flex justify-between'>
            <div className='mb-2 w-2/12'>
              <label className='text-[10px]'>入札数</label>
              <Button
                text='3'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1 !border-black'
              />
            </div>
            <div className='mb-2 w-10/12 ml-2'>
              <label className='text-[10px]'>現在価格</label>
              <Button
                text='55000円'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1 !border-black'
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='mb-2 w-2/12'>
              <label className='text-[10px]'>商品ランク</label>
              <Button
                text='A'
                className='!w-full !rounded-[3px] !text-red-500 !bg-white text-nowrap !p-2 !px-0 !py-1 !border-black'
              />
            </div>
            <div className='mb-2 w-10/12 ml-2'>
              <label className='text-[10px]'>商品タイトル</label>
              <Button
                text='55000円'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1 !border-black'
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='mb-2 w-1/2 mr-1'>
              <label className='text-[10px]'>掲載終了時間</label>
              <Button
                text='〇月〇日22:00'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1 !border-black'
              />
            </div>
            <div className='mb-2 w-1/2 ml-1'>
              <label className='text-[10px]'>終了まであと</label>
              <Button
                text='6時間45分'
                className='!w-full !rounded-[3px] !text-black !bg-white text-nowrap !p-2 !px-0 !py-1 !border-black'
              />
            </div>
          </div>
        </div>

        <div className='flex justify-between w-full fixed bottom-[20px] right-0 px-3'>
          <button className='mt-4 bg-yellow-400 py-2 pl-1 pr-5 rounded-full flex text-[13px] items-center mr-1 w-1/2'>
            <div className='bg-white rounded-full px-1 py-1'>
              <IconsBack />
            </div>
            <p className='ml-4'>一覧・編集へ</p>
          </button>
          <button className='mt-4 bg-yellow-400 py-2 pl-1 pr-5 rounded-full flex text-[13px] items-center ml-1 w-1/2'>
            <div className='bg-white rounded-full px-1 py-1'>
              <IconsBack />
            </div>
            <p className='ml-4 text-nowrap'>次の商品登録へ</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminProductPage
