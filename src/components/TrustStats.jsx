import CountUp from "react-countup";
import { FiUsers, FiCalendar, FiActivity } from "react-icons/fi";

const MiniStatItem = ({ icon: Icon, count, label, suffix = "+" }) => (
    <div className="d-flex align-items-center gap-2 text-start">
        <div className="text-primary-500 opacity-75">
            <Icon size={18} />
        </div>
        <div className="d-flex flex-column" style={{ lineHeight: 1.1 }}>
            <span className="fw-bold text-gray-900" style={{ fontSize: '1rem' }}>
                <CountUp end={count} duration={2.5} separator="," suffix={suffix} />
            </span>
            <span className="text-xs text-gray-500" style={{ fontSize: '0.75rem' }}>{label}</span>
        </div>
    </div>
);

export default function TrustStats({ variant = "full" }) {
    if (variant === "mini") {
        return (
            <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 mt-4 pt-2">
                <MiniStatItem icon={FiUsers} count={50000} label="Үйлчлүүлэгч" />
                <div className="d-none d-md-block vr bg-gray-200" style={{ height: '24px' }}></div>
                <MiniStatItem icon={FiActivity} count={500} label="Мэргэжлийн эмч" />
                <div className="d-none d-md-block vr bg-gray-200" style={{ height: '24px' }}></div>
                <MiniStatItem icon={FiCalendar} count={15000} label="Амжилттай захиалга" />
            </div>
        );
    }

    return null; // Legacy full version removed to force mini usage
}
