import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#FBFCFE] flex justify-center items-center p-4'>
            <form action="https://getform.io/f/2cff7957-9014-430b-8593-a9d242b5bcbb" method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#838384] text-[#838384]'>contact</p>
                    <p className='text-2xl text-[#838384] py-4'>always good to hear from you</p>
                    <p className='text-2xl text-[#838384] '> say hi anytime</p>
                </div>
                <input className='p-2 bg-[#FBFCFE] border-b-4' type="text" placeholder='name' name='name'/>
                <input className='p-2 bg-[#FBFCFE] border-b-4' type="email" placeholder='email' name='name'/>
                <textarea className='p-2 bg-[#FBFCFE] border-b-4' name="message" rows="10" placeholder='message'></textarea>
                <button className='text-[#838384] border-2 hover:border-[#838384] px-2 py-2 my-8 mx-auto flex items-center'>let's collaborate</button>
            </form>
        </div>
    )
}

export default Contact;




// import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
//         <form method='POST' action="https://getform.io/f/2cff7957-9014-430b-8593-a9d242b5bcbb" className='flex flex-col max-w-[600px] w-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//                 <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
//             </div>
//             <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
//             <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
//             <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
//             <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
//         </form>
//     </div>
//   )
// }

// export default Contact
