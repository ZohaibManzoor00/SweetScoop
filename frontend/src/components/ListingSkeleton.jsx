export default function ListingSkeleton() {
  return (
    <div className="flex h-100 w-full p-6 animate-pulse flex-col rounded sm:w-100 sm:p-6">
      <div className="h-72 rounded-t bg-gray-300"></div>
      <div className="flex-1 space-y-4 bg-gray-50 px-4 py-8 sm:p-8">
        <div className="h-6 w-full rounded bg-gray-300"></div>
        <div className="m-auto h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="m-auto h-6 w-1/4 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}
