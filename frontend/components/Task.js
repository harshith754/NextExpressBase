import React from "react";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import Checkbox from "./Checkbox";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Task = ({ task }) => {
  let startDateTime = parseISO(task.startDatetime);
  let endDateTime = parseISO(task.endDatetime);
  return (
    <div>
      <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 justify-between">
        <div className="flex flex-row justify-center items-center gap-5">
          <img
            src={task.imageUrl}
            alt=""
            className="flex-none w-10 h-10 rounded-full"
          />
          <div className="flex-auto">
            <p className="text-gray-900">{task.name}</p>
            <p className="mt-0.5">
              <time dateTime={task.startDatetime}>
                {format(startDateTime, "h:mm a")}
              </time>{" "}
              -{" "}
              <time dateTime={task.endDatetime}>
                {format(endDateTime, "h:mm a")}
              </time>
            </p>
          </div>
        </div>

        <Checkbox />

        <Menu
          as="div"
          className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100 justify-end"
        >
          <div>
            <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Cancel
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </div>
  );
};

export default Task;
