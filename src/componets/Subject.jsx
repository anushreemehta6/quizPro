    import React from 'react'
    import { useState } from 'react';

    function Subject() {
         const [subject, setsubject] = useState([
    { id: 1, name: 'DBMS', flipped: false },
    { id: 2, name: 'DCCN', flipped: false },
    { id: 3, name: 'OOPS', flipped: false },
    { id: 4, name: 'DSA', flipped: false },
    { id: 5, name: 'OS', flipped: false },
    { id: 6, name: 'NLM', flipped: false },
    { id: 7, name: 'C++', flipped: false },
    { id: 8, name: 'LINUX', flipped: false },
  ]);

 
    
    const [showDiv, setshowDiv] = useState(true)
    const flip = (id) => {
    setsubject(prevSubjects =>
      prevSubjects.map(subject =>
        subject.id === id ? { ...subject, flipped: !subject.flipped } : subject
      )
    );
  };
        
   
  return (
    <>
      <h1 className="font-['Akaya_Kanadaka',_system-ui] text-white text-[48px] text-center">
        Select subject
      </h1>

      <div className="flex justify-evenly flex-wrap m-15 px-5 py-5 gap-10">
        {subject.map((subject) => (
          <div
            key={subject.id}
            onClick={() => flip(subject.id)}
            className="shadow-md p-4 rounded-xl text-center text-lg font-semibold w-[250px] h-[260px] bg-gradient-to-r from-[#F09FFD] to-[#495C93] cursor-pointer  flex flex-col justify-center items-center"
          >
            {!subject.flipped ? (
              <>
                <img
                  className="rounded-xl mt-5 "
                  src="src/assets/box.jpg"
                  alt={subject.name}
                />
                <h1>{subject.name}</h1>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <h2 className="text-xl mb-2">Choose Difficulty</h2>
                <button className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded">Easy</button>
                <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-1 rounded">Medium</button>
                <button className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded">Hard</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}


    export default Subject