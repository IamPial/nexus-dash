
'use client';
// Features Type Definition for TypeScript
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}


const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition duration-300 flex flex-col justify-between min-h-55">
      <div>
        <div className="p-3 bg-white inline-block rounded-xl border border-slate-100 shadow-sm mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
export default FeatureCard;