
import Featured from './components/Featured'
import Landing from './components/Landing'
import LoadingSkeleton from './components/LoadingSkeleton'


export default async function Home() {

  return (
    <main className='flex flex-col gap-10'>

      <Landing/>
      <Featured/>
    
     
    </main>
  )
}