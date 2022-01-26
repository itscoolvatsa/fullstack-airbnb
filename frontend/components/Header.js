import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
} from "@heroicons/react/solid";

function Header({ placeholder, currentUser }) {
    const [searchInput, setSearchInput] = useState("");
    const [guestNumber, setGuestNumber] = useState(1);
    const [menuToggle, setMenuToggle] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guestNumber: guestNumber,
            },
        });
    };

    const resetInput = () => {
        setSearchInput("");
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-5 md:px-10">
            {/* left - Logo */}

            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    onClick={() => router.push("/")}
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* middle - Search */}

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    placeholder={placeholder || "Start Your Search"}
                    className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-500 placeholder-gray-400"
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/* right - */}

            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6" />
                <div
                    className="flex items-center space-x-2 border-2 p-2 rounded-full"
                    onClick={(e) =>
                        menuToggle ? setMenuToggle(false) : setMenuToggle(true)
                    }
                >
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>

            {menuToggle && (
                <ul className="absolute right-10 top-16 bg-white p-4 pr-12 rounded-md shadow-2xl">
                    {!currentUser ? (
                        <div>
                            {" "}
                            <a href="/auth/signup">
                                <li>Sign Up</li>{" "}
                            </a>
                            <a href="/auth/login">
                                <li className="border-b">Log In</li>
                            </a>
                            <li>Host Your Hotel</li>
                        </div>
                    ) : (
                        <div>
                            <a href="/auth/signout">
                                <li>Sign Out</li>{" "}
                            </a>
                        </div>
                    )}
                </ul>
            )}

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5861"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">
                            Number of Guests
                        </h2>
                        <UserIcon className="h-5" />
                        <input
                            value={guestNumber}
                            onChange={(e) => setGuestNumber(e.target.value)}
                            type="number"
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                        />
                    </div>
                    <div className="flex">
                        <button
                            onClick={resetInput}
                            className="flex-grow text-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={search}
                            className="flex-grow text-red-400"
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
