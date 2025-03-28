/* eslint-disable react/no-unescaped-entities */
import Tilt from 'react-parallax-tilt';
import profileImg from '../../../assets/images/profileImg3.png'
import SocialIcon from '../../Shared/SocialIcon/SocialIcon';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const AboutMe = () => {
    return (
        <div className='max-w-[1300px] dark:text-gray-300 mx-auto my-16 lg:my-20'>
            <div className="md:flex gap-28 p-2 items-center">
                <div className='md:w-1/2'>
                    <Fade direction='left' triggerOnce>
                        <div className=' p-8 w-full rounded-2xl border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 cursor-pointer transition-all mb-6 md:mb-0 bg-gray-100 shadow-2xl'>
                            <Tilt>
                                <img className='w-full object-cover border-red-400 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500' src={profileImg} alt="" />
                            </Tilt>

                        </div>
                    </Fade>
                </div>

                <div className='md:w-1/2'>
                    <div className='space-y-5'>
                        <Fade duration={2000} direction='down'>
                            <h1 className="text-4xl sm:text-5xl font-bold   text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 "> About Me_ </h1>
                        </Fade>
                        <div>

                            <Fade duration={2000} direction='down'>
                                <h3 className="text-3xl sm:text-4xl font-semibold">I'm a Developer, so available</h3>
                            </Fade>
                            <Fade duration={2000} direction='up'>
                                <div className='text-xl sm:text-2xl font-semibold text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 uppercase'>
                                    for
                                    <Typewriter
                                        words={[" Web Development", " Web Design", " Mern Stack Development", " Frontend Development"]}
                                        loop={false}
                                    ></Typewriter>
                                </div>
                            </Fade>
                        </div>
                        <Fade duration={2000} direction='up'>
                            <p className='text-lg'>I’m Asif, a dedicated web developer with a for crafting dynamic and responsive web experiences. My expertise lies in utilizing the React library and the MERN stack (MongoDB, Express, React, Node.js) to build robust full-stack applications. {'I’m'} committed to leveraging modern technologies to deliver high-quality solutions that enhance user experience and drive success</p>
                        </Fade>
                        <Fade duration={2000} direction='up'>
                            <SocialIcon></SocialIcon>
                        </Fade>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;