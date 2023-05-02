'use client';

import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {}

const Dropdown = (props: Props) => {
return (             <div className="relative">
                      <Menu>
                        {({ open }) => (
                          <> 
                          <motion.div  
                          whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                            <Menu.Button className="hover:text-orange-200 text-wadadli rounded-xl bg-zinc-50/70 p-2 shadow-lg shadow-zinc-950/75 transition duration-300 ease-in-out hover:bg-zinc-950/90 hover:shadow-md focus:text-wadadli focus:outline-none">
                            <Bars3Icon className="h-6 w-6" />
                            </Menu.Button>
                            </motion.div>
    
                            {open && (
                              <Menu.Items
                                as={motion.div}
                                static
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                
                                transition={{ duration: 0.09 }}
                                className="absolute right-0 z-10 mt-2 rounded-xl border border-orange-200 bg-zinc-50/90 font-semibold text-wadadli shadow focus:outline-none"
                              >
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      className={`${
                                        active ? "rounded-t-xl bg-zinc-950 text-orange-100 transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/"
                                    >
                                    Menu
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "bg-zinc-950 text-orange-100 transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="#"
                                    >
                                      Catering
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "bg-zinc-950 text-orange-100 transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="#"
                                    >
                                      Private Events
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "bg-zinc-950 text-orange-100 transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/gallery"
                                    >
                                      Gallery
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      className={`${
                                        active ? " bg-zinc-950 text-orange-100 transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/contact"
                                    >
                                      Contact Us
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "rounded-b-xl bg-zinc-950 text-orange-100 transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="#"
                                    >
                                      Our Story
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            )}
                          </>
                        )}
                      </Menu>
                    </div>
    )}

export default Dropdown