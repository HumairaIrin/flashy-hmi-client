import React from 'react';

const Blogs = () => {
    return (
        <>
            <div>
                <h2 className='text-3xl mt-12 font-bold text-center text-[#fff558]'>Some important questions</h2>
            </div>
            <div className='mt-4 w-3/5 mx-auto bg-[#ffffff1c] rounded-lg p-4 mb-12'>
                <div className='p-4 mb-3 card rounded-lg'>
                    <h2 className='text-2xl font-bold'>Difference betweeen SQL and NoSQL</h2>
                    <p className='mt-3'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div className='p-4 mb-3 card rounded-lg'>
                    <h2 className='text-2xl font-bold'>What is JWT, and how does it work?</h2>
                    <p className='mt-3'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                </div>
                <div className='p-4 mb-3 card rounded-lg'>
                    <h2 className='text-2xl font-bold'>What is the difference between javascript and NodeJS?</h2>
                    <p className='mt-3'>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.</p>
                </div>
                <div className='p-4 mb-3 card rounded-lg'>
                    <h2 className='text-2xl font-bold'>How does NodeJS handle multiple requests at the same time?</h2>
                    <p className='mt-3'>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.</p>
                </div>
            </div>
        </>
    );
};

export default Blogs;