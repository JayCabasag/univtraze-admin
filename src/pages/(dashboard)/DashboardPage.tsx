import virusSVG from '@assets/virus-red.svg';
import phoneSVG from '@assets/phone.svg';
import fluentSVG from '@assets/fluent.svg';
import cardSVG from '@assets/card.svg';
import DashboardCard from '@/components/dashboard/DashboardCard';

const cardList = [
  { label: 'Users', icon: cardSVG, link: 'users', subLabel: '28,9990' },
  { label: 'Communicable Disease reports', icon: virusSVG, link: 'communicable-disease-reports', subLabel: '300' },
  { label: 'Emergency reports', icon: phoneSVG, link: 'emergency-reports', subLabel: '4,876' },
  { label: 'Attendance', icon: fluentSVG, link: 'attendance', subLabel: 'See all >' },
];

const covidUpdateList = [
  { label: 'Local cases', total: '28,380' },
  { label: 'Deaths', total: '409,637' },
  { label: 'Recovered', total: '237, 253' },
];

export default function DashboardPage() {
  return (
    <div className="p-[15px] md:p-0 md:py-[90px] h-auto">
      <div>
        <h4 className="text-[#364D39]">Welcome back, Admin</h4>
        <h1 className="mt-[5px] text-[28px] font-bold text-[#3.64D39]">Here&rsquo;s an update for today</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] mt-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {cardList.map((cardList) => {
            const isActive = cardList.label === 'Users';
            return <DashboardCard key={cardList.label} {...cardList} isActive={isActive} />;
          })}
        </div>
        <div className="h-auto shadow-xl w-full md:max-w-[320px] flex flex-col gap-[28px] rounded-[20px] p-[18px] bg-[#FFFFFF] border">
          <h1 className="text-[#364D39] text-[22px] font-bold">Covid update Philippines</h1>
          {covidUpdateList.map((covidUpdate) => {
            return (
              <div key={covidUpdate.label}>
                <h4 className="text-[#364D39] text-[11px] font-normal">Local Cases </h4>
                <p className="text-[#364D39] text-[16px] font-bold">28,380</p>
              </div>
            );
          })}
          <button className="w-full rounded-[15px] h-[55px] text-white text-[16px] font-bold bg-gradient-to-b from-[#6BF27F] to-[#28CD41] capitalize">
            See full details
          </button>
        </div>
      </div>
    </div>
  );
}
