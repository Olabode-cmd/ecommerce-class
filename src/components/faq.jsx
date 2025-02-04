import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Faqs = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-medium">
          Frequently Asked Questions
        </h1>

        <div className="w-full pt-12 px-4">
          <div className="mx-auto w-full max-w-2xl rounded-xl bg-gray-50">
            <Disclosure as="div" className="p-6" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-black cursor-pointer">
                  What is your refund policy?
                </span>
                <ChevronDownIcon className="size-5 fill-black cursor-pointer group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-gray-700 text-left">
                If you're unhappy with your purchase, we'll refund you in full. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis officia voluptates?
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-black cursor-pointer">
                  Do you offer technical support?
                </span>
                <ChevronDownIcon className="size-5 fill-black/60 cursor-pointer group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-gray-700 text-left">
                No.
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>

        <div className="mt-6 text-center">
            <button className="text-sm bg-green-600 text-white rounded-3xl px-4 py-2.5 cursor-pointer hover:bg-green-700 duration-150">Load more</button>
        </div>
      </div>
    </>
  );
};

export default Faqs;
