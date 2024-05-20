import React, { useState } from 'react';
import { FaChevronDown, FaUserCircle, FaArrowLeft, FaEye, FaInfoCircle, FaPencilAlt, FaThumbsUp, FaCommentDots, FaFlag, FaTimes } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { RiContactsFill } from "react-icons/ri";
import { IoIosAttach } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMenuUnfold } from "react-icons/ai";
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

  const handleIconClick = () => {
    setShowF1(prevShowF1 => !prevShowF1);
    setShowHelpIcon(prevShowHelpIcon => !prevShowHelpIcon);
  };



  const handleCloseFeedbackClick = () => {
    setShowFeedback(false);
    setShowFeedback2(false);
    setShowFeedback3(false);
    setShowFeedback4(false);
    setShowHelpIcon(true);
    setShowicon(true);
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
      setShowF1(false);
      setShowicon(true);
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

  };
  const handleVscFeedbackClick = () => {
    setShowFeedback2(true);
    setShowFeedback3(false);
    setShowFeedback4(false);
    setShowFeedback(false);
    setShowHelpIcon(false);
    setShowF1(false);
    setShowicon(false);
  };

  const handleCiEditClick = () => {
    setShowFeedback3(true);
    setShowFeedback(false);
    setShowFeedback4(false);
    setShowFeedback2(false);
    setShowHelpIcon(false);
    setShowF1(false);
    setShowicon(false);
  };
  const handleRiContactsFillClick = () => {
    setShowFeedback4(true);
    setShowFeedback(false);
    setShowFeedback3(false);
    setShowFeedback2(false);
    setShowHelpIcon(false);
    setShowF1(false);
    setShowicon(false);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <span className="platform-text">THE PRODUCT PLATFORM</span>
        </div>
        <div className="header-right">
          <span className="header-item">Learn <FaChevronDown className="down-arrow" /></span>
          <span className="header-item">Practice <FaChevronDown className="down-arrow" /></span>
          <FaUserCircle className="profile-icon" />
        </div>
      </header>
      <div className="back-to-questions">
        <FaArrowLeft className="back-arrow" />
        <span className="back-text">Back to Questions</span>
      </div>
      <div className="content-container">
        <div className="and-content">
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
          <div className="box box1">
            <div className="box1-div1">
              <span className="badge">Design</span>
              <span className="badge">Technology</span>
              <span className="rocket">🚀</span>
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

          <div className="feedback1" style={{ display: showFeedback ? 'flex' : 'none' }}>
            <div className="textarea">
              <div className="feedback1-text">
                <span>Let us know about the issue you are facing right now!</span>
              </div>
              <div className="feedback1-inputs">
                <div className="section">
                  <span>Choose a section</span>
                  <select className="dropdown">
                    <option value="general">Interview Questions</option>
                    <option value="technical">Technical</option>
                    <option value="billing">Billing</option>
                  </select>
                </div>

                <div className="detail">
                  <span>Describe the issue in detail <span className='imp' style={{ color: 'red' }}>*</span></span>
                  <textarea className="input-textarea" value={feedbackText} onChange={handleFeedbackChange}></textarea>

                  <button className="attach-button">
                    <IoIosAttach className="attach-icon" />
                    <div>Attach</div>
                  </button>

                  <div className="bottom-row">
                    <button className="submit-button" style={{ opacity: feedbackText ? 1 : 0.7 }} onClick={handleSubmitClick}>Submit</button>
                  </div>

                </div>
              </div>
            </div>

            <div className="anoption">
              <div className="icon2"><FaFlag onClick={handleReportIssueClick} /></div>
              <div className="icon2"><VscFeedback onClick={handleVscFeedbackClick} /></div>
              <div className="icon2"><CiEdit onClick={handleCiEditClick} /></div>
              <div className="icon2"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
              <div className="icon2" onClick={handleCloseFeedbackClick}><FaTimes /></div>
            </div>
          </div>

          <div className="feedback2" style={{ display: showFeedback2 ? 'flex' : 'none' }}>
            <div className="textarea2">
              <div className="feedback2-text">
                <span>Let us know your Feedback about us!</span>
              </div>
              <div className="feedback2-inputs">
                <div className="detail2">
                  <textarea className="input-textarea2" placeholder='Write here' value={feedbackText} onChange={handleFeedbackChange}></textarea>
                  <button className="attach-button2">
                    <IoIosAttach className="attach-icon2" />
                    <div>Attach</div>
                  </button>

                  <div className="bottom-row2">
                    <button className="submit-button2" style={{ opacity: feedbackText ? 1 : 0.7 }} onClick={handleSubmitClick2}>Submit</button>
                  </div>
                </div>

                <div className="loginf2">
                  <input type="checkbox" name="" id="" />
                  <span >Send anonymously</span>
                </div>

              </div>
            </div>

            <div className="anoption2">
              <div className="icon22"><FaFlag onClick={handleReportIssueClick} /></div>
              <div className="icon22"><VscFeedback onClick={handleVscFeedbackClick} /></div>
              <div className="icon22"><CiEdit onClick={handleCiEditClick} /></div>
              <div className="icon22"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
              <div className="icon22" onClick={handleCloseFeedbackClick}><FaTimes /></div>
            </div>
          </div>

          <div className="feedback3" style={{ display: showFeedback3 ? 'flex' : 'none' }}>
            <div className="textarea3">
              <div className="feedback3-text">
                <span>Share your Suggestions with us for a chance to earn rewards!</span>
              </div>
              <div className="feedback3-inputs">
                <div className="section3">
                  <span>Choose a section</span>
                  <select className="dropdown3">
                    <option value="general">Interview Questions</option>
                    <option value="technical">Technical</option>
                    <option value="billing">Billing</option>
                  </select>
                </div>

                <div className="detail3">
                  <span>Describe the suggestion in detail <span className='imp' style={{ color: 'red' }}>*</span></span>
                  <textarea className="input-textarea" value={feedbackText} placeholder='Write here' onChange={handleFeedbackChange}></textarea>
                  <button className="attach-button">
                    <IoIosAttach className="attach-icon" />
                    <div>Attach</div>
                  </button>
                  <div className="bottom-row3">
                    <button className="submit-button3" style={{ opacity: feedbackText ? 1 : 0.7 }} onClick={handleSubmitClick3}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="anoption3">
              <div className="icon3"><FaFlag onClick={handleReportIssueClick} /></div>
              <div className="icon3"><VscFeedback onClick={handleVscFeedbackClick} /></div>
              <div className="icon3"><CiEdit onClick={handleCiEditClick} /></div>
              <div className="icon3"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
              <div className="icon3" onClick={handleCloseFeedbackClick}><FaTimes /></div>
            </div>
          </div>

          <div className="feedback4" style={{ display: showFeedback4 ? 'flex' : 'none' }}>
            <div className="textarea4">
              <div className="feedback4-text">
                <span>Let us know what your queries are!</span>
              </div>
              <div className="feedback4-inputs">

                <div className="section4">
                  <span>Your Name<span className='imp' style={{ color: 'red' }}>*</span></span>
                  <textarea className="input-textarea4" value={Contact1} placeholder="Enter your Name" onChange={handleContact1}></textarea>
                </div>
                <div className="section4">
                  <span>Your Email<span className='imp' style={{ color: 'red' }}>*</span></span>
                  <textarea className="input-textarea4" value={Contact2} placeholder="Enter your Email" onChange={handleContact2}></textarea>
                </div>
                <div className="section4">
                  <span>Your Mobile number</span>
                  <textarea className="input-textarea4" value={Contact3} placeholder="Enter your Mobile" onChange={handleContact3}></textarea>
                </div>
                <div className="section4">
                  <span>What would you like to ask<span className='imp' style={{ color: 'red' }}>*</span></span>
                  <textarea className="input-textarea4" value={Contact4} placeholder="Write here" onChange={handleContact4}></textarea>
                </div>
                <div className="detail4">
                  <div className="bottom-row4">
                    <button className="submit-button4" style={{ opacity: (Contact1 && Contact2 && Contact4) ? 1 : 0.7 }} onClick={handleSubmitClick4}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="anoption4">
              <div className="icon4"><FaFlag onClick={handleReportIssueClick} /></div>
              <div className="icon4"><VscFeedback onClick={handleVscFeedbackClick} /></div>
              <div className="icon4"><CiEdit onClick={handleCiEditClick} /></div>
              <div className="icon4"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
              <div className="icon4" onClick={handleCloseFeedbackClick}><FaTimes /></div>
            </div>
          </div>
          <ToastContainer />
        </main>
      </div>
    </div>
  );
}

export default App;

