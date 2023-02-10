import "./App.css";
import Bg from "./Bg";
import Sidebar from "./Sidebar";
import Test from "./test";

function App() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Datum und Uhrzeit
            </th>
            <th scope="col" class="px-6 py-3">
              Wasserstand FB
            </th>
            <th scope="col" class="px-6 py-3">
              Wasserstand SB
            </th>
            <th scope="col" class="px-6 py-3">
              Temp. FB
            </th>
            <th scope="col" class="px-6 py-3">
              Temp. SB
            </th>
            <th scope="col" class="px-6 py-3">
              Temp. Sole Eintritt
            </th>
            <th scope="col" class="px-6 py-3">
              Temp. Sole Austritt
            </th>
            <th scope="col" class="px-6 py-3">
              Temp. Delta
            </th>
            <th scope="col" class="px-6 py-3">
              Zählerstand
            </th>
            <th scope="col" class="px-6 py-3">
              Förderrate
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td class="px-6 py-4">2021-04-21 16:07:04.999</td>
            <td class="px-6 py-4">9,151</td>
            <td class="px-6 py-4">9,173</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">12,600</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">0,900</td>
            <td class="px-6 py-4">1896,138</td>
            <td class="px-6 py-4">3,8</td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">2021-04-21 16:07:04.999</td>
            <td class="px-6 py-4">9,151</td>
            <td class="px-6 py-4">9,173</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">12,600</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">0,900</td>
            <td class="px-6 py-4">1896,138</td>
            <td class="px-6 py-4">3,8</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td class="px-6 py-4">2021-04-21 16:07:04.999</td>
            <td class="px-6 py-4">9,151</td>
            <td class="px-6 py-4">9,173</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">12,600</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">0,900</td>
            <td class="px-6 py-4">1896,138</td>
            <td class="px-6 py-4">3,8</td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">2021-04-21 16:07:04.999</td>
            <td class="px-6 py-4">9,151</td>
            <td class="px-6 py-4">9,173</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">12,600</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">0,900</td>
            <td class="px-6 py-4">1896,138</td>
            <td class="px-6 py-4">3,8</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td class="px-6 py-4">2021-04-21 16:07:04.999</td>
            <td class="px-6 py-4">9,151</td>
            <td class="px-6 py-4">9,173</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">12,600</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">13,500</td>
            <td class="px-6 py-4">0,900</td>
            <td class="px-6 py-4">1896,138</td>
            <td class="px-6 py-4">3,8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
