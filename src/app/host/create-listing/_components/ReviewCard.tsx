interface ReviewCardProps{
    title:string;
    children:React.ReactNode;
    onEdit?:()=>void;
}

export default function ReviewCard({title, children,onEdit}:ReviewCardProps){
    return <>
   
    <div className="rounded-xl border border-gray-200 p-6 mb-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>

        {onEdit && (
          <button
            onClick={onEdit}
            className="text-sm font-medium underline"
          >
            Edit
          </button>
        )}
      </div>

      {children}
    </div>
    </>
}