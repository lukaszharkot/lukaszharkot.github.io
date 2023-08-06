import React, { useState, useEffect, useRef }  from 'react'

import { AiOutlineDown, AiOutlineUp, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai';
import { CiMap, CiPhone, CiMail } from 'react-icons/ci';

import { createCustomer, fetchCustomers, deleteCustomer } from './methods';

import useIsInViewport from './components/IsInViewport';
import { AddCustomerForm } from './components/AddForm';
import Navbar from './components/NavBar';
import MyTable from './components/Table';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCustomers().then(setData);
  }, []);

  const AddCustomerHandler = (name, surname, email, phone_number) => {
    createCustomer({ name, surname, email, phone_number })
      .then(() => {
        console.log("Customer successfully created.");
        fetchCustomers().then((data) => setData(data));
      })
      .catch((error) => {
        console.error("Error creating customer:", error);
      });
  };

  const deleteCustomerHandler = (customerId) => {
    deleteCustomer(customerId)
      .then(() => {
        console.log("Successfully deleted customer with id:", customerId);
        fetchCustomers().then((data) => setData(data));
      })
      .catch((error) => {
        console.error("Error deleting customer:", error);
      });
  };

  const refs = Array.from({ length: 35 }, () => useRef(null));

  const isInViewport = useIsInViewport(refs);

  return (
    <>
      <Navbar/>
      <div className='bg'></div>
        <div id='home' className='container'>
          <a href='#about'>
            <div className='overlay'>
              <div className='border'>
                <p className='bigfont'>Łukasz</p>
                <p className='bigfont'>Harkot</p>
              </div>
              <div className='cut-border'></div>
              <div className='test'>
                <p className='smallfont' style={{fontFamily: 'monospace'}}>Scroll Down</p><AiOutlineDown/>
              </div>
            </div>
          </a>  
        </div>
      
      {/* About Me */}
      <div id='about' className='about'>
        <div className='centeredflex aboutbox'>
          <div className= 'aboutbox'>
            <div className='abouttext'>
              <div className='abouttextI' ref={refs[0]}>
                <div className={`slideInleft ${isInViewport[0] ? 'animated' : ''} centered`} style={{ animationDuration: '0.75s', backgroundColor: 'black', width:' 170px', height: '80px' }}>
                  <h1 style={{color: 'white'}}>About</h1>
                </div>
                <div className={`slideInleft ${isInViewport[0] ? 'animated' : ''} centered`} style={{ height: '80px'}}>
                  <h1 style={{color: 'black', padding: '0 6px'}}>Me</h1>
                </div>
              </div>
            </div>
            <div className='centered aboutimage'>
              <img className='about-image'src="/IMG_3570.png" alt="XD Placeholder" />
            </div>
            <div ref={refs[1]} className={`slideInright ${isInViewport[1] ? 'animated' : ''} aboutblack centered`}>
              <div className='abouttextbox'>
                <p ref={refs[2]} className={`slideInbottom ${isInViewport[2] ? 'animated' : ''}`} style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>I am currently studying Social Informatics at AGH University of Science and Technology in Cracow. I am planning a career as a web developer. In my free time I like to refine my passions. One of which is web development. <br/><br/>Nie wiem co tu napisać, siemano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='blackbar'></div>
      {/* Frontend */}
      <div id='frontend' className='frontend'>
        <div className='centered frontendbox'>
          <div className='frontendbox'>
            <div className='centeredgrid'>
              <div ref={refs[10]} className={`slideInbottom ${isInViewport[10] ? 'animated' : ''} centered frontendtext`}>
                <h1 style={{color: '#d9d9d3'}}>Frontend</h1>
              </div>
              <div ref={refs[11]} className={`slideInbottom ${isInViewport[11] ? 'animated' : ''} centered`}>
                <h1 style={{fontSize: '25px'}}>React + JavaScript</h1>
              </div>
            </div>
            <div ref={refs[14]} className={`slideInbottomVisable ${isInViewport[14] ? 'animated' : ''} frontendbackplate`}>
              <div ref={refs[15]} className={`slideInbottom ${isInViewport[15] ? 'animated' : ''}`}>
                <img className='react-image' src="/react.png" alt="React"/>
              </div>
              <div ref={refs[16]} className={`slideInbottom ${isInViewport[16] ? 'animated' : ''} `}>
                <img className='java-image' src="/javascript.png" alt="JavaScript"/>
              </div>
            </div>
            <div ref={refs[12]} className={`slideInbottom ${isInViewport[12] ? 'animated' : ''} frontendblack centered`}>
              <div className='frontendtextbox'>
                <p ref={refs[13]} className={`slideInbottom ${isInViewport[13] ? 'animated' : ''}`} style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>
                  <strong>React </strong>is a JavaScript library for building user interfaces<br/><br/>
                  The key features are:<br/>
                  <br/><li><strong>Declarative:</strong> <br/>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. 
                  <br/>Declarative views make your code more predictable and easier to debug.</li>
                  <br/><li><strong>Component-Based:</strong> <br/>Build encapsulated components that manage their own state, then compose them to make complex UIs. 
                  <br/>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</li>
                  <br/><li><strong>Learn Once, Write Anywhere:</strong> We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. 
                  <br/>React can also render on the server using Node and power mobile apps using React Native.</li></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Backend */}
      <div id='backend' className='backend'>
        <div className='centered backendbox'>
          <div className='backendbox'>
            <div className='centeredgrid'>
              <div ref={refs[3]} className={`slideInbottom ${isInViewport[3] ? 'animated' : ''} centered backendtext`}>
                <h1 style={{color: '#d9d9d3'}}>Backend</h1>
              </div>
              <div ref={refs[4]} className={`slideInbottom ${isInViewport[4] ? 'animated' : ''} centered`}>
                <h1 style={{fontSize: '25px'}}>FastAPI</h1>
              </div>
            </div>
            <div ref={refs[7]} className={`slideInbottomVisable ${isInViewport[7] ? 'animated' : ''} backendbackplate`}>
              <div ref={refs[8]} className={`slideInbottom ${isInViewport[8] ? 'animated' : ''}`}>
                <img className='fastapi-image' src="/fastapi.png" alt="FastApi" width={'450px'}/>
              </div>
              <div ref={refs[9]} className={`slideInbottom ${isInViewport[9] ? 'animated' : ''}`}>
                <img className='python-image' src="/python.png" alt="Python" width={'450px'}/>
              </div>
            </div>
            <div ref={refs[5]} className={`slideInbottom ${isInViewport[5] ? 'animated' : ''} backendblack centered`}>
              <div className='backendtextbox'>
                <p ref={refs[6]} className={`slideInbottom ${isInViewport[6] ? 'animated' : ''}`} style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>
                  <strong>FastAPI</strong> is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.<br/><br/>
                  The key features are:<br/>
                  <li><strong>Fast:</strong> Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic). One of the fastest Python frameworks available.</li>
                  <li><strong>Fast to code:</strong> Increase the speed to develop features by about 200% to 300%. *</li>
                  <li><strong>Fewer bugs:</strong> Reduce about 40% of human (developer) induced errors.</li>
                  <li><strong>Intuitive:</strong> Great editor support. Completion everywhere. Less time debugging.</li>
                  <li><strong>Easy:</strong> Designed to be easy to use and learn. Less time reading docs.</li>
                  <li><strong>Short:</strong> Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.</li>
                  <li><strong>Robust:</strong> Get production-ready code. With automatic interactive documentation.</li>
                  <li><strong>Standards-based:</strong> Based on (and fully compatible with) the open standards for APIs: OpenAPI (previously known as Swagger) and JSON Schema.</li><br/>
                  <b>And that is what I am using today!</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Combination */}
      <div id='combination' className='combination'>
        <div className='centered combinationbox'>
          <div className='combinationbox'>
            <div className='centeredgrid'>
              <div ref={refs[17]} className={`appear ${isInViewport[17] ? 'animated' : ''} centered combinationtext`}>
                <h1 style={{color: 'white'}}>Combination</h1>
              </div>
              <div ref={refs[18]} className={`appear ${isInViewport[18] ? 'animated' : ''} centered`}>
                <h1 style={{fontSize: '25px'}}>React + FastApi</h1>
              </div>
            </div>
            <div className='centeredaddcustomer'>
              <div ref={refs[20]} className={`appearDelayed ${isInViewport[20] ? 'animated' : ''} centered addcustomerblack`}>
                <p style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>Add Customer</p>
              </div>
              <div ref={refs[19]} className={`appear ${isInViewport[19] ? 'animated' : ''} centered addcustomer`}>
                <div className='addcustomerbox'>
                  <AddCustomerForm onAdd={AddCustomerHandler}/>
                </div>
              </div>
            </div>
            <div className='centeredcustomertable'>
              <div ref={refs[22]} className={`appearDelayed ${isInViewport[22] ? 'animated' : ''} centered customertableblack`}>
                <p style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>Get and inline edit</p>
              </div>
              <div ref={refs[21]} className={`appear ${isInViewport[21] ? 'animated' : ''} centered customertable`}>
                <div className='customertablebox'> {/* testowac bez tego style*/}
                  <MyTable data={data}  onDelete={deleteCustomerHandler}/>
                </div>
              </div>
            </div>
            <div className='centered'>
              <div ref={refs[23]} className={`appearDelayed ${isInViewport[23] ? 'animated' : ''} centered combinationblack`}>
                <p style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>Here text fix essa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '90px', width: '100%', backgroundColor: 'black', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}></div>
      {/* Contact */}
      <div id='contact' className='contactme centered'>
        <div className='contactmebox'>
            <div className='centered contactmetext'>
              <div ref={refs[24]} className={`appear ${isInViewport[24] ? 'animated' : ''} centered`} style={{backgroundColor: 'black', width:' 210px', height: '80px'}}>
                <h1 style={{color: 'white'}}>Contact</h1>
              </div>
              <div ref={refs[25]} className={`appear ${isInViewport[25] ? 'animated' : ''} centered`} style={{ height: '80px'}}>
                <h1 style={{color: 'black', padding: '0 6px'}}>Me</h1>
              </div>
            </div>
            <div className='centeredgridcontact'>
              <div className='centeredcontact'>
                <div ref={refs[26]} className={`appearDelayed ${isInViewport[26] ? 'animated' : ''}`}>
                  <CiMap fontSize={'85px'} style={{marginTop:'15px'}}/>
                </div>
                <div className='contactinfo'>
                  <p ref={refs[27]} className={`appearDelayed ${isInViewport[27] ? 'animated' : ''}`} style={{fontFamily: 'monospace', fontSize:'20px'}}><strong>ADDRESS</strong></p>
                  <p ref={refs[28]} className={`appearMoreDelayed ${isInViewport[28] ? 'animated' : ''} smalltext`} style={{fontFamily: 'monospace'}}>Cracow, Poland</p>
              </div>
              </div>
              <div className='centeredcontact'>
                <div ref={refs[29]} className={`appear ${isInViewport[29] ? 'animated' : ''}`}>
                  <CiPhone fontSize={'85px'} style={{marginTop:'15px'}}/>
                </div>
                <div className='contactinfo'>
                  <p ref={refs[30]} className={`appearDelayed ${isInViewport[30] ? 'animated' : ''}`} style={{fontFamily: 'monospace', fontSize:'20px'}}><strong>PHONE NUMBER</strong></p>
                  <p ref={refs[31]} className={`appear ${isInViewport[31] ? 'animated' : ''} smalltext`} style={{fontFamily: 'monospace'}}>+48 796 248 ***</p>
                </div>
              </div>
              <div className='centeredcontact'>
                <div ref={refs[32]} className={`appearMoreDelayed ${isInViewport[32] ? 'animated' : ''}`}>
                  <CiMail fontSize={'85px'} style={{marginTop:'15px'}}/>
                </div>
                <div className='contactinfo'>
                  <p ref={refs[33]} className={`appear ${isInViewport[33] ? 'animated' : ''}`} style={{fontFamily: 'monospace', fontSize:'20px'}}><strong>EMAIL</strong></p>
                  <p ref={refs[34]} className={`appearMoreDelayed ${isInViewport[34] ? 'animated' : ''} smalltext`} style={{fontFamily: 'monospace'}}>lukasz.harkot22@gmail.com</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* End */}
      <div style={{ height: '160px', width: '100%', backgroundColor: 'black', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', position: 'relative', justifyContent: 'center', alignItems:'center', display: 'flex' }}>
        <p className="created-by" style={{fontFamily: 'monospace'}}>© 2023 Łukasz Harkot. All Rights Reserved.</p>
        <div style={{height: '50px', width:'200px', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
          <a href='https://www.facebook.com/lukas.harkot/'><AiFillFacebook className='end' style={{fontSize:'40px', padding:'0 5px'}}/></a>
          <a href='https://www.linkedin.com/'><AiFillLinkedin className='end' style={{fontSize:'40px', padding:'0 5px'}}/></a>
          <a href='https://twitter.com/'><AiFillTwitterSquare className='end' style={{fontSize:'40px', padding:'0 5px'}}/></a>
        </div>
        <a href='#home'><div className='upclick' style={{ height: '50px', width: '50px', position: 'absolute', bottom: '84%', right:'0', left:'0', margin:'0 auto', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', justifyContent: 'center', alignItems:'center', display: 'flex' }}><AiOutlineUp style={{fontSize: '23px'}}/></div></a>
      </div>
    </>
  );
}

export default App;