import react from 'react';

const blogs = [
    {
        id: 1,
        title: 'Computer Science',
        description: 'An exploration of how computers work, covering algorithms, data structures, programming languages, and more.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 2,
        title: 'Artificial Intelligence',
        description: 'Understanding AI concepts like machine learning, neural networks, and their real-world applications transforming industries.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 3,
        title: 'Web Development',
        description: 'Guide to building responsive and dynamic websites using HTML, CSS, JavaScript, React, and backend technologies.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 4,
        title: 'Data Science',
        description: 'Introduction to analyzing and interpreting complex data using Python, R, statistics, and visualization tools.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 5,
        title: 'Cybersecurity',
        description: 'Learn techniques to secure systems, prevent breaches, and protect sensitive data in the digital world.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 6,
        title: 'Cloud Computing',
        description: 'Exploring cloud platforms like AWS, Azure, and Google Cloud for scalable application development and storage solutions.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 7,
        title: 'Blockchain Technology',
        description: 'Understanding the decentralized ledger technology powering cryptocurrencies and various innovative applications.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 8,
        title: 'Internet of Things (IoT)',
        description: 'Connecting devices and analyzing data to create smart environments for efficient automation and monitoring.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 9,
        title: 'Mobile App Development',
        description: 'Building innovative mobile applications for Android and iOS using frameworks like React Native and Flutter.',
        image: 'https://placehold.co/400x400',
        link: ''
    },
    {
        id: 10,
        title: 'Machine Learning',
        description: 'Techniques for training models to recognize patterns, make predictions, and improve with experience.',
        image: 'https://placehold.co/400x400',
        link: ''
    }
];




export default async function handler(req,res) {
    if(req.method !=="GET"){
        return res.status(405).json("mathod is not allowed");
    }
    res.json(blogs);
}  
