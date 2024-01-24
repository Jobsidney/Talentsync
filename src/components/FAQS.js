import React, { useState } from 'react'
import HeaderSubtitle from './HeaderSubtitle'
import MinusRounded from './imageSvgs/MinusRounded';

function FAQS() {

    const [faqs, setfaqs] = useState([
        {
          question: 'How many participants can join a ClearLink video conference?',
          answer: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
          open: true
        },
        {
          question: 'Can I use ClearLink on multiple devices?',
          answer: 'You. The Viewer.',
          open: false
        },
        {
          question: 'Is ClearLink compatible with other video conferencing platforms?',
          answer: 'This many.',
          open: false
        },
        {
            question: 'How does ClearLink ensure the security of my video conferences?',
            answer: 'This many.',
            open: false
          },
          {
            question: 'Do I need to download any software to use ClearLink?',
            answer: 'This many.',
            open: false
          }
      ]);
    
      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
    
    

    function FAQ({faq, index, toggleFAQ}){
        return(
            <div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				<div>{faq.question}</div>

                {faq.open?
                <MinusRounded/>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
        )
    }
  return (
    <section className='default-padding'>
    <div className=' layout1'>
        <div className='default-padding faq-layout'>
                <div className="faqLeft">
                    <HeaderSubtitle title={"FAQs"} short_title={"Support"} words={"In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:"}/>
                </div>

                <div className="faqRight">

                <div className="faqs">
                    {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
                </div>
        </div>
    </div>
    </section>
  )
}

export default FAQS