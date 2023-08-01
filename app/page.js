
import Featured from './components/Featured'
import Landing from './components/Landing'

export default async function Home() {
  
  return (
    <main className='w-[90%] mx-auto py-5 flex flex-col gap-10'>
      <Landing/>
      <Featured/>
     
    </main>
  )
}