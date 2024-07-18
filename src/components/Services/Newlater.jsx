function Newlater() {
    return (
      <div className="mx-auto mt-5 lg:mt-5 max-w-7xl px-4 sm:mt-40 lg:px-6 pb-5">
        <div className="relative isolate overflow-hidden bg-gray-300 px-4 py-16 sm:py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 xl:py-24">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
          Subscribe to our Newsletter
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-950">
          Stay informed with our latest updates. Subscribe now!
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" />
            <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Subscribe</button>
          </form>
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2" aria-hidden="true">
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7">
            </circle>
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#7ED321" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  
  export default Newlater;
  