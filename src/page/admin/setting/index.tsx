import { useState } from 'react'
import Button from '../../../component/button/button'
import Input from '../../../component/input/input'
import Select from '../../../component/select/select'

const Setting = () => {
  const [tagBrands, setTagBrands] = useState<String[]>([])
  const [tagBrand, setTagBrand] = useState('')
  const [tagCategorys, setTagCategorys] = useState<String[]>([])
  const [tagCategory, setTagCategory] = useState('')
  const [tagProductRanks, setTagProductRanks] = useState<String[]>([])
  const [tagProductRank, setTagProductRank] = useState('')

  const handleAddBrands = () => {
    if (!tagBrands.includes(tagBrand) && tagBrand !== '') {
      setTagBrands([...tagBrands, tagBrand])
      setTagBrand('')
    }
  }

  const handleAddCategory = () => {
    if (!tagCategorys.includes(tagCategory) && tagCategory !== '') {
      setTagCategorys([...tagCategorys, tagCategory])
      setTagCategory('')
    }
  }
  const handleAddProductRank = () => {
    if (!tagProductRanks.includes(tagProductRank) && tagProductRank != '') {
      setTagProductRanks([...tagProductRanks, tagProductRank])
      setTagProductRank('')
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-full max-w-md p-4 bg-white rounded'>
        <div className='flex justify-between w-[80px] border-b border-b-2 border-black mb-[50px]'>
          <span className='font-semibold text-[18px] flex items-center mt-[30px]'>
            <p className='mt-2'>設定画面</p>
          </span>
        </div>

        <div>
          <label className='block mb-1 text-[12px]'>ブランド</label>
          <div className='w-full'>
            <Input
              value={tagBrand}
              onChange={(e: any) => setTagBrand(e.target.value)}
              type='text'
              className='border !border-gray-200 !rounded'
            />
            <div className='flex flex-wrap gap-2 mt-2'>
              {tagBrands.map((tag: any, index: number) => (
                <div
                  key={index}
                  className='bg-gray-200 rounded-full px-5 py-1 text-sm text-gray-700 relative'
                >
                  <span>{tag}</span>
                  <span className='absolute right-[5px] top-[-2px] text-[16px]'>
                    &times;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex w-full justify-end mt-2'>
            <Button
              onClick={() => handleAddBrands()}
              text='追加'
              className='!w-1/4 mr-2 !rounded-3xl !text-black !border-black !p-0 !py-1'
            />
          </div>
        </div>

        <div>
          <label className='block mb-1 text-[12px]'>カテゴリー</label>
          <div className='w-full'>
            <Input
              value={tagCategory}
              onChange={(e: any) => setTagCategory(e.target.value)}
              type='text'
              className='border !border-gray-200 !rounded'
            />
            <div className='flex flex-wrap gap-2 mt-2'>
              {tagCategorys.map((tag: any, index: number) => (
                <div
                  key={index}
                  className='bg-gray-200 rounded-full px-5 py-1 text-sm text-gray-700 relative'
                >
                  <span>{tag}</span>
                  <span className='absolute right-[5px] top-[-2px] text-[16px]'>
                    &times;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex w-full justify-end mt-2'>
            <Button
              onClick={() => handleAddCategory()}
              text='追加'
              className='!w-1/4 mr-2 !rounded-3xl !text-black !border-black !p-0 !py-1'
            />
          </div>
        </div>

        <div>
          <label className='block mb-1 text-[12px]'>商品ランク</label>
          <div className='w-full'>
            <Input
              value={tagProductRank}
              onChange={(e: any) => setTagProductRank(e.target.value)}
              type='text'
              className='border !border-gray-200 !rounded'
            />
            <div className='flex flex-wrap gap-2 mt-2'>
              {tagProductRanks.map((tag: any, index: number) => (
                <div
                  key={index}
                  className='bg-gray-200 rounded-full px-5 py-1 text-sm text-gray-700 relative'
                >
                  <span>{tag}</span>
                  <span className='absolute right-[5px] top-[-2px] text-[16px]'>
                    &times;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex w-full justify-end mt-2'>
            <Button
              onClick={() => handleAddProductRank()}
              text='追加'
              className='!w-1/4 mr-2 !rounded-3xl !text-black !border-black !p-0 !py-1'
            />
          </div>
        </div>

        <div className='mb-[70px]'>
          <label className='block mb-1 text-[12px]'>開始価格</label>
          <div className='flex justify-between w-full'>
            <Select
              options={[]}
              className='!w-full border rounded p-2'
              parentClass='w-1/3'
            />
            <Input
              type='text'
              className='w-2/3 border !border-gray-200 !rounded ml-2'
            />
          </div>
        </div>

        <div>
          <div className='flex justify-between items-center w-full'>
            <div className='w-3/4 mr-2 mb-6'>
              <label className='block mb-1 text-[12px]'>
                商品詳細テンプレート①
              </label>
              <Input
                type='text'
                className='border !border-gray-200 !rounded mr-2 !h-[40px]'
              />
            </div>

            <div className='w-1/4'>
              <Button
                text='登録'
                className='!w-full mr-2 !rounded-3xl !text-black !border-black !p-0 !py-1 text-nowrap my-0.5'
              />
              <Button
                text='削除'
                className='!w-full !rounded-3xl !text-black !border-black !p-0 !py-1 text-nowrap my-0.5'
              />
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <div className='flex justify-between items-center w-full'>
            <div className='w-3/4 mr-2 mb-6'>
              <label className='block mb-1 text-[12px]'>
                商品詳細テンプレート②
              </label>
              <Input
                type='text'
                className='border !border-gray-200 !rounded mr-2 !h-[40px]'
              />
            </div>
            <div className='w-1/4'>
              <Button
                text='登録'
                className='!w-full mr-2 !rounded-3xl !text-black !border-black !p-0 !py-1 text-nowrap my-0.5'
              />
              <Button
                text='削除'
                className='!w-full !rounded-3xl !text-black !border-black !p-0 !py-1 text-nowrap my-0.5'
              />
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <div className='flex justify-between items-center w-full'>
            <div className='w-3/4 mr-2 mb-6'>
              <label className='block mb-1 text-[12px]'>
                商品詳細テンプレート③
              </label>
              <Input
                type='text'
                className=' border !border-gray-200 !rounded mr-2 !h-[40px]'
              />
            </div>

            <div className='w-1/4'>
              <Button
                text='登録'
                className='!w-full mr-2 !rounded-3xl !text-black !border-black !p-0 !py-1 text-nowrap my-0.5'
              />
              <Button
                text='削除'
                className='!w-full !rounded-3xl !text-black !border-black !p-0 !py-1 text-nowrap my-0.5'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
