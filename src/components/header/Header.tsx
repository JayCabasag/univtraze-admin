import chevronLeftSVG from '@assets/chevron-left.svg';
import { Link } from 'react-router-dom';

interface ComponentProps {
  title: string;
  sub: string;
}

const ICON_SIZE = 50;

export default function Header(props: ComponentProps) {
  const { title, sub } = props;
  return (
    <Link to="/dashboard" className="px-[15px] md:px-0 mt-[30px] gap-[30px] max-w-max flex items-center justify-center h-[44px]">
      <button className="shadow-xl bg-gradient-to-b from-[#6BF27F] to-[#28CD41] rounded-full flex items-center justify-center min-h-[44px] min-w-[44px] border-4 border-white">
        <img className="-ml-1" src={chevronLeftSVG} alt="header-icon" height={ICON_SIZE - 20} width={ICON_SIZE - 20} />
      </button>
      <p>
        <span className="mr-[8px]">{title}</span> {' / '}
        <span className="ml-[8px] capitalize text-[#364D39] text-[16px] font-bold">{sub}</span>
      </p>
    </Link>
  );
}
