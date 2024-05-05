export default function UserProfile({ params }: any) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>User Profile</h1>
        <h1 className="text-2xl mt-3">
          User profile{" "}
          <span className="bg-orange-500 text-black p-2 rounded-md">
            {params.id}
          </span>
        </h1>
      </div>
    </>
  );
}
