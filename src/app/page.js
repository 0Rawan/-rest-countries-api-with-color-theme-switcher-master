import Image from "next/image";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Dropdown from "./components/Dropdown";
import CardsGrid from "./components/cards-grid"

export default function Home() {
  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
    { value: 'america', label: 'America' },
  ];


  return (
    <>
    <main className="dark:bg-dark bg-slate-100 h-full white">
    <Navbar/>
    <div className="flex flex-col sm:flex-row justify-between text-sm px-5 py-8 sm:px-10 sm:text-base">
    <Search/>
    <Dropdown
        options={options}
        label="Select an option"
      />
    </div>
   <CardsGrid/>
    </main>
    </>
  );
}
