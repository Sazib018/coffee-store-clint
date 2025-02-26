import React from 'react';

const BannerFeature = () => {
    return (
        <div className="bg-[#ECEAE3] mb-3 py-16">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={"https://i.ibb.co.com/jkkdR4VY/1.png"}
                        alt="icon"
                        className="mx-auto sm:mx-0"
                    />
                    <h3 className="text-xl font-semibold mt-4">Awesome Aroma</h3>
                    <p className="text-gray-700 fontRailway mt-2">
                        You will definitely be a fan of the design & aroma of your coffee.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={"https://i.ibb.co.com/DfsWk0x6/2.png"}
                        alt="icon"
                        className="mx-auto sm:mx-0"
                    />
                    <h3 className="text-xl font-semibold mt-4">High Quality</h3>
                    <p className="text-gray-700 fontRailway mt-2">
                        We served the coffee to you maintaining the best quality.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={"https://i.ibb.co.com/Hf4JcnjQ/3.png"}
                        alt="icon"
                        className="mx-auto sm:mx-0"
                    />
                    <h3 className="text-xl font-semibold mt-4">Pure Grades</h3>
                    <p className="text-gray-700 fontRailway mt-2">
                        The coffee is made of the green coffee beans which you will love.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={"https://i.ibb.co.com/qLkq8j5C/4.png"}
                        alt="icon"
                        className="mx-auto sm:mx-0"
                    />
                    <h3 className="text-xl font-semibold mt-4">Proper Roasting</h3>
                    <p className="text-gray-700 fontRailway mt-2">
                        Your coffee is brewed by first roasting the green coffee beans.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerFeature;