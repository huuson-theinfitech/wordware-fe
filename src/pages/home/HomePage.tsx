import { FaXTwitter } from 'react-icons/fa6'
import Logo from '../../assets/logo.svg'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { handleTwitterString } from '../../utils/string'

const HomePage = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const handleClick = () => {
    const paramValue = handleTwitterString(value)
    if (paramValue) {
      navigate(`/statistic/${handleTwitterString(value)}`)
    } else {
      alert('Please enter a valid twitter username or url')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className='grid self-end w-screen h-screen grid-cols-1 overflow-hidden overflow-y-auto break-words whitespace-normal lg:grid-cols-2'>
      <div className='flex flex-col justify-end h-screen col-span-1 bg-body-grey'>
        <div className='px-12 pb-12 border-b sm:pl-24 '>
          <div className='text-[48px] font-light sm:flex sm:flex-wrap'>
            <div className='flex flex-wrap items-center'>
              <FaXTwitter className='w-11 h-11' />
              <span className='font-extrabold text-orange'>AI</span>
              <span>であなたの</span>
            </div>
          </div>
          <div className='flex items-center space-x-2 text-[48px] font-light flex-wrap'>
            <FaXTwitter />
            <span>twitterを発見</span>
          </div>
          <div className='flex items-center h-10 mt-10 text-sm'>
            <input
              placeholder='@ユーザー名'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className='h-full sm:min-w-[272px] p-3  border-2 rounded-l-md border-black focus:outline-none'
            />
            <button
              onClick={handleClick}
              className='flex items-center gap-2 h-full overflow-hidden  text-white bg-black rounded-none rounded-r-md focus:none sm:min-w-[103px] hover:border-black hover:bg-black/90 focus:outline-none'
            >
              <FaXTwitter />
              発見
            </button>
          </div>
          <div className='mt-[72px] text-base'>
            <div className='flex flex-wrap items-center'>
              <span>こちらは</span>
              <span className='font-bold text-orange'>THEINFITECH</span>
              <span>で構築した「XAI」です。下記の機能を備えています：</span>
            </div>
            <ul className='list-disc list-inside '>
              <li>AIであなたの関心事を引き出し</li>
              <li>最新のインタラクションを分析してデータ化</li>
              <li>あなたを3つのキーワードで表す</li>
              <li>「XAIの視点で見る、あなたの真の姿」機能</li>
            </ul>
          </div>
        </div>
        <div className='pl-24 pt-11 pb-[12%]'>
          <Link
            to='https://theinfitech.jp/'
            target='_blank'
            className='flex items-center rounded-sm justify-center  w-[200px] gap-2 py-[10px] font-bold bg-white border-orange border text-orange hover:text-orange/80 hover:bg-white/90'
          >
            <img src={Logo} alt='logo' />
            <span>私たちについて</span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center h-full col-span-1 px-8 py-12 text-white bg-bottom bg-cover lg:pb-0 bg-background-image'>
        <div className='text-[56px] sm:leading-10 font-semibold'>
          <p>THE</p>
          <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
            <p>INFINITECH</p>
            <img src={Logo} alt='logo' className='h-[100px] w-[100px]' />
          </div>
        </div>
        <p className='mt-12 text-2xl'>— 私たちのテクノロジーであなたのビジネスを成長させる —</p>
        <p className='mt-16 text-lg'>かけがえのないビジネスパートナーになる</p>
        <p className='mt-4 text-lg'>THEINFITECH - AIとビッグデータソリューションの先駆者</p>
        <Link
          to='https://theinfitech.jp/'
          target='_blank'
          className='mt-16 text-black rounded-sm font-medium max-w-[490px] bg-white w-full flex justify-center items-center gap-2 py-[10px] hover:text-black/80 hover:bg-white/90'
        >
          <img src={Logo} alt='logo' />
          <span>私たちについて</span>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
