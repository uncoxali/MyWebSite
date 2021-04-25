import SearchIcon from '@assets/svg/searchIcon.svg';
import ProfileIcon from '@assets/svg/peopleIcon.svg';
import ShoppingCartIcon from '@assets/svg/shoppingCartIcon.svg';
import { useRouter } from 'next/router';

const SearchBar: React.FC = () => {
    const router = useRouter();
    return (
        <div className="w-full flex py-2 px-4 bg-white">
            <div className="relative h-8 flex rounded-md items-center   w-2/3 bg-gray-250 ">
                <div className="flex absolute right-0  border-l border-gray-400 h-6">
                    <SearchIcon className="w-5 mx-2 " fill="gray" />
                </div>

                <input
                    className="bg-transparent text-gray-500 text-xs pr-12  text-right w-full p-1 focus:outline-none"
                    name="search"
                    defaultValue={router.query.q}
                    onKeyUp={(e) => {
                        e.preventDefault();

                        if (e.key === 'Enter') {
                            const q = e.currentTarget.value;

                            router.push(
                                {
                                    pathname: `/search`,
                                    query: q ? { q } : {},
                                },
                                undefined,
                                { shallow: true },
                            );
                        }
                    }}
                />
            </div>

            <div className="w-1/3 flex justify-center items-center">
                <button className="mx-3">
                    <ShoppingCartIcon fill="gray" className="w-5" />
                </button>

                <button className="mr-4">
                    <ProfileIcon fill="gray" className="w-5" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
