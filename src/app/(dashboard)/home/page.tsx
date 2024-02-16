import CreditCardsSection from "./_components/credit-cards-section";
import MainSection from "./_components/main";
import RecentTransactions from "./_components/recent-transactions";
import HomeSidebar from "../transactions/side-bar";
import WeeklyActivities from "./_components/weekly-activities";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <div className="flex h-full gap-5 home-grid-container">
        <CreditCardsSection className="home-grid-container_cards" />{" "}
        <RecentTransactions className="home-grid-container_recent-transactions" />
        <WeeklyActivities className="home-grid-container_weekly-activities" />
      </div>
    </main>
  );
}
