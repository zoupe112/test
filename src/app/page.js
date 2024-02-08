'use client'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import 'flowbite';
import Navbar from './components/Navbar';
import './globals.css'
export default function Home() {
  useEffect(() => {
    changepics1()
    changepics2()
    changepics3()
    changepics4()
    setIsClient(true)
  }, []);

  const [isClient, setIsClient] = useState(false)

  const changepics1 = () => {
    var imageSources = ["image1.jpg", "image5.jpg"]
    var index = 0;
    setInterval(function () {
      if (index === imageSources.length) {
        index = 0;
      }
      document.getElementById("pic1").src = imageSources[index];
      index++;
    }, 5000);
  }
  const changepics2 = () => {
    var imageSources2 = ["image2.jpg", "image6.jpg"]
    var index2 = 0;
    setInterval(function () {
      if (index2 === imageSources2.length) {
        index2 = 0;
      }
      document.getElementById("pic2").src = imageSources2[index2];
      index2++;
    }, 5000);
  }
  const changepics3 = () => {
    var imageSources3 = ["image3.jpg", "image7.jpg"]
    var index3 = 0;
    setInterval(function () {
      if (index3 === imageSources3.length) {
        index3 = 0;
      }
      document.getElementById("pic3").src = imageSources3[index3];
      index3++;
    }, 5000);
  }
  const changepics4 = () => {
    var imageSources4 = ["image4.jpg", "image8.jpg"]
    var index4 = 0;
    setInterval(function () {
      if (index4 === imageSources4.length) {
        index4 = 0;
      }
      document.getElementById("pic4").src = imageSources4[index4];
      index4++;
    }, 5000);
  }
  return (
    <>
      <div className='absolute -z-10 bg-[url("/logo-large.png")] bg-[length:1168px_1168px] bg-no-repeat bg-right-top opacity-25 scroll-smooth' style={{ backgroundPositionX: '1200px' }}><img src='logo-large.png' className='opacity-0'></img></div>
      <div className='flex flex-col'>
        <div class='m-10'><Navbar /></div>
        <div className='ms-14 text-6xl mb-6'>
          <h1 className='mb-6'>SPACE</h1>
          <h1 className='mb-6'>ACADEMY</h1>
          <h1 className='mb-6'>LIFE</h1>
          <h3 className='mb-6 text-xl'>We believe in bringing the difference by using principles</h3>
          <h4 className='mb-6 text-xl'>Rapid pace | Simplistic & Reusable Design | Plug & Play Components | Build Agile Teams</h4>
          <button type="button" class="text-white hover:text-orange-400 bg-orange-400 hover:bg-white border hover:border-orange-400 text-lg px-5 py-2.5 me-2 mb-2">ABOUT US</button>
        </div>
        <div class='flex justify-center '>
          <div name='about' id='about' class='flex flex-col basis-3/5 pt-44'>
            <h1 className='text-6xl'>ABOUT US</h1>
            <p className='mt-5'>&emsp;&nbsp;We develop innovative and creative Solutions, provide Training and IT services that provide total communication and information solutions. Among a plethora of services, Cross Platform mobile application solutions and development and Web application development enabled with intelligence through AI ML and make distributed software ecosystem on Blockchain smart contracts, are major area of focus for Enixer.</p>
            <p className='mt-5'>&emsp;&nbsp;Tailor made solutions in Banking, Payments, e-commerce, B2B & managed hosting are few that we offer.</p>
            <img src='logo-large.png' className='mr-auto ml-auto w-2/12 h-2/12 mt-10'></img>
            <div name='academy' id='academy' className='mt-44 pt-44'>
              <h1 className='text-6xl'>ACADEMY</h1>
              <p className='mt-5'>&emsp;&nbsp;Train to build millennial workforce with niche technologies in Digital & Mobile tools / frameworks, AI ML, IOT and Blockchain. Strategically train human resources on next gen. technologies, create on-job environment by using real time & practical assignments.</p>
              <p className='mt-5'>&emsp;&nbsp;Enixer Academy cor principle is to touch natural and inner ability of human resources and train to be independent contributor to agile teams.</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-6 mb-44'>
          <div class='flex flex-row basis-3/5 items-center'>
            <div className='basis-80 border-2 border-orange-400 p-7'>Successfully completed Cross-platform Mobile Application Development - on Xamarin bootcamp training for 16 members batch</div>
            <div className='basis-80 ml-20 mr-20 border-2 border-orange-400 p-10'>Successfully completed Cross-platform Mobile Application Development - on Xamarin bootcamp training for one batch</div>
            <div className='basis-80 border-2 border-orange-400 p-11'>Successfully completed WebAPI and Entity Programming in C# bootcamp training for one batch</div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div class='flex basis-3/5 bg-yellow-50/50 p-10'>
            <div ><p className=' text-2xl text-center text-orange-400'>Planned / On-Going</p>
              <div className='grid  grid-cols-5'>
                <div className=' border-2 border-gray-200 shadow-2xl mr-1 px-2 ' style={{ paddingTop: '0.5px', paddingBottom: '0.5px' }}>Coding for Kids - Train on Mobile, AI : Python, C# and JS</div>
                <div className=' border-2 border-gray-200 shadow-2xl mr-1 ' style={{ paddingTop: '1px', paddingBottom: '1px' }}>Cross Platform Mobile Application Development - on React Native</div>
                <div className=' border-2 border-gray-200 shadow-2xl mr-1 px-2' style={{ paddingTop: '12.5px', paddingBottom: '12.5px' }}>Machine Learning on AWS cloud</div>
                <div className=' border-2 border-gray-200 shadow-2xl mr-1 px-2' style={{ paddingTop: '12.5px', paddingBottom: '12.5px' }}>Machine Learning on Azure cloud</div>
                <div className=' border-2 border-gray-200 shadow-2xl px-2 px-2' style={{ paddingTop: '25px', paddingBottom: '25px' }}>Xamarin + Unity</div>
              </div>
            </div>
          </div>
        </div>
        <div name='why-enixer' id='why-enixer' class='flex justify-center pt-44'>
          <div class='flex flex-col basis-3/5'>
            <h1 className='text-6xl'>WHY ENIXER ?</h1>
            <div class='grid  grid-cols-2' style={{ gridTemplateColumns: '1fr 2fr' }}>
              <div className='mt-20 grid grid-cols-2 gap-5 justify-items-center'>
                <img id='pic1' src='image1.jpg' className='border-2' style={{ width: '168px', height: '168px' }}></img>
                <img id='pic2' src='image2.jpg' className='border-2' style={{ width: '168px', height: '168px' }}></img>
                <img id='pic3' src='image3.jpg' className='border-2' style={{ width: '168px', height: '168px' }}></img>
                <img id='pic4' src='image4.jpg' className='border-2' style={{ width: '168px', height: '168px' }}></img>
              </div>
              <div className='grid grid-rows-2 grid-flow-col'>
                <div className='border-2 m-4 px-7 py-2' ><h1>Strategy & Planning</h1>
                  <p>Plan, Design & Analyse to micro level details Ready to plug & play reusable component store Quality & Rapid pace is our motto</p></div>
                <div className='border-2 m-4 px-7 py-2'><h1>Functional Richness</h1>
                  <p>Multi-Domain and multi country experience leadership Innovating and adapting to future</p></div>
                <div className='border-2 m-4 px-7 py-2'><h1>Technology Selection</h1>
                  <p>Experience in Niche and Cutting edge technologies Mix of Proprietary and OpenSource Technologies Flexible and Faster Adaptation to new Technologies</p></div>
                <div className='border-2 m-4 px-7 py-2'><h1>People & Culture</h1>
                  <p>Syntactically Independent programmers Trained and exposed to cross platform execution Experienced Leadership & Young Team On Job trained</p></div>
              </div>
            </div>

          </div>
        </div>
        <div name='exp' id='exp' class='flex justify-center pt-44'>
          <div class='flex flex-col basis-3/5'>
            <h1 className='text-6xl mb-6'>EXPERIENCE & SPECIALIST</h1>
            <div className='flex flex-row'>
              <div className='flex flex-col basis1/2 mr-4'>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>Ecommerce web & mobile</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img><p>NML-Logistic Management</p></div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>SNMP Network Monitoring</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>JobVenger , Employee System</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>Marathon & Spots Health Check available on both iOS & Android for spots watch</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>HomeVilla : Booking Hotel and Home Online</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>Payroll System and HR Payroll System</div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>Ecommerce web & mobile</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img><p>NML-Logistic Management</p></div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>SNMP Network Monitoring</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>JobVenger , Employee System</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>Marathon & Spots Health Check available on both iOS & Android for spots watch</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>HomeVilla : Booking Hotel and Home Online</div>
                <div className='flex flex-row p-1  items-center shadow-lg'><img src='check.png' style={{ width: '15px', height: '14px' }} className='mr-2'></img>Payroll System and HR Payroll System</div>
              </div>
            </div>
          </div>
        </div>
        <div name='customer' id='customer' class='flex justify-center pt-44'>
          <div class='flex flex-col basis-3/5'>
            <h1 className='text-6xl mb-6 '>OUR CUSTOMER</h1>
            <div className='flex justify-center'>
              <div className='mr-2 transition after:border-y-2 after:border-orange-400 after:translate-x-0 hover:after:translate-x-full'><img src='c1.jpg' className=' border-2 border-slate-50 transition hover:scale-75' style={{ width: '134px', height: '134px' }}></img></div>
              <div><img src='c2.jpg' className='mr-4 border-2 border-slate-100' style={{ width: '134px', height: '134px' }}></img></div>
              <div><img src='c3.jpg' className='mr-4 border-2 border-slate-100' style={{ width: '134px', height: '134px' }}></img></div>
              <div><img src='c4.jpg' className='mr-4 border-2 border-slate-100' style={{ width: '134px', height: '134px' }}></img></div>
              <div><img src='c5.jpg' className='mr-4 border-2 border-slate-100' style={{ width: '134px', height: '134px' }}></img></div>
              <div><img src='c6.jpg' className='mr-4 border-2 border-slate-100' style={{ width: '134px', height: '134px' }}></img></div>
            </div>
            <div className='flex justify-center mt-4'>
              <div><img src='c7.png' className='mr-4 border-2 border-slate-100' style={{ width: '134px', height: '134px' }}></img></div>
              <div><img src='c8.png' className='mr-4 border-2 border-slate-100' style={{ width: '134px', height: '134px' }}></img></div>
              <div><img src='c9.jpg' className='mr-4 border-2 border-slate-100' style={{ width: '134px', height: '134px' }}></img></div>
            </div>
          </div>
        </div>
        <div name='contact' id='contact' class='flex justify-center pt-44 mb-44'>
          <div class='flex flex-col basis-3/5'>
            <h1 className='text-6xl mb-6 '>CONTACT US</h1>
            <p className='mb-4'>Enixer Co., Ltd <br></br>1338/948-949 Praram 3 rd., yannawa, chongnonsi, Bangkok 10120</p>
            <p>itsupport@enixer.net <br></br>(+66) 96262 9644</p>
          </div>
        </div>
        <div><img src='bg-footer.jpg' className='w-full' style={{ height: '382px', opacity: '0.25' }}></img></div>
        <div className='text-center bg-orange-400 text-white pt-4 pb-4'>Copyright © Enixer 2022</div>
      </div>
    </>
  );
}
