import { cn } from '@/utils/formatters';
import { Link } from 'react-router-dom';

const ICON_SIZE = 70;

interface ComponentProps {
  label: string;
  icon: string;
  subLabel: string;
  link: string;
  isActive: boolean;
}

export default function DashboardCard(props: ComponentProps) {
  const { label, icon, link, subLabel, isActive } = props;
  return (
    <Link to={link}>
      <div
        className={cn(
          'shadow-xl cursor-pointer hover:bg-gradient-to-b hover:from-[#b5f5c1] hover:to-[#dff1e2] bg-white rounded-[20px] p-[30px]',
          isActive
            ? 'bg-gradient-to-b from-[#6BF27F] to-[#28CD41] hover:bg-gradient-to-b hover:from-[#6BF27F] hover:to-[#28CD41]'
            : 'bg-white',
        )}
      >
        <h1 className={cn(isActive ? 'text-white' : 'text-[#364D39]')}>{label}</h1>
        <h2 className={cn('text-[28px] font-bold', isActive ? 'text-white' : 'text-[#364D39]')}>{subLabel}</h2>
        <div className="w-full flex items-end justify-end">
          <img src={icon} height={ICON_SIZE} width={ICON_SIZE} alt="card-svg" />
        </div>
      </div>
    </Link>
  );
}
