/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-yellow-800'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum minus excepturi animi reiciendis fuga tenetur consequuntur nobis porro, saepe inventore velit ad, eum modi deserunt consectetur ex veritatis doloremque soluta.</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-800 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">ABC</h2>
                                <p className="text-gray-500">123</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus inventore beatae ratione accusantium ad iure ullam sapiente impedit repellat, porro, a fugiat deserunt est quos unde similique nesciunt quae placeat soluta?</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-800 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">PQR</h2>
                                <p className="text-gray-500">456</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate eos, facere culpa adipisci beatae? Voluptate neque illum doloribus sequi! Fuga, dignissimos. Enim ex aperiam libero repudiandae excepturi voluptate itaque.</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-800 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">XYZ </h2>
                                <p className="text-gray-500">789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial