import RemotesTable from "@/components/library/remotes-table";

export default function DevicesPage() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl  dark:text-white font-medium font-mono">
            Library
          </h2>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200 font-medium pt-1.5">
            Remotes Details
          </p>
        </div>
      </div>
      <RemotesTable />
    </>
  );
}
