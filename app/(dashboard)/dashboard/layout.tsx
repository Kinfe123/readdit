import { DashboardLayout } from "@/components/dashboard-layout";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

const DashboardLayoutPage = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/signup");
  }
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardLayoutPage;
