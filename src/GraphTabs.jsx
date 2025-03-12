import { useState } from "react";

const htmlFiles = ['laugh.html', 'set_chars.html', 'add_int.html', 'readingIceCream.html', 'reverseWords.html', 'find_multiples.html', 'check_prime.html', 'findHorizontals.html', 'add_up.html', 'altText.html', 'getSeason.html', 'changeSection.html', 'generateCardDeck.html', 'student_grades.html', 'pattern.html', 'remove_odd.html', 'percentWin.html', 'assessVowels.html', 'sort_physicists.html', 'fib.html', 'print_time.html', 'sortedBooks.html', 'combine.html', 'create_list.html', 'subtract_add.html', 'increaseScore.html', 'total_bill.html', 'topScores.html', 'sortBySuccessRate.html', 'times_with.html', 'convert.html', 'planets_mass.html', 'translate.html']; // Statically defined list

export default function GraphTabs() {
    const [selectedTab, setSelectedTab] = useState(htmlFiles[0]);
  
    return (
      <div className="h-full w-full flex flex-col overflow-auto">
        <div className="flex space-x-2 p-4 bg-gray-100">
          {htmlFiles.map((file) => (
            <button
              key={file}
              onClick={() => setSelectedTab(file)}
              className={`px-4 py-2 border rounded ${
                selectedTab === file ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {file.replace(".html", "")}
            </button>
          ))}
        </div>
        <div className="flex-grow w-full overflow-auto">
          {selectedTab && (
            <iframe
              src={`graphs/${selectedTab}`}
              className="w-full border-none"
              style={{ height: "100vh", minWidth: "1400px", overflow: "auto" }}
            ></iframe>
          )}
        </div>
      </div>
    );
  }
  