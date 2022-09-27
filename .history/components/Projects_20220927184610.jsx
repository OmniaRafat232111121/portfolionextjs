import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import salon from '../public/assets/projects/salon.png'
import Gyym from '../public/assets/projects/Gyym.png'
import NFT from "../public/assets/projects/NFT.png"
import Food from "../public/assets/projects/Food.png"

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#01192c]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
          title='Food APP'
          backgroundImg={Food}
          projectUrl='/ood'
          tech='React JS'

        />
          <ProjectItem
          title='NFT'
          backgroundImg={NFT}
          projectUrl='/NFt'
          tech='React JS'

        />
          <ProjectItem
            title='Salon'
            backgroundImg={salon}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
          title='Gym'
          backgroundImg={Gyym}
          projectUrl='/Gym'
          tech='React JS'

        />
       
        </div>
      </div>
    </div>
  );
};

export default Projects;