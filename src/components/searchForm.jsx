import React, { useState } from "react";
import { MagnifyingGlassIcon,MapPinIcon,ClipboardDocumentListIcon,ClockIcon  } from '@heroicons/react/24/solid';

 

const SearchForm = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        destination: "Melborn ,Australia",
        type: "Booking Type",
        duration: "2-4 days tour",
        guests: "0",
        language: "English",
        month: "Month",
        durationFilter: "Duration",
        acceptsCreditCards: false,
        carParking: false,
        freeCoupons: false,
        laundryService: false,
        outdoorSeating: false,
        reservations: false,
        restaurant: false,
        smokingAllowed: false,
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Implement your form submission logic here
    };

    return (
        <div className="px-24 relative w-full fadeInUp text-[#191919] bg-[#ffffff]">
            <div className="mx-auto w-full md:w-[1200px] tf-container">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="relative search-form-widget-slider">
                            <form onSubmit={handleSubmit} id="search-form-slider">
                                <div className="flex gap-16   ">
                                    {/* Destination */}
                                    <div className="form-group flex items-start gap-4 border-r-2 px-4">
                                    <MapPinIcon className="h-10 w-8 text-[#4DA528] " />
                                        <div className="search-bar-group">
                                            <label htmlFor="destination" className="text-[18px] font-[600]">Destination</label>
                                            <div className="nice-select" tabIndex="0">
                                                <select
                                                    id="destination"
                                                    name="destination"
                                                    value={formData.destination}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2  "
                                                >
                                                    <option value="Melborn ,Australia">Melborn ,Australia</option>
                                                    <option value="hanoi">HaNoi ,Vietnam</option>
                                                    <option value="tokyo">Tokyo , Japan</option>
                                                    <option value="seoul">Seoul , Korea</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Type */}
                                    <div className="form-group flex gap-4 border-r-2 px-4">
                                    <ClipboardDocumentListIcon className="h-10 w-8 text-[#4DA528] " />
                                        <div className="search-bar-group">
                                            <label htmlFor="type" className="text-[18px] font-[600]">Type</label>
                                            <div className="nice-select" tabIndex="0">
                                                <select
                                                    id="type"
                                                    name="type"
                                                    value={formData.type}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2"
                                                >
                                                    <option value="Booking Type">Booking Type</option>
                                                    <option value="booking">Booking Type 1</option>
                                                    <option value="booking">Booking Type 2</option>
                                                    <option value="booking">Booking Type 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div className="form-group flex gap-4 border-r-2 px-4">
                                    <ClockIcon className="h-10 w-8 text-[#4DA528] " />
                                        <div className="search-bar-group">
                                            <label htmlFor="duration" className="text-[18px] font-[600]">Duration</label>
                                            <div className="nice-select" tabIndex="0">
                                                <select
                                                    id="duration"
                                                    name="duration"
                                                    value={formData.duration}
                                                    onChange={handleInputChange}
                                                    className="w-full p-2"
                                                >
                                                    <option value="2-4 days tour">2-4 days tour</option>
                                                    <option value="3-6 days tour">3-6 days tour</option>
                                                    <option value="4-8 days tour">4-8 days tour</option>
                                                    <option value="5-10 days tour">5-10 days tour</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Guests */}
                                    <div className="form-group flex gap-4 border-r-2 px-4">
                                    <MapPinIcon className="h-10 w-8 text-[#4DA528] " />
                                        <div className="search-bar-group">
                                            <label htmlFor="guests" className="text-[18px] font-[600]">Guests</label>
                                            <input
                                                type="number"
                                                id="guests"
                                                name="guests"
                                                value={formData.guests}
                                                onChange={handleInputChange}
                                                className="w-full p-2"
                                            />
                                        </div>
                                    </div>
                                    {/* Filter and Search Button */}
                                    <div className="flex space-x-4 mt-4">
                                        <div className="form-group flex items-center space-x-2">
                                            <button
                                                type="submit"
                                                className="btn-search flex gap-4 py-3 px-8 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                            >
                                                <MagnifyingGlassIcon className="h-5 w-5 text-[#191919]" />  <p>Search</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                {/* Additional Filters */}
                                <div className="wd-search-form mt-4">
                                    <div className="input-group-grid">
                                        <fieldset className="group-select relative mb-4">
                                            <label>Filter By Price</label>
                                            <div className="widget widget-price">
                                                <div id="slider-range"></div>
                                                <div className="slider-labels flex items-center justify-between">
                                                    <div>
                                                        <input type="slide" name="min-value" value="" />
                                                        <input type="hidden" name="max-value" value="" />
                                                    </div>
                                                    <div className="caption flex items-center space-x-2">
                                                        <p className="price-range">Price:</p>
                                                        <div className="number-range">
                                                            <span id="slider-range-value1"></span>
                                                            <span id="slider-range-value2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>

                                        {/* Checkbox Filters */}
                                        <div className="space-y-2">
                                            <div className="checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="check4"
                                                    name="acceptsCreditCards"
                                                    checked={formData.acceptsCreditCards}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="check4">Accepts Credit Cards</label>
                                            </div>
                                            <div className="checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="check5"
                                                    name="carParking"
                                                    checked={formData.carParking}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="check5">Car Parking</label>
                                            </div>
                                            <div className="checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="check6"
                                                    name="freeCoupons"
                                                    checked={formData.freeCoupons}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="check6">Free Coupons</label>
                                            </div>
                                            <div className="checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="check7"
                                                    name="laundryService"
                                                    checked={formData.laundryService}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="check7">Laundry Service</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
