import { SvgIcon } from '@mui/material'
import tickBlueTwitter from '../../assets/tickBlueTwitter.svg'
import EditNoteIcon from '@mui/icons-material/EditNote'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp'
import IconTags from './IconTags'

const dataFake = ['生成AI', 'DIFY', 'THEINFITECH']

const randomColor = ['text-red-500', 'text-green-600', 'text-blue-950']

const AccountStatisticsPage = () => {
  return (
    <div
      className='flex flex-col w-screen h-screen gap-8 px-12 pt-16 overflow-hidden overflow-y-auto text-center text-primary'
      style={{ background: 'linear-gradient(135deg, #9ec9f5, #e3aadf)' }}
    >
      <div className='flex justify-between'>
        <p>@MANHND11</p>
        <div className='flex space-x-4'>
          <div className='space-x-2'>
            <span className='font-medium text-blue-800'>1,728</span>
            <span className='text-primary'>FOLLOWERS</span>
          </div>
          <div className='space-x-2'>
            <span className='font-medium text-orange-600'>3,514</span>
            <span className='text-primary'>FOLLOWING</span>
          </div>
        </div>
      </div>
      <p className='text-2xl font-semibold tracking-widest'>MANH (THOMAS) NGUYEN | THEINFITECH CEO </p>
      <SvgIcon className='w-16 h-16 text-blue-800'>{tickBlueTwitter}</SvgIcon>
      <div className='grid grid-cols-4 gap-24 '>
        <div className='flex flex-col items-center col-span-1 gap-4 py-8 bg-white rounded-3xl'>
          <p className='text-xl font-medium text-blue-900'>DECEMBER 2024</p>
          <div className='flex flex-col gap-4 w-[140px] mt-4 items-start'>
            <IconTags icon={<EditNoteIcon fontSize='large' />} count={80} label='POSTS' colorText='text-red-500' />
            <IconTags icon={<RepeatIcon fontSize='large' />} count={2340} label='REPOST' colorText='text-purple-500' />
            <IconTags
              icon={<FavoriteBorderIcon fontSize='large' />}
              count={70}
              label='LIKES'
              colorText='text-blue-500'
            />
            <IconTags
              icon={<ChatBubbleOutlineOutlinedIcon fontSize='large' />}
              count={80}
              label='REPLY'
              colorText='text-green-600'
            />
            <IconTags
              icon={<VisibilityOutlinedIcon fontSize='large' />}
              count={80}
              label='VIEWS'
              colorText='text-blue-900'
            />
          </div>
        </div>
        <div className='flex flex-col items-center col-span-2 gap-4 '>
          <div className='flex flex-row items-center gap-3'>
            <AutoAwesomeSharpIcon />
            <p className='text-2xl font-medium tracking-widest text-blue-950'>INFIAI THINK ABOUT YOU</p>
            <AutoAwesomeSharpIcon />
          </div>
          <p className='text-xl font-medium tracking-widest text-white '>
            AIと自動化を活用して業務プロセスの最適化やSEO技術の向上に情熱を注ぐ技術に精通したプロフェッショナル
          </p>
          <p className='text-2xl font-medium tracking-widest text-blue-950 '>TOP PICKS</p>
          <p className='text-xl font-medium tracking-widest text-white '>
            『Dify x GASx 生成AI』でSEO記事を効率的に生成するワークフロー
            名刺管理を効率化！OCR技術で名刺情報を迅速かつ正確にデジタル化 THEINFITECHの創立3周年を迎えました
          </p>
        </div>
        <div className='flex flex-col items-center col-span-1 gap-8'>
          <p className='text-3xl font-bold text-white'>INTEREST</p>
          {dataFake.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className={`flex items-center text-lg justify-center bg-white gap-2 w-[180px] h-[48px] cursor-pointer rounded-3xl ${randomColor[index]}`}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-center gap-2'>
        {dataFake.map((item, index) => (
          <div
            className='px-4 py-1 text-blue-900 rounded-full'
            key={`${item}-${index}`}
            style={{ background: 'linear-gradient(90deg, #c2f0c2, #96d4f7)' }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccountStatisticsPage
