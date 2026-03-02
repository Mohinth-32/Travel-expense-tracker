import React, { useState } from 'react';
import './Terms.css'; // Import the CSS file

const FAQ = () => {
    // Define an array of FAQ items (questions and answers)
    const faqItems = [
        {
            question: 'How do I add a new trip?',
            answer: 'Navigate to the Trips page from the sidebar and enter your trip name, budget, and expenses to start tracking.'
        },
        {
            question: 'How do I track my expenses?',
            answer: 'Go to the Expenses page from the sidebar. You can add expense descriptions and amounts to keep track of your spending.'
        },
        {
            question: 'How do I upload receipts?',
            answer: 'Visit the Receipts page and use the file upload button to upload images of your receipts for record keeping.'
        },
        {
            question: 'How is my remaining budget calculated?',
            answer: 'Your remaining budget is automatically calculated by subtracting the total of all recorded expenses from your set budget.'
        },
    ];

    // Initialize state to keep track of which FAQ item is currently expanded
    const [activeItem, setActiveItem] = useState(null);

    // Function to toggle the active FAQ item
    const toggleItem = (index) => {
        if (activeItem === index) {
            // If the clicked item is already active, close it
            setActiveItem(null);
        } else {
            // Otherwise, open the clicked item
            setActiveItem(index);
        }
    };

    return (
        <div className='faq-main'>
        <div className="faq-container">
            <h2 className='faq-h2'>Frequently Asked Questions</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button className={`faq-question ${activeItem === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                            {item.question}
                        </button>
                        {activeItem === index && <p className="faq-answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default FAQ;