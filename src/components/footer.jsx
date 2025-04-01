import React from 'react'

const mainfooter = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-8 px-8 w-full">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <div className="footer-logo mb-4">
                                <a href="index.html">
                                    <img src="https://placehold.co/194x59" alt="Your Store" width="194" height="59" />
                                </a>
                            </div>
                            <p classNameName="text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <h3 className="text-xl font-bold mb-4">Address</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><i className="fa fa-map-marker"></i> Ranelagh Place, Liverpool, L3 5UL, England</li>
                                <li><i className="fa fa-paper-plane"></i> <a href="mailto:contact@wpthemego.com" className="hover:underline">contact@wpthemego.com</a></li>
                                <li><i className="fa fa-mobile"></i> <a href="#" className="hover:underline">8 (495) 989—20—11</a></li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="index.html" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">Shop</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Terms & Condition</a></li>
                                <li><a href="#" className="hover:underline">Latest News</a></li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="about-us.html" className="hover:underline">About Us</a></li>
                                <li><a href="contact-us-v1.html" className="hover:underline">Contact Us</a></li>
                                <li><a href="blog-grid.html" className="hover:underline">Blog</a></li>
                                <li><a href="#" className="hover:underline">Purchase Theme</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-4">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <div className="text-gray-400 mb-4 sm:mb-0">
                                Sw PortKey ©2019. All Rights Reserved. Designed by
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Follow Us:</h3>
                                <ul className="flex space-x-4 text-gray-400">
                                    <li><a href="https://www.facebook.com/wpthemego" className="hover:text-blue-500"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/wpthemego" className="hover:text-blue-400"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.pinterest.com/wpthemego/" className="hover:text-red-500"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#" className="hover:text-pink-500"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="https://plus.google.com/u/0/117616422700848151321" className="hover:text-red-600"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default mainfooter