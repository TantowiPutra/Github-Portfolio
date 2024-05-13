import { Disclosure } from '@headlessui/react'

export default function AboutMe() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                <div className="container text-white mx-auto flex items-center justify-center w-6/12" >
                    <div className="title flex flex-col items-center justify-center">
                        {/* <h1 className='text-xl mt-3 border-b-4 border-white p-3'>About Me</h1>  */}
                        <div className="content mt-4 text-justify">
                            Hi, my name is Tantowi Putra Agung Setiawan, recently graduated from Universitas Bina Nusantara, majoring in Computer Science.
                            I realized despite being a computer science graduate, it doesn'nt mean that i'll automatically qualified to enter the job market,
                            therefore, in my spare time, i utilize it to hone my DSA knowledge, as it's the core fundamental for Computer Science
                        </div>
                    </div>

                    <div className='w-fit'>
                        
                    </div>
                </div>
                </>
            )}
        </Disclosure>
    )
}