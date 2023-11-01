import React from 'react';

import './home.css';

import logo from './logo.svg';
import twitter from './twitter.svg';
import discord from './discord.svg';
import telegram from './telegram.svg';
import reddit from './reddit.svg';

import binance from './binance.svg';
import ethereum from './ethereum.svg';
import polygon from './polygon.svg';
import hedera from './hedera.svg';
import fantom from './fantom.svg';
import near from './near.svg';
import terra from './terra.svg';

import stake from './stake.webp';
import receive from './receive.webp';
import defi from './defi.webp';
import security from './security.webp';

import pantera from './pantera.webp';
import coinbase from './coinbase-ventures.webp';
import jump from './jump-crypto.webp';
import block from './blockchain-com.webp';
import trueventure from './true-ventures.webp';

import ledger from './ledger.webp';
import aave from './aave.webp';
import balancer from './balancer.webp';
import beef from './beefy.webp';

import swissborg from './swissborg.webp';
import quick from './quickswap.webp';
import anchorage from './anchorage.webp';
import bitgo from './bitgo.webp';

import { useState } from 'react';
import MyCards from './mycard';

import okx from './okx.svg';
import gate from './gate-io.webp';
import huobi from './huobi.svg';
import bybit from './bybit.webp';
import kucoin from './kucoin.webp';
import crypto from './crypto-com.webp';

import blogone from './blogone.png';
import blogtwo from './blogtwo.png';
import blogthree from './blogthree.jpeg';
import footlogo from './footlogo.png';

import MyCardTwo from './mycarttwo';

import community from './community-forum.svg';
import  snapshot from './snapshot.svg';
import sd from './sd.svg';
import sdtwo from './sdtwo.svg';

import MyCardThree from './mycardthree';

import github from './github.svg';
import eth from './ethereum.svg';
import doc from  './docs.svg';

import blog from './blogs.svg';
import download from './download.svg';
import stadericon from './stadertwo.svg';
import { Link } from 'react-router-dom';


function Home(){


    // const [isHovered, setIsHovered] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // }

    return (
        <>
            {/* nav */}

            <nav class="navbar fixed-top navbar-expand-lg py-4 mynav navbar-light">
  <a class="navbar-brand" href="#"><img className='logoimage' src={logo} /><span className='logohead'>Stader</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto pl-5">

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Network
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown"data-toggle="collapse" href="#collapseExampleTwo" role="button" aria-expanded="false" aria-controls="collapseExampleTwo" >
         Governance
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>


      <li className="nav-item mylink">
        <a className="nav-link" href="#">Analytics</a>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="collapse" href="#collapseExampleThree" role="button" aria-expanded="false" aria-controls="collapseExampleThree">
         Developers
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="collapse" href="#collapseExampleFour" role="button" aria-expanded="false" aria-controls="collapseExampleFour">
         About
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <div className='flexdiv'>
          <img className='topicon' src={twitter} />
          <img className='topicon' src={discord} />
          <img className='topicon' src={telegram} />
          <img className='topicon' src={reddit} />

      </div>
      <Link to={'/wallets'} class="btn mybtn my-2 my-sm-0" type="submit">Connect Wallet</Link>
    </form>
  </div>
</nav>


            {/* nav */}

{/* netowrk collaspe */}

<div className="collapse fixed-top" id="collapseExample">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              <h5 className='networksmall'>Networks</h5>
              <h2 className='networkbig my-2'>Networks</h2>
              <p className='networkpara my-2'>Earn more DeFi returns with liquid staking</p>

          </div>

          <div className='col-md-8'>
          <div className='carddiv container mt-5'>

           

                <MyCardTwo brand="Ethereum" amount="TVL : $73M" image={ethereum} />
                <MyCardTwo brand="Polygon" amount="TVL : $67M" image={polygon} />

                <MyCardTwo brand="Hedera" amount="TVL : $22M" image={hedera} />

                <MyCardTwo brand="BNB" amount="TVL : $14M" image={binance} />

            </div>


            <div className='carddiv container mt-5'>

           

                <MyCardTwo  brand="Fantom" amount="TVL : $2.5M" image={fantom}/>
                <MyCardTwo brand="Near" amount="TVL : $757K" image={near} />

                <MyCardTwo brand="Terra 2.0" amount="TVL : $546K" image={terra} />
                <div style={{
                    visibility:"hidden",
                }}>
                    <MyCardTwo brand="Terra 2.0" amount="TVL : $546K" image={terra} />
                </div>
                

                </div>

          </div>

      </div>
  
 
</div> 

{/* Governance */}

<div className="collapse" id="collapseExampleTwo">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>Governance</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           

<MyCardThree brand="Commuity Forum"  image={community} />
<MyCardThree brand="Snapshot"image={snapshot} />

<MyCardThree brand="SD DeFi"  image={sd} />

<MyCardThree brand="SD Details"  image={sdtwo} />

</div>
       



          </div>

      </div>
  
 
</div> 



{/* developers */}

<div className="collapse" id="collapseExampleThree">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>Developers</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           
<div style={{
    visibility:"hidden",
}}>
<MyCardThree brand="Docs"  image={doc} />
</div>
<MyCardThree brand="Github"  image={github} />
<MyCardThree brand="ETHx Litepaper"image={eth} />

<MyCardThree brand="Docs"  image={doc} />


</div>
       



          </div>

      </div>
  
 
</div> 


{/* About */}


<div className="collapse" id="collapseExampleFour">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>About</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           
<div style={{
    visibility:"hidden",
}}>
<MyCardThree brand=""  image={doc} />
</div>
<MyCardThree brand="About Stader"  image={stadericon} />
<MyCardThree brand="Blogs"image={blog} />

<MyCardThree brand="Download Press Kit"  image={download} />


</div>
       



          </div>

      </div>
  
 
</div>






    <section className='herosection'>

        <div className='col-md-6'>
            <h1 className='herohead'>Unlock liquidity and <br/> amplify rewards</h1>
            <p className='heropara'>Start liquid staking securely across multiple chains</p>

            <div className='boxflex'>

                <div className='boxcontent'>
                    <p className='boxcontentpara'>ASSETS STAKED</p>
                    <h3 className='boxcontenthead'>$182M</h3>
                    


                </div>

                <div className='boxcontent mx-4'>
                    <div className='divider '></div>
                    
                </div>

                <div className='boxcontent'>
                    <p className='boxcontentpara'>USER</p>
                    <h3 className='boxcontenthead'>85K+</h3>


                </div>

                <div className='boxcontent mx-4'>
                    <div className='divider'></div>
                    
                </div>

                <div className='boxcontent'>
                    <p className='boxcontentpara'>REWARDS PAID</p>
                    <h3 className='boxcontenthead'>$25M+</h3>


                </div>

            </div>


            {/* connect button */}

            <div className='text-left mt-4'>
            <button class="btn mybtntwo " type="submit">Connect Wallet</button>

            </div>
        </div>
    </section>


    {/* support section */}


    <section className='support'>

        <h2 className='supportheading'>Supported networks</h2>
        <p className='heropara text-center'>Choose your favourite network and start earning rewards</p>



        <div className='carddiv container mt-5'>

           

            <MyCards brand="Ethereum" amount="TVL : $73M" image={ethereum} />
            <MyCards brand="Polygon" amount="TVL : $67M" image={polygon} />

            <MyCards brand="Hedera" amount="TVL : $22M" image={hedera} />
         
            <MyCards brand="BNB" amount="TVL : $14M" image={binance} />

            <MyCards brand="Fantom" amount="TVL : $2.5M" image={fantom} />
                  


        </div>


        <div className='carddivtwo container mt-4 d-flex justify-content-center'>

        <MyCards  brand="Near" amount="TVL : $757K" image={near} />

        <MyCards  brand="Terra 2.0" amount="TVL : $546K" image={terra} />

        <MyCards brand="Terra 2.0" amount="TVL : $546K" image={terra} />
           



           

            

        </div>
    </section>




    <section className='work  mt-5'>
         <h2 className='supportheading '>How Stader works</h2>

         <div className='row spacer'>

             <div className='col-md-4 workcontent text-center'>
                 <img className='workimage' src={stake} />
                 <h4 className='workhead'>Stake tokens</h4>
                 <p className='workpara'>Stake any amount of tokens and earn staking rewards</p>

             </div>

             <div className='col-md-4 workcontent text-center'>
                 <img className='workimage' src={receive} />
                 <h4 className='workhead'>Receive liquid tokens</h4>
                 <p className='workpara'>Get liquid staking tokens</p>

             </div>

             <div className='col-md-4 workcontent text-center'>
                 <img className='workimage' src={defi} />
                 <h4 className='workhead'>Participate in DeFi</h4>
                 <p className='workpara'>Use liquid tokens across 40+ DeFi protocols</p>

             </div>

         </div>

    </section>


    <section className='support'>

        <h2 className='supportheading'>Top security for your crypto</h2>
        <p className='heropara text-center'>Audited and secured by leading blockchain experts to ensure the safety of your assets</p>
        <div className='text-center mt-2 py-4'>

            <button className='btn btn-outline-success text-dark px-4 py-2 font-weight-700 myconnect'>Connect Wallet</button>

         

        </div>


        <div className='text-center'>

        <img className='security' src={security} />

        </div>


        


        


       
    </section>

    <section className='partners'>
    <h2 className='supportheading '>Our partners</h2>

    <div className='greendiv py-3'>

    <ul class="nav nav-pills mb-3 myrow py-1 m-auto" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active mylink" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Private Sales</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link mylink" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ecosystem</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link mylink" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Exchange</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className='row px-5 mt-5'>
          <div className='col coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={pantera} />

                  <h4 className='coinhead'>Pantera Capital</h4>


              </div>


          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={coinbase} />

                  <h4 className='coinhead'>Coinbase Ventures</h4>


              </div>
              

          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={jump} />

                  <h4 className='coinhead'>Jump Crypto</h4>


              </div>
              

          </div>



      </div>

      <div className='row px-5 mt-5'>
          <div className='col coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={block} />

                  <h4 className='coinhead'>Blockchain</h4>


              </div>


          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={coinbase} />

                  <h4 className='coinhead'>True Ventures</h4>


              </div>
              

          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
             <button className='btn btn-outline-success text-dark px-4 py-2 font-weight-700 myconnecttwo'>Connect Wallet</button>


              </div>
              

          </div>



      </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className='row px-5 mt-5'>
          <div className='col coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={ledger} />

                  <h4 className='coinhead'>Ledger</h4>


              </div>


          </div>

          <div className='col coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={aave} />

                  <h4 className='coinhead'>Aave</h4>


              </div>


          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={balancer} />

                  <h4 className='coinhead'>Balancer</h4>


              </div>
              

          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={beef} />

                  <h4 className='coinhead'>Beefy Finance</h4>


              </div>
              

          </div>



</div>

<div className='row px-5 mt-5'>
          <div className='col coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={swissborg} />

                  <h4 className='coinhead'>Swissborg</h4>


              </div>


          </div>

          <div className='col coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={quick} />

                  <h4 className='coinhead'>Quickswap</h4>


              </div>


          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={anchorage} />

                  <h4 className='coinhead'>Anchorage</h4>


              </div>
              

          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={bitgo} />

                  <h4 className='coinhead'>BitGo</h4>


              </div>
              

          </div>



      </div>
  

  </div>


 

  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className='row px-5 mt-5'>
          <div className='col coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={okx} />

                  <h4 className='coinhead'>OKX</h4>


              </div>


          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={gate} />

                  <h4 className='coinhead'>Gate.io</h4>


              </div>
              

          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={huobi} />

                  <h4 className='coinhead'>Huobi</h4>


              </div>
              

          </div>



      </div>

      <div className='row px-5 mt-5'>
          <div className='col coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={bybit} />

                  <h4 className='coinhead'>Bybit</h4>


              </div>


          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={kucoin} />

                  <h4 className='coinhead'>Kucoin</h4>


              </div>
              

          </div>

          <div className='col coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={crypto} />

                  <h4 className='coinhead'>Crypto.com</h4>


              </div>
              

          </div>



      </div>
  

  </div>
</div>

            

    </div>

    </section>


    <section className='blog'>

        <h2 className='supportheading '>Stay updated with our blog</h2>

        <div className='blogmain mt-4'>

            <div className='blogdiv'>
                <img  className='blogimage' src={blogone} />
                <h4 className='coinhead text-center'>What is Eth Solo Staking?</h4>

                <p className='heroparatwo text-center'>3 mins read / updated on Thu Oct 19 2023</p>

            </div>

            <div className='blogdiv'>
            <img  className='blogimage' src={blogtwo} />
                <h4 className='coinhead text-center'>Understanding rsETH | Tech Explainer</h4>

                <p className='heroparatwo text-center'>2 mins read / updated on Mon Sep 11 2023</p>

            </div>

            <div className='blogdiv'>
            <img  className='blogimage' src={blogthree} />
                <h4 className='coinhead text-center'>ETHx vs. Solo Staking: Which is better?</h4>

                <p className='heroparatwo text-center'>3 mins read / updated on Mon Oct 30 2023</p>

            </div>



        </div>

        <div className='text-center mt-2 py-4'>

            <a href='https://www.staderlabs.com/blogs/' className='btn btn-outline-success text-dark px-4 py-2 font-weight-700 myconnect'>View More</a>

         

        </div>

    </section>




    <section className='blog mt-3'>

        <h2 className='supportheading '>Frequently asked questions</h2>


        <div class="accordion border-0 col-md-10 m-auto" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn  btn-block text-left faqtext" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Stader?
        </button>
      </h2>
    </div>
    <br/>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body faqpara">
      Stader is a non-custodial, smart contract-driven staking platform that facilitates easy discovery and utilization of staking solutions. It acts as an essential staking middleware infrastructure for various Proof-of-Stake (PoS) networks, catering to retail cryptocurrency users, exchanges, and custodians.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-block text-left collapsed faqtext" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is liquid staking?
        </button>
      </h2>
    </div>

    <br/>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body faqpara">
      Liquid staking is a mechanism within the decentralized finance (DeFi) space that allows users to stake their cryptocurrency to earn rewards while retaining liquidity of the staked assets. <br/>

Unlike traditional staking, where the staked funds are locked and inaccessible for a defined period, liquid staking provides a tokenized version of the staked assets. This means users can still buy, sell, trade, or use those assets, making them more flexible and convenient. <br/>

Liquid staking offers the dual benefit of better rewards through staking and the ability to continue utilizing the staked funds in other DeFi opportunities.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn  btn-block text-left collapsed faqtext" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What are the benefits of liquid staking?
        </button>
      </h2>
    </div>

    <br/>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body faqpara">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>


    </section>


    {/* footer section */}

    <section className='footer'>

        <div className='row'>

        <div className='col-md-4'>
          

            <img className='footerlogo mb-3' src={footlogo} />

            <div className='flexdiv'>
                <img className='topicon' src={twitter} />
                <img className='topicon' src={discord} />
                <img className='topicon' src={telegram} />
                <img className='topicon' src={reddit} />

             </div>

             

        </div>

        <div className='col-md-8'>

            <div className='row'>

            <div className='col linkcol text-left'>
                <h3 className='linkhead mb-4'>Networks</h3>

           
                    <p className='footlist'>Ethereum</p>
                    <p className='footlist'>Polygon</p>
                    <p className='footlist'>Hedera</p>
                    <p className='footlist'>BNB</p>
                    <p className='footlist'>Fantom</p>
                    <p className='footlist'>Near</p>
                    <p className='footlist'>Terra 2.0</p>


            </div>

            <div className='col linkcol'>
                <h3 className='linkhead mb-4'>Governance</h3>


           
                    <p className='footlist'>Community Forum</p>
                    <p className='footlist'>Snapshot</p>
                    <p className='footlist'>SD DeFi</p>
                    <p className='footlist'>SD Details</p>
                    
            </div>

            <div className='col linkcol'>
                <h3 className='linkhead mb-4'>Analytics</h3>

                


           
                    <p className='footlist'>Dune Analytics</p>
                   
            </div>

            </div>

            <div className='row mt-4'>

            <div className='col linkcol text-left'>
                <h3 className='linkhead mb-4'>Developers</h3>

           
                    <p className='footlist'>Github</p>
                    <p className='footlist'>ETHx Litepaper</p>
                    <p className='footlist'>Docs</p>
                    


            </div>

            <div className='col linkcol'>
                <h3 className='linkhead mb-4'>About</h3>


           
                    <p className='footlist'>About Stader</p>
                    <p className='footlist'>Blog</p>
                    <p className='footlist'>Download Press Kit</p>
                
                    
            </div>

            <div className='col linkcol'>
                   
                   
            </div>

            </div>

        </div>

       

       <div className='footerfooter'>
           <p className='foottextt'>© Copyright 2023 Stader. All rights reserved.</p>
           <p className='foottextt'>Terms of service | Privacy policy</p>
       </div>

       </div>

    </section>

        </>
    );
}

export default Home;