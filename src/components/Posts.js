import React from 'react';
import './Posts.css';

const posts = [
    {
        id: 11,
        date: 'April 12, 2025',
        title: 'Exam Season',
        description: "Finally exam season, almost finished third year!! Finished COMP3000 on the 11th and I got COMP3804, COMP3007, and MATH2107 left. Can't wait to finish this semester!"
    },
    {
        id: 10,
        date: 'February 18, 2025',
        title: 'Reading week!',
        description: "After a COMP3000 midterm, a MATH2007 test, and a COMP3804 assignment, it is finally reading week! I'm excited to see some friends and just relax for a bit :). Also have to study for the COMP3007 and COMP3804 midterms..."
    },
    {
        id: 9,
        date: 'February 6, 2025',
        title: 'learning R',
        description: 'Got around to learning R a bit ago. I played around with functions using the mtcars dataset that is in the langauge!'
    },
    {
        id: 8,
        date: 'January 30, 2025',
        title: 'calc 2 test',
        description: 'just finished a calc 2 test and wow! this is not the same as calc 1 haha. so far staying on top of everything but I am most excited for weekend!'
    },
    {
        id: 7,
        date: 'January 25, 2025',
        title: 'Portfolio update!',
        description: 'I was able to upload my database demo video. Still need to get around to recording my CNN running on google colab (for T4 GPU).'
    },
    {
        id: 6,
        date: 'January 21, 2025',
        title: 'back to school',
        description: 'finally back in the rythm of school! this semester I have COMP3804, MATH2007, COMP3007, COMP3000, and ERTH2012'
    },
    {
        id: 5,
        date: 'December 22, 2024',
        title: 'up and running!',
        description: 'finally got the website deployed today! still have to work out some kinks'
    },
    {
        id: 4,
        date: 'December 21, 2024',
        title: 'Getting the hang out it',
        description: 'Added some more stuff to each section on this page to make it look nice :)'
    },
    {
        id: 3,
        date: 'December 20, 2024',
        title: 'Research on React.js',
        description: 'Trying to figure out how this works... Lots of files hah',
    },
    {
        id: 2,
        date: 'December 19, 2024',
        title: 'Finally finished',
        description: 'Today I finished my machine learning exam and I celebrated with some friends.',
    },
    {
        id: 1,
        date: 'December 18, 2024',
        title: 'Day before exam',
        description: 'Last day of studying the concepts of my machine learning class!',
    },
];

const Posts = () => {
    return (
        <div className="posts">
            <h2>Latest Posts</h2>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-entry">
                        <div className="post-date">{post.date}</div>
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-description">{post.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
