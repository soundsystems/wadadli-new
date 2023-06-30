'use client';

import { Menu } from "@headlessui/react";
import { motion, spring } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

type Props = {}

const Dropdown = (props: Props) => {
return (             <div className="relative">
                      <Menu>
                        {({ open }) => (
                          <> 
                          <motion.div  
                          whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                            <Menu.Button className={`group rounded-xl bg-zinc-50/70 p-2 text-wadadli shadow-lg shadow-zinc-950/75 backdrop-blur-sm transition-colors duration-300 ease-linear hover:bg-zinc-950/90 hover:drop-shadow-xl focus:outline-none
                            ${open ? 'bg-zinc-950/90 stroke-orange-100 shadow-none drop-shadow-none' : ''
                            }`}>
                         
                            <Bars3Icon className={`group h-5 w-5 group-hover:text-orange-100 ${open ? 'rotate-180 transition-transform duration-150 ease-linear' : '' 
                            }`} />
                            </Menu.Button>
                            </motion.div>
    
                            {open && (
                              <Menu.Items
                                as={motion.div}
                                static
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1, transition: {type: "spring", duration: .08, stiffness:83, bounce: 0.44}}}
                                transition={{ duration: 0.09 }}
                                className="absolute right-0 z-10 mt-2 rounded-xl border border-orange-100 bg-zinc-950/90 font-semibold text-orange-100 shadow focus:outline-none"
                              >
                                <Menu.Item
                                as={motion.div}
                                whileHover={{ scale: .95 }}
                                whileTap={{ opacity: .8 }}
                                >
                                  {({ active }) => (
                                    <Link
                                      className={`${
                                        active ? "rounded-t-xl bg-zinc-950 text-wadadli transition-colors duration-300 ease-linear" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/"
                                    >
                                    Menu
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item
                                  as={motion.div}
                                  whileHover={{ scale: .95 }}
                                  whileTap={{ opacity: .8  }}>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "bg-zinc-950 text-wadadli transition-colors duration-300 ease-linear" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/shop"
                                    >
                                      Shop
                                    </a>
                                  )}
                                </Menu.Item> 
                                {/* <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "bg-zinc-950 text-wadadli transition-colors duration-300 ease-linear" : ""
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
                                        active ? "bg-zinc-950 text-wadadli transition-colors duration-300 ease-linear" : ""
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
                                        active ? "bg-zinc-950 text-wadadli transition-colors duration-300 ease-linear" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/gallery"
                                    >
                                      gallery
                                    </a>
                                  )}
                                </Menu.Item> */}
                                <Menu.Item
                                  as={motion.div}
                                  whileHover={{ scale: .95 }}
                                  whileTap={{ opacity: .8  }}
                                  >     
                                  {({ active }) => (
                                    <Link
                                      className={`${
                                        active ? " bg-zinc-950 text-wadadli transition-colors duration-300 ease-linear" : ""
                                      } block whitespace-nowrap px-5 py-3`}
                                      href="/contact#contact-form" 
                                    >
                                      Contact Us
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item
                                  as={motion.div}
                                  whileHover={{ scale: .95 }}
                                  whileTap={{ opacity: 0.8 }}>
                                  {({ active }) => (
                                    <Link
                                      className={`${
                                        active ? " bg-zinc-950 text-wadadli transition-colors duration-300 ease-linear" : ""
                                      } block whitespace-nowrap rounded-b-xl px-5 py-3`}
                                      href="/contact#top"
                                    >
                                      Location
                                    </Link>
                                  )}
                                </Menu.Item>
                                {/* <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active ? "rounded-b-xl bg-zinc-950 text-wadadli transition-colors duration-300 ease-linear" : ""
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