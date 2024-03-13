import MarketPlace from './MarketPlace';
import Stats from "../Stats"
import OurClients from "../OurClients"
import Testimonials from "../Testimonials"
export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 sm:py-16 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Check out our latest market research reports.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Uncover Insights with Our Market Research Reports
            </h1>
            <p className="mt-4 lg:mt-6 text-lg leading-7 lg:leading-8 text-gray-600">
              Gain valuable insights into market trends, consumer behavior, and industry opportunities with our
              comprehensive market research reports.
            </p>
            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ring focus-visible:ring-indigo-600 focus-visible:ring-opacity-50"
              >
                Browse Reports
              </a>
              <a href="#" className="mt-4 ml-4 sm:mt-0 text-sm font-semibold leading-6 text-gray-900">
                Learn more about our process <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative aspect-w-16 aspect-h-9 lg:aspect-w-32 lg:aspect-h-18">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" />
          </div>
        </div>
      </div>
      <MarketPlace />
      <Stats />
      <Testimonials />
      <OurClients />
    </div>
  );
}
