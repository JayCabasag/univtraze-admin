const covidUpdateList = [
  { label: 'Local cases', total: '28,380' },
  { label: 'Deaths', total: '409,637' },
  { label: 'Recovered', total: '237, 253' },
];

export default function DashboardPage() {
  return (
    <div className="py-[90px]">
      <h4 className="text-[#364D39]">Welcome back, Admin</h4>
      <h1 className="mt-[5px] text-[28px] font-bold text-[#3.64D39]">Here&rsquo;s an update for today</h1>
      <div className="flex gap-[20px]">
        <div className="grid grid-cols-2 gap-[20px] border w-full">
          <div>Card 1</div>
          <div>Card 1</div>
        </div>
        <div className="shadow-xl w-full max-w-[313px] flex flex-col gap-[28px] rounded-[20px] p-[18px] bg-[#FFFFFF] border">
          <h1 className="text-[#364D39] text-[22px] font-bold">Covid update Philippines</h1>
          {covidUpdateList.map((covidUpdate) => {
            return (
              <div key={covidUpdate.label}>
                <h4 className="text-[#364D39]">Local Cases </h4>
                <p className="text-[#364D39]">28,380</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
