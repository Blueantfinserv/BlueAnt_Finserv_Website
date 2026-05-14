import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../styles/ImpactStories.css";

const stories = [
    {
        id: 1,
        name: 'Sneha Jain',
        title: 'TEAM LEADER',
        quote: 'Blueant Finserv has been a game-changer for my small business. Their loan services are quick, reliable, and completely transparent. I didn\'t have to deal with unnecessary paperwork or delays. The team guided me throughout the process and offered financial advice tailored to my goals. Their professionalism and customer-first approach gave me confidence. It\'s rare to find a finance company that treats small business owners with such care and respect. I highly recommend Blueant Finserv to anyone looking for trustworthy financial support.',
        image: '1.png'
    },
    {
        id: 2,
        name: 'Rohit Sharma',
        title: 'OWNER',
        quote: 'I\'ve never been great with financial planning, but Blueant Finserv changed that. I used their retirement and investment tools and was impressed by how simple and clear everything was. Their team took the time to explain options based on my income, savings, and goals. They truly care about helping customers make informed decisions. For the first time, I feel in control of my financial future. I\'m thankful to have found a partner like Blueant Finserv that makes finances feel easy and approachable.',
        image: '2.png'
    },
    {
        id: 3,
        name: 'Siddharth Suman',
        title: 'OWNER',
        quote: 'As a parent planning for my child\'s future, I was constantly worried about education costs. Blueant Finserv offered a customized savings strategy and calculators that helped me understand exactly how much I need to save. Their expert advice gave me clarity and peace of mind. The team is very knowledgeable and genuinely listens to your concerns. With their support, I\'ve set a clear path toward my child\'s education goal. I highly recommend Blueant Finserv for any parent looking to secure their family\'s financial future.',
        image: '3.png'
    },
    {
        id: 4,
        name: 'Gautam Singhania',
        title: 'OWNER',
        quote: 'Blueant Finserv has been incredibly helpful in simplifying my finances. I was confused about how to balance savings, investments, and insurance. Their advisors offered personalized guidance and broke everything down in a way that made sense. I especially liked their user-friendly calculators and dashboards that gave me real-time projections. Thanks to Blueant Finserv, I now have a clear financial plan. They\'re not just another finance company — they\'re genuinely interested in helping you grow financially.',
        image: '4.png'
    },
    {
        id: 5,
        name: 'Neha Gupta',
        title: 'OWNER',
        quote: 'After retirement, I wanted to make sure my savings were well-managed. Blueant Finserv provided honest, clear advice and helped me invest wisely based on my needs and risk comfort. Their team was very respectful and explained every step, ensuring I felt confident in every decision. What I appreciate most is their personal touch — they don\'t push products but focus on what\'s best for you. I now feel secure about my future and thankful I chose Blueant Finserv.',
        image: '5.png'
    },
    {
        id: 6,
        name: 'Anamika Sharma',
        title: 'M.D.',
        quote: 'Starting a new business comes with many financial uncertainties, but Blueant Finserv made things smoother. From guiding me on business loans to helping with long-term planning, their team was proactive and professional. The application process was straightforward, and they were always available for support. Their financial insights helped me make better decisions for my startup. I felt more confident knowing I had a strong financial partner. I recommend Blueant Finserv to any entrepreneur looking for a dependable and transparent finance company.',
        image: '6.png'
    },
];

const ImpactStories = () => {
    const [active, setActive] = useState(0);

    // Auto-rotate every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % stories.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="impact-container">
            <h3 className="feedback-title">⭐ IMPACT STORIES</h3>

            <div className="impact-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={stories[active].id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="story"
                    >
                        <div className="story-right">
                            <p className="story-text">{stories[active].quote}</p>
                            <div className="story-meta">
                                <p className="name">{stories[active].name}</p>
                                <p className="title">{stories[active].title}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="impact-dots">
                {stories.map((story, index) => (
                    <button
                        key={story.id}
                        onClick={() => setActive(index)}
                        className={`dot ${index === active ? 'active' : ''}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImpactStories;
