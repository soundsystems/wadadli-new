'use client';

import { Menu } from "@headlessui/react";
import { motion, spring } from "framer-motion";
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
                            <Menu.Button className="hover:text-orange-200 text-wadadli rounded-xl bg-zinc-50/70 backdrop-blur-sm p-2 shadow-lg shadow-zinc-950/75 transition duration-300 ease-in-out hover:bg-zinc-950/90 hover:shadow-md focus:text-wadadli focus:outline-none">
                            <Bars3Icon className="h-5 w-5" />
                            </Menu.Button>
                            </motion.div>
    
                            {open && (
                              <Menu.Items
                                as={motion.div}
                                static
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1, transition: {type: "spring", duration: .66, bounce: 0.33}}}
                                
                                transition={{ duration: 0.09 }}
                                className="absolute right-0 z-10 mt-2 rounded-xl border border-orange-200 bg-zinc-950/90 font-semibold text-orange-100 shadow focus:outline-none"
                              >
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      className={`${
                                        active ? "rounded-t-xl bg-zinc-950 text-wadadli transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/"
                                    >
                                    menu
                                    </Link>
                                  )}
                                </Menu.Item>
                                {/* <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "bg-zinc-950 text-wadadli transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="#"
                                    >
                                      catering
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "bg-zinc-950 text-wadadli transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="#"
                                    >
                                      private events
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "bg-zinc-950 text-wadadli transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/gallery"
                                    >
                                      gallery
                                    </a>
                                  )}
                                </Menu.Item> */}
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      className={`${
                                        active ? " bg-zinc-950 text-wadadli transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3 rounded-b-xl`}
                                      href="/contact"
                                    >
                                      contact us
                                    </Link>
                                  )}
                                </Menu.Item>
                                {/* <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "rounded-b-xl bg-zinc-950 text-wadadli transition duration-300 ease-in-out" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="#"
                                    >
                                      our story
                                    </a>
                                  )}
                                </Menu.Item> */}
                              </Menu.Items>
                            )}
                          </>
                        )}
                      </Menu>
                    </div>
    )}

export default Dropdown