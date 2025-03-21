import htmlImg from '../../../assets/images/skills/html.png'
import css from '../../../assets/images/skills/css.png'
import js from '../../../assets/images/skills/js.png'
import tailwind from '../../../assets/images/skills/tailwind.png'
import bootstrap from '../../../assets/images/skills/bootstrap.png'
import node from '../../../assets/images/skills/node-js.png'
import react from '../../../assets/images/skills/react.png'
import express from '../../../assets/images/skills/express.png'
import mongoDB from '../../../assets/images/skills/mongoDb.png'
import firebase from '../../../assets/images/skills/firebase.png'
import github from '../../../assets/images/skills/github.png'
import git from '../../../assets/images/skills/git.png'

import Marquee from 'react-fast-marquee'
import { Fade } from 'react-awesome-reveal'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'

const Skills = () => {
    return (
        <Fade>
            <div className="my-16 text-center max-w-[1600px] mx-auto">
                <SectionTitle title="Skills_"></SectionTitle>
                <Marquee pauseOnClick={true}>
                    <div className='grid grid-cols-3 md:grid-cols-7 gap-3 m-3 my-8'>
                        <div className='bg-gradient-to-b from-red-900 to-red-600 rounded-lg flex items-center justify-center px-12 py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={htmlImg} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Html</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-sky-900 to-sky-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={css} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Css</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-yellow-900 to-yellow-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={js} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Javascript</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-indigo-900 to-indigo-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={bootstrap} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Bootstrap</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-cyan-900 to-cyan-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={tailwind} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Tailwind</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-green-900 to-green-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={node} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Node</p>
                            </div>
                        </div>

                        <div className='bg-gradient-to-b from-blue-900 to-blue-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={react} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>React</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-pink-900 to-pink-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={express} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Express</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-emerald-900 to-emerald-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={mongoDB} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>MongoDB</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-amber-900 to-amber-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={firebase} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Firebase</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-zinc-900 to-zinc-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={github} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Github</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-violet-900 to-violet-600 rounded-lg flex items-center justify-center py-6'>
                            <div>
                                <div>
                                    <img className='mx-auto' src={git} alt="" />
                                </div>
                                <p className='text-xl mt-2 text-white font-bold'>Git</p>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </Fade>
    );
};

export default Skills;
