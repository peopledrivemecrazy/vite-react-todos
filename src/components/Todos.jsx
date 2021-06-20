import React, { useState, useEffect } from "react";
import { getData } from "../lib/fetch";

function Todos(props) {
  let [resp, setResp] = useState("");
  let { userId, id, title, completed } = resp;
  useEffect(async () => {
    setResp(await getData(props.pageNum));
  }, [props.pageNum]);
  return (
    <ul class="divide-y divide-gray-200">
      <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
        <div class="flex justify-between space-x-3">
          <div class="min-w-0 flex-1">
            <a href="#" class="block focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-gray-900 truncate">{id}</p>
              <p class="text-sm text-gray-500 truncate">
                {userId} {title}
              </p>
            </a>
          </div>
          <time class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
            {props.pageNum}
          </time>
        </div>
        <div class="mt-1">
          <p class="line-clamp-2 text-sm text-gray-600">{completed}</p>
        </div>
      </li>
    </ul>
  );
}

export default Todos;
