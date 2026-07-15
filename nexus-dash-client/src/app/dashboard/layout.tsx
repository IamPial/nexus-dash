import DashBoardProfiles from "@/components/dashboard/DashBoardProfiles";
import DashBoardSideBar from "@/components/dashboard/DashBoardSideBar";

export const metadata = {
  title: "Dashboard - Overview",
  description:
    "Efficiently manage, monitor, and update your active travel destinations and packages on NexusDash—the ultimate premium travel administration platform.",
};


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-gray-300/30">
      {/* sidebar */}
      <DashBoardSideBar />
      <div className="flex-1 overflow-y-auto">
        {/* navbar */}
        <DashBoardProfiles />
        <main >{children}</main>
      </div>
    </div>
  );
}