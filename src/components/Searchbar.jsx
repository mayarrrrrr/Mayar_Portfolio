import { useState} from "react";

const people = [
    "Mayar",
    "Alice",
    "John",
    "Sarah",
    "David",
    "James",
    "Maya",
    "Daniel",
    "Sophia",
    "Samuel"
  ];
  

function SearchFilter(){
    const [query, setQuery ] = useState("");

    const filteredPeople = people.filter((person)=>{
        person.toLowerCase().includes(query.toLowerCase())

    })

    return(

        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4  ">
            <div className="w-full max-w-md">
                <input 
                 type="text"
                 placeholder="Search names..."
                 className="w-full p-3 rounded-lg border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                 value={query}
                 onChange={(e)=> setQuery(e.target.value)}
                />

<ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
          {filteredPeople.length > 0 ? (
            filteredPeople.map((person, index) => (
              <li key={index} className="p-3 hover:bg-gray-100">
                {person}
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500">No results found</li>
          )}
        </ul>

            </div>
        

        </div>
        

    )
}
export default SearchFilter;