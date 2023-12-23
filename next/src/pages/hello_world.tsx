import type { NextPage} from 'next'
import SimpleButton from '@/components/SimpleButton'
const HelloWorld: NextPage = () => {
  const handleOnClick = () => {
    console.log('clicked from hello world')
  }
  return (
    <>
      <h1>Title</h1>
      <p>content</p>
      <SimpleButton text={0} onClick={handleOnClick}/>
    </>

  )
}

export default HelloWorld