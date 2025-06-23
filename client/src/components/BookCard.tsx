import {
    Card,
    CardTitle,
  } from "./ui/card"
const BookCard = () => {
  return (
    
            <Card className='w-1/4 h-1/4 border-0 group shadow-none overflow-hidden'>
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0 ">
          <img
            alt="Image"
            className="object-cover opacity-65 rounded-[20px]"
            height="400"
            src="https://images.unsplash.com/photo-1748367959778-12d026a20a99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
            width="400"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <CardTitle className="text-white text-2xl font-bold">Mountain View</CardTitle>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4  flex justify-between text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300 !px-3.5 !pb-2.5    bg-gradient-to-t from-black/50 via-black/30 to-transparent">

      <h3 className="text-lg font-semibold">Mountain View</h3>
      <p className="text-sm">10:00 </p>
    </div>
      </div>
    </Card>
    
  )
}

export default BookCard
