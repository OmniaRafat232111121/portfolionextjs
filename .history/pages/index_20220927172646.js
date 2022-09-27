import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Skills from '../components/skills'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Clint | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      
    <Main />
    <About/>
    <Skills
    
    </div>
  )
}