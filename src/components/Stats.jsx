const StatsCard = ({ title, value, change, isPositive }) => (
    <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div class="p-4 md:p-5">
        <div class="flex items-center gap-x-2">
          <p class="text-xs uppercase text-gray-500 dark:text-neutral-500">
            Total users
          </p>
          <div class="hs-tooltip">
            <div class="hs-tooltip-toggle">
              <svg  data-tooltip-id="my-tooltip"
  data-tooltip-content="Hello world!"
  data-tooltip-place="top" class="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700" role="tooltip">
                The number of daily users
              </span>
            </div>
          </div>
        </div>

        <div class="mt-1 flex items-center gap-x-2">
          <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200" >
            72,540
          </h3>
          {isPositive ? <span class="flex items-center gap-x-1 text-green-600">
            <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </span>: <span class="flex items-center gap-x-1 text-green-600">
            <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </span>}
        </div>
      </div>
    </div>
);


const Stats = () => {
    // Stats Card Component
    return <div className="col-span-3 grid grid-cols-3 gap-4">
    <StatsCard title="Purchases" value="4,294" change="+32%" isPositive={true} />
    <StatsCard title="Revenue" value="$322,3k" change="+49%" isPositive={true} />
    <StatsCard title="Refunds" value="$8,2k" change="-7%" isPositive={false} />
  </div>
}

export default Stats;