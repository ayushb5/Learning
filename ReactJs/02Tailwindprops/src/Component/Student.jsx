import React from 'react';

function Student(props) {
    return (
        <>
            <div className='h-100 w-100 bg-white flex justify-center items-center'>
                <h1 className='text-black text-3xl'>
                    Name:{props.username}
                    <br />
                    Age:{props.age}
                    <br />
                    Academic Year:{props.Acadyr}
                </h1>
            </div>
        </>
    );
}

export default Student;