
import Featured from './components/Featured'
import Landing from './components/Landing'


export default async function Home() {

  return (
    <main className='flex flex-col gap-10'>
      <Landing/>
      <Featured/>
     
    </main>
  )
}