import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 p-4'>
            <h1 className='text-danger'>When you should use useContext?</h1>
            <p className='fw-bold'>When you wanna get rid of prop drilling you should use use context . It is like a mobile tower and it can send data to any component telepathecally and can use that data in that component</p>
            <h1 className='text-danger'>What is custom hook?</h1>
            <p className='fw-bold'>Custom hook is a js function that is starts the word "use" such as useEffect,useState . But a custom hook can provide a specific behavior that can be used by any component.</p>
            <h1 className='text-danger'>What is useRef hook?</h1>
            <p className='fw-bold'>useRef is a mutable hook which returns a space where it can be mutate and it will not affect the React lifecycle which means posible to change some data in there, it does not provoke any reactiveness.</p>
            <h1 className='text-danger'>What is useMemo?</h1>
            <p className='fw-bold'>useMemo is a built it react hook. Its special feature is it can memorized function and can avoid calling them at every render its so importent when you use a memory hungry function it can slow the system by rendering them again and again and! So, useMemo simply memorize the value and prevent's rendering them again</p>
        </div>
    );
};

export default Blogs;