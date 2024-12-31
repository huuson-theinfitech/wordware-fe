import tickBlueTwitter from '../../assets/tickBlueTwitter.svg'
import EditNoteIcon from '@mui/icons-material/EditNote'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp'
import IconTags from './IconTags'
import { randomColor } from '../../data/app.data'
import Skeleton from '../../components/Skeleton'
import { useParams } from 'react-router-dom'
import { Key } from 'react'
import useQueryStatisticsUser from '../../hooks/useQueryStatisticsUser'

const AccountStatisticsPage = () => {
  const { username } = useParams()

  const { data, isLoading } = useQueryStatisticsUser(username ?? '')

  return (
    <div
      className='flex flex-col w-screen h-screen gap-8 px-10 py-12 overflow-hidden overflow-y-auto text-center text-black'
      style={{ background: 'linear-gradient(135deg, #94bbe9, #eeaeca)' }}
    >
      <div className='flex flex-col justify-between text-sm tracking-widest sm:flex-row sm:flex-wrap text-secondary'>
        {isLoading ? <Skeleton /> : <p className='font-medium'>{username}</p>}
        {isLoading ? (
          <Skeleton count={2} className='!flex-row' />
        ) : (
          <div className='flex-col flex space-x-6 tracking-[2px] sm:flex-row sm:flex-wrap'>
            <div className='space-x-2'>
              <span className='text-red-coral'>{data?.followers_count.toLocaleString()}</span>
              <span>FOLLOWERS</span>
            </div>
            <div className='space-x-2'>
              <span className='text-blue-cobalt'>{data?.following_count.toLocaleString()}</span>
              <span>FOLLOWING</span>
            </div>
          </div>
        )}
      </div>

      <div className='flex items-center justify-center gap-2'>
        {isLoading ? (
          <Skeleton className='!w-56' />
        ) : (
          <>
            <p className='text-3xl font-bold tracking-widest'>{data?.name}</p>
            <img src={tickBlueTwitter} className='w-6 h-6 text-blue-text' alt='Twitter Blue Tick' />
          </>
        )}
      </div>
      <div className='grid grid-cols-1 gap-6 mt-4 lg:grid-cols-4 place-items-center'>
        {isLoading ? (
          <Skeleton count={5} />
        ) : (
          <div className='col-span-1 p-8 tracking-wider bg-white rounded-3xl'>
            <p className='font-semibold text-blue-cobalt'>DECEMBER 2024</p>
            <div className='flex flex-col items-start gap-5 mt-5'>
              <IconTags
                icon={<EditNoteIcon fontSize='large' />}
                count={data?.posts_count}
                label='POSTS'
                colorText='text-red-coral'
              />
              <IconTags
                icon={<RepeatIcon fontSize='large' />}
                count={data?.retweet_count}
                label='REPOST'
                colorText='text-pink-magenta'
              />
              <IconTags
                icon={<FavoriteBorderIcon fontSize='large' />}
                count={data?.favorite_count}
                label='LIKES'
                colorText='text-blue-light'
              />
              <IconTags
                icon={<ChatBubbleOutlineOutlinedIcon fontSize='large' />}
                count={data?.reply_count}
                label='REPLY'
                colorText='text-green'
              />
              <IconTags
                icon={<VisibilityOutlinedIcon fontSize='large' />}
                count={data?.view_count}
                label='VIEWS'
                colorText='text-blue-cobalt'
              />
            </div>
          </div>
        )}

        <div className='flex flex-col items-center col-span-2 gap-6'>
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className='flex flex-row items-center gap-3 text-blue-text'>
              <AutoAwesomeSharpIcon fontSize='large' />
              <p className='text-2xl font-bold tracking-[2px]'>INFIAI THINK ABOUT YOU</p>
              <AutoAwesomeSharpIcon fontSize='large' />
            </div>
          )}

          {isLoading ? (
            <Skeleton count={2} className='w-full' />
          ) : (
            <p className='text-xl font-semibold leading-8 tracking-widest text-white'>{data?.description}</p>
          )}

          {isLoading ? <Skeleton /> : <p className='text-2xl font-bold tracking-[2px] text-blue-text'>TOP PICKS</p>}

          {isLoading ? (
            <Skeleton count={3} className='w-full' />
          ) : (
            <div className='space-y-3 text-xl font-semibold tracking-widest text-left text-white '>
              {data?.topics.map((item: string, index: Key) => <p key={`${item}-${index}`}>{item}</p>)}
            </div>
          )}

          {isLoading ? (
            <Skeleton count={3} className='!flex-row' />
          ) : (
            <div className='flex flex-row flex-wrap justify-center gap-2'>
              {data?.interest?.map((item: string, index: Key) => (
                <div
                  className='px-4 py-1 text-blue-900 flex justify-normal items-center rounded-full tracking-[2px]'
                  key={`${item}-${index}`}
                  style={{ background: 'linear-gradient(90deg, #cdffd8, #94b9ff)' }}
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='flex flex-col items-center col-span-1 gap-8'>
          {isLoading ? <Skeleton /> : <p className='text-3xl font-bold text-white'>INTEREST</p>}
          {isLoading ? (
            <Skeleton count={3} className='w-full' />
          ) : (
            data?.interest?.map((item: string, index: number) => (
              <div
                key={`${item}-${index}`}
                className={`flex items-center font-medium text-lg tracking-widest justify-center bg-white w-[200px] py-4 cursor-pointer rounded-3xl ${randomColor[index]}`}
              >
                <p>{item}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountStatisticsPage
