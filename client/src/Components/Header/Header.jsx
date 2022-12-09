import React, { useState } from 'react'
import { FaBed, FaCar, FaTaxi, FaCalendarAlt } from 'react-icons/fa'
import { IoAirplaneSharp, IoPerson } from 'react-icons/io5'
import { MdEmojiPeople } from 'react-icons/md'
import './header-elements.scss'

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1
        }
    );

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === 'add' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })
    }


    return (
        <div className='header'>
            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FaBed className='header-icons' /><span className="">Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <IoAirplaneSharp className='header-icons' /><span className="">Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <FaCar className='header-icons' /><span className="">Car Rentals</span>
                    </div>
                    <div className='headerListItem'>
                        <FaBed className='header-icons' /><span className="">Attractions</span>
                    </div>
                    <div className='headerListItem'>
                        <FaTaxi className='header-icons' /><span className="">Airport taxis</span>
                    </div>
                </div>

                {type !== 'list' &&
                    <>
                        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                        <p className='headerDesc'>Get rewarded for your travels unlock instant savings of 10% or more with a free rcbooking account.</p>
                        <button className='headerBtn'>Sign in / Register</button>
                        <div className='headerSearch'>
                            <div className='headerSearchItem'>
                                <FaBed className='search-icons' />
                                <input type="text"
                                    placeholder="Where are you going?"
                                    className='headerSearchInput'
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <div className='headerSearchItem'>
                                <FaCalendarAlt className='search-icons' />
                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                />}
                            </div>
                            <div className='headerSearchItem'>
                                <IoPerson className='search-icons' />
                                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className='optionCounter'>
                                            <button disabled={options.adult === 0} className='optionCounterButton' onClick={() => handleOption('adult', 'min')}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption('adult', 'add')}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className='optionCounter'>
                                            <button disabled={options.children === 0} className='optionCounterButton' onClick={() => handleOption('children', 'min')}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption('children', 'add')}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className='optionCounter'>
                                            <button disabled={options.room === 0} className='optionCounterButton' onClick={() => handleOption('room', 'min')}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption('room', 'add')}>+</button>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                            <div className='headerSearchItem'>
                            <button className='headerBtn' onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Header