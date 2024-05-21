import React, { useState,useEffect} from 'react';
import { FaChevronDown, FaUserCircle, FaArrowLeft, FaEye, FaInfoCircle, FaPencilAlt, FaThumbsUp, FaCommentDots, FaFlag, FaTimes } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { RiContactsFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Feedback from './Feedback';

import './App.css';

function App() {
  const [showF1, setShowF1] = useState(false);
  const [showIcon, setShowicon] = useState(true);
  const [showHelpIcon, setShowHelpIcon] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showFeedback2, setShowFeedback2] = useState(false);
  const [showFeedback3, setShowFeedback3] = useState(false);
  const [showFeedback4, setShowFeedback4] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [Contact1, setContact1] = useState('');
  const [Contact2, setContact2] = useState('');
  const [Contact3, setContact3] = useState('');
  const [Contact4, setContact4] = useState('');
  const [overlay, setOverlay] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);


  const handleIconClick = () => {
    setShowF1(prevShowF1 => !prevShowF1);
    setShowHelpIcon(prevShowHelpIcon => !prevShowHelpIcon);
    setOverlay(prevoverlay => !prevoverlay);
  };



  const handleCloseFeedbackClick = () => {
    setShowFeedback(false);
    setShowFeedback2(false);
    setShowFeedback3(false);
    setShowFeedback4(false);
    setShowHelpIcon(true);
    setShowicon(true);
    setOverlay(false);
   
  };

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);

  };
  const handleContact1 = (e) => {
    setContact1(e.target.value);
  };
  const handleContact2 = (e) => {
    setContact2(e.target.value);
  };
  const handleContact3 = (e) => {
    setContact3(e.target.value);
  };
  const handleContact4 = (e) => {
    setContact4(e.target.value);
  };

  const handleSubmitClick = () => {
    if (feedbackText) {
      setShowFeedback(false);
      setShowFeedback2(false);
      setShowFeedback3(false);
      setShowFeedback4(false);
      setShowHelpIcon(true);
      setShowF1(false);
      setShowicon(true);
      setOverlay(false);
      setFeedbackText('');
      toast.success("Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon");
    }
  };
  const handleSubmitClick2 = () => {
    if (feedbackText) {
      setShowFeedback(false);
      setShowFeedback2(false);
      setShowFeedback3(false);
      setShowFeedback4(false);
      setShowHelpIcon(true);
      setShowF1(false);
      setShowicon(true);
      setFeedbackText('');
      setIsAnonymous(false);
      setOverlay(false);
      toast.success("Thanks for sharing your valuable feedback");
    }
  };
  const handleSubmitClick3 = () => {
    if (feedbackText) {
      setShowFeedback(false);
      setShowFeedback2(false);
      setShowFeedback3(false);
      setShowFeedback4(false);
      setShowHelpIcon(true);
      setShowF1(false);
      setShowicon(true);
      setFeedbackText('');
      setOverlay(false);
      toast.success("Thanks for suggestions");
    }
  };
  const handleSubmitClick4 = () => {
    if (Contact1 && Contact2 && Contact4) {
      setShowFeedback(false);
      setShowFeedback2(false);
      setShowFeedback3(false);
      setShowFeedback4(false);
      setShowHelpIcon(true);
      setContact1('');
      setContact2('');
      setContact3('');
      setContact4('');
      setShowF1(false);
      setShowicon(true);
      setFeedbackText('');
      setOverlay(false);
      toast.success("Thanks for suggestions");
    }
  };

  const handleReportIssueClick = () => {
    setShowFeedback2(false);
    setShowFeedback3(false);
    setShowFeedback4(false);
    setShowHelpIcon(false);
    setShowF1(false);
    setShowicon(false);
    setShowFeedback(true);
    setOverlay(true);

  };
  const handleVscFeedbackClick = () => {
    setShowFeedback2(true);
    setShowFeedback3(false);
    setShowFeedback4(false);
    setShowFeedback(false);
    setShowHelpIcon(false);
    setShowF1(false);
    setShowicon(false);
    setOverlay(true);
  };

  const handleCiEditClick = () => {
    setShowFeedback3(true);
    setShowFeedback(false);
    setShowFeedback4(false);
    setShowFeedback2(false);
    setShowHelpIcon(false);
    setShowF1(false);
    setShowicon(false);
    setOverlay(true);
  };
  const handleCheckboxChange = (e) => {
    setIsAnonymous(e.target.checked);
  };
  const handleRiContactsFillClick = () => {
    setShowFeedback4(true);
    setShowFeedback(false);
    setShowFeedback3(false);
    setShowFeedback2(false);
    setShowHelpIcon(false);
    setShowF1(false);
    setShowicon(false);
    setOverlay(true);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <div className="app" >

        <header className="header" style={{ opacity: overlay && windowWidth < 451 ? '0.4' : '1' }}>
          <div className="header-left">
            <span className="platform-text">THE <span className="highlight">PRODUCT</span> PLATFORM</span>
          </div>
          <div className="header-right">
            <span className="header-item">Learn <FaChevronDown className="down-arrow" /></span>
            <span className="header-item">Practice <FaChevronDown className="down-arrow" /></span>
            <FaUserCircle className="profile-icon" />
          </div>

        </header>
        <hr style={{ height: '1px', marginTop: '0', borderWidth: 0, color: 'red', backgroundColor: '#333', zIndex: '1' }} />
        <div className="back-to-questions">
          <FaArrowLeft className="back-arrow" />
          <span className="back-text">Back to Questions</span>
        </div>
        <div className="content-container" >
          <div className="and-content" style={{ opacity: overlay ? '0.4' : '1' }}>
            <div className="and1">
              <span>Practice Interview Questions</span>
            </div>
            <div className="and2">
              <span>Embark on an Exploration:</span>
            </div>
            <div className="and3">
              <div className="and31">
                <span>800 questions Await!</span>
                <button className="filter-button">
                  <div className="filter-icon"><AiOutlineMenuUnfold /></div>
                  <span>FILTER</span>
                </button>
              </div>
              <div className="adropdown-container">
                {[...Array(5)].map((_, index) => (
                  <select key={index} className="anddropdown">
                    <option value="option1">
                      {index === 0 && "Popular"}
                      {index === 1 && "Complexity"}
                      {index === 2 && "Industry type"}
                      {index === 3 && "Industry"}
                      {index === 4 && "Company type"}
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                ))}
              </div>

            </div>

          </div>
          <main className="main-content">
            <div className="opa" style={{ opacity: overlay && windowWidth < 451 ? '0.4' : '1' }}>
              <div className="box box1">
                <div className="box1-div1">
                  <span className="badge">Design</span>
                  <span className="badge">Technology</span>
                  <div className="rocketicon">
                  <span className="rocket">🚀</span>
                  <span className="startup">Startup</span>
                  </div>
                  
                </div>
                <div className="box1-div2">
                  <p>What are the key considerations when designing a user-friendly interface for a mobile application?</p>
                </div>
                <div className="box1-div3">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna vel orci posuere, nec facilisis orci vehicula. Vestibulum et euismod nulla, ut condimentum metus. Aliquam erat volutpat. Donec at arcu id turpis faucibus viverra.</p>
                </div>
                <div className="box1-div4">
                  <div className="views">
                    <FaEye className="icon" />
                    <span>100 views</span>
                  </div>
                  <div className="info">
                    <FaInfoCircle className="icon" />
                    <span>How should you word your answer?</span>
                  </div>
                </div>
              </div>
              <div className="box2">
                <div className="box3">
                  <span className="left-text">Answer(23)</span>
                  <div className="right-section">
                    <span className="right-text">Sort by:</span>
                    <select className="dropdownr">
                      <option value="latest" >Popular</option>
                      <option value="latest">Latest</option>
                      <option value="oldest">Oldest</option>
                      <option value="upvotes">Upvotes</option>
                    </select>
                  </div>
                </div>
                <div className="box box4">
                  <div className="box4-div1">
                    <div className="profile-info">
                      <FaUserCircle className="profile-icon1" />
                      <div className="name-date">
                        <span className="name">Anshu Dwivedi</span>
                        <span className="date">May 18, 2024</span>
                      </div>
                    </div>
                    <div className="edit-section">
                      <FaPencilAlt className="edit-icon" />
                      <span className="edit-text">Edit</span>
                    </div>
                  </div>
                  <div className="box4-div2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore saepe totam rem ipsum delectus eveniet modi sit quos voluptates doloribus repellat ipsam, eligendi hic neque quod quaerat. Recusandae tempore ab mollitia, ratione deleniti asperiores dolorem ex quo nemo cum voluptas placeat. Ex reprehenderit eius vero voluptatem quaerat possimus numquam cumque nam. Modi nemo nulla corporis maiores facere aliquam infor..... <span>Show More</span></p>
                  </div>
                  <div className="box4-div3">
                    <FaThumbsUp className="icon" />
                    <span className="like-text">Like</span>
                    <FaCommentDots className="icon" />
                    <input type="text" className="comment-input" placeholder="Add a comment" />
                    <button className="post-button">Post</button>
                  </div>
                </div>
              </div>

              <div className="box box5" >
                <div className="firstrow">
                  <div className="f1" style={{ display: showF1 ? 'flex' : 'none' }}>
                    <div className="text1"><span onClick={handleReportIssueClick}>Report an Issue</span></div>
                    <div className="icon1"><FaFlag onClick={handleReportIssueClick} /></div>
                  </div>
                  <div className="f1" style={{ display: showF1 ? 'flex' : 'none' }}>
                    <div className="text1"><span onClick={handleVscFeedbackClick}>Share Feedback</span></div>
                    <div className="icon1"><VscFeedback onClick={handleVscFeedbackClick} /></div>
                  </div>
                  <div className="f1" style={{ display: showF1 ? 'flex' : 'none' }}>
                    <div className="text1"><span onClick={handleCiEditClick}>Give Suggestion</span></div>
                    <div className="icon1"><CiEdit onClick={handleCiEditClick} /></div>
                  </div>
                  <div className="f1" style={{ display: showF1 ? 'flex' : 'none' }}>
                    <div className="text1"><span onClick={handleRiContactsFillClick}>Contact Us</span></div>
                    <div className="icon1"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                  </div>
                </div>
                <div className="secondrow">
                  {showIcon && (
                    <div className="icon1">
                      {showHelpIcon ? (
                        <IoDocumentText className='helpicon' onClick={handleIconClick} />
                      ) : (
                        <FaTimes className='helpicon' onClick={handleIconClick} />
                      )}
                    </div>
                  )}
                </div>
              </div>

              
              <ToastContainer />
            </div>
            <Feedback
                isAnonymous={isAnonymous}
                handleCheckboxChange={handleCheckboxChange}
                showFeedback={showFeedback}
                showFeedback2={showFeedback2}
                showFeedback3={showFeedback3}
                showFeedback4={showFeedback4}
                feedbackText={feedbackText}
                setFeedbackText={setFeedbackText}
                handleFeedbackChange={handleFeedbackChange}
                handleSubmitClick={handleSubmitClick}
                handleSubmitClick2={handleSubmitClick2}
                handleSubmitClick3={handleSubmitClick3}
                handleSubmitClick4={handleSubmitClick4}
                handleReportIssueClick={handleReportIssueClick}
                handleVscFeedbackClick={handleVscFeedbackClick}
                handleCiEditClick={handleCiEditClick}
                handleRiContactsFillClick={handleRiContactsFillClick}
                handleCloseFeedbackClick={handleCloseFeedbackClick}
                Contact1={Contact1}
                Contact2={Contact2}
                Contact3={Contact3}
                Contact4={Contact4}
                handleContact1={handleContact1}
                handleContact2={handleContact2}
                handleContact3={handleContact3}
                handleContact4={handleContact4}
              />
            <div className="andbox" style={{ opacity: showF1 ? '1' : '1' }}>
              <div className="firstrowa">
                <div className="fa1" style={{ display: showF1 ? 'flex' : 'none' }}>
                  <div className="texta1"><span onClick={handleReportIssueClick}>Report an Issue</span></div>
                  <div className="icona1"><FaFlag onClick={handleReportIssueClick} /></div>
                </div>
                <div className="fa1" style={{ display: showF1 ? 'flex' : 'none' }}>
                  <div className="texta1"><span onClick={handleVscFeedbackClick}>Share Feedback</span></div>
                  <div className="icona1"><VscFeedback onClick={handleVscFeedbackClick} /></div>
                </div>
                <div className="fa1" style={{ display: showF1 ? 'flex' : 'none' }}>
                  <div className="texta1"><span onClick={handleCiEditClick}>Give Suggestion</span></div>
                  <div className="icona1"><CiEdit onClick={handleCiEditClick} /></div>
                </div>
                <div className="fa1" style={{ display: showF1 ? 'flex' : 'none' }}>
                  <div className="texta1"><span onClick={handleRiContactsFillClick}>Contact Us</span></div>
                  <div className="icona1"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                </div>
              </div>
              <div className="secondrowa">
                {showIcon && (
                  <div className="icona1 andicona1">
                    {showHelpIcon ? (
                      <IoDocumentText className='helpicona' onClick={handleIconClick} />
                    ) : (
                      <FaTimes className='helpicona cross' onClick={handleIconClick} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  export default App;

