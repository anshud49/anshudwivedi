import React from 'react';
import { FaFlag, FaTimes } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import { CiEdit } from 'react-icons/ci';
import { RiContactsFill } from 'react-icons/ri';
import { IoIosAttach } from 'react-icons/io';

const Feedback = ({
    windowWidth, isAnonymous,handleCheckboxChange, showFeedback, showFeedback2, showFeedback3, showFeedback4,
    feedbackText, setFeedbackText, handleFeedbackChange,
    handleSubmitClick, handleSubmitClick2, handleSubmitClick3, handleSubmitClick4,
    handleReportIssueClick, handleVscFeedbackClick, handleCiEditClick, handleRiContactsFillClick,
    handleCloseFeedbackClick, Contact1, Contact2, Contact3, Contact4, handleContact1, handleContact2, handleContact3, handleContact4
}) =>
    
    {
    return (
        <>
           <div className={`feedback1 ${showFeedback && windowWidth < 451 ? 'show' : ''}`} style={{ display: showFeedback ? 'flex' : 'none' }}>
                <div className="anoption1">
                    <div className="ellipse"><FaFlag onClick={handleReportIssueClick} /></div>
                    <div className="icon2"><VscFeedback onClick={handleVscFeedbackClick} /></div>
                    <div className="icon2"><CiEdit onClick={handleCiEditClick} /></div>
                    <div className="icon2"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                    <div className="icon2" onClick={handleCloseFeedbackClick}><FaTimes /></div>
                </div>
               
                <div className="textarea">
                    <div className="feedback1-text">
                        <span>Let us know about the issue you are facing right now!</span>
                        <hr style={{ height: '1px', marginTop: '20px', borderWidth: 0, color: 'red', backgroundColor: '#bfbfbf', zIndex: '1' }} />
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
                            <textarea className="input-textarea" value={feedbackText} onChange={handleFeedbackChange} ></textarea>

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
                    <div className="ellipse"><FaFlag onClick={handleReportIssueClick} /></div>
                    <div className="icon2"><VscFeedback onClick={handleVscFeedbackClick} /></div>
                    <div className="icon2"><CiEdit onClick={handleCiEditClick} /></div>
                    <div className="icon2"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                    <div className="icon2" onClick={handleCloseFeedbackClick}><FaTimes /></div>
                </div>
            </div>

            <div className="feedback2" style={{ display: showFeedback2 ? 'flex' : 'none' }}>
            <div className="anoption1">
                    <div className="icon2"><FaFlag onClick={handleReportIssueClick} /></div>
                    <div className="ellipse"><VscFeedback onClick={handleVscFeedbackClick} /></div>
                    <div className="icon2"><CiEdit onClick={handleCiEditClick} /></div>
                    <div className="icon2"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                    <div className="icon2" onClick={handleCloseFeedbackClick}><FaTimes /></div>
                </div>
                <div className="textarea2">
                    <div className="feedback2-text">
                        <span>Let us know your Feedback about us!</span>
                        <hr style={{ height: '1px', marginTop: '20px', borderWidth: 0, color: 'red', backgroundColor: '#bfbfbf', zIndex: '1' }} />
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
                            <input type="checkbox" checked={isAnonymous}  name="" id=""  onChange={handleCheckboxChange}/>
                            <span >Send anonymously</span>
                        </div>

                    </div>
                </div>

                <div className="anoption2">
                    <div className="icon22"><FaFlag onClick={handleReportIssueClick} /></div>
                    <div className="ellipse"><VscFeedback onClick={handleVscFeedbackClick} /></div>
                    <div className="icon22"><CiEdit onClick={handleCiEditClick} /></div>
                    <div className="icon22"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                    <div className="icon22" onClick={handleCloseFeedbackClick}><FaTimes /></div>
                </div>
            </div>

            <div className="feedback3" style={{ display: showFeedback3 ? 'flex' : 'none' }}>
            <div className="anoption1">
                    <div className="icon2"><FaFlag onClick={handleReportIssueClick} /></div>
                    <div className="icon2"><VscFeedback onClick={handleVscFeedbackClick} /></div>
                    <div className="ellipse"><CiEdit onClick={handleCiEditClick} /></div>
                    <div className="icon2"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                    <div className="icon2" onClick={handleCloseFeedbackClick}><FaTimes /></div>
                </div>
                <div className="textarea3">
                    <div className="feedback3-text">
                        <span>Share your Suggestions with us for a chance to earn rewards!</span>
                        <hr style={{ height: '1px', marginTop: '20px', borderWidth: 0, color: 'red', backgroundColor: '#bfbfbf', zIndex: '1' }} />
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
                    <div className="ellipse"><CiEdit onClick={handleCiEditClick} /></div>
                    <div className="icon3"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                    <div className="icon3" onClick={handleCloseFeedbackClick}><FaTimes /></div>
                </div>
            </div>

            <div className="feedback4" style={{ display: showFeedback4 ? 'flex' : 'none' }}>
            <div className="anoption1">
                    <div className="icon2"><FaFlag onClick={handleReportIssueClick} /></div>
                    <div className="icon2"><VscFeedback onClick={handleVscFeedbackClick} /></div>
                    <div className="icon2"><CiEdit onClick={handleCiEditClick} /></div>
                    <div className="ellipse"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                    <div className="icon2" onClick={handleCloseFeedbackClick}><FaTimes /></div>
                </div>
                <div className="textarea4">
                    <div className="feedback4-text">
                        <span>Let us know what your queries are!</span>
                        <hr style={{ height: '1px', marginTop: '20px', borderWidth: 0, color: 'red', backgroundColor: '#bfbfbf', zIndex: '1' }} />
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
                    <div className="ellipse"><RiContactsFill onClick={handleRiContactsFillClick} /></div>
                    <div className="icon4" onClick={handleCloseFeedbackClick}><FaTimes /></div>
                </div>
            </div>
        </>
    );
};

export default Feedback;
